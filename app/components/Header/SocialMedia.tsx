import React from 'react';
import SvgGithub from '@tumor800/svg/SvgGithub';
import SvgLinkedIn from '@tumor800/svg/SvgLinkedIn';

const socialMediaList = [
  {
    name: 'LinkedIn',
    Icon: SvgLinkedIn,
    url: 'https://www.linkedin.com/in/johan-gideon/',
  },
  {
    name: 'Github',
    Icon: SvgGithub,
    url: 'https://github.com/tumor800',
  },
];

const SocialMedia = () => {
  return (
    <ul className="ml-1 mt-8 flex items-center">
      {socialMediaList.map(item => (
        <li className="mr-5 text-xs" key={item.name}>
          <a
            className="block text-slate-500 hover:text-slate-200 transition-all duration-200"
            href={item.url}
            target="_blank"
            rel="noreferrer"
          >
            <span className="sr-only">{item.name}</span>
            <item.Icon />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialMedia;
