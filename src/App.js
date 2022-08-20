import './App.scss';
import {CityInput} from "./CityInput";
import {ImageList} from "./ImageList";
import {useEffect, useState} from "react";

function App() {

    const [images, setImages] = useState([])
    const [bgImage, setBgImage] = useState('')

    useEffect(() => {
        document.title = !!bgImage && bgImage?.des && bgImage.des ? bgImage.des.charAt(0).toUpperCase() + bgImage.des.slice(1) : 'Loading...'
    }, [bgImage])

    useEffect(() => {images.length > 0 && setBgImage(images[0])}, [images])

    const updateImages = newImages => setImages(newImages)
    const updateMainBG = image => {
        console.log('new background image set by ImageList component', image)
        setBgImage(image)
    }

    return <div className="App" style={{background: bgImage && bgImage.regular && `url('${bgImage.regular}') no-repeat center center/cover fixed`}}>
        <div className='searchBar'>
            <CityInput cbUpdateImages={updateImages}/>
        </div>
        <ImageList images={images} updateMainBG={updateMainBG}/>
    </div>

}

export default App;
