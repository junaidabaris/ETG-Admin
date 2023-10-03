import { useEffect, useState } from "react";

function PriceStocCompkWholsaleProducts({ item, setMainVal, main, data }) {
    console.log(main);
    console.log(data);
    const [row, setRow] = useState([])
    const [state, setState] = useState({
        unit_price: item?.unit_price,
        sku: item?.sku,
        setPoint: 1,
        qty: 1,
    })

    useEffect(() => {
        setState({
            unit_price: item?.sale_rate,
            sku: item?.sku,
            setPoint: 1,
            qty: 1,
        })
    }, [])

    const changeHandle = (e) => {
        const clone = { ...state }
        clone[e.target.name] = e.target.value
        setState(clone)
    }

    const incRows = () => {
        const clone = [...row]
        clone.push({ id: Math.random().toString(), min_qty: '', max_qty: '', sale_price: '' })
        setRow(clone)
    }

    const removeRow = (_id) => {
        const filterdRow = row.filter((item) => {
            if (item.id === _id) {

            } else {
                return item
            }
        })
        setRow(filterdRow)
        // console.log(filterdRow);
    }


    useEffect(() => {
        const clone = [...row]
        const obj = { id: item?._id.toString(), min_qty: 1, max_qty: 10, sale_price: item?.sale_rate }
        clone.push(obj)
        setRow(clone)
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, [])

    const handelChange = (e) => {
        const val = e.target.value
        const idVal = e.target.id

        const fillData = row.map((item) => {
            if (item.id === idVal) {
                return { ...item, [e.target.name]: val }
            } else {
                return item
            }
        })
        setRow(fillData);

    }

    const saveToArr = () => {
        const clone = { ...main }
        const obj = {
            product_id: data[0]?.productId,
            variant_id: item.uid,
            ...state,
            wholesale: row
        }
        const arr = clone.products
        arr.push(obj)
        clone.products = arr
        setMainVal(clone)
        console.log(clone);
        console.log(data);
        console.log(state);
    }



    return (
        <>
            <div className="card">
                <div className="card-header">
                    <h5 className="mb-0 h6">Product price + stock</h5>
                </div>
                <div className="card-body">
                    <div className="form-group row">
                        <label className="col-md-3 col-from-label">Unit price <span className="text-danger">*</span></label>
                        <div className="col-md-6">
                            <input type="number" lang="en" onChange={changeHandle} value={state?.unit_price} min={0} defaultValue={0} step="0.01" placeholder="Unit price" name="unit_price" className="form-control" required fdprocessedid="jjt0ap" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-md-3 col-from-label">
                            Set Point
                        </label>
                        <div className="col-md-6">
                            <input type="number" lang="en" onChange={changeHandle} value={state?.setPoint} min={0} defaultValue={0} step={1} placeholder={1} name="setPoint" className="form-control" fdprocessedid="i4cfrb" />
                        </div>
                    </div>
                    <div>
                        <div className="form-group row">
                            <label className="col-md-3 col-from-label">Quantity <span className="text-danger">*</span></label>
                            <div className="col-md-6">
                                <input type="number" lang="en" onChange={changeHandle} value={state?.qty} min={0} defaultValue={0} step={1} placeholder="Quantity" name="qty" className="form-control" required fdprocessedid="f90buo" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-md-3 col-from-label">
                                SKU
                            </label>
                            <div className="col-md-6">
                                <input type="text" placeholder="SKU" onChange={changeHandle} value={state?.sku} name="sku" className="form-control" fdprocessedid="jlbx79" />
                            </div>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-md-3 col-from-label">
                            Wholesale Prices
                        </label>



                        <div className="row align-items-end">
                            <div className="col-12 sku_combination table-responsive form-group" id="sku_combination">
                                <table className="table table-bordered physical_product_show">
                                    <thead>

                                        <tr>
                                            <td><label className="control-label">#</label></td>
                                            <td><label className="control-label">Product Name</label></td>
                                            <td><label className="control-label">SKU</label></td>
                                            <td><label className="control-label">MRP</label></td>
                                        </tr>

                                    </thead>

                                    <tbody>

                                        <tr>
                                            <td>
                                                1
                                            </td>
                                            <td>
                                                {item?.productName}
                                            </td>
                                            <td>
                                                {item?.sku}
                                            </td>
                                            <td>

                                                {item?.mrp}
                                            </td>


                                        </tr>
                                    </tbody>

                                </table>
                            </div>
                        </div>




                        <div className="col-md-6">
                            <div className="qunatity-price">
                                {row.map((item, i) => {
                                    return <div key={i} className="row gutters-5">
                                        <div className="col-3">
                                            <div className="form-group">
                                                <input type="text" className="form-control" value={item?.min_qty} id={item.id} onChange={handelChange} placeholder="Min QTY" name="min_qty" required fdprocessedid="qotckq" />
                                            </div>
                                        </div>
                                        <div className="col-3">
                                            <div className="form-group">
                                                <input type="text" className="form-control" value={item?.max_qty} id={item.id} onChange={handelChange} placeholder="Max QTY" name="max_qty" required fdprocessedid="h58k6x" />
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="form-group">
                                                <input type="text" className="form-control" value={item?.sale_price} id={item.id} onChange={handelChange} placeholder="Price per piece" name="sale_price" required fdprocessedid="sw6gj4" />
                                            </div>
                                        </div>
                                        <div className="col-auto">
                                            <button type="button" className="mt-1 btn btn-icon btn-circle btn-sm btn-soft-danger" onClick={() => { removeRow(item.id) }}>
                                                <i className="las la-times" />
                                            </button>
                                        </div>
                                    </div>
                                })}
                            </div>
                            <button type="button" className="btn btn-soft-secondary btn-sm" onClick={incRows}>
                                Add More
                            </button>
                            <div class="form-check" style={{ marginTop: "10px" }}>
                                <input style={{ width: "20px", height: "20px" }} onClick={saveToArr} class="form-check-input" type="checkbox" value="" id={`flexCheckIndeterminate${item._id}`} />
                                <label class="form-check-label" style={{ margin: "4px" }} htmlFor={`flexCheckIndeterminate${item._id}`}>
                                    This Is Mandatory  Filed
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}
export default PriceStocCompkWholsaleProducts;