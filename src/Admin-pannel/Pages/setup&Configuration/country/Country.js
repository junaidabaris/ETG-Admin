import { Link } from "react-router-dom";
import { useDeleteCountryMutation, useDeleteCurrencyMutation, useEditCountryMutation, useGetCounterQuery, useGetCurrencyQuery, usePostCountryMutation } from "../../../Components/all-products/allproductsApi/allProductsApi";
import { token } from "../../../common/TokenArea";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";


function Country() {

    const [edit, setedit] = useState(false)
    const [id, setId] = useState('')
    const toastSuccessMessage2 = () => {
        toast.success("Counrty Update Successfully", {
            position: "top-center"
        })
    };

    const toastErrorMessage2 = () => {
        toast.error("Counrty not Update", {
            position: "top-center"
        })
    };
    const toastSuccessMessage = () => {
        toast.success("Counrty added Successfully", {
            position: "top-center"
        })
    };

    const toastErrorMessage = () => {
        toast.error("Counrty not added", {
            position: "top-center"
        })
    };
    const [status, setStatus] = useState(true)
    const [state, setState] = useState({
        name: "",
        code: "",
        isActive: "",
        currency_id: ""
    })

    const [deleteCurr, { isSuccess: delSucc, isError: delErr }] = useDeleteCountryMutation();
    const { isLoading, data, refetch } = useGetCounterQuery(token);
    const { data: currency } = useGetCurrencyQuery(token);
    const [sendValues, { isSuccess, isError }] = usePostCountryMutation();
    const [EditValue, { isSuccess: esuss, isError: eerror }] = useEditCountryMutation();
    useEffect(() => {
        if (esuss) {
            toastSuccessMessage2()
            setState({
                name: "",
                code: "",
                isActive: "",
                currency_id: ""
            })
            refetch()
        }
        if (eerror) {
            toastErrorMessage2()
        }

    }, [esuss, eerror])
    useEffect(() => {
        if (isSuccess) {
            toastSuccessMessage()
            setState({
                name: "",
                code: "",
                isActive: "",
                currency_id: ""
            })
            refetch()
        }
        if (isError) {
            toastErrorMessage()
        }
        if (delSucc) {
            alert('Counrty Delete Successfully')
            refetch()
        }
        if (delErr) {
            alert('Counrty not Delete')
        }
    }, [isSuccess, isError, delSucc,delErr])


    const changeHandle = (e) => {
        const clone = { ...state }
        clone[e.target.name] = e.target.value
        setState(clone)
    }

    const sendData = () => {
        const clone = { ...state, isActive: status }
        if (edit) {
            EditValue({ data: clone, token: token, id: id })
            setedit(false)
        } else {
            sendValues({ data: clone, token: token })
        }
    }



    const deleteCurrencyData = (id) => {
        deleteCurr({ id, token })

    }
    const editValue = (item) => {
        setState(item)
        setId(item._id)
        setedit(true)
    }

    return (
        <>
            <ToastContainer />
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="mb-0 h6">Add Country</h5>
                                </div>
                                <div className="card-body">
                                    <form className="form-horizontal" action="https://mmslfashions.in/admin/business-settings/update" method="POST">
                                        <div className="form-group row">

                                            <div className="col-lg-3">
                                                <label className="control-label">Name</label>
                                            </div>
                                            <div className="col-lg-6">
                                                <input className="form-control" type="text" name="name" value={state.name} onChange={changeHandle} />
                                            </div>
                                        </div>
                                        <div className="form-group row">

                                            <div className="col-lg-3">
                                                <label className="control-label">Code</label>
                                            </div>
                                            <div className="col-lg-6">
                                                <input className="form-control" type="text" name="code" value={state.code} onChange={changeHandle} />
                                            </div>
                                        </div>
                                        <div className="form-group row">

                                            <div className="col-lg-3">
                                                <label className="control-label">Currency</label>
                                            </div>
                                            <div className="col-lg-6">
                                                <select className="form-select" aria-label="Default select example" name="currency_id" value={state.currency_id} onChange={changeHandle}>
                                                    <option>Select currency</option>
                                                    {currency && currency?.map((item) => {
                                                        return <option value={item._id} key={item._id}>{item.symbol} {item.name}</option>
                                                    })}
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group row">

                                            <div className="col-lg-3">
                                                <label className="control-label">Is Active</label>
                                            </div>
                                            <div className="col-lg-6">
                                                <label className="aiz-switch aiz-switch-success mb-0">
                                                    <input defaultValue={29} value={status} onChange={() => { setStatus(!status) }} type="checkbox" defaultChecked />
                                                    <span className="slider round" />
                                                </label>
                                            </div>
                                        </div>
                                        <div className="form-group mb-0 text-right">
                                            <button type="button" onClick={sendData} className="btn btn-sm btn-primary" fdprocessedid="xtfte">{edit ? 'Update' : 'Save'}</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <>
                        {/* <div className="aiz-titlebar text-left mt-2 mb-3">
                            <div className="row align-items-center">
                                <div className="col-md-6">
                                    <h1 className="h3">All Currencies</h1>
                                </div>
                                <div className="col-md-6 text-md-right">
                                    <Link to="create" className="btn btn-circle btn-primary">
                                        <span>Add New Currency</span>
                                    </Link>
                                </div>
                            </div>
                        </div> */}
                        <div className="card">
                            <div className="card-header row gutters-5">
                                <div className="col text-center text-md-left">
                                    <h5 className="mb-md-0 h6">All Country</h5>
                                </div>
                                <div className="col-md-4">
                                    <form id="sort_currencies">
                                        <div className="input-group input-group-sm">
                                            <input type="text" className="form-control" id="search" name="search" placeholder="Type name & Enter" fdprocessedid="skb3yv" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="card-body">

                                {isLoading ? <h2>Loading...</h2>
                                    : <table className="table aiz-table mb-0 footable footable-1 breakpoint-xl" style={{}}>
                                        <thead>
                                            <tr className="footable-header">
                                                <th data-breakpoints="lg" className="footable-first-visible" style={{ display: 'table-cell' }}>#</th>
                                                <th style={{ display: 'table-cell' }}>Country name</th>
                                                {/* <th data-breakpoints="lg" style={{ display: 'table-cell' }}>Country symbol</th> */}
                                                <th data-breakpoints="lg" style={{ display: 'table-cell' }}>Country code</th>
                                                <th data-breakpoints="lg" style={{ display: 'table-cell' }}>Status</th>
                                                <th className="text-right footable-last-visible" style={{ display: 'table-cell' }}>Options</th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            {data && data.map((item, i) => {
                                                return <tr key={item._id}>
                                                    <td className="footable-first-visible" style={{ display: 'table-cell' }}>{i + 1}</td>
                                                    <td style={{ display: 'table-cell' }}>{item.name}</td>
                                                    {/* <td style={{ display: 'table-cell' }}>{item.symbol}</td> */}
                                                    <td style={{ display: 'table-cell' }}>{item.code}</td>
                                                    <td style={{ display: 'table-cell' }}>
                                                        <label className="aiz-switch aiz-switch-success mb-0">
                                                            <input defaultValue={29} type="checkbox" defaultChecked />
                                                            <span className="slider round" />
                                                        </label>
                                                    </td>
                                                    <td className="text-right footable-last-visible" style={{ display: 'table-cell' }}>
                                                        <Link to={`#`} onClick={() => { editValue(item) }} className="btn btn-soft-primary btn-icon btn-circle btn-sm" title="Edit">
                                                            <i className="las la-edit" />
                                                        </Link>
                                                        <button type="button" onClick={() => deleteCurrencyData(item._id)} className="btn btn-soft-danger btn-icon btn-circle btn-sm">
                                                            <i className="las la-trash" />
                                                        </button>
                                                    </td>
                                                </tr>
                                            })}
                                        </tbody>
                                    </table>
                                }

                            </div>
                        </div>
                    </>
                </div>
                <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto">
                    {/*p class="mb-0">&copy;  v6.3.3</p*/}
                </div>
            </div>


        </>
    )
}
export default Country;