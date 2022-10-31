
import React, {useRef , useEffect, useState} from 'react'
import { GmapApi } from '../../types/GmapApi'
type AutocompleteProps = {
    updatePlace: (place: google.maps.places.PlaceResult) => void
    map: {
        apiLoaded: boolean,
        instance: google.maps.Map
        api: GmapApi
        ref : HTMLElement | null
    }
}

let autoOptions : google.maps.places.AutocompleteOptions = {
    types: [], // all types
}


const AutoCompleteBox = (props: AutocompleteProps) => {
    const input = useRef<HTMLInputElement>(null)
    const [address, setAddress] = useState('')

    useEffect(() => {
        const autoComplete = new props.map.api.places.Autocomplete(input.current as HTMLInputElement, autoOptions)
        autoComplete.addListener('place_changed', () => {
            let place = autoComplete.getPlace()
            console.log(place)
            props.updatePlace(place)
        })

        autoComplete.bindTo("bounds", props.map.instance);

        // console.log(props.map.api.places)
        return () => {
            autoComplete.unbindAll()
            props.map.api.event.clearInstanceListeners(autoComplete)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])



    return (
        <input type="text" id="pac-input" className="controls" style={{
            width: '100%',
            height: '30px',
            padding: '5px',
            boxSizing: 'border-box',
        
        }} placeholder="Enter a location"
            value={address}
            ref={input}
            onChange={(e) => setAddress(e.target.value)}
        />
    )
}

export default AutoCompleteBox