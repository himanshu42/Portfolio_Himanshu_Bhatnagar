import React from 'react'
import Welcome from './Welcome'

const Body = () => {

  const [showWelcome, setShowWelcome] = React.useState(true)

  return (
    <div className='bg-[#2C3037] h-full text-[#AAB1BE] w-full text-[12px] p-4'>
      {
        showWelcome ?
          <div className='flex items-center justify-center h-full w-full'>
            <Welcome />
          </div>
          :
          <>
            <p>body</p>
          </>
      }
    </div>
  )
}

export default Body