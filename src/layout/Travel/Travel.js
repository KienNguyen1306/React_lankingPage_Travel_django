import { useRef,useEffect, useState } from 'react';
import './Travel.css';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import SlideItem from './SlideItem';
// import { Travels } from '~/datas/datas';
function Travel() {
    const [travel,setTravel] = useState([])

    useEffect(()=>{
        fetch('/api/travel/')
            .then((response) => response.json())
            .then((data) => {
                setTravel(data)
            });
    },[])

    const formlist = useRef();
    function handolnext() {
        let widthItem = document.querySelector('.travel_slide_item').offsetWidth;
        document.querySelector('.formlist').scrollLeft += parseInt(`${widthItem + 30}`);
    }

    function handolprev() {
        let widthItem = document.querySelector('.travel_slide_item').offsetWidth;
        document.querySelector('.formlist').scrollLeft -= parseInt(`${widthItem + 30}`);
    }
    return (
        <div className="wrapper">
            <div className="container">
                <div className="travel">
                    <div className="travel_top" data-aos="fade-down">
                        <div className="travel_top-left">
                            <h2 className="travel_top-heading">Discover Hundred of Travel Destinations</h2>
                            <p className="travel_top-sub">
                                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                                there live the blind texts. Separated they live in Bookmarksgrove right at the coast of
                                the Semantics, a large language ocean.
                            </p>
                        </div>
                        <div className="travel_top-right">
                            <div className="slide_btn" onClick={handolprev}>
                                <GrFormPrevious className="slide_btn-icon" />
                            </div>
                            <div className="slide_btn" onClick={handolnext}>
                                <GrFormNext className="slide_btn-icon" />
                            </div>
                        </div>
                    </div>
                    <div ref={formlist} className="formlist">
                        <div className="travel_slide">
                            {travel.map((travel, index) => {
                                return <SlideItem key={index} datas={travel} />;
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Travel;
