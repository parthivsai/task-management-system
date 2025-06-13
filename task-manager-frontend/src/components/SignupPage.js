import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [matched, setMatched] = useState(true)
    const navigate = useNavigate();

    const handleSignup = (e) => {
        e.preventDefault();
        console.log(password, confirmPassword)
        if (password !== confirmPassword) {
            setMatched(false);
            return
        }
        setMatched(true)
        // make the api call to post to db
        console.log('Saving info in DB, redirecting to login!')
        navigate('/login');

    }

    const handleDetailsChange = (e) => {
        const { name, value } = e.target;

        if (name === 'username') {
            setUsername(value);
        } else if (name === 'password') {
            setPassword(value);
        } else if (name === 'confirmPassword') {
            setConfirmPassword(value);
        }

        console.log(name + ' changed to: ' + value);
    }

    return (
        <>
            <form onSubmit={handleSignup}>
                <label>username: </label>
                <input type='text' name='username' value={username} onChange={handleDetailsChange} />

                <label> password: </label>
                <input type='text' name='password' value={password} onChange={handleDetailsChange} />

                <label> confirm password: </label>
                <input type='text' name='confirmPassword' value={confirmPassword} onChange={handleDetailsChange} />

                {!matched && <p>password did not match!</p>}

                <button type="submit"> Signup </button>
            </form>
        </>
    )
}

export default SignupPage