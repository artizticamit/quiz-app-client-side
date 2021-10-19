import React from 'react'

function Login() {
    return (
        <div className="login-page bg-image">
            <div id="bg">
            
            </div>
            <div className="page-container">
                <div className="login-container">
                    <div className="form-header">
                        
                        <div className="login-txt">
                            Log in
                        </div> 
                        <div className="dark-side">
        
                        </div>  
                    </div>
        
                
                        <form action="/login" method='post'>
                            <div className="form-body">
                                
                            <input type="text" name="username" id="user-name" placeholder="User name" />
                            <input type="password" name="password" id="pwd" placeholder="Password" />
                            {/* <a class="forg-pwd">Forgot your password?</a> */}
                            {/* <input type="button" value="Login" /> */}
                            <button className='login-submit-btn' type='submit'>Login</button>
                            </div>
                        </form>
        
                </div>
            </div>
            
        </div>
    )
}

export default Login
