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
                    <label htmlFor="Zip">Zipcode</label>

                    <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="Enter your zipcode" aria-label="zipcode" aria-describedby="button-addon2" onChange={ (e) => {setZipcode(e.target.value)}}/>
                    </div>
                        <br></br>
                        <div class="form-group">
                            <label htmlFor="radius">Radius</label>
                            <select class="form-control" id="radius" onChange={ (e) => {setRadius(e.target.value)}}>
                                <option>5 miles</option>
                                <option>10 miles</option>
                                <option>15 miles</option>
                                <option>20 miles</option>
                            </select>
                        </div>
                        <div class="input-group-append">
                            <NavLink to={{ pathname: '/results', radius: radius, zipcode: zipcode}}>
                                <button class="btn btn-outline-secondary" id="button-addon2">Submit</button>
                            </NavLink>
                        </div>
                </form>
            </div>
        </div>
    )
}

export default Zipform;