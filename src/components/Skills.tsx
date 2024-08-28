import { useEffect, useState } from 'react';

import CssLogo from '../assets/logos/CssLogo';
import TailwindLogo from '../assets/logos/TailwindLogo';
import JavaScriptLogo from '../assets/logos/JavaScriptLogo';
import TypeScriptLogo from '../assets/logos/TypeScriptLogo';
import VueLogo from '../assets/logos/VueLogo';
import ReactLogo from '../assets/logos/ReactLogo';
import NextLogo from '../assets/logos/NextLogo';
import FirebaseLogo from '../assets/logos/FirebaseLogo';
import NodeLogo from '../assets/logos/NodeLogo';
import AstroLogo from '../assets/logos/AstroLogo';

const skills = [
  { name: 'CSS', logo: CssLogo },
  { name: 'Tailwind', logo: TailwindLogo },
  { name: 'JavaScript', logo: JavaScriptLogo },
  { name: 'TypeScript', logo: TypeScriptLogo },
  { name: 'Node', logo: NodeLogo },
  { name: 'Vue', logo: VueLogo },
  { name: 'React', logo: ReactLogo },
  { name: 'Next', logo: NextLogo },
  { name: 'Astro', logo: AstroLogo },
  { name: 'Firebase', logo: FirebaseLogo },
];

const Skills: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-5 xl:grid-cols-10  gap-8 ">
      {skills.map((skill, index) => (
        <div
          key={index}
          className={` ${
            isVisible ? 'fly-in' : ''
          } flex flex-col flex-1 items-center opacity-0`}
          style={{ animationDelay: `${0 + index * 0.1}s` }}
        >
          <skill.logo />
          <div>{skill.name}</div>
        </div>
      ))}
    </div>
  );
};
export default Skills;
