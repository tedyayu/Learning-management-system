import { useState } from "react";

const CreateLesson = () => {
  const [lessonName, setLessonName] = useState("Lesson 1");
  const [lessonContent, setLessonContent] = useState("");

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded shadow space-y-6 max-h-screen">
      <div>
        <label className="block text-sm font-medium mb-1">Lesson Name</label>
        <input
          type="text"
          value={lessonName}
          onChange={(e) => setLessonName(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2"
        />
        <p className="text-xs text-gray-500 mt-1">
          Lesson titles are displayed publicly wherever required.
        </p>
      </div>

      <div>
        <div className="flex justify-between items-center mb-1">
          <label className="text-sm font-medium">Lesson Content</label>
          <button className="text-blue-600 text-sm hover:underline">
            WP Editor
          </button>
        </div>

        <div className="flex items-center space-x-2 border-b border-gray-300 pb-2 mb-2">
          <button className="text-sm px-2 py-1 hover:bg-gray-200 rounded">Attach File</button>
        </div>

        <textarea
          rows={6}
          value={lessonContent}
          onChange={(e) => setLessonContent(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2 font-mono"
          placeholder="Enter lesson content here..."
        ></textarea>

        <p className="text-xs text-gray-500 mt-2">
          The idea of a summary is a short text to prepare students for the
          activities within the topic or week. The text is shown on the course
          page under the topic name.
        </p>
      </div>

      <div className="flex justify-end space-x-2">
        <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100">
          Cancel
        </button>
        <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Create Lesson
        </button>
      </div>
    </div>
  );
};

export default CreateLesson;
