import React, { Component,useState } from 'react'
import * as d3 from 'd3';
import datas from './true.csv';
import preddatas from './pred.csv';
import {Form,Card,Button,li} from 'react-bootstrap'
import { Line,Bar,HorizontalBar,Pie } from 'react-chartjs-2';
import { some } from 'd3';





export default class Charts extends Component {

    /*constructor(){
        super();
        
        var scum=[]
        d3.csv(datas, async function(CSV) { 
            await scum.push(CSV.Open)
            return CSV 
        
        });
        
        this.state={
            dats:scum
        }

        
    }*/

    constructor(props) {
      super(props);
      this.state = {
        isLoading: true
      };
    }


    
    render() {

      var king=[125,299,400,320,380,240,422,212,232,137,239,330,260,360,132,321,341,221,321,212]
      var dates=[]


      
     /*d3.csv(datas, function(CSV) {  
        dates.push(CSV.Date)
        king.push(CSV.True)

        
      });*/

      var wing=[113,233,412,321,341,231,422,212,210,132,321,341,221,321,233,412,321,341,231,422]

      //d3.csv(preddatas, async function(BCSV) {  
        //await wing.push(BCSV.Predicted)
      //});


      





      const state = {
        labels: [1,2,3,32,2,3,1,1,2,2],
        datasets: [
          {
            label: 'My First dataset',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: [65, 59, 80, 81, 56, 55, 40]
          }
        ]
    }

    const some=1123


        return (<>
        
        
            

          <div className="justify-content-center" style={{paddingLeft:"150px", paddingRight:"150px", height:"500px", width:"100vw"}} >
        
            <Line 
          data={
            
                
            {
              labels: ["1-May-2019","1-May-2019","10-June-2019","25-Aug-2019","4-Nov-2019","30-Dec-2019","7-Jan-2020","30-Jan-2020","16-Feb-2020","3-Mar-2020","19-Mar-2020","20-June-2020","30-July-2020","3-Sep-2020","19-Oct-2020","20-Nov-2020"],
              datasets: [
                
                {
                  label: 'House Predicted Prices',
                  fill:false,
                  data: wing,
                  display:true,
                  lineTension: 0,
                  pointRadius: 0,
                  borderColor: 'red',
              
                  backgroundColor:"Red"  
                                    
                },
                {
                  label: 'House True Prices',
                  fill:false,
                  data: king,
                  lineTension: 0,
                  pointRadius: 0.5,
                  borderColor: 'blue',

                                    
                }
              ]
            }



          }
          options={{
            maintainAspectRatio:false,
            title:{
              display:true,
              text:'House Prices',
              fontSize:20,
              
              
            },
            legend: {
              display:true,
              position:'top'
            }
          }}
        />
        




        </div>


        <div className="justify-content-center" style={{paddingLeft:"150px", paddingRight:"150px",paddingTop:"100px", height:"200px", width:"50vw"}} >
        
        <HorizontalBar data={
          {
            labels: ["1-May-2019","1-May-2019","10-June-2019","25-Aug-2019","4-Nov-2019","30-Dec-2019","7-Jan-2020","30-Jan-2020","16-Feb-2020","3-Mar-2020","19-Mar-2020","20-June-2020"],
            datasets: [
              {
                label: 'Predicted Prices',
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                hoverBorderColor: 'rgba(255,99,132,1)',
                data: wing
              },

              {
                label: 'True Prices in Islamabad ',
                data: king,  
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'red',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                hoverBorderColor: 'rgba(255,99,132,1)',
              
                borderColor: 'blue',

                                  
              }
            ]
        }

        } />
       </div>


      </>
      
        );
      }
    
        async componentDidMount() {

          await new Promise(resolve => setTimeout(resolve, 2000));
          console.log("Abubakar")

         }
    
    }
