import React, { useEffect } from 'react';
import Zipform from './Zipform';

const Home = (props) => {

    useEffect(() => {
        let landingElem = document.getElementById('landing')
        landingElem.focus()
    }, [])

    return (
        <div id="landing" tabIndex="-1">
            <img width="35vh" className="mt-5" src="image/covid-clinic.png" alt="covid clinic logo"/>
            <h1>Covid Test Finder</h1>
            <h2>Find Covid Testing Near You</h2>
            <Zipform zip={props.zip}/>
        </div>
    )
}

export default Home;