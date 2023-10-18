import React from "react";
import './Nav.css'
import dashboard from '../NavImages/dashboard.png';
import customers from '../NavImages/customers.jpg';
import help from '../NavImages/help.png';
import income from '../NavImages/income.jpg';
import promote from '../NavImages/promote.jpg';
import product from '../NavImages/product.jpg';
import profile from '../NavImages/profile.jpg';


const Nav=()=>{
    return(
        <>
        <div>
            <div className="NavDiv">
                <img src={dashboard} alt="NavImages" className="NavImages"/><p>Dashboard</p>
            </div>
            <div>
                <div className="NavgroupDiv">
                    <img src={dashboard} alt="NavImages" className="NavImages" /> <p>Dashboard</p>
                </div>
                <div className="NavgroupDiv">
                    <img src={product} alt="NavImages" className="NavImages" /> <p>Products</p>
                </div>
                <div className="NavgroupDiv">
                    <img src={customers} alt="NavImages" className="NavImages" /><p>Customers</p>
                </div>
                <div className="NavgroupDiv">
                    <img src={income} alt="NavImages" className="NavImages" /><p>Income</p>
                </div>
                <div className="NavgroupDiv">
                    <img src={promote} alt="NavImages" className="NavImages"/> <p>Promote</p>
                </div>
                <div className="NavgroupDiv">
                    <img src={help} alt="NavImages" className="NavImages" /> <p>Help</p>
                </div>
            </div>
            <div className="NavProfileDiv">
                 <img src={profile} alt="NavImages" className="NavProfileImage" /> 
                 <div>
                    <p>Jhon</p>
                    <p>Product-Manager</p>
                 </div>
            </div>
        </div>
        </>

    )
}
export default Nav;