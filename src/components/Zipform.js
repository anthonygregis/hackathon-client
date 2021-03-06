import React, { useState } from 'react';
import {NavLink, Redirect} from 'react-router-dom';



const Zipform = () => {

    const [zipcode, setZipcode] = useState("")
    const [radius, setRadius] = useState("5")

    const handleSubmit = (e) => {
        e.preventDefault()
        return <Redirect to={{ pathname:"/results", zipcode: zipcode, radius: radius }} />
    }

    return(
        <div className="zipform_box">
            <div className='container'>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="Zip">Zipcode:</label>
                    <div className="input-group mb-3" style={{display: 'flex', justifyContent: 'center'}}>
                        <input type="text" className="form-control form-control-lg" style={{maxWidth: '300px'}} placeholder="Enter your zipcode" aria-label="Enter your Zipcode" aria-describedby="button-addon2" aria-required="true" onChange={ (e) => {setZipcode(e.target.value)}} required/>
                    </div>
                        <br></br>
                        <label htmlFor="radius">Radius:</label>
                        <div className="form-group" style={{display: 'flex', justifyContent: 'center'}}>
                            <select className="form-control form-control-lg" style={{maxWidth: '300px'}} id="radius" aria-expanded="false" onChange={ (e) => {setRadius(e.target.value)}}>
                                <option>5 miles</option>
                                <option>10 miles</option>
                                <option>15 miles</option>
                                <option>20 miles</option>
                            </select>
                        </div>
                        <div className="input-group-append">
                            <NavLink role="submit" style={{display:"block", margin:"auto"}} to={{ pathname: '/results', radius: radius, zipcode: zipcode}}>
                                <button className="btn btn-outline-secondary" id="button-addon2">Submit</button>
                            </NavLink>
                        </div>
                </form>
            </div>
        </div>
    )
}

export default Zipform;