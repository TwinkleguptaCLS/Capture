/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
//import icons
import clock from '../img/clock.svg';
import diaphragm from '../img/money.svg';
import money from '../img/money.svg';
import teamwork from '../img/teamwork.svg';
import home2 from '../img/home2.png';

const ServicesSection = ()=>{
    return(
        <div className="services">
            <div className="description">
                <h2>High <span>quality</span> services</h2>
                <div className="cards">
                    <div className="card">
                        <div className="icon">
                            <img src={clock}/>
                            <h3>Efficient</h3>
                        </div>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src={teamwork}/>
                            <h3>Teamwoerk</h3>
                        </div>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src={diaphragm}/>
                            <h3>Diaphragm</h3>
                        </div>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src={money}/>
                            <h3>Affordable</h3>
                        </div>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
                    </div>
                </div>

            </div>
            <div className="image">
                <img src = {home2}/>
            </div>
        </div>
    )
}

export default ServicesSection;