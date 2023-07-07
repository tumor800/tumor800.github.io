import React from 'react';

const Navigation = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
        <a href="/">Johan Gideon</a>
      </h1>
      <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">Front-end Engineer</h2>
      <p className="mt-4 max-w-xs leading-normal text-slate-400">
        I develop captivating mobile and web applications as a front-end engineer, focusing on creating seamless user
        experiences.
      </p>
      {/* TODO: change lg:hidden to lg:block */}
      <nav className="nav hidden lg:hidden">
        <ul className="mt-16 w-max">
          <li>
            <a className="group flex items-center py-3 active" href="#about">
              <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
              <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                About
              </span>
            </a>
          </li>
          <li>
            <a className="group flex items-center py-3" href="#experience">
              <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
              <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                Experience
              </span>
            </a>
          </li>
          <li>
            <a className="group flex items-center py-3" href="#projects">
              <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
              <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                Projects
              </span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
