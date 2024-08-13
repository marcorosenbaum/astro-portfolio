import { useState, useEffect } from "react";
import MenuModal from "./MenuModal";
import { Menu as MenuIcon } from "lucide-react";

const Menu = () => {
  const [showMenuModal, setShowMenuModal] = useState(false);
  const [hideMenuIcon, setHideMenuIcon] = useState(false);

  useEffect(() => {
    window.innerWidth < 650 ? setHideMenuIcon(true) : "";
  }, []);

  const handleMenuClick = () => {
    setShowMenuModal((prevState) => !prevState);
  };

  return (
    <div>
      <button
        // className={`${hideMenuIcon ? "hidden" : "block"}`}
        className="flex md:!hidden"
        onClick={handleMenuClick}
      >
        <MenuIcon />
      </button>

      <MenuModal showModal={showMenuModal} closeMenu={handleMenuClick} />
    </div>
  );
};

export default Menu;
