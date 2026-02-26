import React from 'react';

const lines = [
  { text: 'NexHRMS - HRMS Mobile Application' },
  { text: '' },
  { label: 'Project Link:', href: 'https://play.google.com/store/apps/details?id=com.EmoloyeeERP&hl=en_IN' },
  { text: 'Tech Stack: React Native, React Native Paper' },
  { text: '' },
  { text: 'Project Summary:' },
  { text: 'Built the companion mobile app for the NEXHRMS platform to support employee self-service and field workforce management.' },
  { text: '' },
  { text: 'What I Built:' },
  { text: '- GPS-based attendance with geo-fencing and radius validation for real-time location verification.' },
  { text: '- Leave management, shift tracking, task updates, and performance visibility features.' },
  { text: '- Continuous background location tracking even after app termination for transport workforce operations.' },
  { text: '- Permission-based access handling for secure use of location, media, and device capabilities.' },
  { text: '' },
  { text: 'Outcome:' },
  { text: 'Enabled secure and reliable on-the-go workforce operations with accurate attendance and real-time field visibility.' },
];

const NexhrmsApplication = () => {
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

export default NexhrmsApplication;
