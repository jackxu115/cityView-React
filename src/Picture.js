import {useNavigate} from "react-router-dom";
import './Picture.scss'

export const Picture = ({image}) => {
    console.log(image)
    // use a function based on navigate to route
    let navigate = useNavigate()
    const jumpTo = (path) => {
        /*can include more logic actions in history.push*/
        navigate(path, {replace: true}) // replace true or false to replace the page in history
    }

    return (
        <div className="Picture" style={{background: `url(${image.regular}) no-repeat center center/cover fixed`}}>
            <h2>{image.des}</h2>
            <button onClick={() => navigate("/")}>Home</button>
        </div>
    )
}