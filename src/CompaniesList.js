import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Dropdown} from 'react-bootstrap'

export default function CompaniesList() {
    return (<>


            <div style={{paddingLeft:"170px", paddingRight:"100px",paddingTop:"50px"}} >
        
            <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Companies List
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">G5</Dropdown.Item>
                <Dropdown.Item href="#/action-2">G10</Dropdown.Item>
                <Dropdown.Item href="#/action-3">F6</Dropdown.Item>
                <Dropdown.Item href="#/action-2">F7</Dropdown.Item>
                <Dropdown.Item href="#/action-3">F10</Dropdown.Item>
                <Dropdown.Item href="#/action-2">F10</Dropdown.Item>
                <Dropdown.Item href="#/action-3">F11</Dropdown.Item>

            </Dropdown.Menu>
            </Dropdown>
            </div>

    
    </>
    )
}
