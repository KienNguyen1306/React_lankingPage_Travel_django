import './FrequentlyAsked.css';
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai';

function FrequentlyAskedItem({ title, answer, index, open, toggleFQA }) {
    return (
        <div className="frequentlyAskedItem">
            <div className={'frequentlyAskedItem_title ' + (open ? 'open' : '')}>
                <h4 className="frequentlyAskedItem_title-h4">{title}</h4>
                <button onClick={() => toggleFQA(index)} className="frequentlyAskedItem-btn">
                    {open ? <AiOutlineMinusCircle color="#ffff" /> : <AiOutlinePlusCircle color="blue" />}
                </button>
            </div>
            <div className="frequentlyAskedItem_answer">
                <p className={'frequentlyAskedItem_sub ' + (open ? 'open' : '')}>{answer}</p>
            </div>
        </div>
    );
}

export default FrequentlyAskedItem;
