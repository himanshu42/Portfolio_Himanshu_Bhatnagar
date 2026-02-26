import React from 'react';

const lines = [
  { text: 'NEXHRMS - SaaS-Based HRMS' },
  { text: '' },
  { label: 'Project Link:', href: 'https://nexhrms.com/' },
  { text: 'Tech Stack: React.js, Next.js, Mantine UI' },
  { text: '' },
  { text: 'Project Summary:' },
  { text: 'Developed a multi-tenant SaaS HRMS platform to manage employee lifecycle, attendance, payroll, and compliance.' },
  { text: '' },
  { text: 'What I Built:' },
  { text: '- Scalable and responsive admin dashboards for real-time workforce monitoring and operational control.' },
  { text: '- Role-based access control (RBAC) for secure, structured user management.' },
  { text: '- Reusable component architecture that reduced development time by around 30%.' },
  { text: '- REST API integrations for smooth data flow across HR, payroll, and attendance modules.' },
  { text: '' },
  { text: 'Outcome:' },
  { text: 'Delivered a reliable HRMS product with faster development velocity, better module interoperability, and secure access.' },
];

const Nexhrms = () => {
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

export default Nexhrms;
