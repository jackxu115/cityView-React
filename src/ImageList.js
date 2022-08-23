import './ImageList.scss'

export const ImageList = ({images, cbUpdateMainBG, cbIndex, cbUpdateRedirect}) => {

    return <div className='carousel'>
        {
            images && images.map((image, index) =>
                <div key={index}
                     // add event listener and callback function to update background image
                     onClick={() => {
                         cbUpdateMainBG(image);
                         cbIndex(index);
                         cbUpdateRedirect()
                     }}
                     style={{background: `url(${image.thumb}) no-repeat center center/cover fixed`}}>

                </div>)
        }
    </div>

}