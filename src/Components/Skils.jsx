const Skils = () => {
    const skills = ['HTML','CSS','JavaScript','React','TailwindCSS','Java','Android','React Native','Firebase','PostMan','API']
  return (
    <div  className='mt-12'>
    <h1 className="text-xl font-bold pb-2 mb-5">Skills</h1>
 
 <div data-aos="fade-right" className='grid grid-cols-3 sm:grid-cols-6 gap-3'>

      {
        skills.map((skill)=>(
            <div key={skill} className="inline-flex bg-black items-center rounded-md border px-2.5 py-1 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80 w-fit whitespace-nowrap p-4">
            {skill}
          </div>
          
        ))
      }
    
  </div>
</div>

  )
}

export default Skils
