import React from 'react';
import Tilt from 'react-tilt'
import brain from './brain.png'
import './Logo.css'
 
const Logo = () => {
    return (
        <div className='box'>
            <Tilt className="Tilt br2 shadow-2 pa2" options={{ max : 25 }}>
            <div className="Tilt-inner"> <img clasname='pa5'src={brain} alt='Brain'/> </div>
            </Tilt>
        </div>
    );
}

export default Logo