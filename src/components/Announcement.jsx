import  { useState }   from 'react'

const Announcement = () => {
    const announcements = [
        {
          date: "7 Jun, 18:07",
          author: "Neway Tadesse",
          text: "e-Learning for Strengthening Higher Education (e-SHE)",
          link: "#" 
        },
        {
          date: "11 Aug, 17:03",
          author: "E-learning Site Administrator",
          text: "Reset your Office365 password using your phone and recovery email",
          link: "#" 
        },
        {
          date: "7 Jun, 22:33",
          author: "E-learning Site Administrator",
          text: "Office 365 new users guide: set up your new account",
          link: "#" 
        }
      ];

  return (
    <div className="announcement-component max-w-x5 bg-white p-4 rounded-lg border border-gray-300 mt-4  overflow-y-auto">
        <h3 className="text-lg font-semibold mb-2">Latest announcements</h3>
        <ul>
        {announcements.map((announcement, index) => (
          <li key={index} className="mb-4">
            <p className="text-sm text-gray-500">{announcement.date}</p>
            <p className="font-medium">{announcement.author}</p>
            <a 
              href={announcement.link} 
              className="text-blue-600 hover:underline"
              target="_blank" // Opens in new tab - optional
              rel="noopener noreferrer" // Security best practice for target="_blank"
            >
              {announcement.text}
            </a>
          </li>
        ))}
      </ul>
      <a href="#" className="text-blue-600 hover:underline">Older topics ...</a>
    </div>
  )
}

export default Announcement;