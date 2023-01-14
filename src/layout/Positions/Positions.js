import './Positions.css';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { AiOutlineFieldTime } from 'react-icons/ai';
import { PositionsData } from '~/datas/datas';
function Positions() {
    return (
        <div className="wrapper bg-2">
            <div className="container">
                <div className="positions">
                    <div className="position_header" data-aos="zoom-in">
                        <h2 className="position__heading">Open Positions</h2>
                        <p className="position__sub">
                            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                            there live the blind texts. Design
                        </p>
                    </div>
                    <div className="position__body">
                        {PositionsData.map((title, index) => {
                            return (
                                <div key={index} className="position__list" data-aos="fade-up">
                                    <div className="position__list-item-header">
                                        <span className="position_design">Design</span>
                                        <span className="position_view">View Position &Phi;</span>
                                    </div>
                                    <h3 className="position_name">{title}</h3>
                                    <div className="posi">
                                        <span className="position_remove">
                                            <FaMapMarkerAlt className="position_remove-icon" />
                                            Remote
                                        </span>
                                        <span className="position_fulltime">
                                            <AiOutlineFieldTime className="position_remove-icon" />
                                            Fulltime
                                        </span>
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

export default Positions;
