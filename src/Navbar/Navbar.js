
import logo from "../images/logo.svg"
import hamburger from "../images/icon-hamburger.svg"
import close from "../images/icon-close.svg"
import { Fragment, useState } from "react"
import HiddenSection from "../HiddenSection"
let body = document.querySelector("body")
const Navbar = () => {

    const [hidden, setHIdden] = useState(false)
    const handleOpen = (e) =>{
        setHIdden(!hidden)
        body.classList.toggle("scroll")
    }
    return (
       <Fragment>
         <nav className="navbar">
            <div className="logo">
        <img src={logo} alt="" />
            </div>
            <div className="links">
                <li><a href="#">Pricing</a></li>
                <li><a href="#">Product</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Community</a></li>
            </div>
            <div>
            <button className="cta-btn">Get Started</button>
            </div>
            <div className="hamburger">
                {!hidden ? <img onClick={handleOpen} src={hamburger} alt="" /> :  <img onClick={handleOpen} src={close}/> }
            </div>
        </nav>
        {hidden && <HiddenSection hidden={ hidden}/>}
        {hidden && <div className="overlay-div"></div>}
       </Fragment>
    );
}

export default Navbar;