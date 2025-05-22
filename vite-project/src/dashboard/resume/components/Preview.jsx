import React, { useContext } from 'react'
import { FormPreviewContext } from '../../../context/FormPreviewContext'
import PersonaldeatlPreview from './Preview/PersonaldeatlPreview'
import SummaryPreview from './Preview/SummaryPreview'
import ExperiencePreview from './Preview/ExperiencePreview'
import EducationPreview from './Preview/EducationPreview'
import SkillsPreview from './Preview/SkillsPreview'

const Preview = () => {
  const { resumeInfo, setResume } = useContext(FormPreviewContext)

  return (
    <div className='shadow-lg h-full p-10 border-t-[20px] ' style={{borderColor:resumeInfo?.themeColor}}>
      {/* Personal Detail  */}
      <PersonaldeatlPreview resumeInfo={resumeInfo} />
      {/* Summary */}
      <SummaryPreview resumeInfo={resumeInfo}/>
      {/* Professional Experience */}
      <ExperiencePreview resumeInfo={resumeInfo}/ >
      {/* Education */}
      <EducationPreview resumeInfo={resumeInfo}/>
      {/* Skills */}
      <SkillsPreview resumeInfo={resumeInfo}/>
    </div>
  )
}

export default Preview