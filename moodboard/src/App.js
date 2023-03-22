import React from 'react';
import downloadjs from 'downloadjs';
import html2canvas from 'html2canvas';
import { useState, useEffect } from "react"
import GetImages from './GetImages';
import Canvas from './Canvas';
import Collection from './Collection'
import BoardInfo from './UIComponent/BoardInfo'
import './App.css';
import Examples from './Examples'

function App() {
  const [collectionArr, setCollectionArr] = useState([]);
  const [canvasArr, setCanvasArr] = useState([]);
  const [setShow] = useState(false)
  
// eslint-disable-next-line
  const handleClick = event => {
    setShow(current => !current)
}
  const handleCaptureClick = async () => {
    const canvasDownload = document.querySelector('.download-container');
    if (!canvasDownload) return;

    const canvas = await html2canvas(canvasDownload, {useCORS: true});
    const dataURL = canvas.toDataURL('image/png');
    downloadjs(dataURL, 'canvas.png', 'image/png');
  };

  useEffect(()=>{
    document.querySelector('#head').addEventListener("input", (event) =>{
      document.querySelector('.canvas').style.backgroundColor=event.target.value
    },false)
  }, [])

  // COLLECTION
  const AddToCollectionArr = function(imageToAdd) {
    let alreadyExist = collectionArr.some(item => item.id === imageToAdd.id)
        if(alreadyExist) {
            alert('The item is already in the collection.')
            return
        }
    setCollectionArr(prevState => [...prevState, imageToAdd])
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
          alert('Item already on canvas.')
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

  return (
    <>
    <div className="App">
      <div className='title-container'>
        <h2 className='title'>Build your Moodboard</h2>
        <img className='title-image' src={require('./assets/brown_background.png')} alt="Snow"/>
      </div>
      <h3>Canvas</h3>
      <div className='download-container'>
        <BoardInfo />
        <div className="canvas" id="canvas-bounds">
          {CanvasImage}
        </div>
      </div>
      <div className='download-btn_container'>
        <button className='list-btn' onClick={handleCaptureClick}>Download Canvas</button>
      </div>
        <GetImages
          addToGlobalCollection={AddToCollectionArr}
        />
      <div className='line'></div>
      <h3>Collection</h3>
      {CollectionImage}
      <div className='line'></div>
    </div>
    <Examples />
    <div className="footer">
		  <p>UW Coursework Final-Project II</p>
		  <p>Built by <a href="https://github.com/atharvaranade4" className="github-link">Atharva Ranade</a></p>
	  </div>
  </>
  );
}

export default App;
