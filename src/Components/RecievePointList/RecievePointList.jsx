import React, { useEffect, useState } from "react";
import { recievePoints } from "../../databases/recievePoints";
import RecievePoint from "./RecievePoint/RecievePoint";
import './RecievePointList.css'
import CreatePoints from '../../Pages/CreatePoints/CreatePoints'


const RecievePointList = () => {



    const [points, setPoints] = useState([])

    useEffect (() => {
        const response = recievePoints
        setPoints([...response])
    }, [])
    console.log(points)

    return (
        <div className="RecievePointList">
            {points.map((point) => {
                return (
                    <RecievePoint
                    key = {point.address}
                    // image = {point.image} 
                    address = {point.address}
                    workingHours = {point.workingHours}
                    category = {point.category}
                    />
                )
            })}
            <CreatePoints points={points} setPoints={setPoints}/>
            {/* <CreatePoints/> */}
        </div>
    )
}

export default RecievePointList;