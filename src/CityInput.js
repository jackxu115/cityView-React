import {useEffect, useState} from "react";
import {AccessKey, BasicUrl, DefaultCity} from "./consts";
import axios from "axios";
import './CityInput.css'

export const CityInput = ({cbUpdateImages}) => {
    const [city, setCity] = useState(DefaultCity)
    // event handler for key down
    const cbInput = event => {
        let newCity = event.target.value.trim().toLowerCase()
        event.key === 'Enter' &&
        newCity !== city &&
        (() => {
            setCity(newCity) // async
            console.log('new city input: ', city, newCity)
            fetchCity(newCity)
        })()
    }

    useEffect(() => {
        fetchCity(DefaultCity)
    }, [])

    const fetchCity = newCity =>
        // axios--3rd party library
        // https://www.npmjs.com/package/axios
        axios.get(BasicUrl, {
            params: {
                query: newCity,
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

            cbUpdateImages(imageList)


        }).catch(error => console.log('fetch city http error!', error))


    return <>
        <h2 className='cityName'>New City: {city}</h2>
        <input
            className='inputCity'
            type="text"
            placeholder="Search City here..."
            onKeyDown={cbInput}
        />
    </>
}
