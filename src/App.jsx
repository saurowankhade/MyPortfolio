import About from "./Components/About"
import NavigationBar from "./Components/NavigationBar"
import OneLineIntro from "./Components/OneLineIntro"
import Education from "./Components/Education"
import Projects from "./Components/Projects/Projects"
import Blogs from "./Components/Blogs/Blogs"
import Footer from "./Components/Footer"
import Skils from "./Components/Skils"
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import FunWithMe from "./Components/FunWithMe"

function App() {

  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 50) {
        setShowAlert(true);
      } else{
        setShowAlert(false)
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  useEffect(() => {
    AOS.init({
      offset: 200, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 2000, 
    }); 
  }, []);


  return (
    <div id="home " className="bg-[#000000e2] font-inter  text-[#fafafa]  w-full">
      <div id="about" className="flex justify-center">
          <NavigationBar />
      </div>

      <div className="flex justify-center mt-36">  
      <div className="flex-col md:w-[630px] p-2 ">
      <OneLineIntro />
      <About />
      <div id="project" className="mt-12"><hr /></div>
      <Projects />
      <div id="skills" className="mt-12"><hr /></div>
      <Skils />
      <div id="education" className="mt-12"><hr /></div>
      <Education />
      
      <div id="blogs" className="mt-12"><hr /></div>
      <Blogs />
      <div className="mt-12"><hr /></div>
      <FunWithMe />


      {showAlert && (
        <div className="fixed bottom-5 right-5 bg-[#0000009e] text-white px-4 py-2 rounded-lg shadow-lg animate-bounce">
          Don&apos;t forget to drink water! Stay hydrated.💧
        </div>
      )}

      <div className="mt-12"><hr /></div>
      <Footer />
      </div>
      </div>

    </div>
  )
}

export default App
