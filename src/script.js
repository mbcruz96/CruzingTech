import emailjs from '@emailjs/browser';

export default function sendMail(recaptcha_value){
    const params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
        'g-recaptcha-response': recaptcha_value,
    }

    const email_key = import.meta.env.VITE_EMAILJS_KEY;
    const service_id = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const template_id = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    
    emailjs.init({publicKey: email_key});

    emailjs.send(service_id, template_id, params, email_key,)
    .then(
        alert("Message sent successfully!"))
        .catch(err => console.error("Failed to send message. Error: ", err));
};