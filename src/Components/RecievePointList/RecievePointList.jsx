import React, { useContext } from "react";
import RecievePoint from "./RecievePoint/RecievePoint";
import CreatePoints from '../CreatePoints/CreatePoints'
import { AppContext } from "../../App";
import './RecievePointList.css'


const RecievePointList = () => {

    const {points, nanoid} = useContext(AppContext)

    return (
        <div className="RecievePointList">
            
            <CreatePoints/>
            
            {points.map((point) => {
                // console.log(point.address, point.coordinate)
                return (
                    <RecievePoint
                    // image = {point.image}
                    key = {Number(nanoid())} //key нельзя передать в пропсы
                    address = {point.address}
                    coordinates = {point.coordinates}
                    workingHours = {point.workingHours}
                    category = {point.category}
                    />
                )
            })}
        </div>
    )
}

export default RecievePointList;