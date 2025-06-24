import linkedInLogo from "/src/assets/socials/linkedIn-logo.svg"
import instaLogo from "/src/assets/socials/instagram-logo.svg"
import youtubeLogo from "/src/assets/socials/youtube-logo.svg"
import xLogo from "/src/assets/socials/x-logo.png"
import githubLogo from "/src/assets/technologies/github-logo.svg"

export default function Info() {
    return (
        <div className="info-section">
            <div className="flex items-center justify-center mx-auto mt-15 w-40% gap-4">
                <a className="w-10 opacity-20 hover:opacity-100" href="https://www.linkedin.com/in/mbcruz96/">
                    <img src={linkedInLogo} alt="linked in"></img>
                </a>
                <a className="w-10 opacity-20 hover:opacity-100" href="https://www.youtube.com/@CruzingTech">
                    <img src={youtubeLogo} alt="youtube"></img>
                </a>
                <a className="w-10 opacity-20 hover:opacity-100" href="https://x.com/CruzingTech">
                    <img src={xLogo} alt="x"></img>
                </a>
                <a className="w-10 opacity-20 hover:opacity-100" href="https://www.instagram.com/magicmikecruz/">
                    <img src={instaLogo} alt="instagram"></img>
                </a>
                <a className="w-10 opacity-20 hover:opacity-100" href="https://mbcruz96.github.io/Portfolio/">
                    <img src={githubLogo} alt="portfolio"></img>
                </a>
            </div>
            <div className="flex justify-center mx-auto mt-10">
                <a href="/src/assets/resume.docx">
                    <button className="w-75 h-12 rounded-3xl bg-orange-700 opacity-10 hover:opacity-100 cursor-pointer"><i className="fa fa-download"></i> Download Resume</button>
                </a>
            </div>    
        </div>
    )
}