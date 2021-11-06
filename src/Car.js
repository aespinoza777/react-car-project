import React from "react"

const Car = (props) => {
    return (
    <>
        <h1>{props.car.make}</h1>
        <h1>{props.car.model}</h1>
        <h1>{props.car.year}</h1>
        <img src={props.car.image} width="500" />
        <h1>{props.car.price}</h1>
    </>
    )
}


export default Car