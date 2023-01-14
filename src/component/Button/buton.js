import { Link } from 'react-router-dom';
import './Button.css';
function Button({ to, href, className, children, onClick }) {
    const prop = {
        onClick,
    };
    let Comp = 'button';

    if (to) {
        prop.to = to;
        Comp = Link;
    } else {
        prop.href = href;
        Comp = 'a';
    }
    return (
        <Comp className={`btn ${className}`} {...prop}>
            {children}
        </Comp>
    );
}

export default Button;
