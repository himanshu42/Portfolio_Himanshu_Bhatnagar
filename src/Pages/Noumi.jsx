import React from 'react';

const lines = [
  { text: 'Noumi - Freelance Web Application' },
  { text: '' },
  { text: 'Tech Stack: JavaScript, Bootstrap, jQuery' },
  { text: '' },
  { text: 'Project Summary:' },
  { text: 'Developed a responsive user interface for a bill aggregation platform focused on paperless and eco-friendly operations.' },
  { text: '' },
  { text: 'Outcome:' },
  { text: 'Delivered a clean, accessible, and responsive experience to support digital billing and sustainable workflows.' },
];

const Noumi = () => {
  return (
    <div className="h-full w-full bg-[#2C3037] text-[#D4D4D4] overflow-auto">
      <div className="min-h-full w-full px-2 py-3 md:px-4 md:py-4">
        {lines.map((line, index) => (
          <div key={index} className="flex items-start font-mono text-[12px] leading-6 md:text-[13px]">
            <span className="w-10 select-none pr-3 text-right text-[#6E7681] md:w-12">
              {index + 1}
            </span>
            <p className="flex-1 whitespace-pre-wrap text-[#D4D4D4]">{line.text || ' '}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Noumi;
