import { ChevronDown as ChevronDownIcon } from "lucide-react";
import { useEffect, useState } from "react";

const ChevronDown = () => {
  const [showChevronDown, setShowChevronDown] = useState(true);
  useEffect(() => {
    const chevronDown = document.getElementById("chevron-down");
    const handleScroll = () => {
      if (chevronDown) {
        if (window.scrollY > 0) {
          setShowChevronDown(false);
        } else {
          setShowChevronDown(true);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <ChevronDownIcon
      size="3rem"
      id="chevron-down"
      className={`mx-auto animate-bounce duration-300 ${showChevronDown ? "opacity-100" : "opacity-0"}`}
    />
  );
};

export default ChevronDown;
