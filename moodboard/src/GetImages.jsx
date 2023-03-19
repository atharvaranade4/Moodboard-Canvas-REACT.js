import UnSplashAPI from './API/UnSplashAPI'
import PexelsAPI from './API/PexelsAPI'
import './App.css';

function GetImages({ addToGlobalCollection, addToGlobalCanvas }) {


  return (
    <div className="get-images-container">
      <PexelsAPI
        addToGlobalCollection={addToGlobalCollection}
        addToGlobalCanvas={addToGlobalCanvas}
      />
      <UnSplashAPI 
        addToGlobalCollection={addToGlobalCollection}
        addToGlobalCanvas={addToGlobalCanvas}
      />
    </div>
  );
}

export default GetImages;