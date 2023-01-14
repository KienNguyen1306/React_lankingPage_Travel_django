import { useEffect, useState } from 'react';

import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
// import { TestimonialsData } from '~/datas/datas';
import './Testimonials.css';
import TestimonialsItem from './TestimonialsItem';
function Testimonials() {
    const [TestimonialsData, setTestimonialsData] = useState([]);
    useEffect(() => {
        fetch('/api/testimonialsData/')
            .then((response) => response.json())
            .then((data) => {
                setTestimonialsData(data);
            });
    }, []);

    function handolnext() {
        let widthItem = document.querySelector('.testimonials_item').offsetWidth;
        document.querySelector('.formtestimonials').scrollLeft += parseInt(`${widthItem + 30}`);
    }

    function handolprev() {
        let widthItem = document.querySelector('.testimonials_item').offsetWidth;
        document.querySelector('.formtestimonials').scrollLeft -= parseInt(`${widthItem + 30}`);
    }
    return (
        <div className="wrapper tes ">
            <div className="container">
                <div className="testimonials">
                    <div className="testimonials_top" data-aos="zoom-in">
                        <h2 className="testimonials_top-heading">Testimonials</h2>
                        <div className="testimonials_btn">
                            <div className="slide_btn" onClick={handolprev}>
                                <GrFormPrevious className="slide_btn-icon" />
                            </div>
                            <div className="slide_btn" onClick={handolnext}>
                                <GrFormNext className="slide_btn-icon" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="formtestimonials">
                <div className="testimonials_bottom">
                    {TestimonialsData.map((datas, index) => {
                        return <TestimonialsItem key={index} datas={datas} />;
                    })}
                </div>
            </div>
        </div>
    );
}

export default Testimonials;
