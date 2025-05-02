import  { useState } from 'react';

const MyDashboard = () => {
  // State for Courses Progress
  const [courseProgress, setCourseProgress] = useState([
    { name: "Math 101", progress: 63, classes: 5 },
    { name: "Math 102", progress: 45, classes: 3 },
    { name: "Math 103", progress: 33, classes: 4 },
    { name: "Math 104", progress: 25, classes: 2 },
  ]);

  // State for What's Due
  const [dueItems, setDueItems] = useState([
    {
      course: 'Math 101',
      topic: 'Unit 2: Add and subtract nu...',
      dueDate: '23 Dec 2017',
      submissionRate: 69,
      status: 'Waiting submissions',
      id: 1
    },
    {
      course: 'Math 102',
      topic: 'Unit 2: Motion and forces',
      dueDate: '20 Dec 2017',
      submissionRate: 98,
      status: 'Ready for grading',
      id: 2
    },
    {
      course: 'Math 104',
      topic: 'Linear equations',
      dueDate: '13 Dec 2017',
      submissionRate: 100,
      status: 'Grotled successfully!',
      id: 3
    }
  ]);

  // State for Latest Uploaded Files
  const [uploadedFiles, setUploadedFiles] = useState([
    {
      name: 'ClassPresentation.PDF',
      course: 'Math 101',
      topic: 'Unit 2: Add and subtract nu...',
      date: '12 Dec 2017',
      categories: ['Classwork', 'Homework'],
      id: 1
    },
    {
      name: 'Slideshow 220ec.PPT',
      course: 'Math 102',
      topic: 'Unit 2: Motion and forces',
      date: '09 Dec 2017',
      categories: ['Assignment', 'Course: Math 104', 'Homework'],
      grade: '8A / 10',
      id: 2
    }
  ]);

  // State for Today's Schedule
  const [schedule, setSchedule] = useState([
    {
      slot: 'Sot 3 | 1045 AM - 11:30 AM',
      course: 'Math 102',
      topic: 'Units3. Simple equation',
      place: 'Classroom Aa',
      id: 1
    },
    {
      slot: 'Sot 4 | 12:00 PM - 12:45 PM',
      course: 'Math 101',
      topic: 'Units3. Multiple numbers',
      place: 'Classroom 3b',
      id: 2
    },
    {
      slot: 'Sot 6 | 12:00 PM - 12:45 PM',
      course: 'Math 101',
      topic: 'Units3. Multiple numbers',
      place: 'Classroom 3b',
      id: 3
    }
  ]);

  // State for Latest Grades
  const [grades, setGrades] = useState([
    {
      type: 'Attendance',
      course: 'Math 101',
      category: 'Classwork',
      grade: '4 / 5',
      id: 1
    },
    {
      type: 'Assignment',
      course: 'Math 104',
      category: 'Homework',
      grade: '8A / 10',
      id: 2
    }
  ]);

  // State for Announcements
  const [announcements, setAnnouncements] = useState([
    'New Announcement',
    'Quiz',
    {
      course: 'Math 104',
      category: 'Homework'
    }
  ]);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Main Content */}
      <div className="flex-1 p-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold">Welcome Mr.Khalid,</h1>
          <p className="text-gray-500 italic">I am not a teacher, but an awakened!</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Courses Progress */}
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
              <h2 className="text-lg font-semibold mb-4">Courses Progress</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {courseProgress.map((course, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div className="relative w-24 h-24">
                      <svg className="w-full h-full" viewBox="0 0 36 36">
                        <path
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="#E5E7EB"
                          strokeWidth="3"
                        />
                        <path
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="#3B82F6"
                          strokeWidth="3"
                          strokeDasharray={`${course.progress}, 100`}
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center text-lg font-semibold">
                        {course.progress}%
                      </div>
                    </div>
                    <p className="mt-2 text-sm font-medium">{course.name}</p>
                    <p className="text-xs text-gray-500">{course.classes} Classes</p>
                  </div>
                ))}
              </div>
            </div>

            {/* What's Due */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold mb-4">What's Due</h3>
              <p className="text-gray-500 text-sm mb-4">Browse you out and join to follow these:</p>
              
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead>
                    <tr className="text-left text-sm font-medium text-gray-500">
                      <th className="pb-2">Course | Topic</th>
                      <th className="pb-2">Due Date</th>
                      <th className="pb-2">Subm. Rate</th>
                      <th className="pb-2">Status</th>
                      <th className="pb-2">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dueItems.map((item) => (
                      <tr key={item.id} className="border-t">
                        <td className="py-3">
                          <span className="font-medium">{item.course}</span> | {item.topic}
                        </td>
                        <td className="py-3">{item.dueDate}</td>
                        <td className="py-3">{item.submissionRate} %</td>
                        <td className="py-3">
                          <span className={`px-2 py-1 rounded text-xs ${
                            item.status.includes('Waiting') ? 'bg-yellow-100 text-yellow-800' :
                            item.status.includes('Ready') ? 'bg-blue-100 text-blue-800' :
                            'bg-green-100 text-green-800'
                          }`}>
                            {item.status}
                          </span>
                        </td>
                        <td className="py-3">
                          <button className="text-blue-500 hover:text-blue-700 text-sm">
                            View
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Latest Uploaded Files */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold mb-4">Latest Uploaded Files</h3>
              <p className="text-gray-500 text-sm mb-4">All videos are used in order to follow these:</p>
              
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead>
                    <tr className="text-left text-sm font-medium text-gray-500">
                      <th className="pb-2">File</th>
                      <th className="pb-2">Course | Topic</th>
                      <th className="pb-2">Date</th>
                      <th className="pb-2">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {uploadedFiles.map((file) => (
                      <tr key={file.id} className="border-t">
                        <td className="py-3 font-medium">{file.name}</td>
                        <td className="py-3">
                          <span className="font-medium">{file.course}</span> | {file.topic}
                        </td>
                        <td className="py-3">{file.date}</td>
                        <td className="py-3">
                          <div className="flex flex-wrap gap-1 max-w-xs">
                            {file.categories.map((cat, idx) => (
                              <span key={idx} className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                                {cat}
                              </span>
                            ))}
                            {file.grade && (
                              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                                Aug Grade: {file.grade}
                              </span>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Announcements */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold mb-4">Announcements</h3>
              <p className="text-gray-500 text-sm mb-4">All videos are used in order to follow these:</p>
              
              <ul className="space-y-3">
                {announcements.map((announcement, index) => (
                  <li key={index}>
                    {typeof announcement === 'string' ? (
                      <span className="font-bold">{announcement}</span>
                    ) : (
                      <div>
                        <span className="font-medium">Course: {announcement.course}</span>
                        <span className="ml-2 text-sm bg-gray-100 px-2 py-1 rounded">
                          {announcement.category}
                        </span>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Today's Schedule */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold mb-4">Today Schedule</h3>
              <p className="text-gray-500 text-sm mb-4">There is no phone or phone at board.</p>
              
              <ul className="space-y-4">
                {schedule.map((item) => (
                  <li key={item.id} className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-bold">{item.slot}</h4>
                    <div className="mt-1">
                      <p className="text-sm">Course: {item.course}</p>
                      <p className="text-sm">Topic: {item.topic}</p>
                      <p className="text-sm">Place: {item.place}</p>
                    </div>
                  </li>
                ))}
                <li className="pt-4 italic text-gray-500">Your day ends here a Enjoy your day.</li>
              </ul>
            </div>

            {/* Latest Grades */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold mb-4">Latest Grades</h3>
              <p className="text-gray-500 text-sm mb-4">Listen here to credit, not to copy.</p>
              
              <ul className="space-y-4">
                {grades.map((grade) => (
                  <li key={grade.id} className="border-t pt-4 first:border-t-0 first:pt-0">
                    <h4 className="font-bold">{grade.type}</h4>
                    <div className="mt-1">
                      <p className="text-sm">Course: {grade.course}</p>
                      <p className="text-sm">Category: {grade.category}</p>
                      <p className="text-sm">Aug Grade: {grade.grade}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyDashboard;