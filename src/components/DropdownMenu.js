import React, { useState, useEffect } from 'react';
import CogIcon from '../icons/cog.svg';
import ChevronIcon from '../icons/chevron.svg';
import { motion } from 'framer-motion';
import { CSSTransition } from 'react-transition-group';

const containerVarient = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.3, type: 'spring', stiffness: 220, mass: 0.6 },
  },
};

const hoverVariants = {
  visible: { x: [0, 0, 0], transition: { delay: 1, duration: 1 } },
  hover: {
    scale: 1.1,
    transition: { stiffness: 500, yoyo: Infinity, duration: 0.5 },
  },
};

const DropdownMenu = (props) => {
  const [activeMenu, setActiveMenu] = useState('main');
  const [menuHeight, setMenuHeight] = useState(null);

  const setDropdown = (e) => {
    let el = e.target;
    console.log('el', el.classList);
    if (
      el.classList.contains('menu-item') ||
      el.classList.length === 0 ||
      el.classList.contains('icon-button')
    ) {
      return;
    } else {
      props.setCurrentDropdown(null);
    }
  };
  useEffect(() => {
    document.body.addEventListener('click', setDropdown);

    return () => {
      document.body.removeEventListener('click', setDropdown);
    };
  }, []);
  const calcHeight = (el) => {
    const height = el.offsetHeight;

    setMenuHeight(height);
  };

  const DropdownItem = (props) => {
    return (
      <motion.a
        href='#'
        className='menu-item'
        onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
        variants={hoverVariants}
        whileHover='hover'
        animate='visible'
      >
        <span className='icon-button'>{props.leftIcon}</span>
        {props.children}
        <span className='icon-right'>{props.rightButton}</span>
      </motion.a>
    );
  };

  return (
    <motion.div
      className='dropdown'
      style={{ height: menuHeight }}
      variants={containerVarient}
      initial='hidden'
      animate='visible'
      transition={{ duration: 0.3 }}
      exit={{ opacity: 0 }}
    >
      <CSSTransition
        in={activeMenu === 'main'}
        unmountOnExit
        timeout={500}
        classNames='menu-test'
        onEnter={calcHeight}
      >
        <div className='menu'>
          <DropdownItem leftIcon={<ChevronIcon />}>Home</DropdownItem>
          <DropdownItem
            leftIcon={<CogIcon />}
            rightIcon={<CogIcon />}
            goToMenu='settings'
          >
            Contact us
          </DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'test'}
        unmountOnExit
        timeout={500}
        classNames='menu-test'
        onEnter={calcHeight}
      >
        <div className='menu'>
          <DropdownItem>Search</DropdownItem>
          <DropdownItem>Reports</DropdownItem>
          <DropdownItem>test</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem leftIcon='👍' goToMenu='main'>
            My profile
          </DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'settings'}
        unmountOnExit
        timeout={500}
        classNames='menu-test'
        onEnter={calcHeight}
      >
        <div className='menu'>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem goToMenu='test'>go to test</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem leftIcon='👍' goToMenu='main'>
            My profile
          </DropdownItem>
        </div>
      </CSSTransition>
    </motion.div>
  );
};

export default DropdownMenu;
