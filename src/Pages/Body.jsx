import React from 'react'

const Body = () => {

  const [showWelcome, setShowWelcome] = React.useState(true)

  return (
    <div className='bg-[#2C3037] h-full text-[#AAB1BE] w-full text-[12px] p-4'>
      {
        showWelcome ?
          <>
            <p>Welcome to my portfolio!</p>
          </>
          :
          <>
            <p>body</p>
          </>
      }
    </div>
  )
}

export default Body