import { NavData } from '../../datas/datas';
import NavItem from './NavItem';

function Nav({ show }) {
    return (
        <nav className={show ? 'navs_body-open' : 'navs_body'}>
            <ul className="navs">
                {NavData.map((menu, index) => {
                    const depthLevel = 0;
                    return <NavItem items={menu} key={index} depthLevel={depthLevel} />;
                })}
            </ul>
        </nav>
    );
}

export default Nav;
