import React, {useState} from 'react';


function InputBox({ label, setAttribute }){
    // const [value, setValue] = useState(10)
    
    // function handleChange(e) {
    //     if (Number(e.target.value) > 11)
    //         alert('number needs to be less than 10'); // return if more than 50000
    
    //     // else set the input value
    //     setValue(Number(e.target.value));
    // }

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