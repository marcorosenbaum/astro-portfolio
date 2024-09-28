import { useState, useEffect } from 'react';

const LanguageSelector: React.FC = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('english');

  useEffect(() => {
    const preferredLanguage = localStorage.getItem('preferredLanguage');
    if (preferredLanguage && preferredLanguage !== selectedLanguage) {
      setSelectedLanguage(preferredLanguage);
      if (
        preferredLanguage === 'german' &&
        window.location.pathname !== '/de/'
      ) {
        window.location.href = '/de/';
      } else if (
        preferredLanguage === 'english' &&
        window.location.pathname !== '/'
      ) {
        window.location.href = '/';
      }
    }
  }, [selectedLanguage]);

  const handleLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newLanguage = event.target.value;
    localStorage.setItem('preferredLanguage', newLanguage);
    setSelectedLanguage(newLanguage);
    if (newLanguage === 'german') {
      window.location.href = '/de/';
    } else if (newLanguage === 'english') {
      window.location.href = '/';
    }
  };

  return (
    <div className="flex gap-4  text-3xl ">
      {/* <label htmlFor="language-selection">Language</label> */}
      <select
        name="language"
        id="language-selection"
        value={selectedLanguage}
        onChange={handleLanguageChange}
        className="bg-transparent border-none cursor-pointer"
      >
        <option value="german">🇩🇪</option>
        <option value="english">🇬🇧</option>
      </select>
    </div>
  );
};

export default LanguageSelector;
