import React from 'react';

const Footer = () => {
  return (
    <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
      <p>
        Inspired from{' '}
        <a
          href="https://brittanychiang.com/"
          className="font-medium text-slate-400 hover:text-j4 focus-visible:text-j4"
          target="_blank"
          rel="noreferrer"
        >
          brittanychiang.com
        </a>
        . Coded in{' '}
        <a
          href="https://code.visualstudio.com/"
          className="font-medium text-slate-400 hover:text-j4 focus-visible:text-j4"
          target="_blank"
          rel="noreferrer"
        >
          Visual Studio Code
        </a>
        . Built with{' '}
        <a
          href="https://nextjs.org/"
          className="font-medium text-slate-400 hover:text-j4 focus-visible:text-j4"
          target="_blank"
          rel="noreferrer"
        >
          Next.js{' '}
        </a>
        and{' '}
        <a
          href="https://tailwindcss.com/"
          className="font-medium text-slate-400 hover:text-j4 focus-visible:text-j4"
          target="_blank"
          rel="noreferrer"
        >
          Tailwind CSS
        </a>
        , deployed with{' '}
        <a
          href="https://pages.github.com/"
          className="font-medium text-slate-400 hover:text-j4 focus-visible:text-j4"
          target="_blank"
          rel="noreferrer"
        >
          Github.io
        </a>
        . The{' '}
        <a
          href="https://fonts.google.com/specimen/Montserrat"
          className="font-medium text-slate-400 hover:text-j4 focus-visible:text-j4"
          target="_blank"
          rel="noreferrer"
        >
          Montserrat
        </a>{' '}
        typeface is used for all text. Icons are from{' '}
        <a
          href="https://iconmonstr.com/"
          className="font-medium text-slate-400 hover:text-j4 focus-visible:text-j4"
          target="_blank"
          rel="noreferrer"
        >
          Iconmonstr
        </a>
        .
      </p>
    </footer>
  );
};

export default Footer;
