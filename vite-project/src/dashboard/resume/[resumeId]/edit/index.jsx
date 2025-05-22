import React, { useEffect, useState } from 'react'
import Preview from '../../components/Preview';
import Formdata from '../../components/Formdata';
import { FormPreviewContext } from '../../../../context/FormPreviewContext';
import { dummy } from '../../../../data/dummy';

const EditResume = () => {
const [resumeInfo , setResume] = useState();

useEffect(()=>{
    setResume(dummy)
  }, [])

  return (
    <FormPreviewContext.Provider value={{resumeInfo,setResume}}>
    <div className='grid grid-cols-1 md:grid-cols-2 gap-10 p-5'>
      <Formdata/> 
      <Preview/>
       </div>
    </FormPreviewContext.Provider>
  )
}

export default EditResume