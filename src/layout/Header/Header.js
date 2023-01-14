import { Link } from 'react-router-dom';
import './Header.css';
import Nav from './Nav';
import Button from '~/component/Button/buton';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GrClose } from 'react-icons/gr';
import { useState } from 'react';

function Header() {
    const [show, setShow] = useState(false);
    function handoclickSow() {
        setShow((prev) => false);
        // console.log(hide);
    }

    return (
        <div className="wrapper">
            <div className="container">
                <div className="header_main">
                    <header className="header">
                        <div className="header_logo">
                            <Link className="logo_link" to="/" alt="loi">
                                Sterial
                            </Link>
                        </div>
                        {<Nav show={show} onClick={handoclickSow} />}
                        <div className="menu_contact">
                            <Button to="/contact" className="primary">
                                contact
                            </Button>
                            <button onClick={() => setShow((prev) => !prev)}>
                                {show ? <GrClose className="menu_btn" /> : <GiHamburgerMenu className="menu_btn" />}
                            </button>
                        </div>
                    </header>
                </div>
            </div>
        </div>
    );
}

export default Header;
