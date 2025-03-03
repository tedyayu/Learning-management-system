import React from 'react';

interface categoryItem{
  icon:string,
  name:string
}

const CourseCategory: React.FC= () => {
  const categories:categoryItem[] = [
    {
      icon: '🎓',
      name: 'Under Graduate Studies',
    },
    {
      icon: '🎓',
      name: 'School of Graduate Studies',
    },
    {
      icon: '🎓',
      name: 'Short Term Trainings',
    },
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow-md w-66 mt-4 border-gray-500"> {/* Container for the categories */}
      <h3 className="text-xl font-semibold mb-2">Course categories</h3>
      <ul>
        {categories.map((category, index) => (
          <li key={index} className="flex items-center py-2">
            <span className="mr-2 text-2xl">{category.icon}</span> {/* Icon */}
            <a href="#" className="text-blue-500 hover:underline">
              {category.name}
            </a>
          </li>
        ))}
      </ul>
      <a href="#" className="text-blue-500 hover:underline block mt-2">
        All courses ...
      </a>
    </div>
  );
};

export default CourseCategory;