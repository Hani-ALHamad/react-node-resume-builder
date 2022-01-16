import React, { useContext, useEffect } from 'react';
import './index.css';
import LoadingPage from './loadingPage';
import { AppContext } from "./context";

const Middle = () => {
  const {
    experience,
    education,
    certifications,
    handleExperienceChange,
    handleEducationChange,
    handleCertificationsChange
  } = useContext(AppContext)

  return(
    <><div id="experience_highlights" className='highlights'>Experience</div>
      <div id="experience_highlights_underline" className='underline' />
      <input value={experience.experienceDate1} onChange={e => handleExperienceChange(e.target)} placeholder='mm/yyyy - mm/yyyy' className='experienceDate' id="experienceDate1" maxLength="17" type="text" autoComplete='off' />
      <input value={experience.experience1} onChange={e => handleExperienceChange(e.target)} placeholder='Job' className='experience' id="experience1" type="text" autoComplete='off' />
      <input value={experience.experienceDetails1} onChange={e => handleExperienceChange(e.target)} placeholder='Job details' className='experienceDetails' id="experienceDetails1" type="text" autoComplete='off' />
      <input value={experience.experienceDate2} onChange={e => handleExperienceChange(e.target)} placeholder='mm/yyyy - mm/yyyy' className='experienceDate' id="experienceDate2" maxLength="17" type="text" autoComplete='off' />
      <input value={experience.experience2} onChange={e => handleExperienceChange(e.target)} placeholder='Job' className='experience' id="experience2" type="text" autoComplete='off' />
      <input value={experience.experienceDetails2} onChange={e => handleExperienceChange(e.target)} placeholder='Job details' className='experienceDetails' id="experienceDetails2" type="text" autoComplete='off' />
      <input value={experience.experienceDate3} onChange={e => handleExperienceChange(e.target)} placeholder='mm/yyyy - mm/yyyy' className='experienceDate' id="experienceDate3" maxLength="17" type="text" autoComplete='off' />
      <input value={experience.experience3} onChange={e => handleExperienceChange(e.target)} placeholder='Job' className='experience' id="experience3" type="text" autoComplete='off' />
      <input value={experience.experienceDetails3} onChange={e => handleExperienceChange(e.target)} placeholder='Job details' className='experienceDetails' id="experienceDetails3" type="text" autoComplete='off' />
      <input value={experience.experienceDate4} onChange={e => handleExperienceChange(e.target)} placeholder='mm/yyyy - mm/yyyy' className='experienceDate' id="experienceDate4" maxLength="17" type="text" autoComplete='off' />
      <input value={experience.experience4} onChange={e => handleExperienceChange(e.target)} placeholder='Job' className='experience' id="experience4" type="text" autoComplete='off' />
      <input value={experience.experienceDetails4} onChange={e => handleExperienceChange(e.target)} placeholder='Job details' className='experienceDetails' id="experienceDetails4" type="text" autoComplete='off' />
      <input value={experience.experienceDate5} onChange={e => handleExperienceChange(e.target)} placeholder='mm/yyyy - mm/yyyy' className='experienceDate' id="experienceDate5" maxLength="17" type="text" autoComplete='off' />
      <input value={experience.experience5} onChange={e => handleExperienceChange(e.target)} placeholder='Job' className='experience' id="experience5" type="text" autoComplete='off' />
      <input value={experience.experienceDetails5} onChange={e => handleExperienceChange(e.target)} placeholder='Job details' className='experienceDetails' id="experienceDetails5" type="text" autoComplete='off' />

      <div id="education_highlights" className='highlights'>Education</div>
      <div id="education_highlights_underline" className='underline' />
      <input value={education.educationDate1} onChange={e => handleEducationChange(e.target)} placeholder='mm/yyyy - mm/yyyy' className='experienceDate' id="educationDate1" maxLength="17" type="text" autoComplete='off' />
      <input value={education.education1} onChange={e => handleEducationChange(e.target)} placeholder='Education' className='experience' id="education1" type="text" autoComplete='off' />
      <input value={education.educationDetails1} onChange={e => handleEducationChange(e.target)} placeholder='Education details' className='experienceDetails' id="educationDetails1" type="text" autoComplete='off' />
      <input value={education.educationDate2} onChange={e => handleEducationChange(e.target)} placeholder='mm/yyyy - mm/yyyy' className='experienceDate' id="educationDate2" maxLength="17" type="text" autoComplete='off' />
      <input value={education.education2} onChange={e => handleEducationChange(e.target)} placeholder='Education' className='experience' id="education2" type="text" autoComplete='off' />
      <input value={education.educationDetails2} onChange={e => handleEducationChange(e.target)} placeholder='Education details' className='experienceDetails' id="educationDetails2" type="text" autoComplete='off' />
      <div id="certification_highlights" className='highlights'>Certifications</div>
      <div id="certification_highlights_underline" className='underline' />
      <input value={certifications.certificate1} onChange={e => handleCertificationsChange(e.target)} placeholder='Certificate' className='experience' id="certificate1" type="text" autoComplete='off' />
      <input value={certifications.certificate2} onChange={e => handleCertificationsChange(e.target)} placeholder='Certificate' className='experience' id="certificate2" type="text" autoComplete='off' />
      <input value={certifications.certificate3} onChange={e => handleCertificationsChange(e.target)} placeholder='Certificate' className='experience' id="certificate3" type="text" autoComplete='off' />
      <input value={certifications.certificate4} onChange={e => handleCertificationsChange(e.target)} placeholder='Certificate' className='experience' id="certificate4" type="text" autoComplete='off' />
      <input value={certifications.certificate5} onChange={e => handleCertificationsChange(e.target)} placeholder='Certificate' className='experience' id="certificate5" type="text" autoComplete='off' />
      <input value={certifications.certificate6} onChange={e => handleCertificationsChange(e.target)} placeholder='Certificate' className='experience' id="certificate6" type="text" autoComplete='off' />
</>
  )
}

export default Middle