import React, { useEffect } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css'
import Aos from 'aos';
import 'aos/dist/aos.css';
const Contact = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
      }, [])
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_ajqproj', 'template_22tyxcf', e.target, 'user_AIXmKpXq8yudyUWzqUdzW')
            .then((result) => {
                alert("Email Has Been Successfully Sent!");
                e.target.reset();
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }
    return (
        <div data-aos='flip-up' id='contact' className="py-5">
            <h2 className="text-center text-white fw-bold">Contact <span className="green-effect">With Me</span></h2>
            <form className="contact-form border p-4 mx-auto mt-5" onSubmit={sendEmail}>

                <div className="form-group mt-4">
                    <input name="email" type="email" className="form-control" id="exampleFormControlInput1" placeholder="Your Email (name@example.com)" required />
                </div>
                <div className="form-group mt-4">
                    <input name="name" type="text" className="form-control" id="exampleFormControlInput1" placeholder="Name" required />
                </div>
                <div className="form-group mt-4">
                    <textarea name="message" className="form-control" id="exampleFormControlTextarea1" placeholder='message' rows="3"></textarea>
                </div>
                <button type="submit" className="btn submit-btn text-white w-100 mt-3" value="Send">Send</button>
            </form>
        </div>
    );
};

export default Contact;