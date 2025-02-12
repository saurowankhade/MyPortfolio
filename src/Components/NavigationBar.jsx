
const NavigationBar = () => {
    return (

        <div className="fixed top-0">
            <div className="flex p-10 ">
                <ul className="flex shadow-md sm:gap-10 p-4 rounded-full bg-black">
                    <li className="px-3 py-2 rounded-full cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#b0a6a66c] hover:scale-105">
                        Home
                    </li>
                    <li className="px-3 py-2 rounded-full cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#b0a6a66c] hover:scale-105">
                        About
                    </li>
                    <li className="px-3 py-2 rounded-full cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#b0a6a66c] hover:scale-105">
                        Project
                    </li>
                    <li className="px-3 py-2 rounded-full cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#b0a6a66c] hover:scale-105">
                        Blogs
                    </li>
                    <li className="px-3 py-2 rounded-full cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#b0a6a66c] hover:scale-105">
                        Resume
                    </li>


                </ul>
            </div>
        </div>
    )
}

export default NavigationBar
