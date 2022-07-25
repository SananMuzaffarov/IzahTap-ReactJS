import React from "react";
import {FaSearch} from "react-icons/fa";
import profile from '../Assets/aboutpicture.jpeg';

const RightBar = () => {
    return(
        <div className="rightBar">
            <div className="header">
                <nav className="navi">
                    <div className="navLink">
                        <ul>
                            <li><a href="/"><i><FaSearch/></i>Account</a></li>
                            <li><a href="/"><i><FaSearch/></i>Security</a></li>
                            <li><a href="/"><i><FaSearch/></i>Info</a></li>
                            <li><a href="/"><i><FaSearch/></i>Blling</a></li>
                            <li><a href="/"><i><FaSearch/></i>Notifications</a></li>
                        </ul>
                    </div>
                </nav>
            </div>

            <div className="photoPart">
                <div className="profilePhoto">
                    <img src={profile} />
                </div>
                <div className="profileButton">
                    <button type="button">UPLOAD NEW PHOTO</button>
                    <p>Allowed JPG, GIF or PNG. Max size of 800K</p>
                </div>
            </div>

            <div className="formPart">
                <form id="au">
                     <div class="inputBox">
                        <input type="text" placeholder="Username" />
                        <input type="text" placeholder="Name" />
                    </div>
                    <div class="inputBox">
                         <input type="email" placeholder="Email" />
                        <input type="text" placeholder="Role" />
                     </div>
                     <div class="inputBox">
                        <select><option>Active</option></select>
                         <input type="text" placeholder="Company" />
                    </div>
                    <button type="button">Save Changes</button>
                    <button type="button" id="cancel">Cancel</button>
                </form>
            </div>
        </div>
    );
}
export default RightBar;