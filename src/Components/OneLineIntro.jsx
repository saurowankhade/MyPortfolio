import { useState, useEffect } from "react";
import saurowankhade from '../assets/saurowankhade.webp'

const OneLineIntro = () => {
    const roles = [
        "a Frontend Developer",
        "a JavaScript Lover",
        "a Mobile Developer"
    ];

    const [currentText, setCurrentText] = useState("");
    const [roleIndex, setRoleIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        const currentRole = roles[roleIndex];

        if (deleting) {
            if (charIndex > 0) {
                setTimeout(() => setCharIndex((prev) => prev - 1), 50);
            } else {
                setDeleting(false);
                setRoleIndex((prev) => (prev + 1) % roles.length); // Move to next role
            }
        } else {
            if (charIndex < currentRole.length) {
                setTimeout(() => setCharIndex((prev) => prev + 1), 100);
            } else {
                setTimeout(() => setDeleting(true), 1000); // Pause before deleting
            }
        }

        setCurrentText(currentRole.substring(0, charIndex));
    }, [charIndex, deleting, roleIndex]);
    return (
        <div className="mt-8 sm:mt-12">
            <div className="flex gap-1 sm:gap-3">
                {/* Image */}
                <div className="">
                    <img className="w-20 h-20 sm:h-24 sm:w-24 rounded-full" src={saurowankhade} alt="saurabh wankhade" />
                </div>

                {/* Text */}
                <div>
                    <h1 className="inline-block text-2xl font-bold tracking-tighter sm:text-4xl xl:text-4xl/none">Namaste, I`m Saurabh 🙏</h1>
                    <p className="text-[18px] mt-3 sm:text-[20px] font-semibold">
                        I am <span className="text-blue-500">{currentText}</span>|
                    </p>
                </div>
                
            </div>
        </div>
    )
}

export default OneLineIntro;
