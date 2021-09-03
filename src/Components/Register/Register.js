import React from 'react'


const Signin = (props) => {
    return (
        <div className='b'>
            <form >
            <div className='card center cen2'>
            <fieldset className=' b--transparent ph0 mh0 center cen2'>
                    <legend className='f2'>Register</legend>
                    <div className='center cen2'>
                        <div className='ma2 center cen2'>
                            <label for='name'>Name</label>
                            <input className='sign' id='Name'  type='text' />
                        </div>
                        <div className='ma2 center cen2'>
                            <label for='email'>Email</label>
                            <input className='sign' id='email'  type='email' />
                        </div>
                        <div className='ma2 center cen2'>
                            <label>Password</label>
                            <input className='sign' type='password' />
                        </div>
                        <input onClick={() => props.change('home')} className='b ph3 pv2 ba b--black bg-transparent grow pointer f6 cen2' type='submit' value='Register' />
                    </div>
            </fieldset>
            </div>
            </form>
        </div>
    );
}

export default Signin;