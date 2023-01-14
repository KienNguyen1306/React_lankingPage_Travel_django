import './BannerContent.css';
import { AiFillPlayCircle } from 'react-icons/ai';
function BannerContent({ title, sub, className }) {
    return (
        <div className={`heroconten ${className}`}>
            <h2 className="hero_heading">{title}</h2>
            <p className="hero_sub">{sub}</p>
            <div className="hero_btn">
                <AiFillPlayCircle className="play" />
                <span className="hero_ntn-sub">Watch Video</span>
            </div>
        </div>
    );
}

export default BannerContent;
