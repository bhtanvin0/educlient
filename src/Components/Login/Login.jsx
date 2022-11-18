import React, { useContext, useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';


const Login = () => {

    const [error, setError] = useState('');

    const { signIn, setLoading, googleLogin, logInWithGithub } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handelLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                form.reset();
                setError('');
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error(error)
                setError(error.message)
            })

            .finally(() => {
                setLoading(false);
            })

    }
    const handleGoogleLogin = () => {
        googleLogin()
            .then(() => {
                navigate(from, { replace: true });
            })
            .catch((error) => {
                const err = error.message;
                setError(err)
            })
    }

    const handleGithubLogin = () =>{
        logInWithGithub()
            .then(() => {
                navigate(from, { replace: true });
            })
            .catch((error) => {
                const err = error.message;
                setError(err)
            })
    }

    return (
        <Form onSubmit={handelLogin}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name='email' type="email" placeholder="Enter email" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name='password' type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Login
            </Button>
            <Button onClick={handleGoogleLogin} className='m-3'> Login With Google</Button>
            <Button onClick={handleGithubLogin} className='m-3'> Login with Github</Button>
            
            <Form.Text className='text-danger'>
                {error}
            </Form.Text>

        </Form>
    );
};

export default Login;