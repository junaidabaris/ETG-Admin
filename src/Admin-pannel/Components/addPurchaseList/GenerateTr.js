import { useEffect, useRef, useState } from "react";
import { useUpdateListProductsMutation } from "../all-products/allproductsApi/allProductsApi";
import { AiFillDelete } from "react-icons/ai";


function GenerateTr({ item, index, pickUp,DeleteRow, setShowData, showData }) {

    const [updateValue, { data, isSuccess }] = useUpdateListProductsMutation()

    const current_qty = useRef()

    const updateQty = (i, id) => {
        const clone = showData.map((item) => {
            if (item.variant_id === id) {
                return { ...item, qty: current_qty.current.value }
            } else {
                return item
            }
        })
        updateValue({ index: i, data: { qty: current_qty.current.value, purchase: clone } })
    };

    useEffect(() => {
        if (isSuccess) {
            setShowData(data)
        }
    }, [isSuccess])


    return <tr>
        <td>
            <AiFillDelete onClick={() => DeleteRow(index)} />
        </td>
        <td>
            <label name="varient" className="control-label">{item.product.name}</label>
        </td>
        {/* <td>
            <input disabled value={item?.variant?.mrp} type="number" name="mrp" className="form-control" required />
        </td>

        <td>
            <input disabled value={item?.variant?.purchase_rate} type="text" name="purchase_rate" className="form-control" />
        </td>

        <td>
            <input disabled value={item?.variant?.tax} type="number" name="tax" className="form-control" required />
        </td>

        <td>
            <select className="selectOptions" name="tax_type" defaultValue={item?.variant?.tax_type} aria-label="Default select example" >
                <option value={'Inclusive'}>Inclusive</option>
                <option value={'Exclusive'}>Exclusive</option>
            </select>
        </td>


        <td>
            <input disabled value={item?.variant?.sale_rate} type="number" name="sale_rate" className="form-control" required />
        </td>

        <td>
            <input disabled value={item?.variant?.discount} type="number" name="discount" className="form-control" required />
        </td>

        <td>
            <select className="selectOptions" defaultValue={item?.variant?.discount_type} name="discount_type" aria-label="Default select example" >
                <option value={'Percent'}>Percent</option>
                <option value={'Amount'}>Amount</option>
            </select>
        </td> */}

        <td>
            <input type="text" disabled value={item?.variant?.weight} name="sku" className="form-control" />
        </td>
        <td>
            <input type="text" value={item?.sku} name="sku" className="form-control" />
        </td>

        {/* <td>
            <input type="text" disabled value={item?.picks?.pickupPoint_name} name="sku" className="form-control" />
        </td> */}

        <td>
            <select className="js-example-basic-multiple js-states js-example-responsive demo-select2 w-100 select2-hidden-accessible selectOptions" name="pickupPoints" data-select2-id={20} tabIndex={-1} value={item.pickupPoints} aria-hidden="true" >

                {pickUp && pickUp.map((itemPickup) => {
                    return <option disabled value={itemPickup._id} key={itemPickup._id}>{itemPickup.pickupPoint_name}</option>
                })}
            </select>
        </td>

        <td>
            <input type="number" ref={current_qty} name="current_qty" className="form-control" onChange={() => { updateQty(index, item.variant_id) }} defaultValue='1' />
        </td>

    </tr>
}
export default GenerateTr