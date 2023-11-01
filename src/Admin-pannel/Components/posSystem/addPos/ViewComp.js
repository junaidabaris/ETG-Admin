import React from 'react';
import { AiFillEye } from 'react-icons/ai';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useGetPOSUserDetailIdQuery } from '../../all-products/allproductsApi/allProductsApi';

function ViewComp({ viewCustomerD }) {
    const [showSec, setShowSec] = useState(false);
    const handleCloseSec = () => setShowSec(false);
    const handleShowSec = () => setShowSec(true);

    const { isLoading, data: CustomerDetailData } = useGetPOSUserDetailIdQuery({ id: viewCustomerD && viewCustomerD[0]?._id, token: window.localStorage.getItem('token') });

    return (
        <>
            <span className='bg-gray'>
                <button type='button' onClick={handleShowSec} disabled={!viewCustomerD?.length}>
                    <AiFillEye />
                </button>

                <Modal show={showSec} onHide={handleCloseSec}>
                    <Modal.Header closeButton >
                        <Modal.Title style={{ textTransform: 'capitalize' }}>
                            <img style={{ width: '70px', height: '70px', marginRight: '20px' }} src={CustomerDetailData?.profilePhoto?.url}></img>
                            {CustomerDetailData?.firstname + " " + CustomerDetailData?.lastname}

                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <table id="customers">
                            <tr>
                                <td className='bold-td-text'>Name</td>
                                <td>{CustomerDetailData?.firstname + " " + CustomerDetailData?.lastname} </td>

                            </tr>
                            <tr>
                                <td className='bold-td-text'>Email</td>
                                <td>{CustomerDetailData?.email}</td>
                            </tr>
                            <tr>
                                <td className='bold-td-text'>Phone</td>
                                <td>{CustomerDetailData?.mobile}</td>
                            </tr>
                            <tr>
                                <td className='bold-td-text'>Customer Group</td>
                                <td>General</td>
                            </tr>

                            <tr>
                                <td className='bold-td-text'>Address Lane 1</td>
                                <td>{CustomerDetailData?.selectedBillingAddress?.addressLine1}</td>
                            </tr>
                            <tr>
                                <td className='bold-td-text'>Address Lane 2</td>
                                <td>{CustomerDetailData?.selectedBillingAddress?.addressLine2}</td>
                            </tr>
                            <tr>
                                <td className='bold-td-text'>Country</td>
                                <td>{CustomerDetailData?.selectedBillingAddress?.country}</td>
                            </tr>
                            <tr>
                                <td className='bold-td-text'>City</td>
                                <td>{CustomerDetailData?.selectedBillingAddress?.city}</td>
                            </tr>
                            <tr>
                                <td className='bold-td-text'>State</td>
                                <td>{CustomerDetailData?.selectedBillingAddress?.state}</td>
                            </tr>
                            <tr>
                                <td className='bold-td-text'>Zip</td>
                                <td>{CustomerDetailData?.selectedBillingAddress?.zip}</td>
                            </tr>

                        </table>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={handleCloseSec}>
                            Close
                        </Button>
                        {/* <Button variant="primary" >
                            Save Changes
                        </Button> */}
                    </Modal.Footer>
                </Modal>


            </span>
        </>
    )
}

export default ViewComp