import React, { useContext } from "react";
import RecievePoint from "./RecievePoint/RecievePoint";
import './RecievePointList.css'
import CreatePoints from '../../Pages/CreatePoints/CreatePoints'
import { AppContext } from "../../App";


const RecievePointList = () => {

const {points, nanoid} = useContext(AppContext)

    return (
        <div className="RecievePointList">
            {points.map((point) => {
                return (
                    <RecievePoint
                    // image = {point.image}
                    key = {Number(nanoid())} //key нельзя передать в пропсы
                    address = {point.address}
                    workingHours = {point.workingHours}
                    category = {point.category}
                    />
                )
            })}
            <CreatePoints/>
        </div>
    )
}

export default RecievePointList;