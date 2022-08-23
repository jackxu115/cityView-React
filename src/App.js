// import './App.scss';
// import {CityInput} from "./CityInput";
// import {ImageList} from "./ImageList";
// import {useEffect, useState} from "react";
import {Home} from "./Home";

function App() {

    // const [images, setImages] = useState([])
    // const [bgImage, setBgImage] = useState('')
    //
    // // update the title of website
    // useEffect(() => {
    //     document.title = !!bgImage && bgImage?.des && bgImage.des ? bgImage.des.charAt(0).toUpperCase() + bgImage.des.slice(1) : 'Loading...'
    // }, [bgImage])
    //
    // // set background image at initialization
    // useEffect(() => {images.length > 0 && setBgImage(images[0])}, [images])
    //
    // // callback function to update the image list of thumbnail
    // const cbUpdateImages = newImages => setImages(newImages)
    //
    // // callback function to update the background image
    // const cbUpdateMainBG = image => setBgImage(image)

    return (
        <div className="App">
            <Home />
        </div>
    )
}

export default App;
