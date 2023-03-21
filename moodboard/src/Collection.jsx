import React from "react";
import PropTypes from 'prop-types';
import CollectionImageCard from "./UIComponent/CollectionImageCard"

export default function Collection ({ collectionCart, removeCollection, addCanvas }){
    // console.log(collectionCart)
    let CollectionItems = collectionCart.map((item, index) =>
        <div className="collection-card_container" key={index}>
            <CollectionImageCard
                img = {item}
                addCanvas = {addCanvas}
                addAction = "Add to Canvas"
                removeFromSrc = {removeCollection}
                imgSource = {item.apiImageSrc}
            />
        </div>
    )
    
    return(
        <>
            {CollectionItems}
        </>
    )    
}

Collection.propTypes = {
    collectionCart: PropTypes.array.isRequired,
    removeCollection: PropTypes.func.isRequired,
    addCanvas: PropTypes.func.isRequired
}