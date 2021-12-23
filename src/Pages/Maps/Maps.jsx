import React from "react";
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import './maps.css'


const Maps = (props) => { 

    const {coordinate} = props
    console.log([...coordinate])

    const mapDefault = {
        center: [...coordinate],
        zoom: 11,
      };
 
    return (
        <YMaps>
                <Map defaultState={mapDefault} width="100%" height="50%">
                    <Placemark geometry={[...coordinate]}/>
                </Map>
      </YMaps>
    )
}

export default Maps;