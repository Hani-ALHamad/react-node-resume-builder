import React, { useContext, useEffect } from 'react';
import './index.css';
import LoadingPage from './loadingPage';
import { AppContext } from "./context";

const Side = () => {
  const {
    contactInfo,
    skills,
    languages,
    handleContactChange,
    handleSkillsChange,
    handleLanguagesChange
  } = useContext(AppContext)

  return(
    <>
      <input value={contactInfo.contact1t} onChange={e => handleContactChange(e.target)} maxLength='22' placeholder='Contact method' className='contactTitle' id="contact1t" type="text" autoComplete='off' />
      <input value={contactInfo.contact1d} onChange={e => handleContactChange(e.target)} className='contactData' id="contact1d" type="text" autoComplete='off' />
      <input value={contactInfo.contact2t} onChange={e => handleContactChange(e.target)} maxLength='22' placeholder='Contact method' className='contactTitle' id="contact2t" type="text" autoComplete='off' />
      <input value={contactInfo.contact2d} onChange={e => handleContactChange(e.target)} className='contactData' id="contact2d" type="text" autoComplete='off' />
      <input value={contactInfo.contact3t} onChange={e => handleContactChange(e.target)} maxLength='22' placeholder='Contact method' className='contactTitle' id="contact3t" type="text" autoComplete='off' />
      <input value={contactInfo.contact3d} onChange={e => handleContactChange(e.target)} className='contactData' id="contact3d" type="text" autoComplete='off' />
      <input value={contactInfo.contact4t} onChange={e => handleContactChange(e.target)} maxLength='22' placeholder='Contact method' className='contactTitle' id="contact4t" type="text" autoComplete='off' />
      <input value={contactInfo.contact4d} onChange={e => handleContactChange(e.target)} className='contactData' id="contact4d" type="text" autoComplete='off' />
      <input value={contactInfo.contact5t} onChange={e => handleContactChange(e.target)} maxLength='22' placeholder='Contact method' className='contactTitle' id="contact5t" type="text" autoComplete='off' />
      <input value={contactInfo.contact5d} onChange={e => handleContactChange(e.target)} className='contactData' id="contact5d" type="text" autoComplete='off' />
      <input value={contactInfo.contact6t} onChange={e => handleContactChange(e.target)} maxLength='22' placeholder='Contact method' className='contactTitle' id="contact6t" type="text" autoComplete='off' />
      <input value={contactInfo.contact6d} onChange={e => handleContactChange(e.target)} className='contactData' id="contact6d" type="text" autoComplete='off' />
      <input value={contactInfo.contact7t} onChange={e => handleContactChange(e.target)} maxLength='22' placeholder='Contact method' className='contactTitle' id="contact7t" type="text" autoComplete='off' />
      <input value={contactInfo.contact7d} onChange={e => handleContactChange(e.target)} className='contactData' id="contact7d" type="text" autoComplete='off' />

      <div id="skill_highlights" className='highlights'>Skill Highlights</div>
      <div id="skill_highlights_underline" className='underline' />
      <input value={skills.skill1} onChange={e => handleSkillsChange(e.target)} placeholder='Skill' className='contactData' id="skill1" type="text" autoComplete='off' />
      <input value={skills.skill2} onChange={e => handleSkillsChange(e.target)} placeholder='Skill' className='contactData' id="skill2" type="text" autoComplete='off' />
      <input value={skills.skill3} onChange={e => handleSkillsChange(e.target)} placeholder='Skill' className='contactData' id="skill3" type="text" autoComplete='off' />
      <input value={skills.skill4} onChange={e => handleSkillsChange(e.target)} placeholder='Skill' className='contactData' id="skill4" type="text" autoComplete='off' />
      <input value={skills.skill5} onChange={e => handleSkillsChange(e.target)} placeholder='Skill' className='contactData' id="skill5" type="text" autoComplete='off' />
      <input value={skills.skill6} onChange={e => handleSkillsChange(e.target)} placeholder='Skill' className='contactData' id="skill6" type="text" autoComplete='off' />
      <input value={skills.skill7} onChange={e => handleSkillsChange(e.target)} placeholder='Skill' className='contactData' id="skill7" type="text" autoComplete='off' />
      <input value={skills.skill8} onChange={e => handleSkillsChange(e.target)} placeholder='Skill' className='contactData' id="skill8" type="text" autoComplete='off' />
      <input value={skills.skill9} onChange={e => handleSkillsChange(e.target)} placeholder='Skill' className='contactData' id="skill9" type="text" autoComplete='off' />
      <input value={skills.skill10} onChange={e => handleSkillsChange(e.target)} placeholder='Skill' className='contactData' id="skill10" type="text" autoComplete='off' />

      <div id="language_highlights" className='highlights'>Languages</div>
      <div id="language_highlights_underline" className='underline' />
      <input value={languages.language1} onChange={e => handleLanguagesChange(e.target)} placeholder='Your native language' className='contactData' id="language1" type="text" autoComplete='off' />
      <input value={languages.language2} onChange={e => handleLanguagesChange(e.target)} placeholder='Your 2nd language' className='contactData' id="language2" type="text" autoComplete='off' />
      <input value={languages.language3} onChange={e => handleLanguagesChange(e.target)} placeholder='Your 3rd language' className='contactData' id="language3" type="text" autoComplete='off' />
      <input value={languages.language4} onChange={e => handleLanguagesChange(e.target)} placeholder='Your 4th language' className='contactData' id="language4" type="text" autoComplete='off' />
      <input value={languages.language5} onChange={e => handleLanguagesChange(e.target)} placeholder='Your 5th language' className='contactData' id="language5" type="text" autoComplete='off' />
</>
  )
}

export default Side