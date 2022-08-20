import './ImageList.scss'

export const ImageList = ({images}) => {
    return <div className='carousel'>
        {
            images && images.map((image, index) => <div key={index} style={{background: `url(${image.thumb}) no-repeat center center fixed`}}></div>)
        }
    </div>

}