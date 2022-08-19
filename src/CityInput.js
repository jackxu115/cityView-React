import {useState} from "react";
import {AccessKey, BasicUrl, DefaultCity} from "./consts";
import axios from "axios";

export const CityInput = () => {
    const [city, setCity] = useState(DefaultCity)
    const [images, setImages] = useState([])

    // event handler for key down
    const cbInput = event => {
        let newCity = event.target.value.trim().toLowerCase()
        event.key === 'Enter' &&
        newCity !== city &&
        (() => {
            setCity(newCity) // async
            console.log('new city input: ', city, newCity)
            fetchCity()
        })()
    }

    const fetchCity = () => {
        // axios--3rd party library
        // https://www.npmjs.com/package/axios
        axios.get(BasicUrl, {
            params: {
                query: city,
                orientation: 'landscape',

            },
            headers: {
                Authorization: `Client-ID ${AccessKey}`
            }
        }).then(response => {
            console.log('raw data', response)
            let {data: {results}} = response
            console.log('result--->', results)
            // reorganize the data structure, make one array like this:
            // [
            //     {des:'sunshine', regular: 'http..', thumb: 'http..'},
            //     {des:'sunshine', regular: 'http..', thumb: 'http..'},
            //     {...},
            //     ...
            // ]
            let imageList = results.map(item => ({
                des: item.alt_description,
                regular: item.urls.regular,
                thumb: item.urls.thumb
            }))

            console.log('tidied data:', imageList)
            setImages(imageList)


        }).catch(error => console.log('fetch city http error!', error))

    }

    return (
        <div>
            <input
                type="text"
                placeholder="Search City here..."
                onKeyDown={cbInput}
            />
            {JSON.stringify(images)}
        </div>
    )
}
