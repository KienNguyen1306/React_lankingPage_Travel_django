import Button from '~/component/Button/buton';
import './ServicesLayout.css';
import { GiFishingBoat } from 'react-icons/gi';
import { BsCalculator } from 'react-icons/bs';
import { FaPlaneDeparture } from 'react-icons/fa';
function ServicesLayout() {
    
    return (
        <div className="wrapper bg">
            <div className="container">
                <div className="serviceslayout" data-aos="zoom-in">
                    <div className="serviceslayout_item">
                        <h3 className="serviceslayout_heading">Our Services</h3>
                        <p className="serviceslayout_sub">
                            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                            there live the blind texts.
                        </p>
                        <div className="serviceslayout_btn">
                            <Button className="primary">View all</Button>
                        </div>
                    </div>
                    <div className="serviceslayout_item">
                        <div className="serviceslayout_icon">
                            <GiFishingBoat className="serviceslayout_icon-icon" />
                        </div>
                        <h4 className="serviceslayout_h4">Tourism</h4>
                        <p className="serviceslayout_sub">
                            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                            there live the blind texts.
                        </p>
                    </div>
                    <div className="serviceslayout_item">
                        <div className="serviceslayout_icon">
                            <BsCalculator className="serviceslayout_icon-icon" />
                        </div>
                        <h4 className="serviceslayout_h4">Tourism</h4>
                        <p className="serviceslayout_sub">
                            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                            there live the blind texts.
                        </p>
                    </div>
                    <div className="serviceslayout_item">
                        <div className="serviceslayout_icon">
                            <FaPlaneDeparture className="serviceslayout_icon-icon" />
                        </div>
                        <h4 className="serviceslayout_h4">Tourism</h4>
                        <p className="serviceslayout_sub">
                            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                            there live the blind texts.
                        </p>
                    </div>
                    <div className="serviceslayout_item">
                        <div className="serviceslayout_icon">
                            <GiFishingBoat className="serviceslayout_icon-icon" />
                        </div>
                        <h4 className="serviceslayout_h4">Tourism</h4>
                        <p className="serviceslayout_sub">
                            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                            there live the blind texts.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ServicesLayout;
