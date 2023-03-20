import React from "react";
import PropTypes from 'prop-types';
import UnSplashAPI from './API/UnSplashAPI'
import PexelsAPI from './API/PexelsAPI'
import DallEAPI from './API/DallEAPI'
import './App.css';

function GetImages({ addToGlobalCollection  }) {
  return (
    <div className="get-images-container">
      <PexelsAPI
        addToGlobalCollection={addToGlobalCollection}
      />
      <UnSplashAPI 
        addToGlobalCollection={addToGlobalCollection}
      />
      <DallEAPI />
    </div>
  );
}

export default GetImages;

GetImages.propTypes = {
  addToGlobalCollection: PropTypes.func.isRequired,
}