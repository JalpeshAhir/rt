import React, { useState } from 'react';
import {
    FaCheck, FaEnvelope, FaLock, FaCheckCircle, FaGoogle, FaFacebook, FaTimes
} from "react-icons/fa";
import loginImage from '../../assets/login.svg'
import logo from '../../assets/medex_m_logo.png'
import { useUserContext } from '../../context/user_context';
import './LoginComponent.css'
import Notification from '../../Utils/Notification';

const LoginComponent = ({ showscreen, setShowlogin }) => {
    const { setLogin, setRagister, } = useUserContext()

    const regEx = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    const [show, setShow] = React.useState();
    const [signuptype, setSignupType] = React.useState(1); // 1: login, 2: signup
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUserName] = useState('')
    const [mobile, setMobile] = useState('')

    const onLogin = async () => {
        if (email === '') {
            Notification('error', 'Error!', 'Please enter your email ID!')
            return;
        } else if (regEx.test(email) == false) {
            Notification('error', 'Error!', 'Please enter valid email id!')
            return;
        } else if (password == '') {
            Notification('error', 'Error!', 'Please enter your password!')
            return;
        }

        var params = {
            'email': email,
            'password': password
        }
        const res = await setLogin(params)
        if (res.success === 1)
            setShowlogin(false)
    }

    const onRegister = async () => {
        if (email == '') {
            Notification('error', 'Error!', 'Please enter your email ID!')
            return;
        } else if (regEx.test(email) == false) {
            Notification('error', 'Error!', 'Please enter valid email id!')
            return;
        } else if (password == '') {
            Notification('error', 'Error!', 'Please enter your password!')
            return;
        }
        else if (username == '') {
            Notification('error', 'Error!', 'Please enter your username!')
            return;
        }
        else if (mobile == '') {
            Notification('error', 'Error!', 'Please enter your mobile number!')
            return;
        }
        var params = {
            'email': email,
            'password': password,
            'name': username,
            'number': mobile
        }
        const res = await setRagister(params)
        if (res.success === 1)
            setShowlogin(false)
    }

    return (
        <div className='login-wrapper' >
            {/* <div className={showscreen ? "show login-screen" : " login-screen "}> */}
            <div className={showscreen ? "show login-screen" : " login-screen "}>

                <div className="login-bg" onClick={() => setShowlogin(!showscreen)}></div>
                <div className="loging-container">
                    <div className="close" onClick={() => setShowlogin(!showscreen)}><FaTimes /></div>
                    <div className="login-row">
                        <div className="login-6">
                            <div className="login-img">
                                <img src={loginImage} alt="" />
                            </div>
                        </div>
                        {signuptype == 1 ?
                            <div className="login-6">
                                <div className="login-form">
                                    {/* <div className="login-logo">
                                        <img src={logo} alt="Logo" />
                                    </div> */}
                                    <h2>Welcome Back :)</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the </p>
                                    <form>
                                        <div className="input-row">
                                            <FaEnvelope />
                                            <label>Email Address</label>
                                            <input type="text" placeholder=""
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                        </div>
                                        <div className="input-row">
                                            <FaLock />
                                            <label>Password</label>
                                            <input type="password" placeholder=""
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                            />
                                        </div>
                                    </form>
                                    <ul>
                                        {/* <li><a onClick={() => setShow(!show)} href="javascript:void(0)" className={show ? "show" : ""}><FaCheckCircle /> Remember Me </a></li> */}
                                        <a href="javascript:void(0)">Forget Password?</a>
                                    </ul>

                                    <div className="login-button">
                                        <button className="btn-login" onClick={() => onLogin()} >Login Now</button>
                                        <button className="btn" onClick={() => setSignupType(2)}>Create Account</button>
                                    </div>
                                </div>
                            </div>
                            :
                            <div className="login-6">
                                <div className="login-form">
                                    <h2>Welcome Back :)</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the </p>
                                    <form>
                                        <div className="input-row">
                                            <FaEnvelope />
                                            <label>Email Address</label>
                                            <input type="text" placeholder=""
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                        </div>
                                        <div className="input-row">
                                            <FaLock />
                                            <label>Password</label>
                                            <input type="password" placeholder=""
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                            />
                                        </div>
                                        <div className="input-row">
                                            <FaLock />
                                            <label>User Name</label>
                                            <input type="text" placeholder=""
                                                value={username}
                                                onChange={(e) => setUserName(e.target.value)}
                                            />
                                        </div>
                                        <div className="input-row">
                                            <FaLock />
                                            <label>Number</label>
                                            <input type="text" placeholder=""
                                                maxLength={10}
                                                value={mobile}
                                                onChange={(e) => { setMobile(e.target.value) }}
                                            />
                                        </div>
                                    </form>
                                    <div className="login-button">
                                        <button className="btn" onClick={() => setSignupType(1)}>Login Now</button>
                                        <button className="btn-login" onClick={() => onRegister()}  >Create Account</button>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div >
    )
}
export default LoginComponent;
