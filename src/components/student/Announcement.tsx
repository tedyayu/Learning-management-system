// Add this to Announcement.tsx
import React, { useContext } from "react";
import {AnnouncementContext} from "../../context/AnnouncmentContext"

export const Announcement = () => {
  const { announcements } = useContext(AnnouncementContext);

  if (!Array.isArray(announcements) || announcements.length === 0) {
    return <div className="p-4 text-gray-500">No announcements yet.</div>;
  }

  return (
    <div className="p-4">
      <h3 className="font-bold mb-2">Announcements</h3>
      <ul>
        {announcements.map((a, i) => (
          <li key={i} className="mb-2">
            <div className="font-semibold">{a.title}</div>
            <div className="text-sm text-gray-600">{a.content}</div>
            <div className="text-xs text-gray-400">{a.createdAt}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};