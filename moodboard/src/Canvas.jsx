import './App.css';
import CanvasImageCard from "./UIComponent/CanvasImageCard"
import React from 'react';
import Draggable from "react-draggable";

export default function Canvas({ canvasCart, manageCanvas }) {
  console.log(canvasCart)


  let CanvasItems = canvasCart.map((item, index) =>
    <Draggable
      // bounds={{left:0, top:0, right:600, bottom:600}}
      // defaultPosition={{x:0, y:0}}
      bounds="parent"
    >
      <div className="canvas-container" key={index}>
        <CanvasImageCard
            img = {item}
            removeFromSrc= {manageCanvas}
            removeAction="Delete from canvas"
            />
      </div>
    </Draggable>

  )

  return (
    <>
      {CanvasItems}
    </>
  );
}