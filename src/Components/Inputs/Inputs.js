import React from 'react'
import './Inputs.css' 

const Inputs = (props) => {
    return (
        <div className='center back'>
            <div className='center c2'>
                <input className='url' type='text' placeholder='Enter URL' onChange={props.change}/>
                <button className='det grow' onClick={props.click}>Detect!</button>
            </div>
        </div>
    );
}

export default Inputs;