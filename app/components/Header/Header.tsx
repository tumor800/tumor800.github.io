import React from 'react';
import Navigation from './Navigation';
import SocialMedia from './SocialMedia';

const Header = () => {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <Navigation />
      <SocialMedia />
    </header>
  );
};

export default Header;
