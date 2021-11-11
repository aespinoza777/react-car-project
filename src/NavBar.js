import React from "react"
import {Link, withRouter} from "react-router-dom"

const NavBar = () => {
    return (
        <React.Fragment>
            <Link to="/">Home Page</Link>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <Link to="/car_brands">Car Brands</Link>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <Link to="/cars">Cars</Link>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <br></br>
        </React.Fragment>
    )

}
export default withRouter(NavBar)