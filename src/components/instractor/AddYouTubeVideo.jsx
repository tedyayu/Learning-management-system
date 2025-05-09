import React, { useState } from "react";

const AddYoutubeVideo = () => {
  const [title, setTitle] = useState("");
  const [lesson, setLesson] = useState("ch-1");
  const [topic, setTopic] = useState("");
  const [youtubeUrl, setYoutubeUrl] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded shadow space-y-4">
      <h2 className="text-lg font-semibold">Add youtube video</h2>

      {/* Title */}
      <div>
        <label className="block text-sm font-medium mb-1">
          Title<span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          placeholder="Enter title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          maxLength={80}
          className="w-full border border-gray-300 rounded px-3 py-2"
        />
        <div className="text-xs text-right text-gray-500">{title.length} / 80</div>
      </div>

      {/* Lesson */}
      <div>
        <label className="block text-sm font-medium mb-1">Lesson</label>
        <select
          value={lesson}
          onChange={(e) => setLesson(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2"
        >
          <option value="ch-1">ch-1</option>
          <option value="ch-2">ch-2</option>
        </select>
      </div>

      {/* Topic with plus icon */}
      <div>
        <label className="block text-sm font-medium mb-1">Topic</label>
        <div className="flex gap-2">
          <select
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
          >
            <option value="">Select topic</option>
            <option value="topic-1">Topic 1</option>
            <option value="topic-2">Topic 2</option>
          </select>
          <button className="px-3 bg-blue-500 text-white rounded">+</button>
        </div>
      </div>

      {/* YouTube URL */}
      <div>
        <label className="block text-sm font-medium mb-1">
          Youtube URL<span className="text-red-500">*</span>
        </label>
        <input
          type="url"
          placeholder="Enter youtube url"
          value={youtubeUrl}
          onChange={(e) => setYoutubeUrl(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2"
        />
      </div>

      {/* Description */}
      <div>
        <label className="block text-sm font-medium mb-1">Description</label>
        <textarea
          rows={3}
          placeholder="Enter description..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2"
        />
      </div>

      {/* Buttons */}
      <div className="flex justify-end gap-2 pt-4">
        <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100">
          Cancel
        </button>
        <button
          className="px-4 py-2 bg-gray-400 text-white rounded cursor-not-allowed"
          disabled
        >
          Create
        </button>
      </div>
    </div>
  );
};

export default AddYoutubeVideo;
