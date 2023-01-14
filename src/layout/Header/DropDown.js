import NavItem from './NavItem';

function DropDown({ submenu, depthLevel, dropdown }) {
    depthLevel = depthLevel + 1;
    let dropdownClass = depthLevel > 1 ? 'right' : '';
    return (
        <ul className={`submenu ${dropdownClass} ${dropdown ? 'open' : ''}`}>
            {submenu.map((sub, index) => {
                return <NavItem key={index} items={sub} depthLevel={depthLevel} />;
            })}
        </ul>
    );
}

export default DropDown;
