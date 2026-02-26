import React from 'react'
import { SiReact, SiNodedotjs } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";

const SidebarContent = ({
  setShowSidebar = () => {},
  setSelectedProject = () => {},
  closeOnSelect = false,
}) => {

  const [visible, setVisible] = React.useState(true);
  const [resumeVisible, setResumeVisible] = React.useState(true);
  const handleSelect = (projectName) => {
    setSelectedProject(projectName);
    if (closeOnSelect) {
      setShowSidebar(false);
    }
  };

  return (
    <div className='bg-[#262A2F] h-screen text-[#AAB1BE] md:w-full lg:md:w-80 w-full text-[12px]'>
      <div className="block lg:hidden text-[24px] top-4 left-4 cursor-pointer pt-3 pl-2">
      <i className='pi pi-times' onClick={() => setShowSidebar(false)} />
      </div>
      <div className='flex items-center justify-between px-4 py-2'>
        <p>EXPLORER</p>
        <i className='pi pi-ellipsis-h hover:bg-[#383b41] px-2 py-1 rounded-md cursor-pointer' />
      </div>
      <div className='bg-[#2C3037]'>
        <div className='flex items-center justify-between px-2 py-1 cursor-pointer' onClick={() => setVisible(!visible)}>
          <div className='flex items-center font-bold'>
            <i className={visible == false ? 'pi pi-angle-right text-[14px]' : 'pi pi-angle-down text-[14px]'} />
            <p>PROJECTS</p>
          </div>
          <div className={visible == false ? 'hidden' : 'block'}>
            <div className='flex items-center gap-0'>
              <i className='pi pi-file-plus hover:bg-[#383b41] px-1 py-1 rounded-md' />
              <i className='pi pi-folder-plus hover:bg-[#383b41] px-1 py-1 rounded-md' />
              <i className='pi pi-refresh hover:bg-[#383b41] px-1 py-1 rounded-md' />
              <i className='pi pi-minus-circle hover:bg-[#383b41] px-1 py-1 rounded-md' />
            </div>
          </div>
        </div>
      </div>
      {
        visible && (
          <div className=''>
            <div className='flex items-center gap-2 cursor-pointer hover:bg-[#353B44] px-2 pl-4 py-1' onClick={() => handleSelect("eNAM – Govt._of_India_Project.jsx")}>
              <SiReact className="text-cyan-400" />
              <p>eNAM – Govt._of_India_Project.jsx</p>
            </div>
            <div className='flex items-center gap-2 cursor-pointer hover:bg-[#353B44] px-2 pl-4 py-1' onClick={() => handleSelect("NEXHRMS.jsx")}>
              <SiReact className="text-cyan-400" />
              <p>NEXHRMS.jsx</p>
            </div>
            <div className='flex items-center gap-2 cursor-pointer hover:bg-[#353B44] px-2 pl-4 py-1' onClick={() => handleSelect("NexHRMS_Application.jsx")}>
              <SiReact className="text-cyan-400" />
              <p>NexHRMS_Application.jsx</p>
            </div>
            <div className='flex items-center gap-2 cursor-pointer hover:bg-[#353B44] px-2 pl-4 py-1' onClick={() => handleSelect("Sakhi_Chittorgarh.js")}>
              <SiNodedotjs className="text-green-500" />
              <p>Sakhi_Chittorgarh.js</p>
            </div>
            <div className='flex items-center gap-2 cursor-pointer hover:bg-[#353B44] px-2 pl-4 py-1' onClick={() => handleSelect("Sangrang.jsx")}>
              <SiReact className="text-cyan-400" />
              <p>Sangrang.jsx</p>
            </div>
            <div className='flex items-center gap-2 cursor-pointer hover:bg-[#353B44] px-2 pl-4 py-1' onClick={() => handleSelect("Noumi.html")}>
              <FaHtml5 className="text-orange-500" />
              <p>Noumi.html</p>
            </div>
          </div>
        )
      }
      <div className='bg-[#2C3037]'>
        <div className='flex items-center justify-between px-2 py-1 cursor-pointer' onClick={() => setResumeVisible(!resumeVisible)}>
          <div className='flex items-center font-bold'>
            <i className={resumeVisible == false ? 'pi pi-angle-right text-[14px]' : 'pi pi-angle-down text-[14px]'} />
            <p>Resume</p>
          </div>
          <div className={resumeVisible == false ? 'hidden' : 'block'}>
            <div className='flex items-center gap-0'>
              <i className='pi pi-file-plus hover:bg-[#383b41] px-1 py-1 rounded-md' />
              <i className='pi pi-folder-plus hover:bg-[#383b41] px-1 py-1 rounded-md' />
              <i className='pi pi-refresh hover:bg-[#383b41] px-1 py-1 rounded-md' />
              <i className='pi pi-minus-circle hover:bg-[#383b41] px-1 py-1 rounded-md' />
            </div>
          </div>
        </div>
      </div>
      {
        resumeVisible && (
          <div>
            <div className='flex items-center gap-2 cursor-pointer hover:bg-[#353B44] px-2 pl-4 py-1' onClick={() => handleSelect("HIMANSHU_BHATNAGAR_17-02-26.pdf")}>
              <i className='pi pi-file-pdf text-red-400' />
              <p>HIMANSHU_BHATNAGAR_17-02-26.pdf</p>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default SidebarContent
