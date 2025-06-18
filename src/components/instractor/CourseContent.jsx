import { useState,useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {createChapter, fetchSingleCourse ,deleteChapter} from '../../utils/course.api'; 




const CourseContent = () => {
  const [chapters, setChapters] = useState([]);
  const [showChapterModal, setShowChapterModal] = useState(false);
  const [courseTitle, setCourseTitle] = useState(''); 
  const [showContentFormId, setShowContentFormId] = useState(null);
  const [newChapterTitle, setNewChapterTitle] = useState('');
  const navigate = useNavigate();
  const { courseId } = useParams();

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const course = await fetchSingleCourse(courseId); 
        console.log('Fetched course:', course);
        setCourseTitle(course.name); 
        setChapters(course.Chapter || []);
      } catch (error) {
        console.error('Error fetching course:', error);
        alert('Failed to fetch course data');
      }
    };

    fetchCourse();
  }, [courseId]);

  const handleAddChapter = async () => {

    if (newChapterTitle.trim() === '') {
      alert('Chapter title cannot be empty');
      return;
    }

    const newChapter = {
      title: newChapterTitle,
    };


    try{
      const createdChapter= await createChapter(courseId, newChapter);
      if (!createdChapter) {
        alert('Failed to create chapter');
        return;
      }
      setChapters((prevChapters) => [...prevChapters, createdChapter]); 
      alert('Chapter created successfully');
      
    }catch(error){
      console.error('Error creating chapter:', error);
      alert('Failed to create chapter');
      return;
    }finally {
      setNewChapterTitle('');
      setShowChapterModal(false);
    }
  };

  const handleDeleteChapter = async (chapterId) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this chapter?');
    if (confirmDelete) {
      await deleteChapter(chapterId); 
      alert('Chapter deleted successfully');
    }
  }

  return (
    <div className="p-6 space-y-6 bg-gray-50 min-h-screen">
      <div className="flex items-center justify-between">
        <div>
        <h1 className="text-xl font-semibold">{courseTitle || 'Course Content'}</h1>
       
        </div>
        <div className="flex items-center space-x-3">
          <button
            onClick={() => setShowChapterModal(true)}
            className="px-4 py-2 border rounded-md bg-white text-sm hover:bg-gray-100"
          >
            + Add Chapter
          </button>
        </div>
      </div>


      {chapters.map((chapter, index) => ( 
        <div key={chapter.id} className="bg-white rounded-md shadow-sm p-4 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="font-bold text-lg">0{index + 1}</span>
              <div>
                <h2 className="text-base font-medium">{chapter.title}</h2>
              </div>
            </div>
            <div className="space-x-2">
              <button className="bg-sky-500 text-white px-4 py-1 rounded text-sm" onClick={() => handleDeleteChapter(chapter.id)}>Delete Chapter</button>
            </div>
          </div>

          <div className="pl-8">
            <button
              onClick={() => setShowContentFormId(chapter.id)} 
              className="bg-sky-500 text-white px-4 py-1 rounded text-sm"
            >
              Add content
            </button>
           
          </div>
          <div className="pl-8 mt-4">
            <h3 className="text-sm font-medium mb-2">Lessons:</h3>
            {chapter.lessons && chapter.lessons.length > 0 ? (
              <ul className="list-disc list-inside space-y-1 list-none ">
                {chapter.lessons.map((lesson) => (
                  <li key={lesson.id} className="text-sm text-gray-700 cursor-pointer hover:underline" onClick={() => navigate(`/InstractorDashboard/mycourses/${courseId}/lesson/${lesson.id}`,{ state: { lesson }}) }>
                    👁 {lesson.title}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-gray-500">No lessons available.</p>
            )}
        </div>
        </div>
        
      ))}

      {/* Content Form Modal */}
      {showContentFormId && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-md w-full max-w-4xl space-y-4 shadow-lg">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold">Add Content</h2>
              <button
                className="text-gray-900 hover:text-black text-2xl"
                onClick={() => setShowContentFormId(null)}
              >
                ×
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left: File Upload */}
              <div className="flex flex-col items-center justify-center border border-dashed border-gray-300 rounded p-6">
                <div className="text-center">
                  <div className="text-4xl mb-2">⬆️</div>
                  <p className="font-medium mb-2">File upload</p>
                  <p className="text-sm text-gray-500 mb-4">
                    Supported files: <br />
                    <span className="text-xs">
                      .pdf, .doc, .docx, .xls, .xlsx, .ppt, .pptx, .mp3, .mp4, .jpg, .jpeg, .png
                    </span>
                  </p>
                  <input type="file" className="hidden" id={`fileUpload-${showContentFormId}`} />
                  <label
                    htmlFor={`fileUpload-${showContentFormId}`}
                    className="cursor-pointer inline-block bg-blue-500 text-white text-sm px-4 py-2 rounded"
                  >
                    Browse file
                  </label>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 text-sm text-center">
                <div
                  className="p-4 border rounded hover:bg-gray-50 cursor-pointer"
                  onClick={() => navigate(`/InstractorDashboard/mycourses/${courseId}/create-lesson/${showContentFormId}`)}
                >
                  📖<br />
                  Lesson
                </div>
                
                
               
              </div>
            </div>
          </div>
        </div>
      )}

      {showChapterModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-md w-full max-w-md space-y-4 shadow-lg">
            <h2 className="text-lg font-semibold">Add Chapter</h2>
            <input
              type="text"
              className="w-full border rounded px-3 py-2"
              placeholder="e.g: Intro to ux design"
              value={newChapterTitle}
              maxLength={90}
              onChange={(e) => setNewChapterTitle(e.target.value)} 
            />
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setShowChapterModal(false)} 
                className="px-4 py-2 bg-gray-200 rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleAddChapter} 
                className="px-4 py-2 bg-gray-500 text-white rounded"
              >
                Create
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseContent;