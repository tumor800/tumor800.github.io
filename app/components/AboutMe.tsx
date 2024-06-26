import React from 'react';
import Title from './Title';

const AboutMe = () => {
  return (
    <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      <Title title="About" />
      <div>
        <p className="mb-4">
          Back in 2014, I discovered my passion for coding in College. Since then, I&apos;ve had the opportunity to work
          with various organizations, including a{' '}
          <a
            className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
            href="https://www.xtremax.com/"
            target="_blank"
            rel="noreferrer"
          >
            consultancy
          </a>
          , a{' '}
          <a
            className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
            href="https://www.goersapp.com/"
            target="_blank"
            rel="noreferrer"
          >
            ticketing platform
          </a>
          , an{' '}
          <a
            className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
            href="https://www.traveloka.com/"
            target="_blank"
            rel="noreferrer"
          >
            online travel agency
          </a>
          , a{' '}
          <a
            className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
            href="https://pintu.co.id/"
            target="_blank"
            rel="noreferrer"
          >
            cryptocurrency exchange platform
          </a>
          ,and a{' '}
          <a
            className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
            href="https://www.m1.com.sg/"
            target="_blank"
            rel="noreferrer"
          >
            telco company
          </a>
          . These experiences have enriched my skills and allowed me to build software tailored to different industries.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
