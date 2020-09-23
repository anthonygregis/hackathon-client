import React from 'react';

export default function Results(props) {
  let clinicResults = props.data.map(d => {
    return (
      <div key={d.Id}>
        {/* result name */}
        <h2>{d.CtrNm}</h2>
        {/* distance */}
        <p>{d.Distance} Miles Away</p>
        <p>Onsite Testing Available: {d.Covid19TestStatus}</p>
        {/* telehealth */}
        <p>Telehealth Available: {d.TeleHealthStatus}</p>
        <p>Telehealth Status: {d.TelehealthText}</p>
        {/* address */}
        <h4>Address:</h4>
        <p>{d.CtrAddress}</p>
        <p>{d.CtrCity}, {d.CtrStateAbbr} {d.CtrZipcd}</p>
        {/* phone */}
        <h4>Phone:</h4>
        <p>{d.CtrPhoneNum}</p>
        <hr />
      </div>
    )
  })
  return (
    <>
      <h1>Clinics/Providers Near You</h1>
      <hr />
      {clinicResults}
    </>
    )
  }