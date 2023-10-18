import React from "react";
import './MainHeader.css'
import balance from './images/balance.png';
import earning from './images/earning.png';
import orders from './images/orders.png';
import sales from './images/sales.png';

const MainHeader = () => {
    return (
        <div className="MainHeaderContainer">
            <div className="MainHeaderHeading">
                <div><h3>Hello,Shahrukh</h3></div>
                <input type="serach" placeholder="Search" />
            </div>
            <div className="HeaderCardFlex">
                <div className="HeaderCard">
                    <div>
                        <img src={earning} alt="imageFolder" className="MainHeaderImage" />
                    </div>
                    <div>
                        <p className="typeP">Earning</p>
                        <p className="PriceP">$198k</p>
                        <span className="spanTag"><span className="colorChange">+37.8%</span>This Month</span>
                    </div>
                </div>
                <div className="HeaderCard">
                    <div>
                        <img src={orders} alt="imageFolder" className="MainHeaderImage" />
                    </div>
                    <div>
                        <p className="typeP">Orders</p>
                        <p className="PriceP">$2.4k</p>
                        <span className="spanTag"><span className="colorChange1">-2%</span>This Month</span>
                    </div>
                </div>
                <div className="HeaderCard">
                    <div>
                        <img src={balance} alt="imageFolder" className="MainHeaderImage" />
                    </div>
                    <div>
                        <p className="typeP">Balance</p>
                        <p className="PriceP">$2.4k</p>
                        <span className="spanTag"><span className="colorChange1">-2%</span>This Month</span>
                    </div>
                </div>
                <div className="HeaderCard">
                    <div>
                        <img src={sales} alt="imageFolder" className="MainHeaderImage" />
                    </div>
                    <div>
                        <p className="typeP">Total Sales</p>
                        <p className="PriceP">$89k</p>
                        <span className="spanTag"><span className="colorChange">+11%</span>This Week</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MainHeader;