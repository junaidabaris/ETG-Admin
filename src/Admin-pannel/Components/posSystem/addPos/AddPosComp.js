import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './AddPosComp.css';
import { FaPencilAlt } from 'react-icons/fa'
import { RiDeleteBin6Line } from 'react-icons/ri'
import ModalCombo from './../../../Pages/addComboProduct/ModalCombo';

// import { FiEdit } from 'react-icons/fi';
import RightSection from './RightSection';
import ColorFulTable from './ColorFulTable';
import TotalPayableComp from './TotalPayableComp';
import OrderTax from './OrderTax';
import Discount from './Discount';
import ThirdInput from './ThirdInput';
import ViewComp from './ViewComp';
import AddCustomer from './AddCustomer';
import { useAddPurchaseCartMutation } from '../../all-products/allproductsApi/allProductsApi';
import axios from 'axios';
import { AiFillAmazonCircle } from 'react-icons/ai';
import { FiEdit } from 'react-icons/fi';
import { token } from '../../../common/TokenArea';
import ModalProducts from './ModalProducts';

function AddPosComp() {
  const [viewCustomerD, setViewCustomerD] = useState();
  const [modalShow, setModalShow] = useState(false)
  const [showCombo, setShowCombo] = useState([])
  const [showCombo2, setShowCombo2] = useState([])
  const [cartDataa, setcartData] = useState(null)
  const [show, setShow] = useState(true);
  const [smShow, setSmShow] = useState(false);
  const [bringedDiscountVal, setBringedDiscountVal] = useState({ discount: '', discount_type: '' });
  const [bringedOrderTaxVal, setBringedOrderTaxVal] = useState({ order_tax: '' });

  const token = window.localStorage.getItem('token')
  const handDown = async (e) => {
    if (e.key === 'Enter') {
      const clone = e.target.value
      try {
        const res = await axios.get(`https://onlineparttimejobs.in/api/user/search/${clone}`, {
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
            'Authorization': 'Bearer ' + token
          },
        })
        setViewCustomerD(res.data)
        setSmShow(true)
      } catch (error) {
        alert('Some went wrong')
        setSmShow(false)
      }
    }
  }

  const [setCart, { isLoading, data: cartData, isError: isCartsError }] = useAddPurchaseCartMutation();

  const bringDiscountInpVal = (discountVal) => {
    setBringedDiscountVal(discountVal)
  };
  const bringOrderTaxInpVal = (orderTaxVal) => {
    setBringedOrderTaxVal(orderTaxVal)
  };

  const SaveData = async (val) => {
    if (!val) {
      setModalShow(false)
      debugger
      const arr = [...showCombo?.cart?.products]
      const aaa = arr.map((item) => {
        return { productId: item.productId, variantId: item.variantId,qty:item.qty }
      })
      const resp = await axios.post('https://onlineparttimejobs.in/api/pos/cart/get', { products: aaa, shippingCost: 0, discount_type: bringedDiscountVal.discount_type, discount: bringedDiscountVal.discount, order_tax: bringedOrderTaxVal.order_tax },
        {
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
            'Authorization': 'Bearer ' + token
          },
        }
      )
      setShowCombo(resp.data)
    } else {
      setModalShow(false)
      console.log(showCombo , val);
      const arr = [...showCombo, ...val]
      const aaa = arr.map((item) => {
        return { productId: item.productId, variantId: item.variantId,qty:item.qty }
      })
      const resp = await axios.post('https://onlineparttimejobs.in/api/pos/cart/get',
        { products: aaa, shippingCost: 0, discount_type: bringedDiscountVal.discount_type, discount: bringedDiscountVal.discount, order_tax: bringedOrderTaxVal.order_tax },
        {
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
            'Authorization': 'Bearer ' + token
          },
        }
      )
      setShowCombo(resp.data.cart.products)
      setShowCombo2(resp.data)
    }

  }
  let totalPosProductsItem = 0;
  let totalPosProductsPrice = 0;
  for (let i = 0; i < showCombo?.cart?.products?.length; i++) {
    totalPosProductsItem = totalPosProductsItem + showCombo?.cart?.products[i]?.count;
    totalPosProductsPrice = totalPosProductsPrice + showCombo?.cart?.products[i]?.variant_id?.sale_rate
  }

  const sendDataCus = (item) => {
    setSmShow(false)
  }

  return (
    <>
      <div className='main_pos_wrapper'>
        <div className='leftside'>
          <form>
            <div className='topInp'>

              <input type='text' name='user' placeholder='type here' onKeyDown={handDown}></input>



              <span className='bg-gray'>
                <button type='button'>
                  <FaPencilAlt />
                </button>
              </span>

              <ViewComp viewCustomerD={viewCustomerD} />
              <AddCustomer />

            </div>


            {smShow && viewCustomerD.map((item, i) => {
              return <span onClick={() => sendDataCus(item)} style={{ backgroundColor: 'gainsboro', padding: '2px', marginTop: '2px', marginBottom: '2px', border: '1px solid black', display: 'block', width: '90%', cursor: 'pointer' }}>{item.firstname + " " + item.lastname}</span>
            })}

            {/* <div className='secInp'>
              <select className="form-select" aria-label="Default select example">
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div> */}

            <ThirdInput setCart={setCart} setcartData={setcartData} setModalShow={setModalShow} setShow={setShow} />
          </form>


          {modalShow && <ModalProducts
            show={modalShow}
            onHide={() => setModalShow(false)}
            cartData={cartDataa}
            SaveData={SaveData}
            showCombo={showCombo2}
          />}


          <div className='table_wrapper'>



            <table className='table'>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Qty</th>
                  <th>Subtotal</th>
                  <th>
                    <RiDeleteBin6Line />
                    {/* <button className='del-btn'>
                     
                    </button> */}
                  </th>
                </tr>
              </thead>
              <tbody style={{ height: '310px' }}>
                {showCombo && showCombo?.map((item, i) => {
                  return <tr key={i}>
                    <td style={{ display: 'table-cell' }}>
                      <span className='txt-bold ps-1'>{item.name}</span>
                    </td>
                    <td className='txt-bold ps-1 text-end' style={{ display: 'table-cell' }}>{item?.price?.sale_rate}</td>
                    <td className='txt-bold ps-1 text-end' style={{ display: 'table-cell' }}>{item?.qty}</td>
                    <td className='txt-bold ps-1 text-end' style={{ display: 'table-cell' }}>{item?.subtotal}</td>
                    <td className='txt-bold ps-1' style={{ display: 'table-cell' }}></td>
                  </tr>
                })}

              </tbody>
            </table>

            <table className='font-bold'>
              <tr>
                <td>Items</td>
                <td>{totalPosProductsItem}</td>
                <td>Total</td>
                <td className='text-right'>{totalPosProductsPrice}</td>
              </tr>

              <tr>
                <OrderTax SaveData={SaveData} bringOrderTaxInpVal={bringOrderTaxInpVal} showCombo={showCombo2} />
                <Discount SaveData={SaveData} bringDiscountInpVal={bringDiscountInpVal} showCombo={showCombo2} />
              </tr>

            </table>
            <TotalPayableComp showCombo={showCombo2} totalPosProductsPrice={totalPosProductsPrice} bringedDiscountVal={bringedDiscountVal} bringedOrderTaxVal={bringedOrderTaxVal} />
          </div>

          <ColorFulTable showCombo={showCombo2} totalPosProductsPrice={totalPosProductsPrice} bringedDiscountVal={bringedDiscountVal} bringedOrderTaxVal={bringedOrderTaxVal} totalPosProductsItem={totalPosProductsItem} viewCustomerD={viewCustomerD} />

        </div>

        <RightSection />

      </div>
    </>
  )
}

export default AddPosComp