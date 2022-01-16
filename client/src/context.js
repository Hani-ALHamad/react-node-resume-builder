import React, {useState, useEffect, createContext} from 'react'
import axios from 'axios'

export const AppContext = createContext()

const Context = ({children}) => {
  const [currentScreen, changeCurrentScreen] = useState("welcome")
  const [imagePath, changeImagePath] = useState("")
  const [imageData, changeImageData] = useState("")
  const [message, changeMessage] = useState("")
  const [colors, changeColors] = useState(["#CCCCCC", "black"])
  const [name, changeName] = useState("")
  const [jobTitle, changeJobTitle] = useState("")
  const [details, changeDetails] = useState({
    description1: "",
    description2: "",
    description3: "",
    description4: ""
  })
  const [contactInfo, changeContactInfo] = useState({
    contact1t: "",
    contact1d: "",
    contact2t: "",
    contact2d: "",
    contact3t: "",
    contact3d: "",
    contact4t: "",
    contact4d: "",
    contact5t: "",
    contact5d: "",
    contact6t: "",
    contact6d: "",
    contact7t: "",
    contact7d: "",
  })
  const [skills, changeSkills] = useState({
    skill1: "",
    skill2: "",
    skill3: "",
    skill4: "",
    skill5: "",
    skill6: "",
    skill7: "",
    skill8: "",
    skill9: "",
    skill10: ""
  })
  const [languages, changeLanguages] = useState({
    language1: "",
    language2: "",
    language3: "",
    language4: "",
    language5: "",
  })
  const [experience, changeExperience] = useState({
    experienceDate1:"",
    experience1:"",
    experienceDetails1:"",
    experienceDate2: "",
    experience2: "",
    experienceDetails2: "",
    experienceDate3: "",
    experience3: "",
    experienceDetails3: "",
    experienceDate4: "",
    experience4: "",
    experienceDetails4: "",
    experienceDate5: "",
    experience5: "",
    experienceDetails5: "",
  })
  const [education, changeEducation] = useState({
    educationDate1:"",
    education1:"",
    educationDetails1:"",
    educationDate2: "",
    education2: "",
    educationDetails2: "",
  })
  const [certifications, changeCertifications] = useState({
    certificate1: "",
    certificate2: "",
    certificate3: "",
    certificate4: "",
    certificate5: "",
    certificate6: ""
  })
  const [coordinates, changeCoordinates] = useState({})

  // functions for handling the changes on form
  const handleNameChange = (e) => {
    document.getElementById("nameSpan").innerHTML = e.value
    if(document.getElementById("nameSpan").clientWidth + 20 < 600 || e.value.length < name.length) {
      changeName(e.value)
    }
  }

  const handleJobChange = (e) => {
    document.getElementById("jobSpan").innerHTML = e.value
    if (document.getElementById("jobSpan").clientWidth < 430 || e.value.length < jobTitle.length) {
      changeJobTitle(e.value)
  }
}

const handleDetailsChange = (e) => {
  document.getElementById("detailsSpan").innerHTML = e.value
  if (document.getElementById("detailsSpan").clientWidth < 600 || e.value.length < details[`${e.id}`].length){
    details[`${e.id}`] = e.value
    const temp = {...details}
    changeDetails(temp)
  }
} 

const handleContactChange = (e) => {
  if(e.className === "contactTitle") {
    contactInfo[`${e.id}`] = e.value
    const temp = { ...contactInfo }
    changeContactInfo(temp)
  } else {
    document.getElementById("contactSpan").innerHTML = e.value
    if (document.getElementById("contactSpan").clientWidth < 275 || e.value.length < contactInfo[`${e.id}`].length) {
      contactInfo[`${e.id}`] = e.value
      const temp = { ...contactInfo }
      changeContactInfo(temp)
    }
  }
}

  const handleSkillsChange = (e) => {
      document.getElementById("contactSpan").innerHTML = e.value
      if (document.getElementById("contactSpan").clientWidth < 275 || e.value.length < skills[`${e.id}`].length) {
        skills[`${e.id}`] = e.value
        const temp = { ...skills }
        changeSkills(temp)
      }
  }

  const handleLanguagesChange = (e) => {
    document.getElementById("contactSpan").innerHTML = e.value
    if (document.getElementById("contactSpan").clientWidth < 275 || e.value.length < languages[`${e.id}`].length) {
      languages[`${e.id}`] = e.value
      const temp = { ...languages }
      changeLanguages(temp)
    }
  }

  const handleExperienceChange = (e) => {
    if(e.className === 'experience') {
      document.getElementById("experienceSpan").innerHTML = e.value
      if (document.getElementById("experienceSpan").clientWidth < 600 || e.value.length < experience[`${e.id}`].length) {
        experience[`${e.id}`] = e.value
        const temp = { ...experience }
        changeExperience(temp)
      }
    } else {
      document.getElementById("experienceDetailsSpan").innerHTML = e.value
      if (document.getElementById("experienceDetailsSpan").clientWidth < 600 || e.value.length < experience[`${e.id}`].length) {
        experience[`${e.id}`] = e.value
        const temp = { ...experience }
        changeExperience(temp)
      }
    }
  }

  const handleEducationChange = (e) => {
    if (e.className === 'experience') {
      document.getElementById("experienceSpan").innerHTML = e.value
      if (document.getElementById("experienceSpan").clientWidth < 600 || e.value.length < education[`${e.id}`].length) {
        education[`${e.id}`] = e.value
        const temp = { ...education }
        changeEducation(temp)
      }
    } else {
      document.getElementById("experienceDetailsSpan").innerHTML = e.value
      if (document.getElementById("experienceDetailsSpan").clientWidth < 600 || e.value.length < education[`${e.id}`].length) {
        education[`${e.id}`] = e.value
        const temp = { ...education }
        changeEducation(temp)
      }
    }
  }

  const handleCertificationsChange = (e) => {
    document.getElementById("experienceSpan").innerHTML = e.value
    if (document.getElementById("experienceSpan").clientWidth < 600 || e.value.length < certifications[`${e.id}`].length) {
      certifications[`${e.id}`] = e.value
      const temp = { ...certifications }
      changeCertifications(temp)
    }
  }

  // calculations for top% for each existing field in the form & uploading the image to multer (backend)
  const handleConfirm = () => {
    coordinates.contactInfo_block = false
    coordinates.skills_block = false
    coordinates.languages_block = false
    coordinates.experience_block = false
    coordinates.education_block = false
    coordinates.certifications_block = false
    coordinates.current_top = 21.5

    Object.values(contactInfo).forEach((item) => {
      if(item.trim() !== ""){
        coordinates.contactInfo_block = true
      }
    })

    Object.values(skills).forEach((item) => {
      if (item.trim() !== "") {
        coordinates.skills_block = true
      }
    })

    Object.values(languages).forEach((item) => {
      if (item.trim() !== "") {
        coordinates.languages_block = true
      }
    })

    Object.values(experience).forEach((item) => {
      if (item.trim() !== "") {
        coordinates.experience_block = true
      }
    })

    Object.values(education).forEach((item) => {
      if (item.trim() !== "") {
        coordinates.education_block = true
      }
    })

    Object.values(certifications).forEach((item) => {
      if (item.trim() !== "") {
        coordinates.certifications_block = true
      }
    })

    

    if(coordinates.contactInfo_block){
      Object.keys(contactInfo).forEach((item) => {
        if (contactInfo[item].trim() !== "") {
          if (item[8] === "t") {
            coordinates.current_top = coordinates.current_top + 3
            coordinates[item] = coordinates.current_top
          } else {
            coordinates.current_top = coordinates.current_top + 2
            coordinates[item] = coordinates.current_top
          }
        }
      })
    }

    if (coordinates.skills_block) {
      coordinates.skills_highlights = coordinates.current_top + 3.6
      coordinates.skills_highlights_underline = coordinates.current_top + 6.6
      coordinates.current_top = coordinates.current_top + 5.6
      Object.keys(skills).forEach((item) => {
        if (skills[item].trim() !== "") {
            coordinates.current_top = coordinates.current_top + 2
            coordinates[item] = coordinates.current_top
        }
      })
    }

    if (coordinates.languages_block) {
      coordinates.languages_highlights = coordinates.current_top + 3.6
      coordinates.languages_highlights_underline = coordinates.current_top + 6.6
      coordinates.current_top = coordinates.current_top + 5.6
      Object.keys(languages).forEach((item) => {
        if (languages[item].trim() !== "") {
          coordinates.current_top = coordinates.current_top + 2
          coordinates[item] = coordinates.current_top
        }
      })
    }

    coordinates.current_top = 20

    if (coordinates.experience_block) {
      coordinates.experience_highlights = coordinates.current_top + 3.6
      coordinates.experience_highlights_underline = coordinates.current_top + 6.6
      coordinates.current_top = coordinates.current_top + 5.6
      Object.keys(experience).forEach((item) => {
        if (experience[item].trim() !== "") {
          if (item.length === 15) {
            coordinates.current_top = coordinates.current_top + 3
            coordinates[item] = coordinates.current_top
          } else {
            coordinates.current_top = coordinates.current_top + 2
            coordinates[item] = coordinates.current_top
          }
        }
      })
    }


    if (coordinates.education_block) {
      coordinates.education_highlights = coordinates.current_top + 3.6
      coordinates.education_highlights_underline = coordinates.current_top + 6.6
      coordinates.current_top = coordinates.current_top + 5.6
      Object.keys(education).forEach((item) => {
        if (education[item].trim() !== "") {
          if (item.length === 14) {
            coordinates.current_top = coordinates.current_top + 3
            coordinates[item] = coordinates.current_top
          } else {
            coordinates.current_top = coordinates.current_top + 2
            coordinates[item] = coordinates.current_top
          }
        }
      })
    }

    if (coordinates.certifications_block) {
      coordinates.certifications_highlights = coordinates.current_top + 3.6
      coordinates.certifications_highlights_underline = coordinates.current_top + 6.6
      coordinates.current_top = coordinates.current_top + 5.6
      Object.keys(certifications).forEach((item) => {
        if (certifications[item].trim() !== ""){
          coordinates.current_top = coordinates.current_top + 2
          coordinates[item] = coordinates.current_top
        }

      })
    }


    const temp = {...coordinates}
    changeCoordinates(temp)
    if(imagePath !== "" && imagePath !== undefined){

      const upload = async () => {
        changeMessage("Uploading image...")
        const formData = new FormData()
        formData.append("image", imagePath)
        const response = await axios.post("/upload", formData, {
          headers: { 'Content-Type': 'multipart/form-data' }
        })
        if(!response.data.error) {
          changeMessage("")
          changeImageData(response.data)
          changeCurrentScreen("preview")
        } 
        else {
          changeMessage("An error occurred, please make sure you are using a valid image.")
        }
      }
    upload()
    } else {
      changeCurrentScreen("preview")
    }
  }

  // emptying and changing some states when "go back" button is clicked
  const goBack = () => {
    changeCurrentScreen("editing")
    changeImagePath("")
    changeMessage("")
  }

  // changes the appearance of the currently chosen color
  const handleColorClick = (e, color1, color2) => {
    if(document.getElementsByClassName("svg_container_active")[0]){
      document.getElementsByClassName("svg_container_active")[0].className = "svg_container"
    }
    e.target.className = "svg_container_active"
    changeColors([color1, color2])
  }

  // changes some css variables whenever "colors" state is changed
  useEffect(() => {
    document.querySelector(':root').style.setProperty("--gray-clr", colors[0])
    document.querySelector(':root').style.setProperty("--text-clr", colors[1])
  },[colors])

  return(
    <AppContext.Provider value={{
      name,
      jobTitle,
      details,
      contactInfo,
      skills,
      languages,
      experience,
      education,
      certifications,
      handleNameChange,
      handleJobChange,
      handleDetailsChange,
      handleContactChange,
      handleSkillsChange,
      handleLanguagesChange,
      handleExperienceChange,
      handleEducationChange,
      handleCertificationsChange,
      handleConfirm,
      currentScreen,
      coordinates,
      changeImagePath,
      imageData,
      changeCurrentScreen,
      goBack,
      message,
      colors,
      handleColorClick
    }}>
      {children}
    </AppContext.Provider>
  )
}

export default Context