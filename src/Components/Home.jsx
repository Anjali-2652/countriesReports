import React, { useEffect, useState } from 'react'
import Card from './Card'

const Home = () => {

  const[search, setSearch] = useState("")

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
    <div className='bg-slate-900 h-[300px] pt-[100px] pb-[50px] w-full' >
      <div className='px-[100px] text-white '>
       
        <p className='  text-4xl font-bold pb-5'> Parallels of latitude and meridians of longitude</p>

        <div className='flex'>
        <p className='text-3xl font-bold ml-[100px] '>See the world...</p>
        <div className='relative'>
        <input onChange={handleSearch}
          
         value={search}
         className='ml-[200px] w-[600px] text-black  pl-4 mt-10 h-10 rounded-2xl' type="text" placeholder='Search country here.....' />
        </div>
        </div>
      </div>
      </div>
      <Card searchQuery={search} />
    </div>
  )
}

export default Home
