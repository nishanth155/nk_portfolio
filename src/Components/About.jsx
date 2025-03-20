import React, { useState } from 'react'
import springAiCert from '../assets/pdf/spring_ai_cert.pdf'
import edu_json from '../assets/data_json/Educations.json'


export default function About() {

  const skills = ["Java","Spring Boot","HTML","Tailwind CSS","ReactJS","Microservices","REST API","MySQL","AWS","Terraform","Junit","Mockito","IBM MQ","Jenkins","Spinnaker","Git","Temporal"];
  const certifications = [
    {
      id:1,
      name: 'PG Diploma in Software Development at IIIT-B',
      url: 'https://www.credential.net/3db9a5c3-449d-48d1-8573-fc79aa76afc2#acc.vzFW43Kb',
      issued: 'Oct-2024'
    },
    {
      id:2,
      name: 'AWS Cloud Practitioner',
      url: 'https://www.credly.com/badges/284a9a21-eed8-48c9-81f3-7cc5e5e8f9ac',
      issued: 'Aug-2022'
    },
    {
      id:3,
      name: 'Beginner to Spring AI on Udemy',
      url: {springAiCert},
      issued: 'Dec-2024'
    }
  ]

  const[active, setActive] = useState('1')

  const tabBar = [
    {id:'1',label:'About Me'},
    {id:'2',label:'Skills'},
    {id:'3',label:'Educations'},
    {id:'4',label:'Certificates'},
  ];

  const tabContent = {
    1:(
      <div className=''>
        <p className=' font-medium text-2xl p-5 text-gray-600 border-2 border-gray-300 rounded-2xl max-md:text-xl'>Dedicated Site Reliability Engineer and Backend Developer with over 5+ years of experience at a product-based company, with a strong foundation in Full stack development. 
        Self-taught and passionate about designing interactive and responsive web applications, harnessing a diverse skill set in programming languages and cloud technologies. 
        A quick learner with an insatiable curiosity for expanding knowledge and capabilities. 
        I focus on crafting software systems that are both highly efficient and user-friendly.</p>
      </div>
    ),
    2:(
      <div className=''>
        <ul  className='flex p-5 justify-center gap-8 flex-wrap font-kanit text-2xl text-gray-600 border-2 border-gray-300 rounded-2xl'>
          {skills.map(n=> <li key={n.id}>{n}</li>)}
        </ul> 
      </div>
    ),
    3:(
      <div className=''>
        {edu_json.map(edu=>
        <div key={edu.id} className=' mb-5 p-5 flex-col font-kanit text-xl text-gray-600 border-2 border-gray-300 rounded-2xl'>
          <p className='text-3xl text-gray-900'>{edu.college}</p>
          <p>{edu.degree}</p>
          <p>{edu.location}</p>
          <p>{edu.yoe}</p>
        </div>)}
      </div>
    ),
    4:(
      <div>
        <div>
          {certifications.map(cert=>
            <div key={cert.id} className='mb-5 flex justify-evenly font-kanit text-xl text-gray-600 '>
              <a href={cert.url}>
                <button className='ring-1 ring-slate-300 inset-shadow-sm inset-shadow-slate-400 w-200 h-15 max-md:size-40 rounded-full transition delay-50 duration-200 ease-in-out 
                hover:-translate-y-1 hover:scale-100 hover:shadow-2xl hover:inset-shadow-slate-50 shadow-gray-500'>
                  <p className='text-2xl max-md:text-lg text-gray-700'>Certified {cert.name}</p></button>
              </a>
            </div>
          )}
        </div>
      </div>
    )
  }

  return (
    <>
    <div className='flex flex-row m-20 min-md:h-150 place-items-center max-md:flex-col max-md:m-5'>
      <div className='flex flex-col max-md:hidden '>
      {tabBar.map(bar => (
          <button 
            key={bar.id} 
            className={`mb-3 font-bold w-90 h-15 text-2xl inset-shadow-sm rounded-2xl
            ${active === bar.id ? 'transition ease-in-out duration-200 inset-shadow-gray-50 bg-radial from-blue-300 to-blue-700 shadow-2xl shadow-gray-800 text-3xl' : 'bg-white bg-radial from-gray-100 from-40% to-gray-300 inset-shadow-gray-900 hover:text-3xl'}`}
            onClick={() => setActive(bar.id)}
          >
            {bar.label}
          </button>
        ))}
      </div>
      <div className='h-20 flex flex-row min-md:hidden overflow-x-scroll'>
      {tabBar.map(bar => (
          <button 
            key={bar.id} 
            className={`m-5 font-black text-xl text-nowrap
            ${active === bar.id ? 'text-red-400 border-b-2' : 'bg-white'}`}
            onClick={() => setActive(bar.id)}
          >
            {bar.label}
          </button>
        ))}
      </div>
      <div className='min-md:not-only:ml-10'>
        {tabContent[active]}
      </div>
    </div>
    </>
  )
}
