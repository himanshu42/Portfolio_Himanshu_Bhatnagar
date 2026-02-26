import React from 'react';
import resumePdf from '../assets/resume/HIMANSHU_BHATNAGAR_17-02-26.pdf';

const Resume = () => {
  return (
    <div className="h-full w-full bg-[#2C3037] p-2 md:p-3">
      <iframe
        src={`${resumePdf}#view=FitH`}
        title="Himanshu Bhatnagar Resume"
        className="h-full w-full rounded-sm border border-[#3A3F47] bg-white"
      />
    </div>
  );
};

export default Resume;
