import React from 'react'

const Header = () => {
  return (
    <div className='bg-slate-200'>
      <div className='flex justify-between px-[100px]  py-1 items-center'>
        <div  className='flex items-center'>
            <div className=''><img className='h-[100px] w-[100px] rounded-full p-0' src="src/assets/logo.webp"/></div>
            <div className='font-bold text-4xl'><span className='text-blue-700'>Country</span><span className='text-blue-900'>Reports</span></div>
        </div>
        <div className='text-2xl'>Countries</div>
      </div>
    </div>
  )
}

export default Header
