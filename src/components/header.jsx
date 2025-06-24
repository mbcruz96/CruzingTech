import { Link } from "react-router-dom";
import brandLogo from "/src/assets/brand-logo.svg";
import Blog from "/src/components/blog";

export default function Header(props) {

    function handleNavClick(event) {
        const section = event.target.className;
        const sectionRef = props.sectionRefs[section];
        if (sectionRef && sectionRef.current) {
            // Scroll to the section
            sectionRef.current.scrollIntoView({ behavior: "smooth", block: "start", inline: "start" });

            // After scrolling, adjust for header height
            if (section !== "message") {
                setTimeout(() => {
                    const header = document.querySelector("header");
                    const headerHeight = header ? header.offsetHeight : 100;
                    window.scrollBy({ top: -headerHeight, left: 0, behavior: "smooth" });
                }, 700); // Delay for correct timing
            }
        }
    }
    return (
        <header>
            <div className="logo">
                <img src={brandLogo} alt="CruzingTech class" className="w-80" />
            </div>
            <nav>
                {props.type === "main" && <div className="links">
                    <a className="about" onClick={handleNavClick}>About</a>
                    <a className="services" onClick={handleNavClick}>Services</a>
                    <a className="technology" onClick={handleNavClick}>Tech</a>
                    <a className="message" onClick={handleNavClick}>Contact</a>
                    <Link to={"/blog"}>Blog</Link>
                </div>}
                {props.type === "blog" && <div className="links">
                    <Link to={"/"}>Home</Link>  
                </div>}
            </nav>
        </header>
    )
}