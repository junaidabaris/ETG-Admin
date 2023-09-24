import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useEditCurrencyMutation, useGetCurrencyByIdQuery, useGetPlaceByIdQuery } from '../../../all-products/allproductsApi/allProductsApi';
import { token } from '../../../../common/TokenArea';

function EditCurrency() {
    const [inputval, setInputval] = useState({
        name: '',
        symbol: '',
        code: '',
        exchange_rate: '',
    });
    const params = useParams();

    const { data } = useGetCurrencyByIdQuery(params.id);
    useEffect(() => {
        const obj = { ...data }
        setInputval(obj)
    }, [data]);



    const [editCurr, resp] = useEditCurrencyMutation();

    const onChangeHandler = (e) => {
        const inpName = e.target.name;
        const inpval = e.target.value;
        const clonedObj = { ...inputval };
        clonedObj[inpName] = inpval;
        setInputval(clonedObj)
    };
    const submitEditBrandData = () => {
        editCurr({ id: params.id, data: inputval, token: token })
        document.getElementById("create-course-form").reset();
    };


    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="aiz-titlebar text-left mt-2 mb-3">
                        <h5 className="mb-0 h6">Currency Information</h5>
                    </div>
                    <div className="col-lg-8 mx-auto">
                        <div className="card">
                            <div className="card-body p-0">

                                <form className="p-4" id="create-course-form">
                                    <div className="form-group row">
                                        <label className="col-sm-3 col-from-label" htmlFor="currency name">Currency name<i className="las la-language text-danger" title="Translatable" />
                                        </label>
                                        <div className="col-sm-9">
                                            <input type="text" placeholder="Currency Name" id="name" value={inputval?.name} name="name" className="form-control" required fdprocessedid="zp6g3o" onChange={onChangeHandler} />
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label className="col-sm-3 col-from-label">Currency Symbol</label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control" value={inputval?.symbol} name="symbol" placeholder="Currency symbol" fdprocessedid="vrvrin" onChange={onChangeHandler} />
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label className="col-sm-3 col-from-label">Currency Code</label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control" value={inputval?.code} name="code" placeholder="currency code" fdprocessedid="vrvrin" onChange={onChangeHandler} />
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label className="col-sm-3 col-from-label">Exchange Rate</label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control" value={inputval?.exchange_rate} name="exchange_rate" placeholder="exchange rate" fdprocessedid="vrvrin" onChange={onChangeHandler} />
                                        </div>
                                    </div>

                                    <div className="form-group mb-0 text-right">
                                        <button type="button" onClick={submitEditBrandData} className="btn btn-primary">Save</button>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto">
                    {/*p class="mb-0">&copy;  v6.3.3</p*/}
                </div>
            </div>
        </>
    )
}

export default EditCurrency