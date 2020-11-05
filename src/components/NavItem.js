import React from 'react';

const NavItem = ({
  name,
  currentDropdown,
  setCurrentDropdown,
  icon,
  children,
}) => {
  return (
    <li className='nav-item'>
      <a
        href='#'
        className='icon-button'
        onClick={() => {
          if (!setCurrentDropdown) return null;
          setCurrentDropdown(name);
          console.log(currentDropdown);
          return setCurrentDropdown && name !== currentDropdown
            ? setCurrentDropdown(name)
            : setCurrentDropdown(null);
        }}
      >
        {icon}
      </a>
      {children}
    </li>
  );
};

export default NavItem;
