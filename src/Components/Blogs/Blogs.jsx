import BlogsCard from "./BlogsCard"

const Blogs = () => {
    const blogsData = [
        {
            name:'How to export into excel using React Js?',
            img:'https://miro.medium.com/v2/resize:fit:828/format:webp/1*MrP2bIg-eUN21qbWbCQIdA.png',
            passage:'Export data to Excel in React using exceljs and file-saver, create an export component, and implement a download button.',
            link:'https://medium.com/@saurowankhade/export-into-excel-using-react-js-21d98cc02db8'
        },
       
        {
            name:'My First Interview Experience.',
            img:'https://miro.medium.com/v2/resize:fit:828/format:webp/1*-f-U_O05FS-P1wgor-Tsdg.jpeg',
            passage:'I interviewed for a role, struggled with communication, realized its importance, and committed to improving my English skills. ',
            link:'https://medium.com/@saurowankhade/my-first-interview-experience-e00098631cd1'
        },
        {
            name:'React - More Than Just a UI Library',
            img:'https://miro.medium.com/v2/resize:fit:828/format:webp/1*t4_NUUw12mqZV4ou3z8dyQ.png',
            passage:'React is more than a UI library; mastering data management, caching, and efficient rendering improves performance and user experience.',
            link:'https://medium.com/@saurowankhade/react-more-than-just-a-ui-library-e7264634cbab'
        },
        {
            name:'Why gap, alignment does not work in ScrollView.',
            img:'https://miro.medium.com/v2/resize:fit:828/format:webp/1*ndyIoJil2_n8ifoaGGsMdg.png',
            passage:'ScrollView in React Native supports scrolling; use style for outer styling and contentContainerStyle for spacing, alignment, and layout.',
            link:'https://medium.com/@saurowankhade/why-gap-alignment-does-not-work-in-scrollview-6e0432745878'
        },
    ]
  return (
    <div className='mt-12'>
    <h1 className="text-xl font-bold pb-2 mb-5">Blogs</h1>
 
 <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
 {
    blogsData.map((data)=>(
        <BlogsCard key={data.name} animation={'fade-up'} data={data} />
    ))
 }
 </div>

</div>
  )
}

export default Blogs
