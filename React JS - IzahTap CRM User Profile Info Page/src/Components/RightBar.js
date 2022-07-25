import React from "react";
import {FaSearch} from "react-icons/fa";

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

        <div className="formPart">
            <form id="au">
                <div className="inputBox">
                    <textarea placeholder="Bio"></textarea>
                </div>
                 <div class="inputBox">
                    <input type="text" placeholder="Birth Date" />
                    <input type="text" placeholder="Number" />
                </div>
                <div class="inputBox">
                     <input type="text" placeholder="Website" />
                    <input type="text" placeholder="Country" />
                 </div>
                <div class="inputBox">
                    <select><option>English</option></select>
                </div>
                <div class="genderSelection">
                    <p>Gender</p>
                    <div className="genders">
                        <input type='radio' id='male' name='radio' />
                        <label for='male'>Male</label>
                        <input type='radio' id='female' name='radio' />
                        <label for='female'>Female</label>
                        <input type='radio' id='other' name='radio' />
                        <label for='other'>Other</label>
                    </div>    
                </div>
                <button type="button">Save Changes</button>
                <button type="button" id="cancel">Cancel</button>
            </form>
        </div>
        
    </div>
    );
}
export default RightBar;