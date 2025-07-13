import { delay, motion } from 'framer-motion';
import { forwardRef } from 'react';

const serviceVariant = {
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, delay: 0.3 } },
    hidden: { opacity: 0, y: -20, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
}

    // const serviceContainer = {
    //     hidden: {},
    //     visible: {
    //         transition: {
    //             staggerChildren: 0.1,
    //         },
    //     },
    // };
const Services = forwardRef(function Services(props, ref) {
    return (
        <section className="section-container" ref={ref}>
            <div className="services-text">
                <h1>Services</h1>
            </div>
            <div className="services-list">
                <motion.span 
                    variants={serviceVariant}
                    initial="hidden"
                    whileInView="visible"
                >
                    Automations
                </motion.span>
                <motion.span 
                    variants={serviceVariant}
                    initial="hidden"
                    whileInView="visible"
                >
                    AI Integration
                </motion.span>
                <motion.span 
                    variants={serviceVariant}
                    initial="hidden"
                    whileInView="visible"
                >
                    Machine Learning Solutions
                </motion.span>
                <motion.span 
                    variants={serviceVariant}
                    initial="hidden"
                    whileInView="visible"
                >
                    Computer Vision Technology
                </motion.span>
                <motion.span 
                    variants={serviceVariant}
                    initial="hidden"
                    whileInView="visible"
                >
                    Web Developement
                </motion.span>
                <motion.span 
                    variants={serviceVariant}
                    initial="hidden"
                    whileInView="visible"
                >
                    Application Developement
                </motion.span>
            </div>
        </section>
    )
});

export default Services;