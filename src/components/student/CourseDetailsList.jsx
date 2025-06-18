import { useState ,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { fetchProgressData } from "../../utils/api"; 


const CourseDetailsList = ({ course , userId}) => {
  const [activeTab, setActiveTab] = useState("curriculum");
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);

   useEffect(() => {
    const fetchProgress = async () => {
      if (!userId || !course?.id) return;

      try {
        const data = await fetchProgressData(userId, course.id);
        setProgress(Math.round(data.progress || 0));
      } catch (error) {
        console.error("Failed to fetch progress", error);
      }
    };

    fetchProgress();
  }, [userId, course?.id]);

  if (!course) {
    return <div className="p-6 text-red-600">Course data not available.</div>;
  }

  return (
    <div className="min-h-screen bg-white">
      <div key={course.id} className="bg-gray-800 text-white py-6 px-8">
        <h1 className="text-2xl font-bold">{course.name}</h1>
        <div className="mt-4">
          <div className="bg-white h-1 w-full rounded-full">
            <div
              className="bg-blue-400 h-1 rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-xs mt-1">{progress}% completed</p>
      </div>
      </div>

      <div className="border-b border-gray-200 px-8 mt-6">
        <div className="flex space-x-6 text-lg font-medium">
          <button
            onClick={() => setActiveTab("curriculum")}
            className={`py-2 ${
              activeTab === "curriculum"
                ? "border-b-2 border-blue-700 text-blue-700"
                : "text-gray-500"
            }`}
          >
            Curriculum
          </button>
          <button
            onClick={() => setActiveTab("overview")}
            className={`py-2 ${
              activeTab === "overview"
                ? "border-b-2 border-blue-700 text-blue-700"
                : "text-gray-500"
            }`}
          >
            Overview
          </button>
        </div>
      </div>

      {activeTab === "curriculum" && (
        <div className="px-8 py-6 space-y-4">
          {Array.isArray(course.Chapter) && course.Chapter.length > 0 ? (
            course.Chapter.map((chapter, chapterIndex) => (
              <div
                key={chapter.id || chapterIndex}
                className="border border-gray-200 rounded-md p-4 bg-white shadow-sm"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    
                    <div>
                      <p className="text-sm text-gray-500">{course.name}</p>
                      <h2 className="text-lg font-semibold">
                        {chapter.name || chapter.title || `Chapter ${chapterIndex + 1}`}
                      </h2>
                      <button
                        onClick={() =>
                          navigate(`/ContentDetail/${chapter.id}`, {
                            state: { chapter, userId , course },
                          })
                        }
                        className="mt-2 inline-flex items-center gap-2 text-sm text-blue-600 hover:underline"
                      >
                        ▶️ continue studying
                      </button>
                    </div>
                  </div>
                </div>
                {chapter.description && (
                  <p className="text-sm text-gray-600 mt-3">{chapter.description}</p>
                )}
              </div>
            ))
          ) : (
            <p className="text-gray-500">No chapters available for this course.</p>
          )}
        </div>
      )}

      {/* Overview Tab */}
      {activeTab === "overview" && (
        <div className="px-8 py-6 text-gray-600 text-lg">
          <p>
            {course.description || "No course description available."}
          </p>
        </div>
      )}
    </div>
    
  );
};

export default CourseDetailsList;