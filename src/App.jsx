import About from "./Components/About"
import NavigationBar from "./Components/NavigationBar"
import OneLineIntro from "./Components/OneLineIntro"
import Education from "./Components/Education"
import Projects from "./Components/Projects/Projects"

function App() {

  return (
    <div className="bg-[#000000e2] font-inter  text-[#fafafa]  w-full">
      <div className="flex justify-center">
          <NavigationBar />
      </div>

      <div className="flex justify-center mt-36">  
      <div className="flex-col md:w-[630px] p-2 ">
      <OneLineIntro />
      <About />
      <div className="mt-12"><hr /></div>
      <Projects />
      <div className="mt-12"><hr /></div>
      <Education />
      
      <div className="mt-12"><hr /></div>
      </div>
      </div>

    </div>
  )
}

export default App
