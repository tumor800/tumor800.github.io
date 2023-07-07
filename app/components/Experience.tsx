import React from 'react';
import Title from './Title';

const experiences = [
  {
    companyName: 'Traveloka',
    companyUrl: 'https://www.traveloka.com/',
    duration: '2018 — May 2023',
    lastPosition: 'Associate Front-end Lead',
    previousPositions: ['React Native Engineer'],
    description:
      'Accomplished front-end engineer with a proven track record of success. Highlights include developing and launching the Gold product in a mobile application, implementing a RESTful API for internal web tools, and improved code maintainability and reduce complexity. Adept at mentoring junior developers on React Native best practices. Successfully developed and launched the Insurance Standalone mobile and web applications. Known for collaborating effectively with cross-functional teams.',
    technologies: ['React Native', 'React', 'NextJS', 'JavaScript', 'TypeScript'],
  },
  {
    companyName: 'Goers App',
    companyUrl: 'https://www.goersapp.com/',
    duration: '2017 — Mar 2018',
    lastPosition: 'Web Engineer (Part-time)',
    previousPositions: [],
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.`,
    technologies: ['React', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    companyName: 'Xtremax',
    companyUrl: 'https://www.xtremax.com/',
    duration: 'Jun — Aug 2017',
    lastPosition: 'Backend Engineer (Intern)',
    previousPositions: [],
    description:
      'As a front-end engineer, I performed website maintenance tasks, including bug fixing, content updates, and creating new features. I analyzed and resolved client-reported bugs, designed SQL Server databases, managed .NET data, and developed ASP.NET user interfaces. I also implemented future-ready website features.',
    technologies: ['C#', '.NET', 'Sitefinity', 'Sitecore', 'SQL Server', 'HTML', 'CSS'],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      <Title title="Experience" />
      <div>
        <ol className="group/list">
          {experiences.map(item => (
            <li key={item.companyName} className="mb-12">
              <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                  {item.duration}
                </header>
                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-snug text-slate-200">
                    <div>
                      <a
                        className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-j4 focus-visible:text-teal-300  group/link text-base"
                        href={item.companyUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                        <span>{`${item.lastPosition} · ${item.companyName}`}</span>
                      </a>
                    </div>
                    {item.previousPositions.map(prevPos => (
                      <div key={prevPos}>
                        <div className="text-slate-500" aria-hidden="true">
                          {prevPos}
                        </div>
                      </div>
                    ))}
                  </h3>
                  <p className="mt-2 text-sm leading-normal">{item.description}</p>
                  <ul className="mt-2 flex flex-wrap">
                    {item.technologies.map(tech => (
                      <li key={tech} className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-full bg-j4/10 px-3 py-1 text-xs font-medium leading-5 text-j4 ">
                          {tech}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ol>
        {/* TODO: url to resume */}
        {/* <div className="mt-12">
          <a
            className="inline-flex items-center font-medium leading-tight text-slate-200 font-semibold text-slate-200 group"
            href="/resume.pdf"
          >
            <span>
              <span className="border-b border-transparent pb-px transition group-hover:border-j4 motion-reduce:transition-none">
                View Full{' '}
              </span>
              <span className="whitespace-nowrap">
                <span className="border-b border-transparent pb-px transition group-hover:border-j4 motion-reduce:transition-none">
                  Résumé
                </span>
              </span>
            </span>
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default Experience;
