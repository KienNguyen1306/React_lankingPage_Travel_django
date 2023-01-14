import './Hero.css';
import BannerContent from '~/component/BannerContent/BannerConten';
function Hero({ title, sub, image, className }) {
    return (
        <div className="herobaner">
            <div className="hero_image">
                <img src={image} alt="loi" />
            </div>
            <div className="container">
                <BannerContent className={className} title={title} sub={sub} />
            </div>
        </div>
    );
}

export default Hero;
