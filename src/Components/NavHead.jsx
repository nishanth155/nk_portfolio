import React from 'react'
import { Link } from 'react-scroll'


export default function Header() {
  return (
    <div className="sticky top-0 flex h-20 justify-between bg-gray-500 p-5 transition ease-in-out duration-200">
      <div className="ml-3 font-caveat text-5xl font-bold text-[#1b3a52] content-center">
        <h1>NK.works</h1>
      </div>
      <div className="grid grid-flow-col gap-5 content-center text-xl max-md:hidden">
        <Link duration={500} offset={-100} to="home" className="hover:text-cyan-700" >Home</Link>
        <Link duration={500} offset={-100} to="about" className="hover:text-cyan-700" >About</Link>
        <Link duration={500} to="project" className="hover:text-cyan-700" >Project</Link>
        <Link duration={500} to="contact" className="hover:text-cyan-700" >Contact me</Link>
      </div>
    </div>
  )
}
