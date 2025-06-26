import { forwardRef, useState } from "react"
import sendMail from "../script";

const Message = forwardRef(function Message(props, ref) {
    const [isSent, setIsSent] = useState(false);

    function handleSend(e) {
        e.preventDefault();
        sendMail();
        setIsSent(true);
    }

    return (
        <section className="h-auto mt-10 flex justify-center items-center bg-white  text-black p-8 gap-12" ref={ref}>
            <div className="flex flex-col items-center w-1/3 bg-gray-100 p-6 rounded-lg shadow-lg">
                <h1 className="text-4xl font-bold mb-4">Send a message</h1>
                <p className="text-lg text-center max-w-2xl">
                    To inquire about my services, discuss potential collaborations or job opportunities, or just to say hello, feel free to reach out via email. I look forward to hearing from you!
                </p>
            </div>
            {!isSent && <form className="mt-8 w-2/3">
                <div className="flex flex-col gap-4">
                    <input 
                        type="text" 
                        id="name"
                        placeholder="Your Name" 
                        className="p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                    <input 
                        type="email" 
                        id="email"
                        placeholder="Your Email" 
                        className="p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                    <input 
                        type="text"
                        id="subject"
                        placeholder="Subject"
                        className="p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                    <textarea 
                        placeholder="Your Message" 
                        id="message"
                        className="p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
                        required
                    ></textarea>
                    <button 
                        type="submit" 
                        onClick={handleSend}
                        className="bg-blue-500 text-white p-2 rounded-2xl hover:bg-blue-600 transition duration-200"
                    >
                        Send Message
                    </button>
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