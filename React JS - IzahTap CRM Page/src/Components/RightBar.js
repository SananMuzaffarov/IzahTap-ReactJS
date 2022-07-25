/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import myImage from '../Assets/Beared Guy02-min 1.png';
const RightBar = () => {
    return(
        <div className="rightbar">
            <div className="blueBackground">
                <div className="text">
                    <h2>Hello Devs !</h2>
                    <p>We are on a mission to help developers like you to build beautiful projects for free.</p>
                </div>
            </div>
            <div className="grayBackground">
                <div className="profile">
                    <div className="image">
                        <img src={myImage}/>
                    </div>
                    <div className="profileH"><h3>Vugar Hasanov - <span>Admin, Founder</span></h3></div>
                </div>
            </div>
        </div>
    );
}
export default RightBar;