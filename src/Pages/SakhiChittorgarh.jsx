import React from 'react';

const lines = [
  { text: 'Sakhi Chittorgarh - NGO Digital Platform (Backend)' },
  { text: '' },
  { label: 'Project Link:', href: 'https://play.google.com/store/apps/details?id=com.yuvika_project.sakhi_chittorgarh&hl=en_IN' },
  { text: 'Tech Stack: Node.js, AWS' },
  { text: '' },
  { text: 'Project Summary:' },
  { text: 'Developed secure REST APIs for a government-supported women empowerment platform.' },
  { text: '' },
  { text: 'What I Built:' },
  { text: '- Monthly Progress Report (MPR) submission workflows for structured reporting.' },
  { text: '- Excel export functionality for operational reporting and data sharing.' },
  { text: '- Optimized database operations for reliable large-scale data handling.' },
  { text: '' },
  { text: 'Outcome:' },
  { text: 'Improved backend reliability, reporting efficiency, and data scalability for NGO program operations.' },
];

const SakhiChittorgarh = () => {
  return (
    <div className="h-full w-full bg-[#2C3037] text-[#D4D4D4] overflow-auto">
      <div className="min-h-full w-full px-2 py-3 md:px-4 md:py-4">
        {lines.map((line, index) => (
          <div key={index} className="flex items-start font-mono text-[12px] leading-6 md:text-[13px]">
            <span className="w-10 select-none pr-3 text-right text-[#6E7681] md:w-12">
              {index + 1}
            </span>
            <p className="flex-1 whitespace-pre-wrap text-[#D4D4D4]">
              {line.href ? (
                <>
                  {line.label}{' '}
                  <a
                    href={line.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-[#4FC1FF] underline hover:text-[#76D6FF]"
                  >
                    LINK
                  </a>
                </>
              ) : (
                line.text || ' '
              )}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SakhiChittorgarh;
