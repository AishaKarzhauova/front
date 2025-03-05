import React, { useEffect, useState } from "react";
import "./Login.css";
import { FaEnvelope, FaLock } from "react-icons/fa";

const Login = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsVisible(true);
        }, 500); // Delay for effect
    }, []);

    return (
        <div className="login-container">
            <div className="left-side">
                <p className={`fade-in-text ${isVisible ? "visible" : ""}`}>
                  Welcome to the Future of Voting
                    <br />
                    A blockchain-based voting system ensuring security, transparency, and trust through smart contracts.but in russian and with like typing animation 
                </p>
            </div>
            <div className="right-side">
                <div className="login-box">
                    <h2>We are <strong>Login</strong></h2>
                    <p>Welcome back! Log in to your account.</p>
                    
                    <div className="input-group">
                        <FaEnvelope className="icon" />
                        <input type="email" placeholder="Email" />
                    </div>

                    <div className="input-group">
                        <FaLock className="icon" />
                        <input type="password" placeholder="Password" />
                    </div>

                    <button className="login-btn">Log in</button>

                    <p className="button-after">Button After</p>
                </div>
            </div>
        </div>
    );
};

export default Login;
