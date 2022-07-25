import React from 'react';
import personPic from '../Assets/person.png';

const Mainpic = () => {
    return(
        <section className="pictures">
        <div className='mainpic'>
            <div className="person_img">
                <img src={personPic} alt="" />
            </div>
            <div className="person_img">
                <img src={personPic} alt="" />
            </div>
            <div className="person_img">
                <img src={personPic} alt="" />
            </div>
        </div>
        <div className='mainpic' id='sa'>
                <div className="person_img">
                    <img src={personPic} alt="" />
                </div>
                <div className="person_img">
                    <img src={personPic} alt="" />
                </div>
                <div className="person_img">
                    <img src={personPic} alt="" />
                </div>
        </div>
        </section>
    );
}
export default Mainpic;