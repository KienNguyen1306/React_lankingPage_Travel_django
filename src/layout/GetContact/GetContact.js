import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './GetContact.css';
import { BiMap, BiTime } from 'react-icons/bi';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
function GetContact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_upx967d', 'template_ryje8jg', form.current, 'BlWPAg01fZ-EXJji4').then(
            (result) => {
                console.log(result.text);
                alert('thanh cong');
            },
            (error) => {
                console.log(error.text);
            },
        );
        e.target.reset();
    };

    return (
        <div className="wrapper">
            <div className="container">
                <div className="getContact">
                    <h2 className="getContact_header" data-aos="zoom-in">
                        Get In Touch
                    </h2>
                    <div className="getContact_body">
                        <div className="getContact_left" data-aos="fade-right">
                            <div className="getContact_left-item">
                                <div className="getContact_left-item-icon">
                                    <BiMap />
                                </div>
                                <div className="getContact_left-item-content">
                                    <p>Location:</p>
                                    <p>43 Raymouth Rd. Baltemoer, London 3910</p>
                                </div>
                            </div>
                            <div className="getContact_left-item">
                                <div className="getContact_left-item-icon">
                                    <BiTime />
                                </div>
                                <div className="getContact_left-item-content">
                                    <p>Open Hours::</p>
                                    <p>Sunday-Friday: 11:00 AM - 2300 PM</p>
                                </div>
                            </div>
                            <div className="getContact_left-item">
                                <div className="getContact_left-item-icon">
                                    <AiOutlineMail />
                                </div>
                                <div className="getContact_left-item-content">
                                    <p>Email::</p>
                                    <p>nguyenduckien1306@gmail.com</p>
                                </div>
                            </div>
                            <div className="getContact_left-item">
                                <div className="getContact_left-item-icon">
                                    <AiOutlinePhone />
                                </div>
                                <div className="getContact_left-item-content">
                                    <p>Call:</p>
                                    <p>0382185674</p>
                                </div>
                            </div>
                        </div>
                        <div className="getContact_right" data-aos="fade-left">
                            <form ref={form} className="form_1" onSubmit={sendEmail}>
                                <div className="name_pass">
                                    <input
                                        className="form_1-name"
                                        type="text"
                                        placeholder="Username"
                                        name="user_name"
                                    />
                                    <input
                                        className="form_1-pasword"
                                        type="email"
                                        placeholder="email"
                                        name="user_email"
                                    />
                                </div>
                                <div>
                                    <input className="subject" type="text" placeholder="subject" />
                                </div>
                                <div>
                                    <textarea className="textarea" name="message"></textarea>
                                </div>
                                <div className="form_submit_btn">
                                    <button className="sedmessage" type="submit">
                                        Send message
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GetContact;
