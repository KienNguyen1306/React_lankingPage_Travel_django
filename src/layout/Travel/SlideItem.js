function SlideItem({ datas }) {
    return (
        <div className="travel_slide_item" data-aos="flip-right">
            <div className="travel_slide_item-image">
                <img src={datas.image} alt="loi" />
            </div>
            <div className="travel_slide_item-content">
                <h2 className="travel_slide_item-conten-heading">{datas.name}</h2>
                <p className="travel_slide_item-image-content-sub">{datas.sub}</p>
            </div>
        </div>
    );
}

export default SlideItem;
