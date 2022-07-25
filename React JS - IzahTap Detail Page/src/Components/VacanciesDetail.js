/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import myImage from '../Assets/Rectangle 9.png';
function Vacancies(){
    return(
        <>
        <div className="imagePart">
            <img src={myImage} />
        </div>

        <div className="info">
            <div class="job">
                <h2>UI / UX Designer</h2>    
                <button type="button">UnPaid</button>
            </div>
            <div class="btn">
                <button type="button">Share</button>
            </div> 
            <div className="text">
                <p>Baku, Azerbaijan</p>
            </div>
        </div>

        <div className="overview">
            <h4>Overview</h4>
            <div className="overviewText">
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
            <div className="overviewBtn">
                <button>APPLY THE JOB</button>
            </div>
        </div>
        </>
    );
}
export default Vacancies;