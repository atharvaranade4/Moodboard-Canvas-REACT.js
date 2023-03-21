import React from "react";
import PropTypes from 'prop-types';

export default function CollectionImageCard ({ img, addCanvas, addAction, removeFromSrc, imgSource }){
    console.log(img)
    let isPexel = img.hasOwnProperty('src')
    return(
        <div className="collection-card">
            <div className="collection-image_container">
                <button 
                    className="close-btn"
                    onClick={() => removeFromSrc(img.id)}>&times;
                </button>
                {(isPexel)?
                    <img src={ img.src.original } alt={ img.url } />
                    : <img src={ img.urls.full } alt={ img.url }/>} 
            </div>
            <div className="collection-details_container">
                {(isPexel)?
                    <a className="artist-details" href={img.photographer_url} target="_blank">{img.photographer}</a>
                    :<a className="artist-details" href={img.user.portfolio_url} target="_blank">{img.user.first_name}</a>}
                <p>Image-Source:{imgSource}</p>
                {(addAction)?
                <button
                    className="list-btn"
                    onClick={() => addCanvas(img)}>{addAction}
                </button> : null}
            </div>
        </div>
    )    
}

CollectionImageCard.propTypes = {
    img: PropTypes.object.isRequired,
    addCanvas:PropTypes.func.isRequired,
    addAction:PropTypes.string.isRequired,
    removeFromSrc:PropTypes.func.isRequired,
    imgSource:PropTypes.string.isRequired
}