import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useBrandActiveMutation, useDeleteBrandMutation, useGetBrandsQuery } from "../all-products/allproductsApi/allProductsApi"
import { ToastContainer, toast } from "react-toastify";

function Brands() {
    const [inputVal, setInputVal] = useState({ search: '' });
    const token = window.localStorage.getItem('token')
    const { isLoading, data } = useGetBrandsQuery(token);
    const copiedData = { ...data }
    const [blankArr, setBlankArr] = useState([])


    useEffect(() => {
        setBlankArr(data)
    }, [data]);

    const onChangeHandler = (e) => {
        const inpVal = e.target.value
        setInputVal(inpVal)
    }

    const searchData = () => {
        const filteredData = data && data.filter((item) => {
            if (item.name === inputVal || item.brand === inputVal) {
                return true
            }
        })
        setBlankArr(filteredData)
    }

    const [deleteBrand, response] = useDeleteBrandMutation();

    function deleteBrandData(id) {
        deleteBrand(id)
    }

    useEffect(() => {
        if (response.isSuccess === true) {
            alert('Brand deleted Successfully')
        }
    }, [response.isSuccess])

    const [updateActive, { isSuccess, isError }] = useBrandActiveMutation()

    const changeStatus = (item) => {
        const obj = { id: item._id, data: { active: !item.active } }
        updateActive(obj)
    }


    const toastSuccessMessage = () => {
        toast.success("Brand Updated Successfully", {
            position: "top-center"
        })
    };

    const toastErrorMessage = () => {
        toast.error("Brand Update Faild..", {
            position: "top-center"
        })
    };

    useEffect(() => {
        if (isSuccess === true) {
            toastSuccessMessage()
        };
    }, [isSuccess]);

    useEffect(() => {
        if (isError === true) {
            toastErrorMessage()
        };
    }, [isError])

    return (
        <>
            <div className=" col-lg-7 ">
                <div className="card">
                    <div className="card-header row gutters-5">
                        <div className="col text-center text-md-left">
                            <h5 className="mb-md-0 h6">Brands</h5>
                        </div>
                        <ToastContainer />
                        <div className="col-md-4">
                            <form >
                                <div className="input-group input-group-sm">
                                    <input type="text" className="form-control" id="search" name="search" placeholder="Type" fdprocessedid="jv5p0d" onChange={onChangeHandler} />
                                    <button type="button" onClick={searchData} className="btn btn-primary" style={{ padding: '0 10px' }} >Search</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="card-body">
                        {isLoading ? <h2>Loading...</h2>
                            : <table className="table aiz-table mb-0 footable footable-1 breakpoint-xl" style={{}}>
                                <thead>
                                    <tr className="footable-header">
                                        <th className="footable-first-visible" style={{ display: 'table-cell' }}>#</th>
                                        <th style={{ display: 'table-cell' }}>Name</th>
                                        <th style={{ display: 'table-cell' }}>Logo</th>
                                        <th style={{ display: 'table-cell' }}>Block</th>
                                        <th className="text-right footable-last-visible" style={{ display: 'table-cell' }}>Options</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {blankArr && blankArr.map((item, i) => {
                                        return <tr key={item._id}>
                                            <td className="footable-first-visible" style={{ display: 'table-cell' }}>{i + 1}</td>
                                            <td style={{ display: 'table-cell' }}>{item.name || item.brand}</td>
                                            <td style={{ display: 'table-cell' }}>
                                                <img src={item?.logo?.url} alt="Brand" className="h-50px" />
                                            </td>

                                            <td style={{ display: "table-cell" }}>
                                                <label className="aiz-switch aiz-switch-success mb-0">
                                                    <input
                                                        onChange={() => { changeStatus(item) }}
                                                        type="checkbox"
                                                        checked={item.active}
                                                    />
                                                    <span className="slider round" />
                                                </label>
                                            </td>

                                            <td className="text-right footable-last-visible" style={{ display: 'table-cell' }}>
                                                <Link to={`edit/${item._id}`} className="btn btn-soft-primary btn-icon btn-circle btn-sm" title="Edit">
                                                    <i className="las la-edit" />
                                                </Link>
                                                <button type="button" onClick={() => { deleteBrandData(item._id) }} className="btn btn-soft-danger btn-icon btn-circle btn-sm">
                                                    <i className="las la-trash" />
                                                </button>
                                            </td>

                                        </tr>
                                    })}

                                </tbody>
                            </table>
                        }
                        <div className="aiz-pagination">
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Brands