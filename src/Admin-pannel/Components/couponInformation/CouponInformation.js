import { Link } from "react-router-dom";
import { useDeleteCouponMutation, useGetCouponsQuery } from "../all-products/allproductsApi/allProductsApi";
import { useEffect } from "react";

function CouponInformation() {

    const token = window.localStorage.getItem('token')
    const { isLoading, data } = useGetCouponsQuery(token);

    const [deleteCoupon, response] = useDeleteCouponMutation();


    const deleteCuoponData = (id) => {
        deleteCoupon({id:id ,token:token})
    };

    useEffect(() => {
        if (response.isSuccess === true) {
            alert('Coupons Succesfully deleted')
        }
    }, [response])


    return (
        <>
            <div className="card">
                <div className="card-header">
                    <h5 className="mb-0 h6">Coupon Information</h5>
                </div>
                <div className="card-body">
                    {isLoading ? <h2>Loading...</h2>
                        : (<table className="table aiz-table p-0 footable customTableTD" style={{}}>
                            <thead>
                                <tr >
                                    <th >#</th>
                                    <th >Code</th>
                                    <th  >Category</th>
                                    <th  >Discount</th>
                                    <th  >Description</th>
                                    <th  >Discount Type</th>
                                    <th >Start Date</th>
                                    <th >End Date</th>
                                    <th >Options</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data && data.map((item, i) => {
                                    return <tr key={item._id}>
                                        <td>{i + 1}</td>
                                        <td>{item.code}</td>
                                        <td>{item.type}</td>
                                        <td>{item.discount}</td>
                                        <td>{item.description}</td>
                                        <td>{item.discount_type}</td>
                                        <td >{item.start_date}</td>
                                        <td >{item.end_date}</td>
                                        <td >
                                            <Link to="/admin/support_ticket/detail" className="btn btn-soft-primary btn-icon btn-circle btn-sm" title="View Details">
                                                <i className="las la-eye" />
                                            </Link>
                                            <Link to={`edit/${item._id}`} className="btn btn-soft-primary btn-icon btn-circle btn-sm" title="Edit">
                                                <i className="las la-edit" />
                                            </Link>
                                            <button type="button" onClick={() => deleteCuoponData(item._id)} className="btn btn-soft-danger btn-icon btn-circle btn-sm">
                                                <i className="las la-trash" />
                                            </button>
                                        </td>
                                    </tr>
                                })}
                            </tbody>
                        </table>)
                    }
                </div>
            </div>

        </>
    )
}
export default CouponInformation;