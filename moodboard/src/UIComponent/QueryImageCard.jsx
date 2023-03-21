import React from "react";
import PropTypes from 'prop-types';
import '../../src/App.css';


export default function QueryImageCard ({ img, manageCollection, action }){
    console.log(img)
    let isPexel = img.hasOwnProperty('src')
    
    return(
            <article className="query-image_container">
                {(isPexel)?
                    <img src={ img.src.original } alt={ img.url } />
                    : <img src={ img.urls.full } alt={ img.url }/>}
                <div className="fullcap">
                    <button
                        className="list-btn"
                        onClick={() => manageCollection(img.id)}>{action}
                        {/* without callback, the functions loads by itself */}
                    </button>
                </div>
            </article>
    )    
}

QueryImageCard.propTypes = {
    img: PropTypes.object.isRequired,
    manageCollection: PropTypes.func.isRequired,
    action: PropTypes.string.isRequired,
}