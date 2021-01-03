import React,{useRef,useState} from 'react'
import {Form,Card,Button,li} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navigations from './Navigations'


export default function SignUp() {

    const emailRef=useRef()
    const passwordref=useRef()
    const passwordconfirm=useRef()

    return (
        <>
        <Navigations/>
        <div className="justify-content-center">
                    <Card className="w-50 h-100 ">
                        <Card.Body className="w-100">
                            <h2 className="text-centre bold mt3 mb3">
                                Sign Up
                            </h2>
                            <Form>
                                <Form.Group id='email'>
                                    <Form.Label>
                                        Email
                                    </Form.Label>
                                    <Form.Control type="email" ref={emailRef} placeholder="Email Address"></Form.Control>
                                </Form.Group>

                                <Form.Group id='password'>
                                    <Form.Label>
                                        Password
                                    </Form.Label>
                                    <Form.Control type="password" ref={passwordref} placeholder="Password"></Form.Control>
                                </Form.Group>

                                <Form.Group id='confirmpassword'>
                                    <Form.Label>
                                        Confirm Password
                                    </Form.Label>
                                    <Form.Control type="password" ref={passwordconfirm} placeholder="Confirm Password"></Form.Control>
                                </Form.Group>
                            </Form>
                            <Button type="submit" className="btn-success w-100">
                                Submit 
                            </Button>
                        </Card.Body>

                        <h5 className="w-100 text-centre mt-2 mb3">Already Have a account? 
                        Sign In
                        
                        </h5>
                    </Card>

                    </div>     
        </>
    )
}
