import {Home} from "./Home";
import {Navigate, Route, Routes} from "react-router-dom";
import {Picture} from "./Picture";
import {useEffect, useState} from "react";


function App() {

    const [image, setImage] = useState('')

    const cbUpdateHomeImage = image => setImage(image)

    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home cbUpdateHomeImage={cbUpdateHomeImage}/>} />
                <Route path="/picture/:id" element={<Picture image={image}/>} />
                {/*<Route path="/home" element={<Navigate to="ho" />} />*/}
                {/*<Route path="/picture/:id"*/}
                {/*       element={redirect ? <Navigate to="/home"/> : <Picture />} />*/}
            </Routes>
        </div>
    )
}

export default App;
