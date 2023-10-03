import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { AiFillPlusSquare } from 'react-icons/ai';

function TotalPayableComp({ totalPosProductsPrice, bringedDiscountVal, bringedOrderTaxVal, showCombo }) {

    const [smShow3, setSmShow3] = useState(false);

    const calculatedOrderTaxAmount = totalPosProductsPrice * bringedOrderTaxVal?.order_tax / 100;
    const calculatedFinalTotalPayableAmount = totalPosProductsPrice + calculatedOrderTaxAmount - bringedDiscountVal.discount

    return (
        <>
            <div className='bg-black'>
                <div>
                    Total Payable
                    <button onClick={() => setSmShow3(true)} className="me-2">
                        <AiFillPlusSquare />
                    </button>

                    <Modal
                        size="sm"
                        show={smShow3}
                        onHide={() => setSmShow3(false)}
                        aria-labelledby="example-modal-sizes-title-sm"
                    >
                        <Modal.Header closeButton>
                            <Modal.Title id="example-modal-sizes-title-sm">
                                <p> SHIPPING</p>
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Footer>
                            <p>Shipping</p>
                            <form>
                                <input className='form-control' placeholder='0' type='text'></input>
                            </form>
                            <Button variant="primary" >
                                Update
                            </Button>
                        </Modal.Footer>
                    </Modal>

                </div>
                <div>
                    {/* {showCombo.grandTotal} */}
                    {calculatedFinalTotalPayableAmount ? calculatedFinalTotalPayableAmount : totalPosProductsPrice}
                </div>
            </div>

        </>
    )
}

export default TotalPayableComp