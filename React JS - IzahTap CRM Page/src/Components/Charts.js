import React from "react";
import { FaDribbble } from "react-icons/fa";
import {FaArrowUp} from "react-icons/fa";

const Charts = (props) => {
    return(
        <div className="charts">
           <div className="chartIcon">
               <i><FaDribbble /></i>
            </div>
            <div className="chartInfo">
                <h2>{props.count}</h2>
                <p>{props.type}</p>
                <div className="line">
                    <i><FaArrowUp/></i>
                </div>
            </div>
        </div>
    );
}
export default Charts;