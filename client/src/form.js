import React from 'react';
import './index.css';
import Top from './top';
import Side from './side';
import Middle from './middle';

const Form = () => {

  return (
      <div className='form_box'>
        <div className='left_side_bg' />
        <div className='top_side_bg' />
        <span id="nameSpan"></span>
        <span id="jobSpan"></span>
        <span id="detailsSpan"></span>
        <span id="contactSpan" />
        <span id="experienceSpan" />
        <span id="experienceDetailsSpan" />
        <Top />
        <Side />
        <Middle />
        <button className='confirm'>Confirm</button>
      </div>
  )
}

export default Form