import { useState, useEffect } from "react"
import PropTypes from 'prop-types';
import InputBox from '../UIComponent/InputBox';
import QueryImageCard from "../UIComponent/QueryImageCard"


export default function Pexels({ addToGlobalCollection }){
    const [images, setImages] = useState([])
    const [userPrompt, setUserPrompt] = useState("")
    const [number, setNumber] = useState(1)
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
    })

    const customSearch = async (e) => {
        setUserPrompt(userPrompt)
        setNumber(number)
        console.log(number)
        if (number > 100){
            e.preventDefault()
            alert(`Number needs to be less than 100`)
        }
        else{
            fetchResults(userPrompt, number)
        }
        console.log(`here`)
    }

    async function fetchResults(userPrompt, number){
        try {
            setLoading(true);
            await fetch(`https://api.pexels.com/v1/search?query=${userPrompt}&per_page=${number}`, {
                headers: {
                    Authorization: process.env.REACT_APP_PEXELS_API_KEY,
                },
            })
            .then((resp) =>{
                return resp.json();
            })
            .then((data) => {
                setLoading(false)
                setImages(data.photos)
                console.log(data)
            })
        }
        catch(error){
            console.log(error)
            alert('Failed to search Pexels')
        }
    }
    
    const AddToCollection = function(imgId) {
        let imageToAdd = images.find(image => image.id === imgId)
        imageToAdd.apiImageSrc = " Pexels"
        addToGlobalCollection(imageToAdd)
        document.getElementById(`pexelsImage${imgId}`).children[0].style.backgroundColor= '#ff0000'
    }

    // console.log(images)
    const PexelsImage = images.map((item, index) => {
        return (
            <div id={`pexelsImage${item.id}`} key={index}>
                <QueryImageCard 
                    img={item}
                    manageCollection={AddToCollection}
                    action="Add to Collection"
                />
            </div>
        )
    });

    const openDialog = event => {
        document.getElementById('PexelsDialog').showModal()
    }
    const closeDialog = event => {
        document.getElementById('PexelsDialog').close()
    }

    return(
        <>
           {!images? <h1>Loading...</h1> :
            <div>
                <button className="getimagesAPI-btn" onClick={openDialog}>Get Images from Pexels</button>
                <dialog id="PexelsDialog">
                    <>
                        <span className="close-btn" onClick={closeDialog}>&times;</span>
                        <h3 href="https://unsplash.com/">Pexels</h3>
                        <InputBox label={"Description "} setAttribute={setUserPrompt}/>
                        <InputBox label={"Number of images "} setAttribute={setNumber}/>
                        <button className="list-btn" onClick={customSearch}>Generate</button>
                        <div className='line_short'></div>
                        <p>Search results: {images.length}</p>
                        <div className="query-container">
                            {PexelsImage}
                        </div>
                    </>
                </dialog>
            </div>
           }

        </>
    )
}

Pexels.propTypes = {
    addToGlobalCollection: PropTypes.func.isRequired,
}