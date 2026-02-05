import React from 'react'

const Footer = () => {
  return (
    <div className='text-[12px] w-full bg-[#282c34] text-[#9da5b4]'>
        <div className='flex items-center justify-between'>
            <div className='flex items-center justify-center'>
                <div className='hover:bg-[#383b41] h-[22px] flex items-center justify-center cursor-pointer'>
                    <i className='pi pi-wave-pulse p-2'/>
                </div>
                <div className='hover:bg-[#383b41] h-[22px] flex items-center justify-center cursor-pointer p-2 gap-2'>
                    <i className='pi pi-times-circle'/> 0 <i className='pi pi-exclamation-triangle'/> 1
                </div>
            </div>
            <div className='flex items-center justify-center gap-3'>
                <div className='hover:bg-[#383b41] h-[22px] flex items-center justify-center cursor-pointer p-2'>
                    <p>UTF-8</p>
                </div>
                <div className='hover:bg-[#383b41] h-[22px] flex items-center justify-center cursor-pointer p-2'>
                    <p>LF</p>
                </div>
                <div className='hover:bg-[#383b41] h-[22px] flex items-center justify-center cursor-pointer p-2'>
                    <p>{'{  }'} Javascript JSX</p>
                </div>
                <div className='hover:bg-[#383b41] h-[22px] flex items-center justify-center cursor-pointer p-2'>
                    <i className='pi pi-bell'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer