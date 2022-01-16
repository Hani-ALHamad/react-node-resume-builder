import React, { useContext, useEffect } from 'react';
import './index.css';
import LoadingPage from './loadingPage';
import Top from './top';
import Side from './side';
import Middle from './middle';
import { AppContext } from "./context";

const Form = () => {
  const {
    handleConfirm,

  } = useContext(AppContext)


  return (
      <div className='form_box'>
        <div className='left_side_bg' />
        <div className='top_side_bg' />
        {/* <img alt="s" src='https://cdn.akamai.steamstatic.com/steamcommunity/public/images/avatars/cb/cb7f9c624bb70e7073ebe2107b0cb69fa5a1988c_full.jpg' /> */}
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