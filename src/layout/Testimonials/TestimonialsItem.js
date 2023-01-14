import './Testimonials.css';
import { GoQuote } from 'react-icons/go';
function TestimonialsItem({ datas }) {
    return (
        <div className="testimonials_item" data-aos="flip-left" data-aos-duration="800">
            <div className="testimonials_item-image">
                <img src={datas.image} alt="loi" />
            </div>
            <h4 className="testimonials_item-name">{datas.name}</h4>
            <p className="testimonials_item-sub line1">{datas.job}</p>
            <GoQuote className="testimonials_item-icon" />
            <p className="testimonials_item-sub">{datas.sub}</p>
        </div>
    );
}

export default TestimonialsItem;
