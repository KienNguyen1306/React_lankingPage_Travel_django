import './FrequentlyAsked.css';
import FrequentlyAskedItem from './FrequentlyAskedItem';
import { useState, useEffect } from 'react';
// import { FrequentlyAskedDatas } from '~/datas/datas';
function FrequentlyAsked() {
    const [datas, setDatas] = useState([]);
    useEffect(() => {
        fetch('api/frequentlyAskedDatas/')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setDatas(data);
            });
    }, []);

    function toggleFQA(i) {
        setDatas(
            datas.map((data, index) => {
                if (i === index) {
                    data.open = !data.open;
                } else {
                    data.open = false;
                }
                return data;
            }),
        );
    }
    return (
        <div className="wrapper">
            <div className="container">
                <div className="frequentlyasked">
                    <div className="frequentlyasked_left" data-aos="fade-right">
                        <div className="frequentlyasked_left-image">
                            <img src="https://untree.co/demos/sterial/images/img_v_2.jpg" alt="loi" />
                        </div>
                    </div>
                    <div className="frequentlyasked_right" data-aos="fade-left">
                        <h2 className="frequentlyasked_right-heading">Frequently Asked Questions</h2>
                        <div className="frequentlyasked_right-content">
                            {datas.map((data, index) => {
                                return (
                                    <FrequentlyAskedItem
                                        key={index}
                                        title={data.title}
                                        answer={data.answer}
                                        open={data.open}
                                        index={index}
                                        toggleFQA={toggleFQA}
                                    />
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FrequentlyAsked;
