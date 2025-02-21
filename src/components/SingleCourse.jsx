import React from 'react';

const SingleCourse = ({ course }) => {
  // Sample course data (replace with your actual data)
  const sampleCourse = {
    name: "Introduction to React",
    videos: [
      { title: "React Basics", url: "/videos/react-basics.mp4" },
      { title: "Components and Props", url: "/videos/components.mov" },
    ],
    assignments: [
      { title: "Build a Simple Component", url: "/assignments/component-assignment.pdf" },
      { title: "Styling with CSS", url: "/assignments/css-assignment.zip" },
    ],
    pdfs: [
      { title: "React Documentation", url: "/pdfs/react-docs.pdf" },
      { title: "JavaScript Fundamentals", url: "/pdfs/js-fundamentals.pdf" },
    ],
    quizLink: "https://example.com/react-quiz",
  };

  const { name, videos, assignments, pdfs, quizLink } = course || sampleCourse; // Use props or sample data

  const handleDownload = (url, filename) => {
    // Simulate download (replace with actual download logic)
    console.log(`Downloading ${filename} from ${url}`);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename || url.substring(url.lastIndexOf('/') + 1); // Extract filename from URL if not provided
    link.click();
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">{name}</h2>

      {/* Videos */}
      <div className="mb-6">
        <h3 className="text-xl font-medium mb-2">Videos</h3>
        <ul>
          {videos.map((video) => (
            <li key={video.title} className="mb-2">
              <a
                href={video.url} // Or handle download with a function
                className="text-blue-500 hover:underline mr-2"
                onClick={(e) => {
                  e.preventDefault(); // Prevent default link behavior
                  handleDownload(video.url, video.title);
                }}
              >
                {video.title}
              </a>
              <button
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-1 px-2 rounded"
                onClick={() => handleDownload(video.url, video.title)}
              >
                Download
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Assignments */}
      <div className="mb-6">
        <h3 className="text-xl font-medium mb-2">Assignments</h3>
        <ul>
          {assignments.map((assignment) => (
            <li key={assignment.title} className="mb-2">
              <a
                href={assignment.url}
                className="text-blue-500 hover:underline mr-2"
                onClick={(e) => {
                  e.preventDefault();
                  handleDownload(assignment.url, assignment.title);
                }}
              >
                {assignment.title}
              </a>
              <button
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-1 px-2 rounded"
                onClick={() => handleDownload(assignment.url, assignment.title)}
              >
                Download
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* PDFs */}
      <div className="mb-6">
        <h3 className="text-xl font-medium mb-2">PDFs</h3>
        <ul>
          {pdfs.map((pdf) => (
            <li key={pdf.title} className="mb-2">
              <a
                href={pdf.url}
                className="text-blue-500 hover:underline mr-2"
                onClick={(e) => {
                  e.preventDefault();
                  handleDownload(pdf.url, pdf.title);
                }}
              >
                {pdf.title}
              </a>
              <button
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-1 px-2 rounded"
                onClick={() => handleDownload(pdf.url, pdf.title)}
              >
                Download
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Quiz Link */}
      <div>
        <h3 className="text-xl font-medium mb-2">Quiz</h3>
        <a href={quizLink} className="text-blue-500 hover:underline">
          Take Quiz
        </a>
      </div>
    </div>
  );
};

export default SingleCourse;