import React from "react";
import PropTypes from 'prop-types';

export default function CollectionImageCard ({ img, addCanvas, addAction, removeFromSrc, removeAction, imgSource }){
    console.log(img)
    let isPexel = img.hasOwnProperty('src')
    return(
        <article className="collection-image_container">
            <span 
                className="collection-list-btn"
                onClick={() => removeFromSrc(img.id)}>&times;
            </span>
            {(isPexel)?
                <img src={ img.src.original } alt={ img.url } />
                : <img src={ img.urls.full } alt={ img.url }/>} 
            {(addAction)?
            <button
                className="collection-list-btn"
                onClick={() => addCanvas(img)}>{addAction}
            </button> : null}
            <p>Image Source:{imgSource}</p>
        </article>
    )    
}

CollectionImageCard.propTypes = {
    img: PropTypes.object.isRequired,
}