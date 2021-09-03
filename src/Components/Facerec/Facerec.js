import React from 'react'
import './Facerec.css'

const Facerec = (props) => {
    return (
        <div className='ma3 center'>
        <div className='absolute mt3'>
            <img id='disp' alt='' src={props.url} width='400' height='auto'/>
            <div className='bounding-box' style={{top:props.box.top,right:props.box.right,bottom:props.box.bottom,left:props.box.left}}></div>
        </div>
        </div>
    );
}

export default Facerec;