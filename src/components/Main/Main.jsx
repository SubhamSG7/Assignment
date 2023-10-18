import React from "react";
import './Main.css';
import MainHeader from "../MainHeader/MainHeader";
import MainBody from "../MainBody/MainBody";


const Main=()=>{
    return(
        <>
        <div className="MainContainer">
                <MainHeader/>
                <MainBody/>
        </div>
        </>
    )
}
export default Main;