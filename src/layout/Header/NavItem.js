import { useState, useRef, useEffect } from 'react';

import { NavLink } from 'react-router-dom';
import DropDown from './DropDown';
import { BsChevronDown } from 'react-icons/bs';
function NavItem({ items, depthLevel, onClick }) {
    const [dropdown, setdropdown] = useState(false);
    let ref = useRef();

    useEffect(() => {
        const handler = (event) => {
            if (dropdown && ref.current && !ref.current.contains(event.target)) {
                setdropdown(false);
            }
        };
        document.addEventListener('mousedown', handler);
        document.addEventListener('touchstart', handler);
        return () => {
            // Cleanup the event listener
            document.removeEventListener('mousedown', handler);
            document.removeEventListener('touchstart', handler);
        };
    }, [dropdown]);

    const onMouseEnter = () => {
        setdropdown(true);
    };

    const onMouseLeave = () => {
        setdropdown(false);
    };

    if (items.submenu) {
        return (
            <li
                onClick={onClick}
                className="nav_item"
                ref={ref}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                <p className="nav_item-p" onClick={() => setdropdown((prev) => !prev)}>
                    {items.title}
                    <DropDown submenu={items.submenu} depthLevel={depthLevel} dropdown={dropdown} />
                </p>
                {depthLevel > 0 ? (
                    <soan>&raquo;</soan>
                ) : (
                    <span>
                        <BsChevronDown />
                    </span>
                )}
            </li>
        );
    } else {
        return (
            <NavLink onClick={onClick} className="nav_item" end to={items.to}>
                {items.title}
            </NavLink>
        );
    }
}

export default NavItem;
