import React from 'react';

const Zipform = () => {

    return(
        <div className="zipform_box">
            <div className='container'>
                <form>
                    <label htmlFor="Zip">Zipcode</label>

                    <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="Enter your zipcode" aria-label="zipcode" aria-describedby="button-addon2"/>
                    </div>
                        <br></br>
                        <div class="form-group">
                            <label for="radius">Radius</label>
                            <select class="form-control" id="radius">
                                <option>5 miles</option>
                                <option>10 miles</option>
                                <option>15 miles</option>
                                <option>20 miles</option>
                            </select>
                        </div>
                        <div class="input-group-append">
                            <button class="btn btn-outline-secondary" type="button" id="button-addon2">Submit</button>
                        </div>


                    

                </form>
            </div>
        </div>
    )
}

export default Zipform;