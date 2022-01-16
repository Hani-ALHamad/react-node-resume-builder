import React, {useState, useEffect, createContext} from 'react'
import axios from 'axios'

export const AppContext = createContext()

const Context = ({children}) => {
  const [currentScreen, changeCurrentScreen] = useState("welcome")
  const [imagePath, changeImagePath] = useState("")
  const [imageData, changeImageData] = useState("")
  const [message, changeMessage] = useState("")
  // black black, white
  // green #229954 , white
  // blue #2471A3, white
  // purple #7D3C98, white
  // dark blue #2E4053, white
  // dark red #A93226, white
  //  gray #cccccc, black
  const [colors, changeColors] = useState(["#CCCCCC", "black"])
  const [name, changeName] = useState("AAAAAAAAAAAAAAAA")
  const [jobTitle, changeJobTitle] = useState("AAAAAAAAAAAAAAAAAAAAAAAA")
  const [details, changeDetails] = useState({
    description1: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
    description2: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
    description3: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
    description4: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
  })
  const [contactInfo, changeContactInfo] = useState({
    contact1t: "",
    contact1d: "",
    contact2t: "",
    contact2d: "",
    contact3t: "",
    contact3d: "OOOOOOOOOOOOOOOOOOOOOOO",
    contact4t: "",
    contact4d: "OOOOOOOOOOOOOOOOOOOOOOO",
    contact5t: "OOOOOOOOOOOOOOOOOOOOOO",
    contact5d: "OOOOOOOOOOOOOOOOOOOOOOO",
    contact6t: "OOOOOOOOOOOOOOOOOOOOOO",
    contact6d: "OOOOOOOOOOOOOOOOOOOOOOO",
    contact7t: "OOOOOOOOOOOOOOOOOOOOOO",
    contact7d: "OOOOOOOOOOOOOOOOOOOOOOO",
  })
  const [skills, changeSkills] = useState({
    skill1: "OOOOOOOOOOOOOOOOOOOOOOO",
    skill2: "",
    skill3: "",
    skill4: "",
    skill5: "",
    skill6: "",
    skill7: "OOOOOOOOOOOOOOOOOOOOOOO",
    skill8: "OOOOOOOOOOOOOOOOOOOOOOO",
    skill9: "OOOOOOOOOOOOOOOOOOOOOOO",
    skill10: "OOOOOOOOOOOOOOOOOOOOOOO"
  })
  const [languages, changeLanguages] = useState({
    language1: "OOOOOOOOOOOOOOOOOOOOOOO",
    language2: "",
    language3: "",
    language4: "",
    language5: "OOOOOOOOOOOOOOOOOOOOOOO",
  })
  const [experience, changeExperience] = useState({
    experienceDate1:"02/2020 - 12/2022",
    experience1:"",
    experienceDetails1:"",
    experienceDate2: "",
    experience2: "",
    experienceDetails2: "OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO",
    experienceDate3: "02/2020 - 12/2022",
    experience3: "",
    experienceDetails3: "",
    experienceDate4: "02/2020 - 12/2022",
    experience4: "OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO",
    experienceDetails4: "OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO",
    experienceDate5: "02/2020 - 12/2022",
    experience5: "OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO",
    experienceDetails5: "OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO",
  })
  const [education, changeEducation] = useState({
    educationDate1:"",
    education1:"",
    educationDetails1:"",
    educationDate2: "02/2020 - 12/2022",
    education2: "OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO",
    educationDetails2: "OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO",
  })
  const [certifications, changeCertifications] = useState({
    certificate1: "",
    certificate2: "",
    certificate3: "",
    certificate4: "",
    certificate5: "",
    certificate6: "OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO"
  })
  const [coordinates, changeCoordinates] = useState({})


  const handleNameChange = (e) => {
    console.log(e)
    console.log(e.value)
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
  console.log(e.value.length)
  console.log(e.value)
  console.log(e.clientHeight, e.cols)
  document.getElementById("detailsSpan").innerHTML = e.value
  console.log(document.getElementById("detailsSpan").clientHeight)
  if (document.getElementById("detailsSpan").clientWidth < 600 || e.value.length < details[`${e.id}`].length){
    details[`${e.id}`] = e.value
    const temp = {...details}
    changeDetails(temp)
    console.log(details)
  }
} 

const handleContactChange = (e) => {
  console.log(e.className)
  if(e.className === "contactTitle") {
    contactInfo[`${e.id}`] = e.value
    const temp = { ...contactInfo }
    changeContactInfo(temp)
    console.log(contactInfo)
  } else {
    document.getElementById("contactSpan").innerHTML = e.value
    if (document.getElementById("contactSpan").clientWidth < 275 || e.value.length < contactInfo[`${e.id}`].length) {
      contactInfo[`${e.id}`] = e.value
      const temp = { ...contactInfo }
      changeContactInfo(temp)
      console.log(contactInfo)
    }
  }
}

  const handleSkillsChange = (e) => {
      document.getElementById("contactSpan").innerHTML = e.value
      if (document.getElementById("contactSpan").clientWidth < 275 || e.value.length < skills[`${e.id}`].length) {
        skills[`${e.id}`] = e.value
        const temp = { ...skills }
        changeSkills(temp)
        console.log(skills)
      }
  }

  const handleLanguagesChange = (e) => {
    document.getElementById("contactSpan").innerHTML = e.value
    if (document.getElementById("contactSpan").clientWidth < 275 || e.value.length < languages[`${e.id}`].length) {
      languages[`${e.id}`] = e.value
      const temp = { ...languages }
      changeLanguages(temp)
      console.log(languages)
    }
  }

  const handleExperienceChange = (e) => {
    if(e.className === 'experience') {
      document.getElementById("experienceSpan").innerHTML = e.value
      if (document.getElementById("experienceSpan").clientWidth < 600 || e.value.length < experience[`${e.id}`].length) {
        experience[`${e.id}`] = e.value
        const temp = { ...experience }
        changeExperience(temp)
        console.log(experience)
      }
    } else {
      document.getElementById("experienceDetailsSpan").innerHTML = e.value
      if (document.getElementById("experienceDetailsSpan").clientWidth < 600 || e.value.length < experience[`${e.id}`].length) {
        experience[`${e.id}`] = e.value
        const temp = { ...experience }
        changeExperience(temp)
        console.log(experience)
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
        console.log(education)
      }
    } else {
      document.getElementById("experienceDetailsSpan").innerHTML = e.value
      if (document.getElementById("experienceDetailsSpan").clientWidth < 600 || e.value.length < education[`${e.id}`].length) {
        education[`${e.id}`] = e.value
        const temp = { ...education }
        changeEducation(temp)
        console.log(education)
      }
    }
  }

  const handleCertificationsChange = (e) => {
    document.getElementById("experienceSpan").innerHTML = e.value
    if (document.getElementById("experienceSpan").clientWidth < 600 || e.value.length < certifications[`${e.id}`].length) {
      certifications[`${e.id}`] = e.value
      const temp = { ...certifications }
      changeCertifications(temp)
      console.log(certifications)
    }
  }

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
            console.log(coordinates)
          } else {
            coordinates.current_top = coordinates.current_top + 2
            coordinates[item] = coordinates.current_top
            console.log(coordinates)
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
            console.log(coordinates)
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
          console.log(coordinates)
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
            console.log(coordinates)
          } else {
            coordinates.current_top = coordinates.current_top + 2
            coordinates[item] = coordinates.current_top
            console.log(coordinates)
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
            console.log(coordinates)
          } else {
            coordinates.current_top = coordinates.current_top + 2
            coordinates[item] = coordinates.current_top
            console.log(coordinates)
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
          console.log(coordinates)
        }

      })
    }


    const temp = {...coordinates}
    console.log(coordinates)
    changeCoordinates(temp)
    console.log(coordinates)
    if(imagePath !== "" && imagePath !== undefined){

      console.log(imagePath)
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
          console.log(response.data)
        } 
        else {
          console.log(response)
          changeMessage("An error occurred, please make sure you are using a valid image.")
        }
      }
    upload()
    } else {
      changeCurrentScreen("preview")
    }
  }

  const goBack = () => {
    changeCurrentScreen("editing")
    changeImagePath("")
    changeMessage("")
  }

  const handleColorClick = (e, color1, color2) => {
    if(document.getElementsByClassName("svg_container_active")[0]){
      document.getElementsByClassName("svg_container_active")[0].className = "svg_container"
    }
    e.target.className = "svg_container_active"
    changeColors([color1, color2])
  }

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