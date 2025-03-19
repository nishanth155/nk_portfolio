import React from 'react'
import profile from '../assets/pnk.png'
import resume from '../assets/pdf/NISHANTHKUMAR_P_2025.pdf'
import download from '../assets/download_icon.svg'
export default function Home() {

  const roles = ["Frontend Developer","Backend Developer","Software Developer"];

  return (
    <div className='m-8 grid grid-flow-col max-md:grid-flow-row'>
      <div className='inline-block place-items-center'>
        <img src={profile} alt="profile" className='bg-amber-400 rounded-t-full rounded-l-full object-cover size-120 max-md:size-50 max-md:rounded-full'/>
        <a href={resume}>
        <button className='mt-5 rounded-4xl inset-shadow-sm inset-shadow-gray-900 ring-1 ring-gray-300 text-gray-600 w-60 h-15 transition delay-50 duration-200 ease-in-out 
        hover:-translate-y-1 hover:scale-110 hover:shadow-2xl hover:inset-shadow-gray-50 shadow-gray-500 font-medium text-3xl'>
        <img src={download} alt='download' className='absolute ml-5 size-10 animate-bounce'/>Resume</button> </a>
      </div>
      <div className="grid grid-flow-row min-md:ml-10 max-md:mt-5">
        <div className='grid content-center'>
          <p className='font-pacifico text-[25px]/10 max-md:text-lg'>Hello,<p className='font-urbanist text-5xl max-md:text-2xl/10'>I'm Nishanthkumar</p></p>
          <p className='font-kanit text-7xl/25 max-md:text-2xl max-md:text-nowrap'><span className='font-thin'>I'm </span>Software Development</p>
          <p className='font-light text-2xl/5 text-gray-500 max-md:text-lg/5'>Development is a journey. Every bug fixed is a lesson learned</p>
        </div>
        <div className=''>
          <p className='mt-10 flex justify-center font-pacifico text-3xl'>Work Ethics</p>
          <ul className='flex font-kanit text-2xl/15 justify-center gap-x-20 flex-wrap max-md:text-lg/10'>
            <li>Full stack Development</li>
            <li>Cloud Infrastructure</li>
            <li>Problem Solving</li>
            <li>Adaptability & Flexibility</li>
            <li>Decision-making</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
