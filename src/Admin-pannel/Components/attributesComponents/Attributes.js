import { Link } from "react-router-dom";
import { useDeleteAttributesMutation, useGetAttributesQuery } from "../all-products/allproductsApi/allProductsApi";
import { useEffect } from "react";

function AttributesAdmin() {

    const token = window.localStorage.getItem('token')
    const { isLoading, data } = useGetAttributesQuery(token);

    const [deleteAttribute, response] = useDeleteAttributesMutation();

    const deleteAttributeData = (id) => {
        deleteAttribute(id)
    };

    useEffect(() => {
        if (response.isSuccess === true) {
            alert('Attribute Deleted Successfully')
        }
    }, [response.isSuccess])

    return (
        <>
            <div className=" col-lg-10 ">
                <div className="card">
                    <div className="card-header row gutters-5">
                        <div className="col text-center text-md-left">
                        </div>

                        <div className="col-md-4">
                            <form >
                                <div className="input-group input-group-sm">
                                    <input type="text" className="form-control" id="search" name="search" placeholder="Search" fdprocessedid="jv5p0d" />
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="card-body">

                        {isLoading ? <h2>Loading...</h2>
                            : <table className="table aiz-table mb-0 footable footable-1 breakpoint-xl" style={{}}>
                                <thead>
                                    <tr className="footable-header">
                                        <th className="footable-first-visible" style={{ display: 'table-cell' }}>#</th><th style={{ display: 'table-cell' }}>Name</th><th style={{ display: 'table-cell' }}>Values</th><th className="text-right footable-last-visible" style={{ display: 'table-cell' }}>Options</th></tr>
                                </thead>
                                <tbody>

                                    {data && data.map((item, i) => {
                                        return <tr key={item._id}>
                                            <td className="footable-first-visible" style={{ display: 'table-cell' }}>{i + 1}</td>
                                            <td style={{ display: 'table-cell' }}>{item.name}</td>
                                            <td style={{ display: 'table-cell' }}>
                                            </td>
                                            <td className="text-right footable-last-visible" style={{ display: 'table-cell' }}>
                                                {/* <Link to="#" className="btn btn-soft-info btn-icon btn-circle btn-sm">
                                    <i className="las la-cog" />
                                </Link> */}
                                                <Link to={`edit/${item.uid}`} className="btn btn-soft-primary btn-icon btn-circle btn-sm">
                                                    <i className="las la-edit" />
                                                </Link>
                                                <button type="button" onClick={() => deleteAttributeData(item._id)} className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete">
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
            </div>
        </>
    )
}
export default AttributesAdmin;