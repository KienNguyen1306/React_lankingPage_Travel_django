import Button from '~/component/Button/buton';
import './FeaturedServicwes.css';
import { FeaturedServicwesDatas } from '~/datas/datas';
import { Link } from 'react-router-dom';

function FeaturedServicwes() {
    return (
        <div className="wrapper">
            <div className="container">
                <div className="featuredServicwes">
                    <div className="featuredServicwes_top" data-aos="zoom-in">
                        <h2 className="featuredServicwes_heading">Featured Servicwes</h2>
                        <p className="featuredServicwes_sub">
                            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                            there live the blind texts.
                        </p>
                        <div>
                            <Button className="primary">view All</Button>
                        </div>
                    </div>
                    <div className="featuredServicwes_body">
                        {FeaturedServicwesDatas.map((data, index) => {
                            return (
                                <div className="featuredServicwes_item" data-aos="flip-left">
                                    <div className="featuredServicwes_image">
                                        <img src={data.image} alt="loi" />
                                    </div>
                                    <div className="featuredServicwes_content">
                                        <h3 className="featuredServicwes_content-heading">{data.name}</h3>
                                        <p className="featuredServicwes_content-sub">{data.sub}</p>
                                        <Link to="/" className="featuredServicwes_content-link">
                                            load mort
                                        </Link>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FeaturedServicwes;
