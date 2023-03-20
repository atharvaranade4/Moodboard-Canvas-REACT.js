import React from "react";
import PropTypes from 'prop-types';

export default function CollectionImageCard ({ img, addCanvas, addAction, removeFromSrc, imgSource }){
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
            {(isPexel)?
                <a href={img.photographer_url} target="_blank">{img.photographer}</a>
                :<a href={img.user.portfolio_url} target="_blank">{img.user.first_name}</a>}
            <p>Image-Source:{imgSource}</p>
            {(addAction)?
            <button
                className="collection-list-btn"
                onClick={() => addCanvas(img)}>{addAction}
            </button> : null}
        </article>
    )    
}

CollectionImageCard.propTypes = {
    img: PropTypes.object.isRequired,
    addCanvas:PropTypes.func.isRequired,
    addAction:PropTypes.string.isRequired,
    removeFromSrc:PropTypes.func.isRequired,
    imgSource:PropTypes.string.isRequired
}