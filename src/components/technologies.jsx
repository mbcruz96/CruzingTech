import { motion, AnimatePresence } from 'framer-motion';
import { forwardRef } from 'react';
import technologyData from '../data/technologies.js';

const technologyVariant = {
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.3 } },
    hidden: { opacity: 0, x: -20, transition: { duration: 0.3 } },
    exit: { opacity: 0, width: 0, height: 0, transition: { duration: 0.3 } },
};

const technologyContainer = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 2.1,
        },
    },
};

// Technology components from json file

// Core technologies
const coreTech = technologyData.filter(tech => tech.type === 'core').map(tech => ((
    <motion.div 
        initial="hidden"
        whileInView="visible"

        variants={technologyVariant}
        key={tech.id} 
        className="flex flex-col items-center justify-center p-4 gap-6 bg-gray-800 rounded-lg shadow-lg w-50 h-50"
    >
        <img src={tech.image} alt={tech.name} className='w-16'/>
        <h3>{tech.name}</h3>
    </motion.div>
)));

// Frontend technolgies
const frontEndTech = technologyData.filter(tech => tech.category === 'front').map(tech => ((
    <motion.div 
        initial="hidden"
        whileInView="visible"
        variants={technologyVariant}
        key={tech.id} 
        className="flex flex-col items-center justify-center p-4 gap-6 bg-gray-800 rounded-lg shadow-lg w-50 h-50"
    >
        <img src={tech.image} alt={tech.name} className='w-16'/>
        <h3>{tech.name}</h3>
    </motion.div>
)));

// Backend technologies
const backEndTech = technologyData.filter(tech => tech.category === 'back').map(tech => ((
    <motion.div 
        initial="hidden"
        whileInView="visible"
        variants={technologyVariant}
        key={tech.id} 
        className="flex flex-col items-center justify-center p-4 gap-6 bg-gray-800 rounded-lg shadow-lg w-50 h-50"
    >
        <img src={tech.image} alt={tech.name} className='w-16'/>
        <h3>{tech.name}</h3>
    </motion.div>
)));

// Machine Learning technologies
const mlTech = technologyData.filter(tech => tech.type === 'ml').map(tech => ((
    <motion.div 
        initial="hidden"
        whileInView="visible"
        variants={technologyVariant}
        key={tech.id} 
        className="flex flex-col items-center justify-center p-4 gap-6 bg-gray-800 rounded-lg shadow-lg w-50 h-50"
    >
        <img src={tech.image} alt={tech.name} className='w-16'/>
        <h3>{tech.name}</h3>
    </motion.div>
)));

// Development tools technologies
const devTech = technologyData.filter(tech => tech.type === 'dev').map(tech => ((
    <motion.div 
        initial="hidden"
        whileInView="visible"
        variants={technologyVariant}
        key={tech.id} 
        className="flex flex-col items-center justify-center p-4 gap-6 bg-gray-800 rounded-lg shadow-lg w-50 h-50"
    >
        <img src={tech.image} alt={tech.name} className='w-16'/>
        <h3>{tech.name}</h3>
    </motion.div>
)));

const Technology = forwardRef(function Technology(props, ref) {
    return (
        <section className="flex h-auto bg-black flex-col" ref={ref}>
            {/* Header section */}
            <div className='pt-20 flex flex-col justify-center items-center h-25'>
                <h1 className="text-4xl text-white font-bold mb-2 pl-10">Technologies</h1>
                <h2 className="text-2xl text-white mb-4 pl-10 italic">I work with</h2>
            </div>

            {/* Core technologies section */}
            <AnimatePresence mode="modal">
                <motion.div 
                    className='mt-10 h-auto pl-10' 
                    variants={technologyContainer}
                    initial="hidden"
                    animate="visible"
                    exit="hidden">
                    <h1 className="text-4xl text-white font-bold mb-8">Core Tehcnology</h1>
                    <div className="flex flex-wrap gap-6 justify-left items-center">
                        {coreTech}
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* ML technologies section */}
            <motion.div className='mt-20 h-auto pl-10' variants={technologyContainer}>
                <h1 className="text-4xl text-white font-bold mb-8">Machine Learning and Computer Vision</h1>
                <div className="flex flex-wrap gap-6 justify-left items-center">
                    {mlTech}
                </div>
            </motion.div>

            {/* ML technologies section */}
            <motion.div className='mt-20 h-auto pl-10' variants={technologyContainer}>
                <h1 className="text-4xl text-white font-bold mb-8">Front End</h1>
                <div className="flex flex-wrap gap-6 justify-left items-center">
                    {frontEndTech}
                </div>
            </motion.div>

            {/* ML technologies section */}
            <motion.div className='mt-20 h-auto pl-10' variants={technologyContainer}>
                <h1 className="text-4xl text-white font-bold mb-8">Back End</h1>
                <div className="flex flex-wrap gap-6 justify-left items-center">
                    {backEndTech}
                </div>
            </motion.div>

            {/* ML technologies section */}
            <motion.div className='mt-20 h-auto pl-10 pb-10' variants={technologyContainer}>
                <h1 className="text-4xl text-white font-bold mb-8">Developement Tools</h1>
                <div className="flex flex-wrap gap-6 justify-left items-center">
                    {devTech}
                </div>
            </motion.div>
        </section>
    )
});

export default Technology;