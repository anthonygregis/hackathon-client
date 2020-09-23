import React from 'react';

const Zipform = () => {

    return(
        <div className="zipform_box">
            <form>
                <label htmlFor="Zip">Zipcode</label>
                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Enter zipcode here" aria-label="Your zipcode" aria-describedby="button-addon2"/>
                    <div class="input-group-append">
                        <button class="btn btn-outline-secondary" type="button" id="button-addon2" onClick={handleSubmit}>Button</button>
                    </div>
                </div>
            </form>


            
        </div>
    )
}

export default Zipform;