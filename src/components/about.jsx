import { useState, forwardRef } from "react"
import portfolioPic from "../assets/porfolio-pic.jpg"
import Description from "./description"
import Education from "./education"
import Info from "./info"
import HireMe from "./hireme"


const About = forwardRef(function About(props, ref) {
    // state variables
    const [isAbout, setIsAbout] = useState(true);
    const [isEducation, setIsEducation] = useState(false);
    const [isInfo, setIsInfo] = useState(false);
    const [isHire, setIsHire] = useState(false);

    // animation variables 

    function button_clicked(event){
        const className = event.target.className
        if (className == "btn1"){
            setIsAbout(true)
            setIsEducation(false)
            setIsInfo(false)
            setIsHire(false)
        }
        else if (className == "btn2"){
            setIsAbout(false)
            setIsEducation(true)
            setIsInfo(false)
            setIsHire(false)
        }
        else if (className == "btn3"){
            setIsAbout(false)
            setIsEducation(false)
            setIsInfo(true)
            setIsHire(false)
        }
        else if (className == "btn4"){
            setIsAbout(false)
            setIsEducation(false)
            setIsInfo(false)
            setIsHire(true)
        }
    };
    return (
        <section className="about-container" ref={ref}>
            <div className="about-image">
                <img src={portfolioPic} alt="Michael Cruz"></img>
            </div>

            <div className="about-info">
                
                <div className="btn-pane">
                    <button
                        className={`btn1${isAbout ? " active-btn" : ""}`}
                        onClick={button_clicked}
                    >About</button>
                    <button
                        className={`btn2${isEducation ? " active-btn" : ""}`}
                        onClick={button_clicked}
                    >Education</button>
                    <button
                        className={`btn3${isInfo ? " active-btn" : ""}`}
                        onClick={button_clicked}
                    >Info</button>
                    <button
                        className={`btn4${isHire ? " active-btn" : ""}`}
                        onClick={button_clicked}
                    >Hire Me</button>
                </div>

                {isAbout && <Description />}

                {isEducation && <Education />}

                {isInfo && <Info />}

                {isHire && <HireMe/>}
            </div>
        </section>
    )
});

export default About;