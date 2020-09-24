import React, { useState } from 'react';
import {NavLink} from 'react-router-dom';



const Zipform = () => {

    const [zipcode, setZipcode] = useState("")
    const [radius, setRadius] = useState("5")

    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     console.log("Function hit")

        
    // }

    return(
        <div className="zipform_box">
<<<<<<< HEAD
            <form>
                <label htmlFor="Zip">Zipcode</label>
                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Enter zipcode here" aria-label="Your zipcode" aria-describedby="button-addon2"/>
                    <div class="input-group-append">
                        {/* <button class="btn btn-outline-secondary" type="button" id="button-addon2" onClick={handleSubmit}>Button</button> */}
                    </div>
                </div>
            </form>
=======
            <div className='container'>
                <form>
                    <label htmlFor="Zip">Zipcode</label>
>>>>>>> c3babf2f7991f83a597a1fca46d066ef2dd40d87

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
                                Submit{/* <button class="btn btn-outline-secondary" type="button" id="button-addon2" onClick={handleSubmit}>Submit</button> */}
                            </NavLink>
                        </div>
                </form>
            </div>
        </div>
    )
}

export default Zipform;