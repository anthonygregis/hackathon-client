import React from 'react';

const Zipform = () => {

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="Zip">Zipcode</label>
                <input name="Zip" value={zipcode} onChange={handleZip} required/>
                <button type="submit">Search</button>
            </form>
        </div>
    )
}

export default Zipform;