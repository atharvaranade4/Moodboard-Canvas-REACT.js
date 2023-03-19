import { useState, useEffect } from "react"
import InputBox from '../UIComponent/InputBox';
import QueryImageCard from "../UIComponent/QueryImageCard"


export default function UnSplash({ addToGlobalCollection }){
    const [images, setImages] = useState([])
    const [userPrompt, setUserPrompt] = useState("")
    const [number, setNumber] = useState(1)
    const [show, setShow] = useState(false)
    const [loading, setLoading] = useState(true)

    const handleClick = event => {
        setShow(current => !current)
    }

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
            alert('Failed to search Unsplash')
        }
    }
    
    const AddToCollection = function(imgId) {
        let imageToAdd = images.find(image => image.id === imgId)
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
                <button onClick={openDialog}>Get Images from Pexels</button>
                <dialog id="PexelsDialog">
                    <>
                        <button onClick={closeDialog}>Close</button>
                        <InputBox label={"Description"} setAttribute={setUserPrompt}/>
                        <InputBox label={"Number of images"} setAttribute={setNumber}/>
                        <button className="" onClick={customSearch}>Generate</button>
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