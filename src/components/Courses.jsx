import  { useState } from 'react'

const Courses = () => {
    const [expanded, setExpanded] = useState({
        underGraduate: true,
        postGraduate:true
      });

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
            
        </div>
    </div>
  )
}

export default Courses