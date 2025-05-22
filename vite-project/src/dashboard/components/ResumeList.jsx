import { Notebook } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const ResumeList = ({resume}) => {
  return (
    <Link to={"/dashboard/resume/"+resume.documentId+"/edit"}>
        <div className='border p-20 py-24 bg-secondary flex justify-center items-center rounded-[10px] h-[300px] hover:shadow-md transition-all scale-105 cursor-pointer border-dashed'><Notebook/></div>
        <h1 className='text-center mt-3  '>{resume.title}</h1>
    </Link>
  )
}

export default ResumeList