import React from 'react'
import './Signin.css'

const Signin = (props) => {
    return (
        <div className='b'>
            <form >
            <div className='card center cen2'>
            <fieldset className=' b--transparent ph0 mh0 center cen2'>
                    <legend className='f2'>Sign In</legend>
                    <div className='center cen2'>
                        <div className='ma2 center cen2'>
                            <label for='email'>Email</label>
                            <input className='sign' id='email'  type='email' />
                        </div>
                        <div className='ma2 center cen2'>
                            <label>Password</label>
                            <input className='sign' type='password' />
                        </div>
                        <input onClick={() => props.change('home')} className='b ph3 pv2 ba b--black bg-transparent grow pointer f6 cen2' type='submit' value='Sign in' />
                        <p   onClick={() => props.change('register')}  className='pointer'>Register</p>
                    </div>
            </fieldset>
            </div>
            </form>
        </div>
    );
}

export default Signin;