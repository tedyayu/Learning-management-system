import {useState} from 'react'


const Navigation = () => {
    const [isExpanded,setIsExpanded]=useState({
        home:true,
        siteNews:false,
        courses:false
    })

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
                {isExpanded.courses && (
                     <ul className="mt-2 ml-4">
                     <li className="p-2 bg-gray-200 rounded hover:bg-gray-300">Course details</li>
                   </ul>
                )}
            </li>
        </ul>
    </nav>
  )
}

export default Navigation;