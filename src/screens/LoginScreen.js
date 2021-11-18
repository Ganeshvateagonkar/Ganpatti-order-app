import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Row, Col, Form, Button, FormControl, FormGroup, FormLabel } from 'react-bootstrap';





const LoginScreen = ({ location, history }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');





    const submitHandler = (e) => {
        e.prevent.default();
    }


    return (
        <div className="justify-content-center">

            <h1 className="text-align-center">Sign In</h1>
            <Form onSubmit={submitHandler} style={{ width: '50%' }}>
                <FormGroup controlId="email">
                    <FormLabel>Email Address</FormLabel>
                    <FormControl
                        type="email"
                        placeholder="enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}

                    ></FormControl>

                </FormGroup>
                <FormGroup controlId="password">
                    <FormLabel>Password</FormLabel>
                    <FormControl
                        type="Password"
                        placeholder="enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}

                    ></FormControl>
                </FormGroup>

                <Button
                    type="submit"
                    variant="primary"
                    className="my-3"
                >Sign In</Button>


            </Form>
            <Row className="py-3 justify-content-center">
                <Col>
                    New Customer?{''}
                    <Link to='/register'>
                        Register
                    </Link>
                </Col>
            </Row>

        </div>


    )

}

export default LoginScreen;