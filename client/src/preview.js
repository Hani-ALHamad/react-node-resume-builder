import React, { useContext, useEffect } from 'react';
import './index.css';
import LoadingPage from './loadingPage';
import { AppContext } from "./context";

const Preview = () => {
  const {
    name,
    jobTitle,
    details,
    contactInfo,
    skills,
    languages,
    experience,
    education,
    certifications,
    coordinates,
    imageData
  } = useContext(AppContext)
  console.log(imageData)

  return(
    <div className='form_box'>
      <div className='left_side_bg' />
      <div className='top_side_bg' />
      {imageData !== "" ?
        <>
        <img alt="image" src={`data:image/jpg;base64,${imageData}`} />
        <div className='p_name'>{name}</div>
        <div className='p_jobTitle'>{jobTitle}</div>
        <div id="p_details1" className='p_details'>{details.description1}</div>
        <div id="p_details2" className='p_details'>{details.description2}</div>
        <div id="p_details3" className='p_details'>{details.description3}</div>
        <div id="p_details4" className='p_details'>{details.description4}</div>
        {/* <div className='p_contanct'>{contactInfo.contact1t}</div> */}
      </>
      :
        <>
          <div className='p_name' style={{left: "2.8%"}}>{name}</div>
          <div className='p_jobTitle' style={{ left: "2.8%" }}>{jobTitle}</div>
          <div id="p_details1" className='p_details' style={{ left: "2.8%" }}>{details.description1}</div>
          <div id="p_details2" className='p_details' style={{ left: "2.8%" }}>{details.description2}</div>
          <div id="p_details3" className='p_details' style={{ left: "2.8%" }}>{details.description3}</div>
          <div id="p_details4" className='p_details' style={{ left: "2.8%" }}>{details.description4}</div>
          {/* <div className='p_contanct' style={{ left: "2.8%" }}>{contactInfo.contact1t}</div> */}
        </>
      }


      {coordinates.contactInfo_block ? <>{Object.keys(contactInfo).map((item) => (
      contactInfo[item].trim() !== "" ?  <div key={item} className={item[8] === "t" ? 'p_contact' : 'p_contact_light'} style={{ top: `${coordinates[item]}%` }}>{contactInfo[item]}</div> : <></>))}</> : <></>}
      
      
      {coordinates.skills_block ? <>
        <div id="skill_highlights" style={{ top: `${coordinates.skills_highlights}%` }} className='highlights'>Skill Highlights</div>
        <div id="skill_highlights_underline" style={{ top: `${coordinates.skills_highlights_underline}%` }} className='underline' />
      {Object.keys(skills).map((item) => (
        skills[item].trim() !== "" ?<div key={item} className='p_contact_light' style={{ top: `${coordinates[item]}%` }}>{skills[item]}</div> : <></>))}</> : <></>}
    
    
        {coordinates.languages_block ? <>
        <div id="language_highlights" style={{ top: `${coordinates.languages_highlights}%` }} className='highlights'>Languages</div>
        <div id="language_highlights_underline" style={{ top: `${coordinates.languages_highlights_underline}%` }} className='underline' />
        {Object.keys(languages).map((item) => (
        languages[item].trim() !== "" ?<div key={item} className='p_contact_light' style={{ top: `${coordinates[item]}%` }}>{languages[item]}</div> : <></>))}</> : <></>}


        {coordinates.experience_block ? <>
        <div id="experience_highlights" style={{ top: `${coordinates.experience_highlights}%` }} className='highlights'>Experience</div>
        <div id="experience_highlights_underline" style={{ top: `${coordinates.experience_highlights_underline}%` }} className='underline' />
        {Object.keys(experience).map((item) => (
        experience[item].trim() !== "" ? <div key={item} className={item.length === 15 ? "p_experience_date" : item.length === 11 ? "p_experience" : "p_experience_details"} style={{ top: `${coordinates[item]}%` }}>{experience[item]}</div> : <></>))}</> : <></>}


      {coordinates.education_block ? <>
        <div id="education_highlights" style={{ top: `${coordinates.education_highlights}%` }} className='highlights'>Education</div>
        <div id="education_highlights_underline" style={{ top: `${coordinates.education_highlights_underline}%` }} className='underline' />
      {Object.keys(education).map((item) => (
        education[item].trim() !== "" ? <div key={item} className={item.length === 14 ? "p_experience_date" : item.length === 10 ? "p_experience" : "p_experience_details"} style={{ top: `${coordinates[item]}%` }}>{education[item]}</div> : <></>))}</> : <></>}
    
    
        {coordinates.certifications_block ? <>
        <div id="certification_highlights" style={{ top: `${coordinates.certifications_highlights}%` }} className='highlights'>Certifications</div>
        <div id="certification_highlights_underline" style={{ top: `${coordinates.certifications_highlights_underline}%` }} className='underline' />
        {Object.keys(certifications).map((item) => (
        certifications[item].trim() !== "" ? <div key={item} className="p_experience" style={{ top: `${coordinates[item]}%` }}>{certifications[item]}</div> : <></>))}</> : <></>}

    </div>
    
  )

}

export default Preview