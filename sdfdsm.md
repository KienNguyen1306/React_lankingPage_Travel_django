import { useState, useRef } from 'react';

import { NavLink } from 'react-router-dom';
import DropDown from './DropDown';
import { AiFillCaretDown } from 'react-icons/ai';
function NavItem({ items, depthLevel }) {
    const [dropdown, setdropdown] = useState(false);
    let ref = useRef();

    // useEffect(() => {
    //     const handler = (event) => {
    //         if (dropdown && ref.current && !ref.current.contains(event.target)) {
    //             setdropdown(false);
    //         }
    //     };
    //     document.addEventListener('mousedown', handler);
    //     document.addEventListener('touchstart', handler);
    //     return () => {
    //         // Cleanup the event listener
    //         document.removeEventListener('mousedown', handler);
    //         document.removeEventListener('touchstart', handler);
    //     };
    // }, [dropdown]);

    const onMouseEnter = () => {
        setdropdown(true);
    };

    const onMouseLeave = () => {
        setdropdown(false);
    };
    return (
        <li className="nav_item" ref={ref} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            {items.submenu ? (
                <button onClick={() => setdropdown((prev) => !prev)}>
                    <p>{items.title}</p>
                    {depthLevel > 0 ? (
                        <p>&raquo;</p>
                    ) : (
                        <p>
                            <AiFillCaretDown />
                        </p>
                    )}
                    <DropDown submenu={items.submenu} depthLevel={depthLevel} dropdown={dropdown} />
                </button>
            ) : (
                <NavLink to={items.to}>{items.title}</NavLink>
            )}
        </li>
    );
}

export default NavItem;
