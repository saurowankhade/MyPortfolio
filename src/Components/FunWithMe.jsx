import { useState } from "react";

export default function FunWithMe() {
    const messages = [
        "You must be TypeScript, because you make the world error-free. 😉", "You must be a UI library, because you bring structure and beauty to everything around you. 🎨",
        "I must be a function, because every time I see you, I return a smile. 😊",
        "You must be a well-optimized query, because you always bring back the best results. 🔍",
        "Are you a CDN? Because you make things load instantly and effortlessly. ⚡",
        "Are you an API? Because you always respond in the best way possible. 🔄",
        "You must be a high-performance component, because you never lag behind.",
        "Are you a well-structured database? Because everything makes sense around you. 🗄️"
    ];

    const [flirtMessage, setFlirtMessage] = useState(messages[0]);

    const handleGenerateMessage = () => {
        const randomIndex = Math.floor(Math.random() * messages.length);
        setFlirtMessage(messages[randomIndex]);
    };

    return (
        <div className="text-center mt-10 p-6 border border-[#00000087]  rounded-lg shadow-md">
            <h2 className="text-xl font-semibold ">💡 A Fun Byte Before You Go</h2>
            <div className="flex-col">
                <p className="mt-2 ">{flirtMessage}</p>
                <button
                    onClick={handleGenerateMessage}
                    className="mt-4 bg-[#000000da] text-[#000000da] px-4 py-2 rounded-lg hover:bg-[#000000da] transition"
                >
                    <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g clipPath="url(#clip0_716_126)">
                            <path
                                d="M23 3.99959V9.99959M23 9.99959H17M23 9.99959L18.36 5.63959C17.2853 4.5643 15.9556 3.77879 14.4952 3.35636C13.0348 2.93393 11.4911 2.88834 10.0083 3.22385C8.52547 3.55935 7.1518 4.26502 6.01547 5.27501C4.87913 6.28499 4.01717 7.56637 3.51 8.99959M1 19.9996V13.9996M1 13.9996H7M1 13.9996L5.64 18.3596C6.71475 19.4349 8.04437 20.2204 9.50481 20.6428C10.9652 21.0652 12.5089 21.1108 13.9917 20.7753C15.4745 20.4398 16.8482 19.7342 17.9845 18.7242C19.1209 17.7142 19.9828 16.4328 20.49 14.9996"
                                stroke="#fafafa"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </g>
                        <defs>
                            <clipPath id="clip0_716_126">
                                <rect width={24} height={24} fill="white" />
                            </clipPath>
                        </defs>
                    </svg>


                </button>
            </div>
        </div>
    );
}
