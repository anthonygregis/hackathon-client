import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import '../styles/results.css';
import Message from './Message';
const axios = require('axios');

export default function Results(props) {
  const [clinics, setClinics] = useState([])
  const [text, setText] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [errorPresent, setErrorPresent] = useState(false)

  
  let clinicResults = "";
  let backLink;

  useEffect(() => {
    axios.get(`https://savetheworld-backend.herokuapp.com/clinics/zipcode/${props.location.zipcode}?radius=${props.location.radius}`)
      .then(results => {
        setClinics(results.data)
        setIsLoading(false)
        let headerElem = document.getElementById('results')
        headerElem.focus()
        setText('The results page has loaded')
      })
      .catch(err => {
        setErrorPresent(true)
      })
  }, [props.location.zipcode, props.location.radius])


  if (!isLoading && !errorPresent) {
    if (clinics.length === 0) {
      backLink = ''
    } else {
      backLink = (
        <Link to={{ pathname:"/" }}>
          <p>Return to Search</p>  
        </Link> 
      )
    } 

    if (clinics.length > 0) {
      clinicResults = clinics.map(clinic => {
        let siteName = ""
        
        if (clinic.SiteUrl === "") {
          siteName = (clinic.CtrNm)
        } else {
          siteName = (<a href={clinic.SiteUrl} target="_blank" rel="noopener noreferrer">{clinic.CtrNm}</a>)
        }
        
        return (
          
          <div className="row" key={clinic.Id}>
            <div className="col">
            <div className="card mb-4" >
              <div className="card-body">
                <h2 className="card-title">{siteName}</h2>
                <p className="card-subtitle mb-2 text-muted">Distance: {clinic.Distance} Miles Away</p>
                <div className="testing-info">
                  <p className="card-text mb-2"><strong>Onsite Testing Available:</strong> {clinic.Covid19TestStatus}</p>
                  <p className="card-text mb-2"><strong>Telehealth Available:</strong> {clinic.TeleHealthStatus}</p>
                  <p className="card-text mb-2" style={{maxWidth: '400px', margin: '0 auto'}}><strong>Telehealth Status:</strong> {clinic.TelehealthText}</p>
                </div>
                <strong>Phone Number:</strong>
                <p className="card-text"><a href={"tel:" + clinic.CtrPhoneNum}>{clinic.CtrPhoneNum}</a></p>
                <strong>Address:</strong>
                <a href={"https://www.google.com/maps/dir/" + props.location.zipcode + "/" + clinic.CtrAddress} target="_blank" rel="noopener noreferrer">
                  <p className="card-text mb-0">{clinic.CtrAddress}</p>
                  <p className="card-text">{clinic.CtrCity}, {clinic.CtrStateAbbr} {clinic.CtrZipcd}</p>
                </a>
              </div>
            </div>
            </div>
          </div>
        )
      })
    } else {
      clinicResults = (
        <>
          <p>No clinics in given radius, please try again.</p>
          <Link to={{ pathname: "/" }}>
            <p>Return to Search</p>
          </Link>
        </>
      )
    }
  } else {
    if (errorPresent) {
      clinicResults = (
      <>
        <p>Error processing request, try again.</p>
        <Link to={{ pathname:"/" }}>
          <p>Return to Search</p>  
        </Link> 
      </>)
    } else {
      clinicResults = "Loading..."
    }
  }


  return (
    <div tabIndex="-1" id="results">
      <h1 id="header">COVID-19 Testing Near You</h1>  
      {backLink}
      <div className="search-results">
        {clinicResults}
      </div>
      <Message text={text}/>
    </div>
    )
}