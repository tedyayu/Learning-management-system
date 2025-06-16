import {useContext , useState} from 'react'
import Header from '../../components/Header'
import SubHeader from '../../components/SubHeader'
import Footer from '../../components/Footer'
import {AuthContext } from '../../context/AuthContext'
import { useLocation } from 'react-router-dom';
import ContentDescription from '../../components/student/ContentDisplay';
import ContentNavigation from '../../components/student/ContentNavigation';
import AiComponent from '../../components/student/AiComponent';

const ContentDetail = () => {

  const {user ,setUser}=useContext(AuthContext);
  const location = useLocation();
  const chapter = location.state?.chapter;
  const userId = location.state?.userId;
  const course= location.state?.course;
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleSelectLesson = (lesson, index) => {
    setSelectedLesson(lesson);
    setCurrentIndex(index);
  };

  const handleNext = () => {
    if (currentIndex < chapter.lessons.length - 1) {
      handleSelectLesson(chapter.lessons[currentIndex + 1], currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      handleSelectLesson(chapter.lessons[currentIndex - 1], currentIndex - 1);
    }
  };


  return (
    <div className="h-screen flex flex-col">
      <Header isLoggedIn={!!user}  user={user} setUser={setUser}/>
      <SubHeader isLoggedIn={!!user} user={user}/>
      <div className="flex-grow flex bg-white py-0 border-t border-gray-400" >
        <div className="w-1/5 flex flex-col ml-4">
          <ContentNavigation chapter={chapter} setSelectedLesson={setSelectedLesson}/>
        </div>
        <div className="w-3/5 flex flex-col m-5">
            {
              <ContentDescription
                lesson={selectedLesson}
                onNext={handleNext}
                onPrevious={handlePrevious}
                hasNext={currentIndex < chapter.lessons.length - 1}
                hasPrevious={currentIndex > 0}
                userId={userId}
                course={course}
              />
            }
        </div>
        <div className="w-2/5 flex items-end justify-start  flex-col"> {/* Added padding right */}
            {<AiComponent/>}
        </div>
      </div>

      <Footer/>
    </div>
  )
}

export default ContentDetail;