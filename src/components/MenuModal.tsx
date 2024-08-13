import { useEffect } from "react";
import { createPortal } from "react-dom";

import {
  House,
  SquareUserRound,
  X,
  BookOpen,
  CalendarDays,
} from "lucide-react";

const MenuModal: React.FC<{ closeMenu: () => void; showModal: boolean }> = ({
  closeMenu,
  showModal,
}) => {
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showModal]);

  const handleCloseMenu = () => {
    closeMenu();
  };

  return createPortal(
    <div
      className={`fixed z-[1000] top-0 right-0 h-screen sm:w-1/2 w-screen duration-500 bg-black text-white flex justify-center items-center ${
        showModal ? "top-[0%] sm:right-0" : " top-0 -right-[100%]"
      }`}
    >
      <nav className="flex flex-col text-xl gap-10">
        <button
          onClick={handleCloseMenu}
          className="p-4 text-lg absolute top-0 right-0"
        >
          <X size={"2.5rem"} />
        </button>
        <a
          onClick={handleCloseMenu}
          href="/"
          className={"flex gap-6 items-center"}
        >
          <House size={"2.5rem"} />
          <span>Home</span>
        </a>

        <a
          onClick={handleCloseMenu}
          href="/about"
          className={"flex gap-6 items-center"}
        >
          <SquareUserRound size={"2.5rem"} />
          <span>About us</span>
        </a>
        <a
          onClick={handleCloseMenu}
          href="/menu"
          className={"flex gap-6 items-center"}
        >
          <BookOpen size={"2.5rem"} />
          <span>Menu</span>
        </a>
        <a
          onClick={handleCloseMenu}
          href="/"
          className={"flex gap-6 items-center"}
        >
          <CalendarDays size={"2.5rem"} />
          <span>Book</span>
        </a>
      </nav>
    </div>,
    document.body,
  );
};

export default MenuModal;
