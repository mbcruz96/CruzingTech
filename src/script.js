 export default function sendMail(){
    const params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    }

    emailjs.send("service_c3j4qa4", "template_lkmmuvi", params).then(alert("Message sent successfully!"));
};