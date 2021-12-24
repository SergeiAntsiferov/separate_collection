import React, { useContext } from "react";
import RecievePoint from "./RecievePoint/RecievePoint";
import CreatePoints from '../CreatePoints/CreatePoints'
import { AppContext } from '../../utils/AppContext';
import './RecievePointList.css'
import { nanoid } from "../../utils/nanoid";



const RecievePointList = () => {

    const {points} = useContext(AppContext)

    return (
        <div className="RecievePointList">
            
            <CreatePoints/>
            
            {points.map((point) => {
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