import React from "react";
import { recievePoints } from "../../databases/recievePoints";
import RecievePoint from "../RecievePoint/RecievePoint";

const RecievePointList = () => {

    const categoryList = recievePoints.reduce((acc, item) => {
        if (item) {
            return acc + `${item}`
        } else {
            return console.log(recievePoints)
            
        }
        
    }, '')

    return (
        <div className="RecievePointList">
            {recievePoints.map((point) => {
                return (
                    <RecievePoint
                    key = {point.name}
                    image = {point.image} 
                    address = {point.address}
                    workingHours = {point.workingHours}
                    category = {categoryList}
                    />
                )
            })}
        </div>
    )
}

export default RecievePointList;