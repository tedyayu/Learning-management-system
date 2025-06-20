import { useState } from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import { deleteLesson } from '../../utils/course.api'; 

const LessonPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const lesson= location.state.lesson;
    const [lessonContent, setLessonContent] = useState(lesson);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLessonContent((prev) => ({ ...prev, [name]: value }));
  };

   const handleEdit = () => {
    const path=`/InstractorDashboard/mycourses/${lesson.chapter?.course?.id}/lesson/${lesson.id}/edit-lesson`
    console.log(path);
    navigate(
      path,
      { state: { lesson, mode: 'edit' } }
    );
    };

  const handleDelete = async (lessonId) => {
  const confirmDelete = window.confirm('Are you sure you want to delete this lesson?');
  if (confirmDelete) {
    try {
      await deleteLesson(lessonId); 
      alert('Lesson deleted successfully');
    } catch (error) {
      console.error("Error deleting lesson:", error);
      alert("Failed to delete the lesson.");
    }
  }
};

  const getYouTubeEmbedUrl = (url) => {
    if (!url) return '';
    const match = url.match(/(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([^&]+)/) || 
                  url.match(/(?:https?:\/\/)?youtu\.be\/([^?]+)/);
    return match ? `https://www.youtube.com/embed/${match[1]}` : url;
  };
  if (!lesson) {
    return <p>No lesson data available.</p>; // Handle case where no data is passed
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <div className="flex justify-end items-end mb-4 gap-4">
          
          <button
            onClick={() => handleEdit()}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          >
            Edit
          </button>
          <button
            onClick={() => handleDelete(lesson.id)}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
          >
            Delete
          </button>
        </div>
        <h1 className="text-3xl font-bold text-gray-800">
              {lesson.title}
          </h1>
        
        

        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Lesson Content</h2>
            <div
            className="text-gray-700 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: lesson.content }}
            ></div>
        </div>

        <div className="mb-6">
            <div className="relative pb-9/16">
              {lessonContent.youtubeUrl ? (
                <iframe
                  className="w-full h-96 rounded-lg"
                  src={getYouTubeEmbedUrl(lessonContent.youtubeUrl)}
                  title="Lesson Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (
                <p className="text-gray-500">No video available.</p>
              )}
            </div>
        </div>
      </div>
    </div>
  );
};

export default LessonPage;