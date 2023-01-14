import './Footer.css';
import { AiOutlineInstagram, AiFillYoutube, AiFillFacebook } from 'react-icons/ai';

function Footer() {
    return (
        <div className="wrapper bg">
            <div className="container">
                <footer className="footer">
                    <ul className="footer_list" data-aos="fade-up">
                        <li className="footer_list-item">About Passport.</li>
                        <li className="footer_list-item">
                            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                            there live the blind texts.
                        </li>
                        <div className="connect">
                            <h3>Connect</h3>
                            <div className="connect_icon-wrapper">
                                <AiOutlineInstagram className="connect_icon" />
                                <AiFillYoutube className="connect_icon" />
                                <AiFillFacebook className="connect_icon" />
                                <AiOutlineInstagram className="connect_icon" />
                                <AiFillYoutube className="connect_icon" />
                                <AiFillFacebook className="connect_icon" />
                            </div>
                        </div>
                    </ul>
                    <ul className="footer_list" data-aos="fade-down">
                        <li className="footer_list-item">Links</li>
                        <li className="footer_list-item">About us</li>
                        <li className="footer_list-item">Services</li>
                        <li className="footer_list-item">News</li>
                        <li className="footer_list-item">Careers</li>
                        <li className="footer_list-item">Contact</li>
                    </ul>
                    <ul className="footer_list" data-aos="fade-up">
                        <li className="footer_list-item">Company</li>
                        <li className="footer_list-item">About us</li>
                        <li className="footer_list-item">Services</li>
                        <li className="footer_list-item">News</li>
                        <li className="footer_list-item">Careers</li>
                        <li className="footer_list-item">Contact</li>
                    </ul>
                    <ul className="footer_list" data-aos="fade-down">
                        <li className="footer_list-item">Contact</li>
                        <li className="footer_list-item">43 Raymouth Rd. Baltemoer, London 3910</li>
                        <li className="footer_list-item">+1(123)-456-7890</li>
                        <li className="footer_list-item">+1(123)-456-7890</li>
                        <li className="footer_list-item">info@mydomain.com</li>
                    </ul>
                </footer>
                <h3 className="footer_end">Copyright ©2022. All Rights Reserved. — Nguyễn Đức Kiên</h3>
            </div>
        </div>
    );
}

export default Footer;
