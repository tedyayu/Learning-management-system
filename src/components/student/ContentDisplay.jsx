import { useState , useContext, useEffect} from 'react';
import { updateNest } from '../../utils/api';


export default function ContentDescription({ lesson, onNext, onPrevious, hasNext, hasPrevious , userId, course}) {
  const [isSubmitting, setIsSubmitting] = useState(false); 
  const [progress, setProgress] = useState(null);

  const handleNext = async () => {
    if (!lesson || !userId || !course.id) return;

    setIsSubmitting(true);

    try {
      const data = await updateNest(userId, lesson.id, course.id)
      

      if (data) {
        setProgress(data.Progress);
        console.log("Progress updated successfully", data.progress);
        onNext();
      } else {
        console.error("Failed to update progress", data);
      }
    } catch (error) {
      console.error("Error updating lesson completion", error);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const getYouTubeEmbedUrl = (url) => {
    if (!url) return '';
    const match = url.match(/(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([^&]+)/) || 
                  url.match(/(?:https?:\/\/)?youtu\.be\/([^?]+)/);
    return match ? `https://www.youtube.com/embed/${match[1]}` : url;
  };

  return (
    <div >
      {lesson ? (
        <div className="w-full p-2">
          <h2 className="text-2xl font-bold mb-2">{lesson.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: lesson.content }} />
          
            <div className="relative">
              {lesson.youtubeUrl ? (
                <iframe
                  className="w-full h-96 rounded-lg"
                  src={getYouTubeEmbedUrl(lesson.youtubeUrl)}
                  title="Lesson Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (
                <p className="text-gray-500">No video available.</p>
              )}
            </div>
            <div className="flex justify-start mt-4 gap-4">
            <button
              onClick={onPrevious}
              disabled={!hasPrevious}
              className={`px-4 py-2 rounded ${
                hasPrevious ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-600 cursor-not-allowed'
              }`}
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              disabled={!hasNext}
              className={`px-4 py-2 rounded ${
                hasNext ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-600 cursor-not-allowed'
              }`}
            >
              Next
            </button>
          </div>
          {typeof progress === 'number' && (
          <div className="mt-6">
            <div className="text-sm text-gray-700 mb-1">
              Progress: {progress.toFixed(1)}%
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4">
              <div
                className="bg-green-500 h-4 rounded-full transition-all duration-500 ease-in-out"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        )}

        </div>
      ) : (
        <p className="text-gray-500">Select a lesson to view its content.</p>
      )}
    </div>
    
  );
}
