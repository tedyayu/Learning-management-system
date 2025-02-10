import  { useState } from 'react'

const Courses = () => {
        const [expanded, setExpanded] = useState({
        underGraduate: true,
        postGraduate:true
      });
      const [searchTerm,setSearchTerm]=useState('');

      const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
      };
      const handleSearch = () => {
        console.log('Searching for:', searchTerm);
      };

      const toggleExpand = (group) => {
        setExpanded((prev) => ({ ...prev, [group]: !prev[group] }));
      };

      const underGraduateStudies = [
        "Arba Minch Institute of Technology",
        "Arba Minch Water Technology Institute",
        "College of Agricultural Sciences",
        "College of Business and Economics",
        "College of Natural Sciences",
        "College of Social Sciences and Humanities",
        "School of Law",
        "School of Pedagogical and Behavioral Sciences",
        "Sawla Campus",
      ];

      const postGraduateStudies = [
        "Arba Minch Institute of Technology",
        "Arba Minch Water Technology Institute",
        "College of Agricultural Sciences",
        "College of Business and Economics",
        "College of Natural Sciences",
        "College of Social Sciences and Humanities",
        "School of Law",
        "School of Pedagogical and Behavioral Sciences",
        "Sawla Campus",
      ];
  return (
    <div>
        <div className="container mx-auto py-8 w-full ml-8"> 
            <h2 className="text-2xl font-bold mb-4">Courses</h2>
            <div className="mb-4">
                <div 
                    className="flex items-center justify-between cursor-pointer"
                    onClick={() => toggleExpand("underGraduate")}
                    >
                    <h3 className="text-xl font-semibold">Under Graduate Studies</h3>
                    <span className="text-gray-500">
                        {expanded.underGraduate ? "▼" : "►"} Collapse all
                    </span>
                </div>
                {expanded.underGraduate && (
                <ul className="mt-2 ml-6">
                    {underGraduateStudies.map((course, index) => (
                    <li key={index} className="py-1">
                        <a href="#" className="text-blue-500 hover:underline">
                        {course}
                        </a>
                    </li>
                    ))}
                </ul>
                )}
                <div 
                    className="flex items-center justify-between cursor-pointer"
                    onClick={() => toggleExpand("postGraduate")}
                    >
                    <h3 className="text-xl font-semibold">post Graduate Studies</h3>
                    <span className="text-gray-500">
                        {expanded.postGraduate ? "▼" : "►"} Collapse all
                    </span>
                </div>
                {expanded.postGraduate && (
                <ul className="mt-2 ml-6">
                    {postGraduateStudies.map((course, index) => (
                    <li key={index} className="py-1">
                        <a href="#" className="text-blue-500 hover:underline">
                        {course}
                        </a>
                    </li>
                    ))}
                </ul>
                )}
            </div>
            <div className="mb-4">
                <label htmlFor="courseSearch" className="block text-sm font-medium text-gray-700">
                    Search courses
                </label>
                <div className="flex"> {/* Flexbox for horizontal alignment */}
                    <input
                    type="text"
                    id="courseSearch"
                    placeholder="Enter course name"
                    value={searchTerm}
                    onChange={handleInputChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline flex-grow mr-2" // Tailwind classes
                    />
                    <button
                    onClick={handleSearch}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" // Tailwind classes
                    >
                    Go
                    </button>
                    <span className="ml-2 text-blue-500 cursor-pointer">?</span> {/* Tailwind classes */}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Courses