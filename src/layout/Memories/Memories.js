import Button from '~/component/Button/buton';
import './Memories.css';
function Memories() {
    return (
        <div className="wrapper">
            <div className="container">
                <div className="memories">
                    <div className="memories_left" data-aos="fade-right">
                        <h2 className="memories_left-heading">Sweet Memories Come To Life Again</h2>
                        <p className="memories_left-sub">
                            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                            there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the
                            Semantics, a large language ocean.
                        </p>
                        <p className="memories_left-sub">
                            A small river named Duden flows by their place and supplies it with the necessary
                            regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your
                            mouth.
                        </p>
                        <div className="memories_btn">
                            <Button className="primary">loar more</Button>
                        </div>
                    </div>
                    <div className="memories_right" data-aos="fade-left">
                        <img src="https://untree.co/demos/sterial/images/img-1.jpg" alt="loi" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Memories;
