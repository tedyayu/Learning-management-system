import { useState } from 'react';
import {useNavigate , useParams} from 'react-router-dom';


const CourseContent = () => {
  const [lessons, setLessons] = useState([]);
  const [showLessonModal, setShowLessonModal] = useState(false);
  const [showContentFormId, setShowContentFormId] = useState(null);
  const [newLessonTitle, setNewLessonTitle] = useState('');
  const navigate = useNavigate();
  const {courseId} = useParams();  

  const handleAddLesson = () => {
    if (newLessonTitle.trim() === '') return;

    const newLesson = {
      id: Date.now(),
      title: newLessonTitle,
      contents: [],
    };

    setLessons([...lessons, newLesson]);
    setNewLessonTitle('');
    setShowLessonModal(false);
  };

  return (
    <div className="p-6 space-y-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold">Contents</h1>
          <p className="text-sm text-gray-500">Let's construct your course and incorporate various materials and activities.</p>
        </div>
        <div className="flex items-center space-x-3">
          <button
            onClick={() => setShowLessonModal(true)}
            className="px-4 py-2 border rounded-md bg-white text-sm hover:bg-gray-100"
          >
            + Add lesson
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm">Active</button>
        </div>
      </div>

      {/* Lessons Dropdown Info */}
      {lessons.length === 0 ? (
        <div className="bg-white p-4 rounded-md shadow-sm text-gray-500">
          <strong className="text-black">java</strong>
          <p>0 Chapters - No materials</p>
        </div>
      ) : (
        <div className="bg-white p-4 rounded-md shadow-sm">
          <div className="flex justify-between items-center">
            <strong className="text-black">java</strong>
            <select className="border rounded px-2 py-1 text-sm">
              <option>Select Lesson / Topic</option>
              {lessons.map((lesson) => (
                <option key={lesson.id}>{lesson.title}</option>
              ))}
            </select>
          </div>
        </div>
      )}

      {/* Lesson List */}
      {lessons.map((lesson, index) => (
        <div key={lesson.id} className="bg-white rounded-md shadow-sm p-4 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="font-bold text-lg">0{index + 1}</span>
              <div>
                <h2 className="text-base font-medium">{lesson.title}</h2>
                <span className="text-xs bg-yellow-200 px-2 py-0.5 rounded">Inactive</span>
              </div>
            </div>
            <div className="space-x-2">
              <button className="text-gray-500 hover:text-black">✏️</button>
              <button className="text-gray-500 hover:text-black">👁</button>
              <button className="text-gray-500 hover:text-red-500">🗑</button>
            </div>
          </div>

          <div className="pl-8">
            <button
              onClick={() =>
                setShowContentFormId(lesson.id)
              }
              className="bg-sky-500 text-white px-4 py-1 rounded text-sm"
            >
              Add content
            </button>
            <span className="mx-2 text-gray-500">or</span>
            <button className="text-blue-500 text-sm">Import from media</button>
            <span className="mx-2 text-gray-500">or</span>
            <button className="text-gray-700 text-sm">Add topic</button>
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
                className="text-gray-500 hover:text-black text-xl"
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

              {/* Right: Content Types */}
              <div className="grid grid-cols-3 gap-4 text-sm text-center">
                <div className="p-4 border rounded hover:bg-gray-50 cursor-pointer" onClick={()=>navigate(`/InstractorDashboard/mycourses/${courseId}/create-assignment`)}>📋<br />Assignment</div>
                <div className="p-4 border rounded hover:bg-gray-50 cursor-pointer">📖<br />Scorm</div>
                <div className="p-4 border rounded hover:bg-gray-50 cursor-pointer">❓<br />Exam</div>
                <div className="p-4 border rounded hover:bg-gray-50 cursor-pointer">🎥<br />Live class</div>
                <div className="p-4 border rounded hover:bg-gray-50 cursor-pointer">💻<br />Html material</div>
                <div className="p-4 border rounded hover:bg-gray-50 cursor-pointer">▶️<br />YouTube</div>
                <div className="p-4 border rounded hover:bg-gray-50 cursor-pointer">🎬<br />Vimeo</div>
                <div className="p-4 border rounded hover:bg-gray-50 cursor-pointer">📚<br />Flipbook</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Lesson Modal */}
      {showLessonModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-md w-full max-w-md space-y-4 shadow-lg">
            <h2 className="text-lg font-semibold">Add lesson</h2>
            <input
              type="text"
              className="w-full border rounded px-3 py-2"
              placeholder="e.g: Intro to ux design"
              value={newLessonTitle}
              maxLength={90}
              onChange={(e) => setNewLessonTitle(e.target.value)}
            />
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setShowLessonModal(false)}
                className="px-4 py-2 bg-gray-200 rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleAddLesson}
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
