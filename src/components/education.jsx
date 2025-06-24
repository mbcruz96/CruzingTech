import { motion } from "framer-motion"

export default function Education() {
    return (
        <div className="education-section">
            <div className="school-container">
                <div className="school-info">
                    <motion.h1
                        initial={{opacity:0}}
                        animate={{opacity:1}}
                        transition={{duration: 0.4, ease: "easeIn"}}
                    >
                        University of Central Florida
                    </motion.h1>
                    <motion.p
                        initial={{opacity:0}}
                        animate={{opacity:1}}
                        transition={{duration: 0.4, ease: "easeIn"}}
                    >
                        Aug 2022 - Dec 2024
                    </motion.p>
                </div>
                <motion.ul className="text-md">
                    <motion.li
                        initial={{opacity: 0, y: -20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{delay: .7}}
                    >
                        - M.S. Computer Science, GPA: 3.65
                    </motion.li>
                    <motion.li
                        initial={{opacity: 0, y: -20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{delay: 1}}
                    >
                        - Courses: Machine Learning, 3D Computer Vision, Computer Vision, Natural Language Processing, 
                        Artificial Intelligence and Agents, Advanced Data Structures and Algorithms, Linear Algebra, 
                        and Computer Architecture
                    </motion.li>
                    <motion.li
                    initial={{opacity: 0, y: -20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{delay: 1.3}}
                    >
                        - Research: Large language models, multi-modal vision language models, AI agents, hardware 
                        optimization
                    </motion.li>
                </motion.ul>
            </div>

            <div className="school-container">
                <div className="school-info">
                    <motion.h1
                        initial={{opacity:0}}
                        animate={{opacity:1}}
                        transition={{duration: 0.4, ease: "easeIn", delay: 1.4}}
                    >
                        Florida State University
                    </motion.h1>
                    <motion.p
                        initial={{opacity:0}}
                        animate={{opacity:1}}
                        transition={{duration: 0.4, ease: "easeIn", delay: 1.4}}
                    >
                        Aug 2015 - Dec 2021
                    </motion.p>
                </div>
                <motion.ul className="text-md">
                    <motion.li
                        initial={{opacity: 0, y: -20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{delay: 1.8}}
                    >
                        - B.S. Computer Science
                    </motion.li>
                    <motion.li
                        initial={{opacity: 0, y: -20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{delay: 2.1}}
                    >
                        - Minor in Psychology
                    </motion.li>
                    <motion.li
                        initial={{opacity: 0, y: -20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{delay: 2.4}}
                    >
                        - Courses: Computing in Python, Object-Oriented Programming, Data Structures and Algorithms, 
                        Discreet Math, Software Engineering Principles, Computer Architecture, Concurrent and 
                        Parallel Computing
                    </motion.li>
                </motion.ul>
            </div>
        </div>
    )
}