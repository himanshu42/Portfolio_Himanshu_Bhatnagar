import React, { useState } from 'react'
import Logo from '../../assets/Logo/logo.svg'

const Header = () => {
    return (
        <div className='!text-[12px] w-full bg-[#282c34]'>
            {/* Main Wrapper: changed to flex for better control than 3-column grid on mobile */}
            <div className="grid grid-cols-3 items-center p-2 gap-2">

                {/* Col-1: Menu Items */}
                <div className='flex items-center text-[#9da5b4] text-[15px] overflow-hidden'>
                    <img src={Logo} className='h-[20px] w-[20px] min-w-[20px]' />

                    {/* Desktop Menu: Hidden on small screens */}
                    <div className='hidden lg:flex items-center ml-2'>
                        {['File', 'Edit', 'Selection', 'View', 'Go', 'Run', 'Terminal', 'Help'].map((item) => (
                            <p key={item} className='hover:bg-[#383b41] text-[14px] px-2 rounded-md cursor-pointer whitespace-nowrap'>
                                {item}
                            </p>
                        ))}
                    </div>

                    {/* Mobile Menu Icon: Visible only on small screens */}
                    {/* <div className='lg:hidden ml-2 hover:bg-[#383b41] p-1 rounded-md cursor-pointer'>
                        <i className='pi pi-bars text-[18px]' />
                    </div> */}
                </div>

                {/* Col-2: Search & Navigation */}
                <div className='text-[#9da5b4] flex items-center gap-2 flex-grow max-w-[600px]'>
                    {/* Navigation Arrows: Hidden on very small screens */}
                    <div className='hidden sm:flex items-center gap-1'>
                        <div className='hover:bg-[#383b41] rounded-md px-2 h-[22px] flex items-center justify-center cursor-pointer'>
                            <i className='pi pi-arrow-left text-[12px]' />
                        </div>
                        <div className='hover:bg-[#383b41] rounded-md px-2 h-[22px] flex items-center justify-center cursor-pointer'>
                            <i className='pi pi-arrow-right text-[12px]' />
                        </div>
                    </div>

                    {/* Search Bar: Takes up available space */}
                    <div className='bg-[#363A40] hover:bg-[#3E4148] border border-[#494D57] flex items-center justify-center gap-2 rounded-sm cursor-pointer flex-grow py-[2px] min-w-[100px]'>
                        <i className='pi pi-search text-[10px]' />
                        <p className='truncate'>Portfolio</p>
                    </div>

                    <div className='hover:bg-[#383b41] rounded-md px-2 h-[22px] flex items-center justify-center cursor-pointer'>
                        <i className='pi pi-send text-[12px]' />
                    </div>
                </div>

                {/* Col-3: Window Controls */}
                <div className='text-[#9da5b4] flex items-center justify-end'>
                    <div className='flex items-center gap-1 sm:gap-3'>
                        <div className='hover:bg-[#383b41] rounded-md px-1 sm:px-2 h-[22px] flex items-center justify-center cursor-pointer'>
                            <i className='pi pi-minus text-[10px]' />
                        </div>
                        <div className='hover:bg-[#383b41] rounded-md px-1 sm:px-2 h-[22px] flex items-center justify-center cursor-pointer'>
                            <i className='pi pi-window-minimize text-[10px]' />
                        </div>
                        <div className='hover:bg-red-600 hover:text-white rounded-md px-1 sm:px-2 h-[22px] flex items-center justify-center cursor-pointer'>
                            <i className='pi pi-times text-[10px]' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header