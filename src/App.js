import './App.scss';
import {CityInput} from "./CityInput";
import {ImageList} from "./ImageList";
import {useState} from "react";

function App() {

    const [images, setImages] = useState([])

    const updateImages = newImages => setImages(newImages)

    return <div className="App">
        <div className='searchBar'>
            <CityInput cbUpdateImages={updateImages}/>
        </div>
        <ImageList images={images}/>
    </div>

}

export default App;
