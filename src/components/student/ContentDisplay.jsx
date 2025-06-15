
export default function ContentDescription({ lesson, onNext, onPrevious, hasNext, hasPrevious }) {
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
              onClick={onNext}
              disabled={!hasNext}
              className={`px-4 py-2 rounded ${
                hasNext ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-600 cursor-not-allowed'
              }`}
            >
              Next
            </button>
          </div>
        </div>
      ) : (
        <p className="text-gray-500">Select a lesson to view its content.</p>
      )}
    </div>
    
  );
}
