import React, { useState } from 'react'

const Sidebar = () => {

  const [selected,setSelected] = useState("file")

  return (
    <div className="bg-[#282c34] h-full relative text-[22px]">
        <div className={selected == "file" ? "border-l-2 px-3 py-2 cursor-pointer text-[#D6D9DF]" :'border-l-2 border-[#282c34] px-3 py-2 cursor-pointer text-[#676970]'} onClick={()=>setSelected("file")}>
            <i className='pi pi-file' />
        </div>
        <div className={selected == "search" ? "border-l-2 px-3 py-2 cursor-pointer text-[#D6D9DF]" :'border-l-2 border-[#282c34] px-3 py-2 cursor-pointer text-[#676970]'} onClick={()=>setSelected("search")}>
            <i className='pi pi-search' />
        </div>
        <div className={selected == "git" ? "border-l-2 px-3 py-2 cursor-pointer text-[#D6D9DF]" :'border-l-2 border-[#282c34] px-3 py-2 cursor-pointer text-[#676970]'} onClick={()=>setSelected("git")}>
            <i className='pi pi-sitemap' />
        </div>
        <div className={selected == "debug" ? "border-l-2 px-3 py-2 cursor-pointer text-[#D6D9DF]" :'border-l-2 border-[#282c34] px-3 py-2 cursor-pointer text-[#676970]'} onClick={()=>setSelected("debug")}>
            <i className='pi pi-play' />
        </div>
        <div className={selected == "extension" ? "border-l-2 px-3 py-2 cursor-pointer text-[#D6D9DF]" :'border-l-2 border-[#282c34] px-3 py-2 cursor-pointer text-[#676970]'} onClick={()=>setSelected("extension")}>
            <i className='pi pi-objects-column' />
        </div>
        {/* Bottom Icons */}
        <div className='absolute bottom-0'>
          <div className="px-3 py-2 cursor-pointer text-[#676970] hover:text-[#D6D9DF]">
              <i className='pi pi-user' />
          </div>
          <div className="px-3 py-2 cursor-pointer text-[#676970] hover:text-[#D6D9DF]">
              <i className='pi pi-cog' />
          </div>
        </div>
    </div>
  )
}

export default Sidebar