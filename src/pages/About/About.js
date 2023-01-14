import Hero from '~/layout/Hero/Hero';
import Discover from '~/layout/Discover/Discover';
import ServicesLayout from '~/layout/ServicesLayout/ServicesLayout';
import Teams from '~/layout/Teams/Teams';
import Positions from '~/layout/Positions/Positions';

function About() {
    return (
        <>
            <Hero
                title="About Us"
                sub="A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth."
                image="https://untree.co/demos/sterial/images/hero_1.jpg"
            />

            <Discover />
            <ServicesLayout />
            <Teams />
            <Positions />
        </>
    );
}

export default About;
