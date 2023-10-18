import React from "react";
import './HomePage.css'
import Nav from "../Nav/Nav";
import Main from "../Main/Main";

const HomePage = () => {
    return (
        <div id="Container">
            <div id="NavContainer">
                <Nav/>
            </div>
            <div id="MainContainer">
                <Main/>
            </div>
        </div>
    )
}
export default HomePage;