import React, {useEffect}from 'react'
import Navigations from './Navigations'
import Papa from 'papaparse';
import table from 'react-bootstrap'
import  CompaniesList  from "./CompaniesList";
import  Charts  from "./Charts";


export default function Dashboard() {
    
    


    return (
        <>
        <Navigations/>

        <h1 style={{paddingLeft:"650px",paddingTop:"50px"}}>
            Dashboard Analytics    
        </h1>
        
        
        <CompaniesList/>
        <Charts/>

        
        </>
    )
}
