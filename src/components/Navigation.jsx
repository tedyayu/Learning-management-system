import {useState} from 'react'
import {Link } from 'react-router-dom';


const Navigation = ({isLoggedIn}) => {
    const [isExpanded,setIsExpanded]=useState({
        home:true,
        siteNews:false,
        courses:false,
        courseDetails:false
    })
    const courses= [
        { id: 1, name: 'Introduction to React', instructor: 'John Doe', details: {
            badges: true,  competencies: false, grades: 85, 
          }},
        { id: 2, name: 'Advanced JavaScript', instructor: 'Jane Smith' ,details: {
            badges: true,  competencies: false, grades: 43, 
          }},
        { id: 3, name: 'Web Development with Node.js', instructor: 'David Lee',details: {
            badges: true,  competencies: false, grades: 78, 
          }},
      ];
      console.log(courses)

    const toggleExpand=(item)=>{
        setIsExpanded((prev)=>({...prev, [item]:!prev[item]}))
    };

  return (
    <nav className="navigation-menu  max-w-xs bg-white p-4 rounded-lg text-gray-800 border border-gray-300">
        <ul>
            <li className="mb-2">
                <button onClick={()=>{toggleExpand('home')}} className="flex justify-between items-center w-full p-2 bg-gray-700 rounded text-white">
                    Home {isExpanded.home?'-':'+'}
                </button>
                {isExpanded.home && (
                    <ul className="mt-2 ml-4">
                     <li className="p-2 bg-gray-200 rounded mb-1 hover:bg-gray-300">Site news</li>
                     <li className="p-2 bg-gray-200 rounded hover:bg-gray-300">Courses</li>
                   </ul>
                )}
            </li>
            <li className="mb-2">
                <button onClick={()=>toggleExpand('siteNews')} className="flex justify-between items-center w-full p-2 bg-gray-700 rounded text-white">
                    site news {isExpanded.siteNews? '-':'+'}
                </button>
                {isExpanded.siteNews && (
                    <ul className="mt-2 ml-4">
                    <li className="p-2 bg-gray-200 rounded hover:bg-gray-300">Site news details</li>
                    </ul>
                )}
            </li>
            <li className="mb-2">
                <button onClick={()=>{toggleExpand('courses')}} className="flex justify-between items-center w-full p-2 bg-gray-700 rounded text-white">
                    courses {isExpanded.courses? '-':'+'}
                </button>
                {!isLoggedIn ?(
                    <div>
                        <p>login to view courses</p>
                    </div>
                ):(
                    <>
                        <p className='font-bold'>My Courses</p>
                        <ul>
                            {courses.length===0?(
                                <p>no course found</p>
                            ):(courses.map((course)=>(
                                <li key={course.id} className="mb-2 border rounded p-2">
                                    <button onClick={()=>toggleExpand('courseDetails')} className="flex justify-between items-center w-full p-2 bg-gray-700 rounded text-white">
                                    {course.name} {isExpanded.courseDetails? '-':'+'}
                                    </button>
                                    {isExpanded.courseDetails && (
                                        <ul className="mt-2 ml-4">
                                            
                                            <li className="p-2 bg-gray-200 rounded hover:bg-gray-300"><Link to="/GradesPage" state={{ course: course }}>Grades</Link></li>
                                            <li className="p-2 bg-gray-200 rounded hover:bg-gray-300">Compitencies</li>
                                            <li className="p-2 bg-gray-200 rounded hover:bg-gray-300">Bagages</li>
                                        </ul>
                                    )}
                                </li>
                            )))}
                        </ul>
                    </>

                )}
            </li>
        </ul>
    </nav>
  )
}

export default Navigation;