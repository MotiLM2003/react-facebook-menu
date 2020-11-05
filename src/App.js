import React, { useState } from 'react';
import Bell from './icons/bell.svg';
import Messenger from './icons/messenger.svg';
import CaretIcon from './icons/caret.svg';
import PlusIcon from './icons/plus.svg';

// import { ReactComponent as ArrowIcon } from './icons/arrow.svg';
// import { ReactComponent as BoltIcon } from './icons/bolt.svg';
import { motion, AnimatePresence } from 'framer-motion';

import NavItem from './components/NavItem';
import Navbar from './components/Navbar';
import DropdownMenu from './components/DropdownMenu';

const App = () => {
  const [currentDropdown, setCurrentDropdown] = useState(null);

  return (
    <div className='container'>
      <Navbar>
        <NavItem icon={<PlusIcon />} />
        <NavItem icon={<Bell />} />
        <NavItem
          icon={<Messenger />}
          setCurrentDropdown={setCurrentDropdown}
          currentDropdown={currentDropdown}
          name='secondary'
        >
          <AnimatePresence>
            {currentDropdown === 'secondary' ? (
              <DropdownMenu
                name='secondary'
                setCurrentDropdown={setCurrentDropdown}
              />
            ) : null}
          </AnimatePresence>
        </NavItem>
        <NavItem
          icon={<CaretIcon />}
          name='main'
          setCurrentDropdown={setCurrentDropdown}
          currentDropdown={currentDropdown}
        >
          <AnimatePresence>
            {currentDropdown === 'main' ? (
              <DropdownMenu
                name='main'
                setCurrentDropdown={setCurrentDropdown}
              />
            ) : null}
          </AnimatePresence>
        </NavItem>
      </Navbar>
    </div>
  );
};

export default App;
