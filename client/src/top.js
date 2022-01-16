import React, { useContext } from 'react';
import './index.css';
import { AppContext } from "./context";


const Top = () => {
  const {
    name,
    jobTitle,
    details,
    handleNameChange,
    handleJobChange,
    handleDetailsChange,
    changeImagePath
  } = useContext(AppContext)

  return(
    <>
      <div id='image_upload_label'>
        Add an image
      </div>
      <div id='image_upload_label_2'>
        JPG | JPEG | PNG | GIF
      </div>
      <div id='image_upload_label_3'>
        Max size: 5 MB
      </div>
      <form
        id='image_upload_form'
        encType="multipart/form-data"
        translate="no"
      >
        <input
          onChange={e => changeImagePath(e.target.files[0])}
          type="file"
          name="image"
          id="image_upload_input"
          accept="image/png, image/jpeg, image/jpg, image/gif"
        />
      </form>
      
      <input value={name} onChange={e => handleNameChange(e.target)} placeholder='Name' id="name" type="text" autoComplete='off' />
      <input value={jobTitle} onChange={e => handleJobChange(e.target)} placeholder='Job title' id="jobTitle" type="text" autoComplete='off' />
      <input value={details.description1} onChange={e => handleDetailsChange(e.target)} placeholder='Description' id="description1" className='experienceDetails' autoComplete='off' />
      <input value={details.description2} onChange={e => handleDetailsChange(e.target)} placeholder='Description' id="description2" className='experienceDetails' autoComplete='off' />
      <input value={details.description3} onChange={e => handleDetailsChange(e.target)} placeholder='Description' id="description3" className='experienceDetails' autoComplete='off' />
      <input value={details.description4} onChange={e => handleDetailsChange(e.target)} placeholder='Description' id="description4" className='experienceDetails' autoComplete='off' />
    </>
  )
}

export default Top