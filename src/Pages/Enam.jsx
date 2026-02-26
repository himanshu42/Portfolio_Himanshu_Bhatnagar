import React from 'react';

const lines = [
  'eNAM - Government Digital Agriculture Platform',
  '',
  'Tech Stack: TypeScript, Tailwind CSS',
  '',
  'Project Summary:',
  'Designed and delivered the complete Weighment and Warehouse Module for digital commodity handling.',
  '',
  'Key Workflows Built:',
  '- Catalog management for commodities and configurations.',
  '- Equipment onboarding for operational readiness.',
  '- Service request lifecycle from creation to fulfillment.',
  '- Booking history tracking for clear audit trails.',
  '',
  'Core Features Implemented:',
  '- Real-time capacity tracking to avoid overbooking and delays.',
  '- Weighment certificate generation for verified transaction records.',
  '- Role-based dashboards for service providers and platform users.',
  '',
  'Outcome:',
  'Operations were streamlined at scale with better visibility, faster turnaround, and reliable digital records.',
];

const Enam = () => {
  return (
    <div className="h-full w-full bg-[#2C3037] text-[#D4D4D4] overflow-auto">
      <div className="min-h-full w-full px-2 py-3 md:px-4 md:py-4">
        {lines.map((text, index) => (
          <div key={index} className="flex items-start font-mono text-[12px] leading-6 md:text-[13px]">
            <span className="w-10 select-none pr-3 text-right text-[#6E7681] md:w-12">
              {index + 1}
            </span>
            <p className="flex-1 whitespace-pre-wrap text-[#D4D4D4]">{text || ' '}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Enam;
