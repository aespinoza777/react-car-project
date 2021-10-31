import React from "react"
import {Link, withRouter} from "react-router-dom"

const NavBar = () => {
    return (
        <React.Fragment>
            <Link to="/">Home Page</Link> 
            <Link to="/car_brands">Car Brands</Link>
            <Link to="/cars">Cars</Link>
        </React.Fragment>
    )

}
export default withRouter(NavBar)