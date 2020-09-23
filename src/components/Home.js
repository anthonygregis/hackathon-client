import React from 'react';
import Zipform from './Zipform';

const Home = (props) => {
    return (
        <div>
            <h1>Covid Test Finder</h1>
            <h3>Find Covid Testing Near You</h3>
            <Zipform zip={props.zip}/>
        </div>
    )
}

export default Home;