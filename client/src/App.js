import React, {useContext} from 'react';
import './index.css';
import Form from './form'
import Preview from './preview';
import { AppContext } from "./context";
import { jsPDF } from 'jspdf'
import './fonts/BeVietnamPro-ExtraLight-normal.js'
import './fonts/BeVietnamPro-Light-normal.js'
import './fonts/BeVietnamPro-Medium-normal.js'
import './fonts/BeVietnamPro-Regular-normal.js'
import './fonts/BeVietnamPro-SemiBold-normal.js'
import black from './svgs/black.svg'
import gray from './svgs/gray.svg'
import blue from './svgs/blue.svg'
import darkBlue from './svgs/darkBlue.svg'
import green from './svgs/green.svg'
import purple from './svgs/purple.svg'
import red from './svgs/red.svg'




const App = () => {
  const {
    handleConfirm,
    currentScreen,
    coordinates,
    name,
    jobTitle,
    details,
    contactInfo,
    skills,
    languages,
    experience,
    education,
    certifications,
    imageData,
    goBack,
    message,
    colors,
    changeCurrentScreen,
    handleColorClick
  } = useContext(AppContext)


  // jspdf function, distances are from coordinates state
  const download = () => {
    // ! width: 2245
    // ! r: 2.2631
    // ! heigh: 3179
    // ! r: 2.2655
    // ! ~r: 2.2643

    // ? img width: 785.2957
    // ? img height: 675.119

    const doc = new jsPDF({ hotfixes: ["px_scaling"], unit: "px", format: "a1" })
    
    doc.setFont("BeVietnamPro-SemiBold")
    doc.setDrawColor(0)
    doc.setFillColor(colors[0])
    doc.rect(0 ,0 , 783.505, 3179, "F")
    doc.rect(0, 0, 2245, 675.2196, "F")

    
    doc.setFillColor(colors[1])
    doc.setTextColor(colors[1]);
    if(imageData !== ""){
      doc.setFontSize(48 * 1.7)
      doc.text(name, 2245 * 0.37, 3179 * 0.06)

      doc.setFontSize(24 * 1.7)
      doc.text(jobTitle, 2245 * 0.37, 3179 * 0.08)

      doc.setFont("BeVietnamPro-Light")
      doc.setFontSize(16 * 1.7)
      doc.text(details.description1, 2245 * 0.37, 3179 * 0.170)
      doc.text(details.description2, 2245 * 0.37, 3179 * 0.182)
      doc.text(details.description3, 2245 * 0.37, 3179 * 0.194)
      doc.text(details.description4, 2245 * 0.37, 3179 * 0.206)
    } else {
      doc.setFontSize(48 * 1.7)
      doc.text(name, 2245 * 0.028, 3179 * 0.06)

      doc.setFontSize(24 * 1.7)
      doc.text(jobTitle, 2245 * 0.028, 3179 * 0.08)

      doc.setFont("BeVietnamPro-Light")
      doc.setFontSize(16 * 1.7)
      doc.text(details.description1, 2245 * 0.028, 3179 * 0.160)
      doc.text(details.description2, 2245 * 0.028, 3179 * 0.172)
      doc.text(details.description3, 2245 * 0.028, 3179 * 0.184)
      doc.text(details.description4, 2245 * 0.028, 3179 * 0.196)
    }



    if (coordinates.contactInfo_block){
      Object.keys(contactInfo).forEach((item) => {
        if (contactInfo[item].trim() !== "") {
          if (item[8] === "t") {
            doc.setFontSize(16 * 1.7)
            doc.setFont("BeVietnamPro-Regular")
            doc.text(`${contactInfo[item]}:`, 2245 * 0.028, 3179 * (coordinates[item] / 100))
          } else {
            doc.setFontSize(14.4 * 1.7)
            doc.setFont("BeVietnamPro-ExtraLight")
            doc.text(contactInfo[item], 2245 * 0.028, 3179 * (coordinates[item] / 100))
          }
        }
      })
    }

    if (coordinates.skills_block) {
      doc.setFont("BeVietnamPro-SemiBold")
      doc.setFontSize(30 * 1.7)
      doc.text("Skill Highlights", 2245 * 0.028, 3179 * (coordinates.skills_highlights / 99))
      doc.rect(2245 * 0.028, 3179 * (coordinates.skills_highlights_underline / 102) , 633.3525, 4.5262 , "F")
      doc.setFontSize(14.4 * 1.7)
      doc.setFont("BeVietnamPro-Regular")
      Object.keys(skills).forEach((item) => {
        if (skills[item].trim() !== "") {
          doc.text(`• ${skills[item]}`, 2245 * 0.028, 3179 * (coordinates[item] / 99))
        }
      })
    }
    

    if (coordinates.languages_block) {
      doc.setFont("BeVietnamPro-SemiBold")
      doc.setFontSize(30 * 1.7)
      doc.text("Languages", 2245 * 0.028, 3179 * (coordinates.languages_highlights / 99))
      doc.rect(2245 * 0.028, 3179 * (coordinates.languages_highlights_underline / 101), 633.3525, 4.5262, "F")
      doc.setFontSize(14.4 * 1.7)
      doc.setFont("BeVietnamPro-Regular")
      Object.keys(languages).forEach((item) => {
        if (languages[item].trim() !== "") {
          doc.text(`• ${languages[item]}`, 2245 * 0.028, 3179 * (coordinates[item] / 99))
        }
      })
    }

    doc.setTextColor("black");
    doc.setFillColor("black")

    if(coordinates.experience_block) {
      doc.setFont("BeVietnamPro-SemiBold")
      doc.setFontSize(30 * 1.7)
      doc.text("Experience", 2245 * 0.37, 3179 * (coordinates.experience_highlights / 95))
      doc.rect(2245 * 0.37, 3179 * (coordinates.experience_highlights_underline / 101), 1369.1755, 4.5262, "F")
      doc.setFontSize(14.4 * 1.7)
      Object.keys(experience).forEach((item) => {
        if (experience[item].trim() !== "") {
          if(item.length === 15){
            doc.setFontSize(11.2 * 1.7)
            doc.setFont("BeVietnamPro-Regular")
            doc.text(experience[item], 2245 * 0.87, 3179 * (coordinates[item] / 99))
          } else if (item.length === 11) {
            doc.setFontSize(19.2 * 1.7)
            doc.setFont("BeVietnamPro-SemiBold")
            doc.text(`• ${experience[item]}`, 2245 * 0.37, 3179 * (coordinates[item] / 99))
          } else {
            doc.setFontSize(16 * 1.7)
            doc.setFont("BeVietnamPro-Regular")
            doc.text(experience[item], 2245 * 0.37, 3179 * (coordinates[item] / 99))
          }
        } 
      })
    }


    if (coordinates.education_block) {
      doc.setFont("BeVietnamPro-SemiBold")
      doc.setFontSize(30 * 1.7)
      doc.text("Education", 2245 * 0.37, 3179 * (coordinates.education_highlights / 97.5))
      doc.rect(2245 * 0.37, 3179 * (coordinates.education_highlights_underline / 99.7), 1369.1755, 4.5262, "F")
      doc.setFontSize(14.4 * 1.7)
      Object.keys(education).forEach((item) => {
        if (education[item].trim() !== "") {
          if (item.length === 14) {
            doc.setFontSize(11.2 * 1.7)
            doc.setFont("BeVietnamPro-Regular")
            doc.text(education[item], 2245 * 0.87, 3179 * (coordinates[item] / 99))
          } else if (item.length === 10) {
            doc.setFontSize(19.2 * 1.7)
            doc.setFont("BeVietnamPro-SemiBold")
            doc.text(`• ${education[item]}`, 2245 * 0.37, 3179 * (coordinates[item] / 99))
          } else {
            doc.setFontSize(16 * 1.7)
            doc.setFont("BeVietnamPro-Regular")
            doc.text(education[item], 2245 * 0.37, 3179 * (coordinates[item] / 99))
          }
        }
      })
    }


    if (coordinates.certifications_block) {
      doc.setFont("BeVietnamPro-SemiBold")
      doc.setFontSize(30 * 1.7)
      doc.text("Certifications", 2245 * 0.37, 3179 * (coordinates.certifications_highlights / 98))
      doc.rect(2245 * 0.37, 3179 * (coordinates.certifications_highlights_underline / 99.7), 1369.1755, 4.5262, "F")
      doc.setFontSize(14.4 * 1.7)
      Object.keys(certifications).forEach((item) => {
        if (certifications[item].trim() !== "") {
            doc.setFontSize(16 * 1.7)
            doc.text(`• ${certifications[item]}`, 2245 * 0.37, 3179 * (coordinates[item] / 98))
        }
      })
    }
    if(imageData !== ""){
      doc.addImage(`data:image/jpg;base64,${imageData}`, "PNG", 0, 0, 783.6, 675.2)
    }
    doc.save("resume.pdf");
  }

  if(currentScreen === "welcome"){
    return <div id="welcome_container">
      <div id="welcome_title">
        Resume Builder
      </div>
      <button onClick={e => changeCurrentScreen("editing")} id="welcome_button">Continue</button>

      <a
        className="my_github"
        href="https://github.com/Hani-ALHamad"
        target="_blank"
        rel="noreferrer">
        My GitHub
      </a>
    </div>
  }

  if(currentScreen === "preview"){
    return <div className='main'>
      <div style={{color: "white"}}>Preview:</div>
      <Preview />
      <div style={{ color: "white" }}>Choose colors:</div>
      <div id="svgs">
        <div onClick={e => handleColorClick(e, "#CCCCCC", "black")} className='svg_container'><img className='svg_container_active' src={gray} alt='gray' /></div>
        <div onClick={e => handleColorClick(e, "black", "white")} className='svg_container'><img className='svg_container' src={black} alt='black' /></div>
        <div onClick={e => handleColorClick(e, "#2471A3", "white")} className='svg_container'><img className='svg_container' src={blue} alt='blue' /></div>
        <div onClick={e => handleColorClick(e, "#2E4053", "white")} className='svg_container'><img className='svg_container' src={darkBlue} alt='dark blue' /></div>
        <div onClick={e => handleColorClick(e, "#7D3C98", "white")} className='svg_container'><img className='svg_container' src={purple} alt='purple' /></div>
        <div onClick={e => handleColorClick(e, "#229954", "white")} className='svg_container'><img className='svg_container' src={green} alt='green' /></div>
        <div onClick={e => handleColorClick(e, "#A93226", "white")} className='svg_container'><img className='svg_container' src={red} alt='red' /></div>
      </div>
      <button onClick={goBack}>Go back to Editing</button>
      <button onClick={download}>Download as PDF</button>    
    </div>
  }

  return(
      <div className='main'>
        <div style={{ color: "white" }}>All fields are optional</div>
        <Form />
        {message === "" ?
          <button className='confirm' onClick={handleConfirm}>Confirm</button>
        :
          <div id="message">{message}</div>
        }
      
      </div>

  )
}

export default App;
