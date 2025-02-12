import About from "./Components/About"
import NavigationBar from "./Components/NavigationBar"
import OneLineIntro from "./Components/OneLineIntro"
import Education from "./Components/Education"
import Projects from "./Components/Projects/Projects"
import Blogs from "./Components/Blogs/Blogs"
import Footer from "./Components/Footer"
import Skils from "./Components/Skils"
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

function App() {

  useEffect(() => {
    AOS.init({ duration: 1000, once: false }); 
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
      <Footer />
      </div>
      </div>

    </div>
  )
}

export default App
