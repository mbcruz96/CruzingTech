import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function AboutMe() {
    
    const [listIndex, setListIndex] = useState(0);

    const letterVariant = {
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.25 } },
            exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
        };
    
    const wordContainer = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.04,
            },
        },
    };
    
    // static variables for titles
    const words = [
        'Software Engineer',
        'Data Scientist',
        'Machine Learning Engineer',
        'Computer Vision Engineer',
        'Network Security Specialist',
        'Student',
        'Teacher',
    ]
    
        useEffect (() => {
            const intervalId = setInterval(() => {
                setListIndex((prevIndex) => 
                    prevIndex == words.length - 1 ? prevIndex = 0 : prevIndex += 1
            )}, 3000);
    
            return () => clearInterval(intervalId);
        }, [words])
    return (
        <motion.div className="about-section"
            initial={{y: -150, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            transition={{duration: 0.8, ease: "easeIn"}}
        >
            <p>
                Hey! I'm Michael Cruz and I'm a {" "}
                    <AnimatePresence mode="wait">
                        <motion.span
                            key={listIndex}
                            className="text-xl italic inline-block animated-title"
                            variants={wordContainer}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            style={{ display: "inline-block" }}
                        >
                            {words[listIndex].split("").map((char, i) => (
                                <motion.span
                                    key={char + i}
                                    variants={letterVariant}
                                    style={{ display: "inline-block" }}
                                >
                                    {char === " " ? "\u00A0" : char}
                                </motion.span>
                            ))}
                        </motion.span>
                    </AnimatePresence>
            </p>
        </motion.div>
    )
}