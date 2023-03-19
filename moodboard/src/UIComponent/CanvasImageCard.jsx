import React from "react";
import PropTypes from 'prop-types';

export default function CollectionImageCard ({ img, removeFromSrc, transformImg, removeAction }){
    console.log(img)
    let isPexel = img.hasOwnProperty('src')
    return(
        <>
            <article className="canvas-image_container">
                {(isPexel)?
                    <img 
                        onMouseDown={() => transformImg(img.id)} 
                        src={ img.src.original } alt={ img.url } 
                    />
                    : <img src={ img.urls.full } alt={ img.url }/>} 
                <span 
                    className="canvas-img-btn"
                    onClick={() => removeFromSrc(img.id)}>&times;
                </span>
            </article>
        </>
    )    
}

CollectionImageCard.propTypes = {
    img: PropTypes.object.isRequired,
}