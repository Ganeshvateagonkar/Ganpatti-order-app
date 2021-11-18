import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Row, Col, Form, Button, FormControl, FormGroup, FormLabel } from 'react-bootstrap';





const RegisterScreen = () => {

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');


    const submitHandler = (e) => {
        e.prevent.default();
    }


    return (
        <div >
            <h1>Sign Up</h1>


            <Form onSubmit={submitHandler} style={{ width: '60%' }}>
                <FormGroup controlId='name'>
                    <FormLabel>Name</FormLabel>
                    <FormControl
                        type='name'
                        placeholder='Enter name'
                        value={name}
                        required
                        onChange={(e) => setName(e.target.value)}
                    ></FormControl>
                </FormGroup>

                <FormGroup controlId='email'>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl
                        type='email'
                        placeholder='Enter email'
                        value={email}
                        required
                        onChange={(e) => setEmail(e.target.value)}
                    ></FormControl>
                </FormGroup>

                <FormGroup controlId='password'>
                    <FormLabel>Password</FormLabel>
                    <FormControl
                        type='password'
                        placeholder='Enter password'
                        value={password}
                        required
                        onChange={(e) => setPassword(e.target.value)}
                    ></FormControl>
                </FormGroup>

                <FormGroup controlId='confirmPassword'>
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl
                        type='password'
                        placeholder='Confirm password'
                        value={confirmPassword}
                        required
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    ></FormControl>
                </FormGroup>

                <Button type='submit' variant='primary' className="my-2">
                    Register
                </Button>
            </Form>

            <Row className='py-3'>
                <Col>
                    Have an Account?{' '}
                    <Link to={'/login'}>
                        Login
                    </Link>
                </Col>
            </Row>
        </div>
    )
}
export default RegisterScreen;