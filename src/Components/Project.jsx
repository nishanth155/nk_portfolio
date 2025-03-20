import React from 'react'
import project from '../assets/data_json/Projects.json'

export default function Project() {
  return (
    <div className=''>
      <p className='m-5 flex justify-center font-bold text-3xl text-gray-800'>My Projects</p>
      <div className='m-10 flex justify-center gap-10 max-md:flex-col max-md:m-5'>
        {project.map(proj=>
        <div key={proj.id} className='flex-col text-xl bg-radial from-blue-300 to-blue-700 text-white p-10 shadow-2xl shadow-gray-600 rounded-2xl'>
          <p className=' mb-2 font-mono text-3xl text-gray-900'>{proj.name}</p>
          <p>{proj.description}</p>
          <div className='m-3 flex flex-wrap gap-5'>
            {proj.techStack.map(tech=>
            <p key={tech.id} className='inset-shadow-sm inset-shadow-gray-500 rounded-2xl font-kanit text-sm p-1.5 bg-white text-gray-600'>{tech}</p>)}
            </div> 
            <p>{proj.link}</p>
        </div>
        )}
      </div>
    </div>
  )
}
