import React from 'react';
import '../styles/results.css'

export default function Results(props) {
  let clinicResults = props.data.map(d => {
    return (
      <div className="row" key={d.Id}>
        <div className="col">
        <div className="card mb-4" >
          <div className="card-body">
            <h3 className="card-title">{d.CtrNm}</h3>
            <h6 className="card-subtitle mb-3 text-muted">{d.Distance} Miles Away</h6>
            <div className="testing-info">
              <p className="card-text mb-2"><strong>Onsite Testing Available:</strong> {d.Covid19TestStatus}</p>
              <p className="card-text mb-2"><strong>Telehealth Available:</strong> {d.TeleHealthStatus}</p>
              <p className="card-text mb-2" style={{maxWidth: '400px', margin: '0 auto'}}><strong>Telehealth Status:</strong> {d.TelehealthText}</p>
            </div>
            <strong>Address:</strong>
            <p className="card-text mb-0">{d.CtrAddress}</p>
            <p className="card-text">{d.CtrCity}, {d.CtrStateAbbr} {d.CtrZipcd}</p>

            <strong>Phone Number:</strong>
            <p className="card-text">{d.CtrPhoneNum}</p>
          </div>
        </div>
        </div>
      </div>
    )
  })
  return (
    <>
      <h1>Clinics/Providers Near You</h1>
      <hr />
      <div className="container" >
        {clinicResults}
      </div>
    </>
    )
}