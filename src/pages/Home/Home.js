import Discover from '~/layout/Discover/Discover';
import Hero from '~/layout/Hero/Hero';
import ServicesLayout from '~/layout/ServicesLayout/ServicesLayout';
import Travel from '~/layout/Travel/Travel';
import Memories from '~/layout/Memories/Memories';
import Testimonials from '~/layout/Testimonials/Testimonials';
import FrequentlyAsked from '~/layout/FrequentlyAsked/FrequentlyAsked';
import Post from '~/layout/Post/Post';
import Adventurous from '~/layout/Adventurous/Adventurous';
function Home() {
    return (
        <>
            <Hero
                title="Its a Big World Out There, Go Explore"
                sub="A small river named Duden flows by their place and supplies it with the necessary regelialia. It
                        is a paradisematic country, in which roasted parts of sentences fly into your mouth."
                image="https://untree.co/demos/sterial/images/hero_1.jpg"
            />

            <Discover />
            <ServicesLayout />
            <Travel />
            <Memories />
            <Testimonials />
            <FrequentlyAsked />
            <Post />
            <Adventurous />
        </>
    );
}

export default Home;
