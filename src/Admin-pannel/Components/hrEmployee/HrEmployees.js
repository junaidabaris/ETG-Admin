import React from "react";
import { Table } from "react-bootstrap";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
function  HrEmployees(){
    const data = [
        {
          name:'October 2022',
         
          pv: 0,
          amt: 9,
        },
        {
          name: 'November 2022',
          
          pv: 0,
          amt: 9,
        },
        {
          name: 'December 2022',
          
          pv: 0,
          amt: 9,
        },
        {
          name: 'January 2023',
          
          pv: 9,
          amt: 9,
        },
        {
          name: 'February 2023',
          
          pv: 1,
          amt: 9,
        },
        {
          name: 'March 2023',
          
          pv: 2,
          amt: 9,
        },
        {
          name: 'April 2023',
          
          pv: 0,
          amt: 9,
        },
        {
          name: 'May 2023',
          
          pv: 0,
          amt: 9,
        },
        {
          name: 'June 2023',
          
          pv: 0,
          amt: 9,
        },
        {
          name: 'July 2023',
          
          pv: 0,
          amt: 9,
        },
        {
          name: 'August 2023',
          
          pv: 0,
          amt: 9,
        },
        {
          name: 'September 2023',
          
          pv: 2,
          amt: 9,
        },
        
       
       
      ];
    return(
        <>
       <div className="container" style={{ marginLeft: 60, marginRight: 60 }}>
       <div className="d-flex">
            <div className='bg-white col-md-2 m-0 p-0  border-secondary mr-3' style={{ width: '100', height: 130 }}>
                        <div className=" m-0 p-0 ">
                            <h6 className='fs-5 mt-2 ml-1 ' style={{ color: '#525252' }}>Employees</h6>
                            <div className='justify-content-center d-flex fs-4'>
                                <h1>20</h1>
                            </div>
                            {/* <div className='ml-1'>
                                <span className='fs-6 text-success m-0 p-0 '><AiOutlineArrowUp />∞ %</span>
                                <span className='fs-6 m-0 p-0 '>since last period</span>
                            </div> */}

                        </div>
                    </div>
                  
                   




            </div>
            <div className="d-flex">
            <div className="col-md-10"style={{ marginTop: 30, marginRight: 60 }}>
                <h5 className='m-0 p-0' style={{ color: '#006666' }}>Event Status</h5>
                        <hr className=' border-primary m-auto pt-2' />
                        <BarChart
          width={800}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 0,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="10" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#8884d8" />
          
        </BarChart> 
                        </div>
           

            </div>
            <div className="d-flex">
            <div className="col-md-5"style={{ marginTop: 30, marginRight: 60 }}>
                <h5 className='m-0 p-0' style={{ color: '#006666' }}>Top Departments</h5>
                        <hr className=' border-primary m-auto pt-2' />
                        <Table striped className='mt-3 border-light m-0 p-0'>
                            <thead className='m-0 p-0' >
                                <tr className='m-0 p-0'>
                                    <th >  Department</th>
                                    <th>Hires</th>
                                    <th>Employees</th>

                                   
                                </tr>
                            </thead>
                            <tbody>
                                <tr >
                                    <td>Research & Devlopment</td>
                                    <td> 7</td>
                                    <td> 7</td>
                                </tr>
                                <tr >
                                    <td>Profesional Services</td>
                                    <td> 7</td>
                                    <td> 7</td>
                                </tr>
                               
<tr>
                                

                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    

                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    

                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    

                                </tr>
                            </tbody>
                        </Table>


                </div>
            <div className="col-md-5"style={{ marginTop: 30, marginRight: 60 }}>
                <h5 className='m-0 p-0' style={{ color: '#006666' }}>Top Paid Job Position</h5>
                        <hr className=' border-primary m-auto pt-2' />
                        <Table striped className='mt-3 border-light m-0 p-0'>
                            <thead className='m-0 p-0' >
                                <tr className='m-0 p-0'>
                                    <th >  Job Position</th>
                                    <th>Contract</th>
                                    <th>Avg.Salary</th>

                                   
                                </tr>
                            </thead>
                            <tbody>
                                <tr >
                                    <td>Consultant</td>
                                    <td> 4</td>
                                    <td> $4,262.50</td>
                                </tr>
                                <tr >
                                    <td>HR Manager</td>
                                    <td> 1</td>
                                    <td> $4,522.50</td>
                                </tr>
                               
<tr>
                                    

                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>

                                    <td></td>
                                    
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    

                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td> 
                                    <td></td> 

                                </tr>
                            </tbody>
                        </Table>


                </div>
            </div>
       </div>
       </>
    )
}
export default HrEmployees