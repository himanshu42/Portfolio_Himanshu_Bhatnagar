import React from 'react'
import Welcome from './Welcome'
import { SiReact, SiNodedotjs } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import Enam from './Enam';
import Nexhrms from './Nexhrms';
import NexhrmsApplication from './NexhrmsApplication';
import SakhiChittorgarh from './SakhiChittorgarh';
import Noumi from './Noumi';
import Sangrang from './Sangrang';
import Resume from './Resume';

const Body = ({ selectedProject, setSelectedProject = () => {} }) => {

  const [icons, setIcons] = React.useState([
    {
      name: "eNAM – Govt._of_India_Project.jsx",
      icon: "react"
    },
    {
      name: "NEXHRMS.jsx",
      icon: "react"
    },
    {
      name: "NexHRMS_Application.jsx",
      icon: "react"
    },
    {
      name: "Sakhi_Chittorgarh.js",
      icon: "nodejs"
    },
    {
      name: "Noumi.html",
      icon: "html5"
    },
    {
      name: "Sangrang.jsx",
      icon: "react"
    },
    {
      name: "HIMANSHU_BHATNAGAR_17-02-26.pdf",
      icon: "pdf"
    }
  ]);

  const selectedIcon = icons.filter((icon) => icon.name == selectedProject)[0]?.icon || null;

  return (
    <div className='bg-[#2C3037] h-full text-[#AAB1BE] w-full text-[12px]'>
      {
        selectedProject ?
          <div className='h-full flex flex-col'>
            <div className='bg-[#262A2F]'>
              <div className='bg-[#2C3037] py-2 px-2 w-fit flex items-center gap-2'>
                {selectedIcon == "react" ? <SiReact className="text-cyan-400" /> : selectedIcon == "nodejs" ? <SiNodedotjs className="text-green-400" /> : selectedIcon == "html5" ? <FaHtml5 className="text-orange-400" /> : selectedIcon == "pdf" ? <i className="pi pi-file-pdf text-red-400" /> : <></>}
                <p> {selectedProject} <i className='pi pi-times pl-2 cursor-pointer' onClick={() => setSelectedProject(null)} /></p>
              </div>
            </div>
            <div className='flex-1 min-h-0'>
              {
                selectedProject == "eNAM – Govt._of_India_Project.jsx" && (
                  <>
                    <Enam />
                  </>
                )
              }
              {
                selectedProject == "NEXHRMS.jsx" && (
                  <>
                    <Nexhrms />
                  </>
                )
              }
              {
                selectedProject == "NexHRMS_Application.jsx" && (
                  <>
                    <NexhrmsApplication />
                  </>
                )
              }
              {
                selectedProject == "Sakhi_Chittorgarh.js" && (
                  <>
                    <SakhiChittorgarh />
                  </>
                )
              }
              {
                selectedProject == "Noumi.html" && (
                  <>
                    <Noumi />
                  </>
                )
              }
              {
                selectedProject == "Sangrang.jsx" && (
                  <>
                    <Sangrang />
                  </>
                )
              }
              {
                selectedProject == "HIMANSHU_BHATNAGAR_17-02-26.pdf" && (
                  <>
                    <Resume />
                  </>
                )
              }
            </div>
          </div>
          :
          <div className='flex items-center justify-center h-full w-full'>
            <Welcome />
          </div>
      }
    </div>
  )
}

export default Body
