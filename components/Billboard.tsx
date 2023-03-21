import React from 'react'

const Billboard = () => {
  return (
    <div className='relative h-[56.25vw'>
        <video className='w-full h-[56.25vw] object-cover brightness-[60%] ' autoPlay muted loop poster='https://nafisbd.com/logo.png' src="http://10.16.100.213/iccftps13/iccftps13sasd4/Movies/English/Ant%20Man%20and%20the%20Wasp%20Quantumania%20(2023)%201080p%20DVDRip.mp4"></video>
        <div className='absolute top-[30%] md:top-[40%] ml-4 md:ml-16'>
            <p className='text-white text-1xl md:text-5xl h-full w-[50%] lg:text-6xl font-bold drop-shadow-xl'>Hello</p>
        </div>
    </div>
  )
}

export default Billboard