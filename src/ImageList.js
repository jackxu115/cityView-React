import './ImageList.scss'

export const ImageList = ({images, updateMainBG}) => {
    return <div className='carousel'>
        {
            images && images.map((image, index) =>
                <div key={index}
                     onClick={ () => {updateMainBG(image)}}
                     style={{background: `url(${image.thumb}) no-repeat center center/cover fixed`}}></div>)
        }
    </div>

}