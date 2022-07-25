import React from "react";
import { FaDribbble } from "react-icons/fa";
const Jobtypes = (props) => {
    return(
        <div className="jobtypes">
            <div className="icon">
               <i><FaDribbble /></i>
            </div>
            <div className="jobtypesinfo">
                <h3>{props.type}</h3>
                <p>{props.info}</p>
                <button type="button">APPLY NOW</button>
            </div>
        </div>
    );
}
export default Jobtypes;