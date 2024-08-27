import { useState, useEffect } from 'react';

const ChevronDown: React.FC = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;
      setScrollPosition(currentPosition);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`flex justify-center duration-300   ${scrollPosition > 40 ? 'opacity-0' : 'opacity-100'} `}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="3rem"
        height="3rem"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-chevron-down animate-bounce  -z-10"
      >
        <path d="m6 9 6 6 6-6"></path>
      </svg>
    </div>
  );
};

export default ChevronDown;
