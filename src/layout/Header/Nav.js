import { NavData } from '../../datas/datas';
import NavItem from './NavItem';

function Nav({ show, onClick }) {
    return (
        <nav className={show ? 'navs_body open' : 'navs_body'}>
            <ul className="navs">
                {NavData.map((menu, index) => {
                    const depthLevel = 0;
                    return <NavItem onClick={onClick} items={menu} key={index} depthLevel={depthLevel} />;
                })}
            </ul>
        </nav>
    );
}

export default Nav;
