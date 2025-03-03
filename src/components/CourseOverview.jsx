const CourseOverview = () => {
    const courses = [
        {
          title: "Compiler Design",
          faculty: "Faculty of Computing and Software Engineering",
          progress: 0,
          pdfUrl:"https://urll",
          videoUrl:"https://urll",
          assignment:"https://urll",
          lectureAnnouncement:"nothing",
          quiz:""
        },
        {
          title: "Software Testing and Quality Assurance",
          faculty: "Faculty of Computing and Software Engineering",
          progress: 0,
          pdfUrl:"https://urll",
          videoUrl:"https://urll",
          assignment:"https://urll",
          lectureAnnouncement:"nothing",
          quiz:""
        },
        {
          title: "Compiler Design for SE",
          faculty: "Faculty of Computing and Software Engineering",
          progress: 0,
          pdfUrl:"https://urll",
          videoUrl:"https://urll",
          assignment:"https://urll",
          lectureAnnouncement:"nothing",
          quiz:""
        },
      ];
    
      return (
        <div className="container mx-auto py-8">
          <h3 className="font-sans text-2xl">Course Overview</h3>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded mr-2">
                ▼ All (except removed from view)
              </button>
            </div>
            <div className="flex items-center">
              <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded mr-2">
                <span className="material-symbols-outlined text-base align-middle">
                    event_note
                </span> Last accessed
              </button>
              <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded">
                <span className="material-symbols-outlined text-base align-middle">
                    view_module
                </span> Card
              </button>
            </div>
          </div>
    
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"> 
            {courses.map((course, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow">
                <div className="flex items-start justify-between">
                  <h3 className="font-semibold text-lg">{course.title}</h3>
                  <button className="text-gray-500">...</button> 
                </div>
                <p className="text-gray-600 mt-2">{course.faculty}</p>
                <div className="mt-4 bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-500 rounded-full h-full"
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-500 mt-2">{course.progress}% complete</p>
              </div>
            ))}
          </div>
        </div>
      );
}

export default CourseOverview