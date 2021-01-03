import React,{useRef,useState} from 'react'
import {Form,Card,Button,li} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navigations from './Navigations'


export default function Login() {
    const emailRef=useRef()
    const passwordref=useRef()

    return (
        <>
        <Navigations/>
                    <Card className="mr4 ml4 w-50 space-left2" >
                        <Card.Body className="mr4 ml4 w-100">
                            <h2 className="text-centre bold mt3 mb3">
                                Login
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
                            </Form>
                            <Button type="submit" className="btn-success w-100">
                                Login
                            </Button>
                        </Card.Body>

                        <h5 className="w-100 text-centre mt-2 mb3">Dont have a Account? 
                        Sign Up
                        
                        </h5>
                    </Card>


        </>
    )
}
