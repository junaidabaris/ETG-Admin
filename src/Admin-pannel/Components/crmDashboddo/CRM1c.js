import React from "react";
import { CiSettings } from "react-icons/ci"
import { AiOutlinePlus } from "react-icons/ai"
import { AiOutlineClockCircle } from "react-icons/ai"
import { GrMail } from "react-icons/gr"
import { IoLogoWhatsapp } from "react-icons/io"
import { BsStar } from "react-icons/bs"
import { AiFillPhone } from "react-icons/ai"
import ProgressBar from 'react-bootstrap/ProgressBar';
import { pink } from "@mui/material/colors";
import add from "../../../assets/img/MitchellAdmin122.png"
function CRM1c(){
    return(
        <>
        <div className="container">
            <div className="row">
                <div className="col-3">
                   <div className="row">
                    <div className="col-7 mt-2">
                    <span className="align-top fs-6 fw-bold">New</span>
                    </div>
                    <div className="col-5">
                    <span className="align-item-right"> 
                            <button className="btn">
                                <CiSettings/>
                            </button>
                            <button className="btn">
                                <AiOutlinePlus/>
                            </button>
                        </span>
                    </div>
                   </div>
                   <div className="row">
                    <div className="col-7">
                    <div className=" mt-3">
                    <ProgressBar variant="success" now={50} />
                    </div>
                   
                    </div>
                    <div className="col-5">
                    <div className=" mt-3 text-right">
                    <span className="fs-7">80,000</span>
                    </div>
                    </div>
                   </div>
                   <div className="d-flex mt-2">
                   <div className='bg-white col-md-12 m-0 p-0 mb-1  border-left border-right border-top border-bottom border-primary mr-3' style={{ width: '100', height: 130 }}>
                   <div className=" m-0 p-0 ">
                            <h6 className='fs-5 mt-2 ml-1 ' style={{ color: '#525252' }}>Quote for 150 carpets</h6>
                            <span className='fs-6 m-0 p-0 '>$ 40,000.00</span>
                            <div className="">
                                <button className="ml-1 fs-9" style={{height:21,width:60, borderRadius:15, backgroundColor:"pink"}}>
                                    Product
                                </button>
                            </div>
                            <div className='row mt-2'>
                            <div className="col-8 ml-2">
                                <span>
                                    <BsStar/>
                                </span>
                                <span className="ml-1">
                                    <BsStar/>
                                </span>
                                <span className="ml-1">
                                    <BsStar/>
                                </span>
                                <span className="ml-2" >
                                <AiOutlineClockCircle />
                                </span>
                                </div>  
                                <div className="col-3">
                                    <img src={add}
                                    style={{width:35,height:30}}
                                    alt="MitchellAdmin122"/>
                                    </div>  
                            
                            </div>

                        </div>
                    </div>
                   </div>
                   <div className="d-flex">
                   <div className='bg-white col-md-12 m-0 p-0  border-left border-right border-top border-bottom border-primary mr-3' style={{ width: '100', height: 130 }}>
                   <div className=" m-0 p-0 ">
                            <h6 className='fs-5 mt-2 ml-1 ' style={{ color: '#525252' }}>Quote for 12 Tables</h6>
                            <span className='fs-6 m-0 p-0 '>$ 40,000.00</span>
                            <div className="">
                                <button className="ml-1 fs-9" style={{height:21,width:60, borderRadius:15, backgroundColor:"pink"}}>
                                    Product
                                </button>
                            </div>
                            <div className='row mt-2'>
                            <div className="col-8 ml-2">
                                <span>
                                    <BsStar/>
                                </span>
                                <span className="ml-1">
                                    <BsStar/>
                                </span>
                                <span className="ml-1">
                                    <BsStar/>
                                </span>
                                <span className="ml-2" >
                                <AiFillPhone style={{color:"green"}}/>
                                </span>
                                <span className="ml-2" >
                                <IoLogoWhatsapp style={{color:"green"}}/>
                                </span>
                                </div>  
                                <div className="col-3">
                                    <img src={add}
                                    style={{width:35,height:30}}
                                    alt="MitchellAdmin122"/>
                                    </div>  
                            
                            </div>

                        </div>
                    </div>
                   </div>
                </div>
                <div className="col-3">
                   <div className="row">
                    <div className="col-7 mt-2">
                    <span className="align-top fs-6 fw-bold">Qualified</span>
                    </div>
                    <div className="col-5">
                    <span className="align-item-right"> 
                            <button className="btn">
                                <CiSettings/>
                            </button>
                            <button className="btn">
                                <AiOutlinePlus/>
                            </button>
                        </span>
                    </div>
                   </div>
                   <div className="row">
                    <div className="col-7">
                    <div className=" mt-3">
                    <ProgressBar variant="success" now={70} />
                    </div>
                   
                    </div>
                    <div className="col-5">
                    <div className=" mt-3 text-right">
                    <span className="fs-7">51,300</span>
                    </div>
                    </div>
                   </div>
                   <div className="d-flex mt-2">
                   <div className='bg-white col-md-12 m-0 p-0 mb-1  border-left border-right border-top border-bottom border-primary mr-3' style={{ width: '100', height: 130 }}>
                   <div className=" m-0 p-0 ">
                            <h6 className='fs-6 mt-2 ml-1 ' style={{ color: '#525252' }}>Global Solutions: Furnitures</h6>
                            <span className='fs-6 m-0 p-0 '>$ 38,000.00</span>
                            <div className="">
                                <button className="ml-1 fs-9" style={{height:21,width:60, borderRadius:15, backgroundColor:"pink"}}>
                                    Design
                                </button>
                            </div>
                            <div className='row mt-2'>
                            <div className="col-8 ml-2">
                                <span>
                                    <BsStar/>
                                </span>
                                <span className="ml-1">
                                    <BsStar/>
                                </span>
                                <span className="ml-1">
                                    <BsStar/>
                                </span>
                                <span className="ml-2" >
                                <AiOutlineClockCircle />
                                </span>
                                </div>  
                                <div className="col-3">
                                    <img src={add}
                                    style={{width:35,height:30}}
                                    alt="MitchellAdmin122"/>
                                    </div>  
                            
                            </div>

                        </div>
                    </div>
                   </div>
                   <div className="d-flex">
                   <div className='bg-white col-md-12 m-0 p-0  border-left border-right border-top border-bottom border-primary mr-3' style={{ width: '100', height: 130 }}>
                   <div className=" m-0 p-0 ">
                            <h6 className='fs-5 mt-2 ml-1 ' style={{ color: '#525252' }}>Quote for 600 Chairs</h6>
                            <span className='fs-6 m-0 p-0 '>$ 22,500.00</span>
                            <div className="">
                                <button className="ml-1 fs-9" style={{height:21,width:60, borderRadius:15, backgroundColor:"pink"}}>
                                    Product
                                </button>
                            </div>
                            <div className='row mt-2'>
                            <div className="col-8 ml-2">
                                <span>
                                    <BsStar/>
                                </span>
                                <span className="ml-1">
                                    <BsStar/>
                                </span>
                                <span className="ml-1">
                                    <BsStar/>
                                </span>
                                <span className="ml-2" >
                                <AiFillPhone style={{color:"green"}}/>
                                </span>
                                <span className="ml-2" >
                                <IoLogoWhatsapp style={{color:"green"}}/>
                                </span>
                                </div>  
                                <div className="col-3">
                                    <img src={add}
                                    style={{width:35,height:30}}
                                    alt="MitchellAdmin122"/>
                                    </div>  
                            
                            </div>

                        </div>
                    </div>
                   </div>
                   <div className="d-flex mt-2">
                   <div className='bg-white col-md-12 m-0 p-0  border-left border-right border-top border-bottom border-primary mr-3' style={{ width: '100', height: 130 }}>
                   <div className=" m-0 p-0 ">
                            <h6 className='fs-7 mt-1 ml-1 ' style={{ color: '#525252' }}>Info About Services</h6>
                            <span className='fs-7 m-0 p-0 '>$ 25,000.00</span><br/>
                            <span className=' m-0 p-0 '>Deco Addict</span>
                            <div className="">
                                <button className="ml-1 fs-9" style={{height:21,width:60, borderRadius:15, backgroundColor:"pink"}}>
                                    Product
                                </button>
                            </div>
                            <div className='row mt-1'>
                            <div className="col-8 ml-2">
                                <span>
                                    <BsStar/>
                                </span>
                                <span className="ml-1">
                                    <BsStar/>
                                </span>
                                <span className="ml-1">
                                    <BsStar/>
                                </span>
                                <span className="ml-2" >
                                <AiFillPhone style={{color:"green"}}/>
                                </span>
                                <span className="ml-2" >
                                <IoLogoWhatsapp style={{color:"green"}}/>
                                </span>
                                </div>  
                                <div className="col-3">
                                    <img src={add}
                                    style={{width:35,height:30}}
                                    alt="MitchellAdmin122"/>
                                    </div>  
                            
                            </div>

                        </div>
                    </div>
                   </div>
                </div>
                <div className="col-3">
                   <div className="row">
                    <div className="col-7 mt-2">
                    <span className="align-top fs-6 fw-bold">Proposition</span>
                    </div>
                    <div className="col-5">
                    <span className="align-item-right"> 
                            <button className="btn">
                                <CiSettings/>
                            </button>
                            <button className="btn">
                                <AiOutlinePlus/>
                            </button>
                        </span>
                    </div>
                   </div>
                   <div className="row">
                    <div className="col-7">
                    <div className=" mt-3">
                    <ProgressBar>
      <ProgressBar  variant="success" now={50} key={1} />
      <ProgressBar variant="warning" now={25} key={2} />
      <ProgressBar  variant="danger" now={25} key={3} />
    </ProgressBar>
                    </div>
                   
                    </div>
                    <div className="col-5">
                    <div className=" mt-3 text-right">
                    <span className="fs-7">79,100</span>
                    </div>
                    </div>
                   </div>
                   <div className="d-flex mt-2">
                   <div className='bg-white col-md-12 m-0 p-0 mb-1  border-left border-right border-top border-bottom border-primary mr-3' style={{ width: '100', height: 130 }}>
                   <div className=" m-0 p-0 ">
                            <h6 className='fs-6 mt-2 ml-1 ' style={{ color: '#525252' }}>Mordern Open Space</h6>
                            <span className='fs-6 m-0 p-0 '>$ 4,500.00</span>
                            <div className="">
                                <button className="ml-1 fs-9" style={{height:21,width:60, borderRadius:15, backgroundColor:"#267cfc"}}>
                                    Information
                                </button>
                            </div>
                            <div className='row mt-2'>
                            <div className="col-8 ml-2">
                                <span>
                                    <BsStar/>
                                </span>
                                <span className="ml-1">
                                    <BsStar/>
                                </span>
                                <span className="ml-1">
                                    <BsStar/>
                                </span>
                                <span className="ml-2" >
                                <AiFillPhone style={{color:"green"}}/>
                                </span>
                                <span className="ml-2" >
                                <IoLogoWhatsapp style={{color:"green"}}/>
                                </span>
                                </div>  
                                <div className="col-3">
                                    <img src={add}
                                    style={{width:35,height:30}}
                                    alt="MitchellAdmin122"/>
                                    </div>  
                            
                            </div>

                        </div>
                    </div>
                   </div>
                   <div className="d-flex">
                   <div className='bg-white col-md-12 m-0 p-0  border-left border-right border-top border-bottom border-primary mr-3' style={{ width: '100', height: 130 }}>
                   <div className=" m-0 p-0 ">
                            <h6 className='fs-6 mt-1 ml-1 ' style={{ color: '#525252' }}>Office Design and Architecture</h6>
                            <span className='fs-7 m-0 p-0 '>$ 9,000.00</span><br/>
                            <span className=' m-0 p-0 '>Ready Mat</span>
                            <div className="">
                                <button className="ml-1 fs-9" style={{height:21,width:60, borderRadius:15, backgroundColor:"#08a8c4"}}>
                                    Consulting
                                </button>
                            </div>
                            <div className='row mt-1'>
                            <div className="col-8 ml-2">
                                <span>
                                    <BsStar/>
                                </span>
                                <span className="ml-1">
                                    <BsStar/>
                                </span>
                                <span className="ml-1">
                                    <BsStar/>
                                </span>
                                <span className="ml-2" >
                                <AiFillPhone style={{color:"green"}}/>
                                </span>
                                <span className="ml-2" >
                                <IoLogoWhatsapp style={{color:"green"}}/>
                                </span>
                                </div>  
                                <div className="col-3">
                                    <img src={add}
                                    style={{width:35,height:30}}
                                    alt="MitchellAdmin122"/>
                                    </div>  
                            
                            </div>

                        </div>
                    </div>
                   </div>
                   <div className="d-flex mt-2">
                   <div className='bg-white col-md-12 m-0 p-0  border-left border-right border-top border-bottom border-primary mr-3' style={{ width: '100', height: 130 }}>
                   <div className=" m-0 p-0 ">
                            <h6 className='fs-7 mt-1 ml-1 ' style={{ color: '#525252' }}>5 VIP Chairs</h6>
                            <span className='fs-7 m-0 p-0 '>$ 56,00.00</span><br/>
                            <span className=' m-0 p-0 '>Azure Interior</span>
                            <div className="">
                                <button className="ml-1 fs-9" style={{height:21,width:60, borderRadius:15, backgroundColor:"#f7f49c"}}>
                                    Services
                                </button>
                            </div>
                            <div className='row mt-1'>
                            <div className="col-8 ml-2">
                                <span>
                                    <BsStar/>
                                </span>
                                <span className="ml-1">
                                    <BsStar/>
                                </span>
                                <span className="ml-1">
                                    <BsStar/>
                                </span>
                                <span className="ml-2" >
                                <GrMail style={{color:"#a80d05"}}/>
                                </span>
                                <span className="ml-2" >
                                <IoLogoWhatsapp style={{color:"green"}}/>
                                </span>
                                </div>  
                                <div className="col-3">
                                    <img src={add}
                                    style={{width:35,height:30}}
                                    alt="MitchellAdmin122"/>
                                    </div>  
                            
                            </div>

                        </div>
                    </div>
                   </div>
                   <div className="d-flex mt-2">
                   <div className='bg-white col-md-12 m-0 p-0  border-left border-right border-top border-bottom border-primary mr-3' style={{ width: '100', height: 130 }}>
                   <div className=" m-0 p-0 ">
                            <h6 className='fs-5 mt-1 ml-1 ' style={{ color: '#525252' }}>Need 20 Desks</h6>
                            <span className='fs-5 m-0 p-0 '>$ 60,00.00</span><br/>
                           
                            <div className="">
                                <button className="ml-1 fs-9" style={{height:21,width:60, borderRadius:15, backgroundColor:"#08a8c4"}}>
                                    Consulting
                                </button>
                            </div>
                            <div className='row mt-1'>
                            <div className="col-8 ml-2">
                                <span>
                                    <BsStar/>
                                </span>
                                <span className="ml-1">
                                    <BsStar/>
                                </span>
                                <span className="ml-1">
                                    <BsStar/>
                                </span>
                                <span className="ml-2" >
                                <GrMail style={{color:"#a80d05"}}/>
                                </span>
                                <span className="ml-2" >
                                <IoLogoWhatsapp style={{color:"green"}}/>
                                </span>
                                </div>  
                                <div className="col-3">
                                    <img src={add}
                                    style={{width:35,height:30}}
                                    alt="MitchellAdmin122"/>
                                    </div>  
                            
                            </div>

                        </div>
                    </div>
                   </div>
                   
                </div>
                <div className="col-3">
                   <div className="row">
                    <div className="col-7 mt-2">
                    <span className="align-top fs-6 fw-bold">Won</span>
                    </div>
                    <div className="col-5">
                    <span className="align-item-right"> 
                            <button className="btn">
                                <CiSettings/>
                            </button>
                            <button className="btn">
                                <AiOutlinePlus/>
                            </button>
                        </span>
                    </div>
                   </div>
                   <div className="row">
                    <div className="col-7">
                    <div className=" mt-3">
                    <ProgressBar variant="success" now={100} />
                    </div>
                   
                    </div>
                    <div className="col-5">
                    <div className=" mt-3 text-right">
                    <span className="fs-7">19,800</span>
                    </div>
                    </div>
                   </div>
                   <div className="d-flex mt-2">
                   <div className='bg-white col-md-12 m-0 p-0 mb-1  border-left border-right border-top border-bottom border-primary mr-3' style={{ width: '100', height: 130 }}>
                   <div className=" m-0 p-0 ">
                   <h6 className='fs-7 mt-1 ml-1 ' style={{ color: '#525252' }}>Distributor Contracts</h6>
                            <span className='fs-7 m-0 p-0 '>$ 19,800.00</span><br/>
                            <span className=' fs-87m-0 p-0 '>Gemini Furniture</span>
                            <div className="">
                                <button className="ml-1 fs-9" style={{height:21,width:60, borderRadius:15, backgroundColor:"#267cfc"}}>
                                    Information
                                </button>
                                <button className="ml-1 fs-9" style={{height:21,width:60, borderRadius:15, backgroundColor:"#20cbd4"}}>
                                    Other
                                </button>
                            </div>
                            <div className='row mt-2'>
                            <div className="col-8 ml-2">
                                <span>
                                    <BsStar/>
                                </span>
                                <span className="ml-1">
                                    <BsStar/>
                                </span>
                                <span className="ml-1">
                                    <BsStar/>
                                </span>
                                <span className="ml-2" >
                                <AiFillPhone style={{color:"green"}}/>
                                </span>
                                <span className="ml-2" >
                                <IoLogoWhatsapp style={{color:"green"}}/>
                                </span>
                                </div>  
                                <div className="col-3">
                                    <img src={add}
                                    style={{width:35,height:30}}
                                    alt="MitchellAdmin122"/>
                                    </div>  
                            
                            </div>

                        </div>
                    </div>
                   </div>
                   
                </div>
            </div>
        </div>
        </>
    )
}
export default CRM1c