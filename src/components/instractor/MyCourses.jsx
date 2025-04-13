import { FaBook } from "react-icons/fa";



const MyCourses = () => {
 
  const courses = [
    {
      id: 1,
      title: "Master Your Diet & Nutrition - Beginner",
      image: "https://via.placeholder.com/150",
      date: "May 20, 2024 9:49 AM",
      price: "$99.99",
      duration: "10h 30m",
    },
    {
      id: 2,
      title: "Build Your Perfect Diet",
      image: "https://via.placeholder.com/150",
      date: "May 19, 2024 9:14 AM",
      price: "$59.99",
      duration: "8h 45m",
    },
    {
      id: 3,
      title: "PHP - Become a PHP Pro",
      image: "https://via.placeholder.com/150",
      date: "May 19, 2024 9:57 AM",
      price: "$129.99",
      duration: "12h 15m",
    },
    {
      id: 4,
      title: "WordPress for Beginners - Master WordPress",
      image: "https://via.placeholder.com/150",
      date: "May 17, 2024 9:00 AM",
      price: "Free",
      duration: "5h 34m",
    },
    {
      id: 5,
      title: "Ultimate Photoshop Training from Beginner",
      image: "https://via.placeholder.com/150",
      date: "May 18, 2024 9:30 AM",
      price: "$89.99",
      duration: "10h 40m",
    },
    {
      id: 6,
      title: "User Experience Design Course",
      image: "https://via.placeholder.com/150",
      date: "May 16, 2024 9:45 AM",
      price: "Free",
      duration: "7h 50m",
    },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <FaBook className="text-blue-500 text-2xl mr-2" />
          <h2 className="text-2xl font-semibold">My Courses</h2>
        </div>
     
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-semibold">{course.title}</h3>
            <p className="text-gray-600 text-sm mt-2">{course.date}</p>
            <p className="text-gray-800 font-medium mt-2">{course.price}</p>
            <p className="text-gray-500 text-sm mt-1">{course.duration}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCourses;