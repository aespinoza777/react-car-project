import React,{Component} from "react"
import Car from "./Car"

class NewCar extends Component{
    constructor(props){
        super(props)
        this.state = {
            make: "",
            model: "",
            image: "",
            price: "",
            year: "",
        }
    }
    render() {
        const handleChange = (event) => {
            this.setState({
                [event.target.name]: event.target.value
            })
        } 

        const handleSubmit = (event) => {
            event.preventDefault()
            fetch("http://localhost:3000/cars", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    accept: "application/json",

                },
                
                body: JSON.stringify(this.state)
            })
            .then(res => res.json())
            .then(car => {
                this.props.setShowForm(false)
                this.props.addCar(car)
            })
        }
        return(
            <form onSubmit={handleSubmit}>
                <label htmlFor="make">Make</label>
                <input type="text" name="make" onChange={handleChange}></input>
                <label htmlFor="model">Model</label>
                <input type="text" name="model" onChange={handleChange}></input>
                <label htmlFor="image">img url</label>
                <input type="text" name="image" onChange={handleChange}></input>
                <label htmlFor="price">Price</label>
                <input type="number" name="price" onChange={handleChange}></input>
                <label htmlFor="year">Year</label>
                <input type="number" name="year" onChange={handleChange}></input>
                <button type="submit">Add Car</button>

            </form>
        )
    }
}

export default NewCar