import React from 'react'
import { NavLink } from 'react-router'


export default function Header() {
  return (
    <div className="flex h-15 justify-between bg-linear-to-r from-gray-400">
      <div className="ml-3 font-caveat text-5xl font-bold text-[#1b3a52] content-center">
        <h1>NK.works</h1>
      </div>
      <div className="grid grid-flow-col gap-5 content-center text-xl max-md:hidden">
        <NavLink className="hover:text-cyan-700" to="/">Home</NavLink>
        <NavLink className="hover:text-cyan-700" to="/about">About</NavLink>
        <NavLink className="hover:text-cyan-700" to="/project">Project</NavLink>
        <NavLink className="hover:text-cyan-700" to="/contact">Contact me</NavLink>
      </div>
    </div>
  )
}
