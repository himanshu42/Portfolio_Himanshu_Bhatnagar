import React from 'react'

const SidebarContent = ({ setShowSidebar }) => {

  const [visible, setVisible] = React.useState(true);

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
    </div>
  )
}

export default SidebarContent