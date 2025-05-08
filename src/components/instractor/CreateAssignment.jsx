import React from "react";
import {
  CalendarDays,
  Clock,
  Plus,
  Paperclip,
  Eye,
} from "lucide-react";

const CreateAssignment = () => {
  return (
    <div className="p-6 max-w-5xl mx-auto space-y-4">
      <input
        type="text"
        placeholder="Algebra 1 Assignment"
        className="w-full border rounded p-3 text-xl font-semibold"
      />

      <textarea
        placeholder="Enter instructions"
        className="w-full border rounded p-3 h-40"
      ></textarea>

      <div className="flex flex-wrap gap-4 text-sm text-blue-700">
        <button className="flex items-center gap-1 hover:underline">
          <Paperclip size={16} /> Attach
        </button>
        <button className="flex items-center gap-1 hover:underline">
          <Plus size={16} /> New
        </button>
        <button className="flex items-center gap-1 hover:underline">
          Apps
        </button>
        <button className="hover:underline">Learning Accelerators</button>
      </div>

      <div className="bg-white border rounded p-4 space-y-4 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
              <CalendarDays size={16} /> Due Date
            </label>
            <input
              type="date"
              defaultValue="2023-11-15"
              className="w-full border rounded p-2"
            />
          </div>

          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
              <Clock size={16} /> Time
            </label>
            <input
              type="time"
              defaultValue="23:59"
              className="w-full border rounded p-2"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Class</label>
            <select className="w-full border p-2 rounded">
              <option>Algebra</option>
              <option>Geometry</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Assign to</label>
            <select className="w-full border p-2 rounded">
              <option>All current students</option>
              <option>Specific students</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Add rubric</label>
            <button className="w-full border p-2 rounded hover:bg-gray-50">
              Add rubric
            </button>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Points</label>
            <input
              type="number"
              placeholder="No points"
              className="w-full border rounded p-2"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Add tag</label>
            <input
              type="text"
              placeholder="Add tag"
              className="w-full border rounded p-2"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center mt-6">
        <button className="flex items-center gap-1 text-blue-700 hover:underline">
          <Eye size={16} /> Student view
        </button>

        <div className="flex gap-2">
          <button className="px-4 py-2 text-sm rounded hover:bg-gray-100">
            Discard
          </button>
          <button className="px-4 py-2 text-sm border rounded hover:bg-gray-100">
            Save as draft
          </button>
          <button className="px-4 py-2 text-sm rounded bg-purple-700 text-white hover:bg-purple-800">
            Assign
          </button>
        </div>
      </div>

      <p className="text-xs text-gray-500 text-right">
        Saved: Nov 14, 2:33 PM
      </p>
    </div>
  );
};

export default CreateAssignment;
