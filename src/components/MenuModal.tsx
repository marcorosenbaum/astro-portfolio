import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import {
  House,
  SquareUserRound,
  X,
  BookOpen,
  CalendarDays,
} from 'lucide-react';

const MenuModal: React.FC<{ closeMenu: () => void; showModal: boolean }> = ({
  closeMenu,
  showModal,
}) => {
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [showModal]);

  const handleCloseMenu = () => {
    closeMenu();
  };

  return createPortal(
    <div
      id="menu-modal"
      className={`fixed z-[1000]  h-screen top-0 sm:w-1/2 w-screen duration-500  flex justify-center items-center ${
        showModal ? '  right-[0%]' : ' -right-[100%]'
      }`}
    >
      <nav className="flex flex-col text-xl gap-10 ">
        <button
          onClick={handleCloseMenu}
          className="p-4 text-sm absolute top-0 right-0"
        >
          close menu
          <X size={'2.5rem'} />
        </button>
        <a
          onClick={handleCloseMenu}
          href="/"
          aria-label="Navigate to the home page"
          className={'flex gap-6 items-center'}
        >
          <House size={'2.5rem'} />
          Home
        </a>

        <a
          onClick={handleCloseMenu}
          href="/projects"
          aria-label="Navigate to the project page"
          className={'flex gap-6 items-center'}
        >
          <SquareUserRound size={'2.5rem'} />
          Projects
        </a>

        <a
          onClick={handleCloseMenu}
          href="/"
          aria-label="Navigate to the blog page"
          className={'flex gap-6 items-center'}
        >
          <CalendarDays size={'2.5rem'} />
          Blog
        </a>
      </nav>
    </div>,
    document.body
  );
};

export default MenuModal;
