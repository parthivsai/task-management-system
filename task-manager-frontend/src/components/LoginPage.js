import React, { useState } from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleDetailsChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;

        if (name === 'username') {
            setUsername(value);
        } else if (name === 'password') {
            setPassword(value);
        }
        console.log(name + ' changed to: ' + value);
    }

    const handleLogin = () => {
        // fetch call to fetch auth token from microservice
    }

    return (
        <>
            <h2> Welcome to login page!</h2>
            <form onSubmit={handleLogin}>
                <label>username:</label>
                <input type="text" name='username' value={username} onChange={handleDetailsChange} />

                <label> password </label>
                <input type='text' name='password' value={password} onChange={handleDetailsChange} />

                <button type="submit"> Login </button>

                <p>new to the application? <Link to='/signup'> Signup </Link></p>

            </form>

        </>
    )
}

export default LoginPage    