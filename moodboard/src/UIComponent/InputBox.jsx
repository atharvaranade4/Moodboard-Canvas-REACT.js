import React from 'react';
import PropTypes from 'prop-types';


function InputBox({ label, setAttribute }){

    return(
        <div className="label-input-pair">
            <label className="">{label}</label>
            <input 
                className="" 
                onChange={(e) => setAttribute(e.target.value)}
            />
        </div>
    )
}

export default InputBox;

InputBox.propTypes = {
    label: PropTypes.string.isRequired,
    setAttribute: PropTypes.func.isRequired
}