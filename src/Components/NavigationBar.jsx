
const NavigationBar = () => {
    return (

        <div className="fixed z-50 top-0">
            <div className="flex p-10 ">
                <ul className="flex shadow-md sm:gap-10 p-4 rounded-full bg-black">
                    <li className="px-3 py-2 rounded-full cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#b0a6a66c] hover:scale-105">
                        <a href="#home">Home</a>
                    </li>
                    <li className="px-3 py-2 rounded-full cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#b0a6a66c] hover:scale-105">
                        <a href="#about">About</a>
                    </li>
                    <li className="px-3 py-2 rounded-full cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#b0a6a66c] hover:scale-105">
                        <a href="#project">Projects</a>
                    </li>
                    <li className="px-3 py-2 rounded-full cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#b0a6a66c] hover:scale-105">
                        <a href="#blogs">Blogs</a>
                    </li>
                    <li onClick={()=>window.open('https://ezlnk.vercel.app/saurabhresume','_blank')} className="px-3 py-2 rounded-full cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#b0a6a66c] hover:scale-105">
                        Resume
                    </li>


                </ul>
            </div>
        </div>
    )
}

export default NavigationBar
