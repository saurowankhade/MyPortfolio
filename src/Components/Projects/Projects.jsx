import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <div className='mt-12'>
          <h1 className="text-xl font-bold pb-2 mb-5">Projects</h1>
       
       <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
       <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
       </div>
      
    </div>
  )
}

export default Projects
