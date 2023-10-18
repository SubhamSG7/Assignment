import React from "react";
import './MainBody.css'
import Circle from "./Circle/Circle";

const MainBody = () => {
    return (
        <div className="MainBodyDiv">
            <div className="FirstCard">
                <div className="firstflex">
                    <div className="textdivbody">
                        <h2>overview</h2>
                        <p>Montly Earning</p>
                    </div>
                    <div>
                        <label htmlFor="dropdown"></label>
                        <select name="dropdown" id="dropdown" className="selectoptionbody">
                            <option value="Quaterly">Quaterly</option>
                        </select>
                    </div>
                </div>
                <div className="barDiv">
                    <div>
                         <div className="columnDiv1"></div>
                         <p>Jan</p>
                    </div>
                    <div >
                         <div className="columnDiv2"></div>
                         <p>Feb</p>
                    </div>
                    <div>
                         <div className="columnDiv3"></div>
                         <p>March</p>
                    </div>
                    <div>
                         <div className="columnDiv4"></div>
                         <p>April</p>
                    </div>
                    <div>
                         <div className="columnDiv5"></div>
                         <p>May</p>
                    </div>
                    <div>
                         <div className="columnDiv6"></div>
                         <p>June</p>
                    </div>
                    <div>
                         <div className="columnDiv7"></div>
                         <p>July</p>
                    </div>
                    <div>
                         <div className="columnDiv8"></div>
                         <p>Aug</p>
                    </div>
                    <div>
                         <div className="columnDiv9"></div>
                         <p>Sept</p>
                    </div>
                    <div>
                         <div className="columnDiv10"></div>
                         <p>Oct</p>
                    </div>
                    <div>
                         <div className="columnDiv11"></div>
                         <p>Nov</p>
                    </div>
                    <div>
                         <div className="columnDiv12"></div>
                         <p>Dec</p>
                    </div>

                </div>
            </div>
            <div className="SecondCard">
                         <h1>Customers</h1> 
                         <p>Customers that buy product</p>                        
                         <div className="CircleDiv">
                         <Circle/>
                         </div>
            </div>
        </div>
    )
}
export default MainBody;