import Button from '~/component/Button/buton';
import { GrFormNext } from 'react-icons/gr';
function PostItem({ datas }) {
    return (
        <div className="postitem" data-aos="flip-right">
            <div className="postitem_image">
                <img src={datas.image} alt="loi" />
            </div>
            <div className="postitem_content">
                <p className="postitem_time">{datas.time}</p>
                <h4 className="postitem_heading">{datas.name}</h4>
                <p className="postitem_sub">{datas.sub}</p>
                <Button className="text">
                    read more
                    <GrFormNext color="#f17945" />
                </Button>
            </div>
        </div>
    );
}

export default PostItem;
