import React from 'react';
import { useState, useEffect } from "react"
import GetImages from './GetImages';
import Canvas from './Canvas';
import Collection from './Collection'
import './App.css';


function App() {
  const [collectionArr, setCollectionArr] = useState([]);
  const [canvasArr, setCanvasArr] = useState([]);

  useEffect(()=>{
    document.querySelector('#head').addEventListener("input", (event) =>{
      console.log(event)
      document.querySelector('.canvas').style.backgroundColor=event.target.value
    },false)
  }, [])

  // COLLECTION
  const AddToCollectionArr = function(imageToAdd) {
    let alreadyExist = collectionArr.some(item => item.id === imageToAdd.id)
        if(alreadyExist) {
            alert('The item is already in the cart.')
            return
        }
    setCollectionArr(prevState => [...prevState, imageToAdd])
    console.log(collectionArr)
    console.log(imageToAdd)
  }

  const removeFromCollectionArr = function(imgId){
    let remainderArr = collectionArr.filter(image => image.id !== imgId)
    setCollectionArr(remainderArr)
  }

  const CollectionImage = (
    <div className="collection-container">
    <Collection
        key={collectionArr.id}
        collectionCart={collectionArr}
        removeCollection={(imgId) => removeFromCollectionArr(imgId)}
        addCanvas={(imgId) => AddToCanvasArr(imgId)}
      />
    </div>
  )


  //CANVAS
  const AddToCanvasArr = function(imageToAdd) {
    let alreadyExist = canvasArr.some(item => item.id === imageToAdd.id)
      if(alreadyExist) {
          alert('The item is already in the cart.')
          return
      }
    setCanvasArr(prevState => [...prevState, imageToAdd])
    console.log(canvasArr)
    console.log('imagetoAdd: ', imageToAdd)
  }
  
  const removeFromCanvasArr = function(imgId){
    let remainderArr = canvasArr.filter(image => image.id !== imgId)
    setCanvasArr(remainderArr)
  }
  const CanvasImage = (
    <>
      <Canvas
        key={canvasArr.id}
        canvasCart={canvasArr}
        manageCanvas={(imgId) => removeFromCanvasArr(imgId)}
      />
    </>
  )

  const el = document.querySelector(".canvas-container")
  console.log(el)

  return (
    <div className="App">
      <h2>Build your Gallery</h2>
      <div>
      <p>Choose your canvas colors:</p>
      <div>
        <input type="color" id="head" name="head"
         value="#e66465"/>
        <label for="head">Head</label>
      </div>
        <div className="canvas" id="canvas-bounds">
          {CanvasImage}
        </div>
      </div>

      <GetImages
        addToGlobalCollection={AddToCollectionArr}
      />
      <h2>Collection</h2>
      {CollectionImage}
    </div>
  );
}

export default App;
