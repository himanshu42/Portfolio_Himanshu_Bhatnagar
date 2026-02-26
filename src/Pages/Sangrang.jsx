import React from 'react';

const lines = [
  { text: 'SANGRANG - Handcrafted Rajasthani Bags Catalog Platform' },
  { text: '' },
  { label: 'Project Link:', href: 'https://sangrang.vercel.app/' },
  { text: 'Tech Stack: React.js, Tailwind CSS, Vercel' },
  { text: '' },
  { text: 'Project Summary:' },
  { text: 'Developed a production-ready product catalog website for a Jaipur-based handcrafted bag brand to showcase traditional Rajasthani collections.' },
  { text: '' },
  { text: 'What I Built:' },
  { text: '- Responsive and visually rich UI focused on cultural aesthetics and product presentation.' },
  { text: '- Dynamic product gallery with blurred background previews for enhanced user experience.' },
  { text: '- Direct WhatsApp inquiry workflow to connect customers with the brand instantly.' },
  { text: '' },
  { text: 'Outcome:' },
  { text: 'Improved product discoverability and inquiry conversion through a culturally aligned, mobile-friendly catalog experience.' },
];

const Sangrang = () => {
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

export default Sangrang;
