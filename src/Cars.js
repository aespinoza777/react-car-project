import React, {useState,useEffect} from "react"
import Car from "./Car"
import NewCar from "./NewCar"

const Cars = () => {
    const [cars, setCars] = useState([]) 
    const [showForm,setShowForm] = useState(false)
    
    useEffect(() => {
        fetch("http://localhost:3000/cars")
        .then(res => res.json())
        .then(cars => setCars(cars))
    }, [])

    const handleClick = () => {
        setShowForm(!showForm)

    }
    
    const addCar = (car) => {
        const updatedCars = [...cars, car]
        setCars(updatedCars)

    }
    return (
        <>
        <button onClick={handleClick}>Add Car</button>
        {showForm && <NewCar addCar={addCar} setShowForm={setShowForm}/>}
        {cars.map(car => <Car key={car.id} car={car}/>)}
</>
    )

}

export default Cars