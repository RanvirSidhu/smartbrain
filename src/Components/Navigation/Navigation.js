import React from 'react' 
import './Navigation.css'

const Navigation = (props) => {
    if(props.route === 'home') {
    return (
        <nav>
            <p onClick={() => props.change('signin')} className='f3 link dim black underline pa3 pointer ma0'>Sign Out</p>
        </nav>
    );
    }
    else
    {   
        return (
            <nav>
                <p onClick={() => props.change('signin')} className='f3 link dim black underline pa3 pointer ma0'>Sign In</p>
                <p onClick={() => props.change('register')} className='f3 link dim black underline pa3 pointer ma0'>Register</p>
            </nav>
        );
    }
}

export default Navigation;