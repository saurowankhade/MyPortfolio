import sanmatiengineering from '../assets/sanmatiengineering.png';
import gpmzr from '../assets/gpmzr.png';
const Education = () => {
  const educationData = [
    {
      name: 'Sanmati Engineering College, Washim',
      branch: 'Computer Science and Engineering',
      years: '2023-2026',
      img: sanmatiengineering,
      webUrl: 'https://sanmati.edu.in/'

    }, {
      name: 'Government Polytechnic, Murtizapur',
      branch: 'Computer Engineering',
      years: '2020-2023',
      img: gpmzr,
      webUrl: 'https://www.gpmzr.ac.in/'

    }
  ]
  return (
    <div className="mt-12">
      <h1 className="text-xl font-bold pb-2">Education</h1>
      {
        educationData.map((data) => (
          <div key={data?.name} className="flex gap-4 items-center mt-6">
            <div>
              <img className='rounded-full object-cover h-12 w-12' src={data?.img} alt={data.name} />
            </div>
            <div className='flex gap-2 items-center w-full justify-between'>
              <div className="flex gap-2">

                <div onClick={()=>{
                  window.open(data.webUrl,'_blank');
                }} className='group cursor-pointer'>
                <h2 className='font-bold text-base flex gap-1  items-center'>
  {data.name} 
  <span className='hidden group-hover:inline-block transition-transform duration-300 translate-x-0 group-hover:translate-x-1'>
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth={0}
      viewBox="0 0 512 512"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-110"
    >
      <path d="M464.9 128H344.1c-8.3 0-15.1 6.6-15.1 14.8s6.8 14.8 15.1 14.8h83.7l-138 142.2-85.9-84.1c-2.9-2.8-6.6-4.3-10.7-4.3-4 0-7.8 1.5-10.7 4.3L36.2 358.8c-1.9 1.9-4.2 5.2-4.2 10.7 0 4.1 1.4 7.5 4.2 10.2 2.9 2.8 6.6 4.3 10.7 4.3 4 0 7.8-1.5 10.7-4.3L193.2 247l85.9 84.1c2.9 2.8 6.6 4.3 10.7 4.3 4 0 7.8-1.5 10.7-4.3l149.4-151.9v81.7c0 8.1 6.8 14.8 15.1 14.8s15.1-6.6 15.1-14.8V142.8c-.1-8.2-6.9-14.8-15.2-14.8z" />
    </svg>
  </span>
</h2>

                  <p className='text-sm'>{data.branch}</p>
                </div>
              </div>
              <div>
                {data.years}
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Education
