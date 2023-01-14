import Button from '~/component/Button/buton';
import './Adventurous.css';
function Adventurous() {
    return (
        <div className="wrapper bg-1">
            <div className="container">
                <div className="adventurous">
                    <h2 className="adventurous_heading">Begin your adventurous journey here.</h2>
                    <div className="Bdventurous_btn">
                        <Button className="primary_1">Get Start</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Adventurous;
