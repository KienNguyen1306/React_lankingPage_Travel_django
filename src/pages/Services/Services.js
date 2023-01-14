import Hero from '~/layout/Hero/Hero';

import ServicesLayout from '~/layout/ServicesLayout/ServicesLayout';

import FeaturedServicwes from '~/layout/FeaturedServicwes/FeaturedServicwes';
function Services() {
    return (
        <>
            <Hero
                title="Services"
                sub="A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth."
                image="https://untree.co/demos/sterial/images/hero_2.jpg"
            />
            <ServicesLayout />
            <FeaturedServicwes />;
        </>
    );
}

export default Services;
