import React from "react";
import CollectionImageCard from "./UIComponent/CollectionImageCard"

export default function Collection ({ collectionCart, removeCollection, addCanvas, imgSource }){
    console.log(collectionCart)
    let CollectionItems = collectionCart.map((item, index) =>
            <CollectionImageCard
                img = {item}
                addCanvas = {addCanvas}
                addAction = "Add to Canvas"
                removeFromSrc = {removeCollection}
                imgSource = {item.apiImageSrc}
            />

    )
    
    return(
        <>
            {CollectionItems}
        </>
    )    
}