import { useState, useEffect } from "react"
import InputBox from '../UIComponent/InputBox';
import QueryImageCard from "../UIComponent/QueryImageCard"


export default function UnSplash({addToGlobalCollection }){
    const [images, setImages] = useState([])
    const [userPrompt, setUserPrompt] = useState("")
    const [number, setNumber] = useState(1)

    useEffect(()=>{
    })
 
    function randomIntFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    const customSearch = async (e) => {
        setUserPrompt(userPrompt)
        setNumber(number)
        console.log(number)
        if (number > 10){
            e.preventDefault()
            alert('Number needs to be less than 10')
        }
        else{
            fetchResults(userPrompt, number)
        }
        console.log(`here`)
    }

    async function fetchResults(userPrompt, number){
        try {
            let currentPage = randomIntFromInterval(0, 5)
            const endpoint = 
                `https://api.unsplash.com/search/photos?query=
                ${userPrompt}
                &per_page=${number}
                &page=${currentPage}
                &client_id=${process.env.REACT_APP_UNSPLASH_API_KEY
            }`
            console.log(endpoint)
            const response = await fetch(endpoint)
            const responseJson = await response.json()
            const data = responseJson.results
            setImages(data)
            console.log(data)
        }
        catch(error){
            console.log(error)
            alert('Failed to search Unsplash')
        }
    }
    
    const AddToCollection = function(imgId) {
        let imageToAdd = images.find(image => image.id === imgId)
        imageToAdd.apiImageSrc = "UnSplash"
        addToGlobalCollection(imageToAdd)
        document.getElementById(`unsplashImage${imgId}`).children[0].style.backgroundColor= '#ff0000'
        // console.log(document.getElementById(`unsplashImage${imgId}`).children[0])
    }


    // console.log(images)
    const UnsplashImage = images.map((item, index) => {
        return (
            <div id= {`unsplashImage${item.id}`} key={index}>
                <QueryImageCard 
                    img={item}
                    manageCollection={AddToCollection}
                    action="Add to Collection"
                />
            </div>
        )
    });

    const openDialog = event => {
        document.getElementById('UnsplashDialog').showModal()
    }
    const closeDialog = event => {
        document.getElementById('UnsplashDialog').close()
    }
    return(
        <>
           {!images? <h1>Loading...</h1> :
            <div>
                <button onClick={openDialog}>Get Images from Unsplash</button>
                <dialog id="UnsplashDialog">
                    <>
                        <button onClick={closeDialog}>Close</button>
                        <InputBox label={"Description"} setAttribute={setUserPrompt}/>
                        <InputBox label={"Number of images"} setAttribute={setNumber}/>
                        <button className="" onClick={customSearch}>Generate</button>
                        <p>Search results: {images.length}</p>
                        <div className="query-container">
                            {UnsplashImage}
                        </div>
                    </>
                </dialog>
            </div>
           }

        </>
    )
}