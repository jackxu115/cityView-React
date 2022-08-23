import {useEffect, useState} from "react";
import {CityInput} from "./CityInput";
import {ImageList} from "./ImageList";
import './Home.scss'
import {useNavigate} from "react-router-dom";


export const Home = ({cbUpdateHomeImage}) => {
    const [images, setImages] = useState([])
    const [bgImage, setBgImage] = useState('')
    const [index, setIndex] = useState(null)
    const [redirect, setRedirect] = useState(false)

    let navigate = useNavigate()

    const jumpTo = (path) => {
        /*can include more logic actions in history.push*/
        navigate(path, { replace: true }) // replace true or false to replace the page in history
    }

    // update the index
    useEffect(()=> {redirect && jumpTo(`/picture/${index}`)}, [index])

    // update the title of website
    useEffect(() => {
        document.title = !!bgImage && bgImage?.des && bgImage.des ? bgImage.des.charAt(0).toUpperCase() + bgImage.des.slice(1) : 'Loading...'
        cbUpdateHomeImage(bgImage)
        // setRedirect(true)
    }, [bgImage])

    // set background image at initialization
    useEffect(() => {images.length > 0 && setBgImage(images[0])}, [images])

    // callback function to update the image list of thumbnail
    const cbUpdateImages = newImages => setImages(newImages)

    // callback function to update the index
    const cbIndex = id => setIndex(id)

    // callback function to update the background image
    const cbUpdateMainBG = image => setBgImage(image)

    // callback function to enable redirect 'Picture 'page
    const cbUpdateRedirect = () => setRedirect(true)

    return <div className="Home" style={{background: bgImage && bgImage.regular && `url('${bgImage.regular}') no-repeat center center/cover fixed`}}>
        <div className='searchBar'>
            <CityInput cbUpdateImages={cbUpdateImages}/>
        </div>
        <ImageList
            images={images}
            cbUpdateMainBG={cbUpdateMainBG}
            cbIndex={cbIndex}
            cbUpdateRedirect={cbUpdateRedirect}
        />
    </div>

}