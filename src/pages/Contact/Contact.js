import Hero from '~/layout/Hero/Hero';
import './Contact.css';
import GetContact from '~/layout/GetContact/GetContact';
function Contact() {
    return (
        <>
            <Hero
                title="Contact"
                sub="A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth."
                image="https://untree.co/demos/sterial/images/hero_2.jpg"
                className="contact"
            />
            <GetContact />
        </>
    );
}

export default Contact;
