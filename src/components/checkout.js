import { Link } from "react-router-dom";
import "../css/checkout.css";
import "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import imgProduct from "../images/g92-2-500x500 1 (1).png";

function Checkout(){
    const [clickIcon,setClickIcon] = useState(false);
    const [firstName,setFirstName] = useState("");
    const [companyName,setCompanyName] = useState("");
    const [address,setAddress] = useState("");
    const [Apartament,setApartament] = useState("");
    const [City,setCity] = useState("");
    const [phone,setPhone] = useState("");
    const [Email,setEmail] = useState("");

    return(
        <div className="Checkout-Departament">
            <div className="container">
                <div className="heading-checkout">
                    <Link to={"/MyAccount"}>Account</Link>
                    <span>/</span>
                    <Link to={"/MyAccount"}>My Account</Link>
                    <span>/</span>
                    <Link to={"/Home"}>Product</Link>
                    <span>/</span>
                    <Link to={"/Cart"}>View Cart</Link>
                    <span>/</span>
                    <Link to={"/Checkout"}>CheckOut</Link>
                </div>
                <h1>Billing Details</h1>
                <div className="Checkout-Content">
                    <div className="all-Inputs">
                        <div className="col-input">
                            <div>
                                <label>First Name</label>
                                <FontAwesomeIcon className="icon" icon={faStar}/>
                            </div>
                            <input onChange={(e) => {
                                setFirstName(e.target.value);
                            }} type="text"/>
                        </div>
                        <div className="col-input">
                            <div>
                                <label>Company Name</label>
                            </div>
                            <input onChange={(e) => {
                                setCompanyName(e.target.value)
                            }} type="text"/>
                        </div>
                        <div className="col-input">
                            <div>
                                <label>Street Address</label>
                                <FontAwesomeIcon className="icon" icon={faStar}/>
                            </div>
                            <input onChange={(e) => {
                                setAddress(e.target.value)
                            }} type="text"/>
                        </div>
                        <div className="col-input">
                            <div>
                                <label>Apartment, floor, etc. (optional)</label>
                            </div>
                            <input onChange={(e) => {
                                setApartament(e.target.value)
                            }} type="text"/>
                        </div>
                        <div className="col-input">
                            <div>
                                <label>Town/City</label>
                                <FontAwesomeIcon className="icon" icon={faStar}/>
                            </div>
                            <input onChange={(e) => {
                                setCity(e.target.value)
                            }} type="text"/>
                        </div>
                        <div className="col-input">
                            <div>
                                <label>Phone Number</label>
                                <FontAwesomeIcon className="icon" icon={faStar}/>
                            </div>
                            <input onChange={(e) => {
                                setPhone(e.target.value)
                            }} type="number"/>
                        </div>
                        <div className="col-input">
                            <div>
                                <label>Email Address</label>
                                <FontAwesomeIcon className="icon" icon={faStar}/>
                            </div>
                            <input onChange={(e) => {
                                setEmail(e.target.value)
                            }} type="email"/>
                        </div>
                        <div className="col-text">
                            <div className= {`checkbox ${clickIcon ? "background": ""}`}  onClick={() => {
                                setClickIcon(!clickIcon)
                            }}>
                                <FontAwesomeIcon className={`icon ${clickIcon ? "color" : ""}`} icon={faCheck}/>
                            </div>
                            <p>Save this information for faster check-out next time</p>
                        </div>
                    </div>
                    <div className="content-checkout">
                        <div className="content-product">
                            <div>
                                <img src={imgProduct} alt="img-product"/>
                                <h3>LCD Monitor</h3>
                            </div>
                            <p>$650</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Checkout;