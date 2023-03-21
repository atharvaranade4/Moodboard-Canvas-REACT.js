// import React, { useState } from "react";
// import InputBox from '../UIComponent/InputBox';
// import { Configuration, OpenAIApi } from "openai";
// import QueryImageCard from "../UIComponent/QueryImageCard"


function DallE(){ 
    // const [userPrompt, setUserPrompt] = useState("")
    // const [number, setNumber] = useState(1)
    // const [imageUrl, setImageUrl] = useState([])
    // const [show, setShow] = useState(false)
    // const API = 
    // const configuration = new Configuration({
    //     // apiKey: process.env.REACT_APP_DALLE_API_KEY,
    //     apiKey: API
    // });
    // const openai = new OpenAIApi(configuration)
    
    // const generateImage = async () => {
    //     const imageParameters = {
    //         prompt: userPrompt,
    //         n: parseInt(number),
    //     }
    //     const response = await openai.createImage(imageParameters);
    //     console.log(response)
    //     const urlData = response.data.data;
    //     setImageUrl(urlData);
        
    //     console.log(urlData)
    // }
    
    // const handleClick = event => {
    //     setShow(current => !current)
    // }
    
    // return(
    //     <div className="label-input-pair">
    //         <button onClick={handleClick}>Get Images from DallE</button>
    //         {show && (
    //             <>
    //                 <InputBox label={"Description"} setAttribute={setUserPrompt}/>
    //                 <InputBox label={"Number of images"} setAttribute={setNumber}/>
    //                 <button className="" onClick={generateImage}>Generate</button>
    //                 {imageUrl.length}
    //                 {imageUrl.map((image, key) =>(
    //                     <QueryImageCard 
    //                     key={image.id}
    //                     {...image}
    //                     />
    //                     ))}
    //                 {/* {imageUrl &&
    //                     <img src={imageUrl} className="image" alt="DALLE img" />
    //                 } */}
    //                 </>
    //             )}
    //     </div>
    // )
    const openDialog = event => {
        document.getElementById('DallEDialog').showModal()
    }
    const closeDialog = event => {
        document.getElementById('DallEDialog').close()
    }

    return(
        <>
            <button className="getimagesAPI-btn" onClick={openDialog}>Get Images from DallE</button>
            <dialog id="DallEDialog">
                <>
                    <button className = "close-btn"onClick={closeDialog}>&times;</button>
                    <h3>Coming Soon!</h3>
                </>
            </dialog>
        </>
    )
}

export default DallE;