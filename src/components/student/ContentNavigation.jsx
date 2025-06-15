import React from 'react';

export default function ContentNavigation({ chapter, setSelectedLesson, activeLesson }) {
  return (
    <div className=" border-r border-gray-200 bg-white min-h-screen">
      {/* Chapter Title Section */}
      <div className="flex items-center gap-2 px-4 py-3 bg-gray-50 border-b border-gray-200">
        <div className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-500 text-white text-sm font-semibold">
          1
        </div>
        <h2 className="text-base font-semibold text-gray-800 flex-grow">
          {chapter?.title || "Introduction to the Program"}
        </h2>
        {/* Chevron Up Icon (using SVG) */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5} // Adjusted for a slightly bolder look
          stroke="currentColor"
          className="h-4 w-4 text-gray-500 cursor-pointer" // Slightly smaller to match visual
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
        </svg>
      </div>

      {/* Lessons List */}
      <ul className="py-2">
        {chapter?.lessons?.map((lesson, i) => (
          <li
            key={lesson.id || i} // Use a unique ID from your lesson data if available, otherwise fallback to index
            className={`flex items-center gap-2 px-4 py-2 cursor-pointer text-gray-700 hover:bg-gray-100 transition-colors duration-150 ease-in-out
              ${activeLesson?.id === lesson.id ? 'bg-gray-100 text-blue-700 font-medium' : ''}
            `}
            onClick={() => setSelectedLesson(lesson)}
          >
            {/* Green Checkmark Icon (using SVG) */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5 text-green-500"
            >
              <path
                fillRule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.532-1.267-1.267a.75.75 0 00-1.06 1.06l1.75 1.75a.75.75 0 001.135-.082l3.75-5.25z"
                clipRule="evenodd"
              />
            </svg>

            <span className="text-sm">
              {lesson.number} {lesson.title} {/* Assuming lesson.number exists, e.g., "1.1" */}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}