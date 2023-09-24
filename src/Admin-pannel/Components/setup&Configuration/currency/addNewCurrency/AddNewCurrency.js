import React, { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import { useAddNewCurrencyMutation } from '../../../all-products/allproductsApi/allProductsApi';
import { token } from '../../../../common/TokenArea';

function AddNewCurrency() {

    const [inputval, setInputVal] = useState({ name: '', symbol: '', exchange_rate: +"", code: '', });

    const [addNewCurrency, response] = useAddNewCurrencyMutation();

    const onChangeHandler = (e) => {
        const inpName = e.target.name;
        const inpVal = e.target.value;
        const clonedObj = { ...inputval };
        clonedObj[inpName] = inpVal;
        setInputVal(clonedObj)
    };

    const addNewCurrencyData = (e) => {
        e.preventDefault();
        console.log(inputval)
        addNewCurrency({ data: inputval, token: token })
        document.getElementById("create-course-form").reset();
    };

    const toastSuccessMessage = () => {
        toast.success("Currency added Successfully", {
            position: "top-center"
        })
    };

    if (response.isSuccess === true) {
        toastSuccessMessage()
    };
    if (response.isError === true) {
        alert('!Currency not added')
    }

    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="row">
                        <div className="col-lg-8 mx-auto">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="mb-0 h6">Currency Information</h5>
                                </div>

                                <form id="create-course-form" onSubmit={addNewCurrencyData}>
                                    <input type="hidden" name="_token" defaultValue="mA5KQp7HZlXz1fB8P6Hv66tiXkkVBymNn0MEMOHZ" />
                                    <div className="card-body">
                                        <div className="form-group row row">
                                            <label className="col-sm-3 col-from-label" htmlFor="name">Name</label>
                                            <div className="col-sm-9">
                                                <input type="text" placeholder="Name" id="name" name="name" className="form-control" required onChange={onChangeHandler} />
                                            </div>
                                        </div>

                                        <div className="form-group row row">
                                            <label className="col-sm-3 col-from-label" htmlFor="symbol">Symbol</label>
                                            <div className="col-sm-9">
                                                <input type="text" placeholder="symbol" id="phone" name="symbol" className="form-control" required onChange={onChangeHandler} />
                                            </div>
                                        </div>

                                        <div className="form-group row row">
                                            <label className="col-sm-3 col-from-label" htmlFor="code">Code</label>
                                            <div className="col-sm-9">
                                                <input type="text" placeholder="code" id="phone" name="code" className="form-control" required onChange={onChangeHandler} />
                                            </div>
                                        </div>

                                        <div className="form-group row row">
                                            <label className="col-sm-3 col-from-label" htmlFor="exchange rate">Exchange Rate</label>
                                            <div className="col-sm-9">
                                                <input type="number" placeholder="exchange rate" id="phone" name="exchange_rate" className="form-control" required onChange={onChangeHandler} />
                                            </div>
                                        </div>

                                        <div className="form-group mb-0 text-right">
                                            <button type="submit" className="btn btn-primary">Add Currency</button>
                                        </div>

                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto">
                    {/*p class="mb-0">&copy;  v6.3.3</p*/}
                </div>
                <ToastContainer />
            </div>
        </>
    )
}

export default AddNewCurrency