import Button from '~/component/Button/buton';
import './Discover.css';
function Discover() {
    return (
        <div className="wrapper">
            <div className="container">
                <div className="discover">
                    <div className="discover_left" data-aos="fade-right">
                        <h2 className="discover_heading">Explore All Corners of The World With Us</h2>
                        <p className="discover_sub">
                            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                            there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the
                            Semantics, a large language ocean.
                        </p>
                        <p className="discover_sub">
                            A small river named Duden flows by their place and supplies it with the necessary
                            regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your
                            mouth.
                        </p>
                        <div className="discover_btn">
                            <Button className="primary">Read More</Button>
                        </div>
                    </div>
                    <div className="discover_right" data-aos="fade-left">
                        <div className="discover_right_list-image">
                            <img src="https://untree.co/demos/sterial/images/img_v_2.jpg" alt="loi" />
                        </div>
                        <div className="discover_right_list-image">
                            <img src="https://untree.co/demos/sterial/images/img_v_1.jpg" alt="loi" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Discover;
