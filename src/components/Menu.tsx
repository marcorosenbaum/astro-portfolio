import { useState, useEffect } from 'react';
import MenuModal from './MenuModal';

const Menu = () => {
  const [showMenuModal, setShowMenuModal] = useState(false);
  const [hideMenuIcon, setHideMenuIcon] = useState(false);

  useEffect(() => {
    window.innerWidth < 650 ? setHideMenuIcon(true) : '';
  }, []);

  const handleMenuClick = () => {
    setShowMenuModal((prevState) => !prevState);
  };

  return (
    <div>
      <button
        id="menu-button"
        aria-label="Open the menu"
        className="flex md:!hidden"
        onClick={handleMenuClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          // class="lucide lucide-menu"
        >
          <line x1="4" x2="20" y1="12" y2="12" />
          <line x1="4" x2="20" y1="6" y2="6" />
          <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
      </button>

      <MenuModal showModal={showMenuModal} closeMenu={handleMenuClick} />
    </div>
  );
};

export default Menu;
