import React from 'react'
function LoginSignup() {
    return (
        <>
            <div  className="alert alert-{{message.tags}} alert-dismissible fade show" role="alert">
                message 
                <button type="button"  className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>


            <div  className="container">
                <div  className="forms-container">
                    <div  className="login-signup">


                        <form action="/login/" method="POST"  className="sign-in-form">

                            <h2  className="title">Log In</h2>
                            <div  className="input-field">
                                <i  className="fas fa-user"></i>
                                <input name="email" type="text" placeholder="Email" />
                            </div>
                            <div  className="input-field">
                                <i  className="fas fa-lock"></i>
                                <input name="password" type="password" placeholder="Password" />
                            </div>
                            <input type="submit" name="login" value="Login"  className="btn solid" />

                        </form>


                        <form action="/signup/" method="POST"  className="sign-up-form">
                            <h2  className="title">Sign up</h2>
                            <div  className="input-field">
                                <i  className="fas fa-envelope"></i>
                                <input required name="email" type="email" placeholder="Email" />
                            </div>
                            <div  className="input-field">
                                <i  className="fas fa-lock"></i>
                                <input required id="password" name="password" type="password" placeholder="Password" />
                            </div>
                            <div  className="input-field">
                                <i  className="fas fa-lock"></i>
                                <input required id="cpassword" name="cpassword" type="password" placeholder="Confirm Password" />
                            </div>
                            <p  className="pass-warning" id="password-status"></p>
                            <input type="submit"  className="btn" value="Sign up" />

                        </form>
                    </div>
                </div>

                <div  className="panels-container">
                    <div  className="panel left-panel">
                        <div  className="content">
                            <h3>New here ?</h3>
                            <p>
                                If you don;t have an account please click here and create an account.
                    </p>
                            <button  className="btn transparent" id="sign-up-btn">Sign up</button>
                        </div>
                        <img src="img/static/login.svg"  className="image" alt="" />
                    </div>
                    <div  className="panel right-panel">
                        <div  className="content">
                            <h3>One of us ?</h3>
                            <p>
                                If you already have an account please login.
                    </p>
                            <button  className="btn transparent" id="sign-in-btn">Log In</button>
                        </div>
                        <img src="img/static/signup.svg"  className="image" alt="" />
                    </div>
                </div>
            </div>

        </>
    )
}

export default LoginSignup
