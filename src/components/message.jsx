import { forwardRef, useState, useRef } from "react"
import ReCaptcha from "react-google-recaptcha";
import clsx from "clsx";
import sendMail from "../script";
import { form, s } from "motion/react-client";

const Message = forwardRef(function Message(props, ref) {
    const [isSent, setIsSent] = useState(false);
    const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
    const recaptchaRef = useRef(null);
    
    function onChange() {
        // Handle the reCAPTCHA response here
        console.log("Captcha verified successfully!");  
    }

    const handleSend = (e) => {
        e.preventDefault();
        const recaptchaValue = recaptchaRef.current.getValue();
        if (formData.name && formData.email && formData.subject && formData.message && recaptchaValue) {
            sendMail(recaptchaValue);
            setIsSent(true);
            setFormData({ name: "", email: "", subject: "", message: "" }); // clear fields on success
        }
        else {
            alert("Please fill all fields and complete the reCAPTCHA.");
        }
    }

    return (
        <section className="h-auto mt-10 flex justify-center items-center bg-white  text-black p-8 gap-12" ref={ref}>
            <div className="flex flex-col items-center w-1/3 bg-gray-100 p-6 rounded-lg shadow-lg">
                <h1 className="text-4xl font-bold mb-4">Send a message</h1>
                <p className="text-lg text-center max-w-2xl">
                    To inquire about my services, discuss potential collaborations or job opportunities, or just to say hello, feel free to reach out via email. I look forward to hearing from you!
                </p>
            </div>
            {!isSent && <form className="mt-8 w-2/3" onSubmit={handleSend}>
                <div className="flex flex-col gap-4">
                    <input 
                        type="text" 
                        id="name"
                        name="name"
                        placeholder="Your Name" 
                        className="p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                    />
                    <input 
                        type="email" 
                        id="email"
                        name="email"
                        placeholder="Your Email" 
                        className="p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                    />
                    <input 
                        type="text"
                        id="subject"
                        name="subject"
                        placeholder="Subject"
                        className="p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        required
                    />
                    <textarea 
                        placeholder="Your Message" 
                        id="message"
                        name="message"
                        className="p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                    ></textarea>
                    <button 
                        type="submit" 
                        className="bg-blue-500 text-white p-2 rounded-2xl hover:bg-blue-600 transition duration-200"
                    >
                        Send Message
                    </button>
                    <div className="flex justify-center items-center">
                        <ReCaptcha
                            ref={recaptchaRef}
                            sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                            onChange={onChange}
                            className="mt-4"
                            required
                        />
                        </div>
                </div>
            </form>}
            {isSent && <div className="flex flex-col items-center w-2/3 bg-green-100 p-6 rounded-lg shadow-lg">
                <h1 className="text-4xl font-bold mb-4">Message Sent!</h1>
                <p className="text-lg text-center max-w-2xl">
                    Thank you for reaching out! I will get back to you as soon as possible.
                </p>
            </div>}
            
        </section>
    )
});

export default Message;