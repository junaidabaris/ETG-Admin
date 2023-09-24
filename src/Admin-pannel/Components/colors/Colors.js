import { Link } from "react-router-dom";
import { useDeleteColorMutation, useGetColorsQuery } from "../all-products/allproductsApi/allProductsApi";

function Colors() {

    const token = window.localStorage.getItem('token')
    const { isLoading, data } = useGetColorsQuery(token);

    const [deleteData, response] = useDeleteColorMutation();

    function deleteColorData(id) {
        deleteData(id)
    };


    if (response.isSuccess === true) {
        alert("Color deleted Successfully")
    };



    return (
        <>
            <div className=" col-lg-7 ">
                <div className="card">
                    <form>
                        <div className="card-header">
                            <h5 className="mb-0 h6">Colors</h5>
                            <div className="col-md-5">
                                <div className="form-group mb-0">
                                    <input type="text" className="form-control form-control-sm" id="search" name="search" placeholder="Type color name & Enter" fdprocessedid="07jxbu" />
                                </div>
                            </div>
                        </div>
                    </form>
                    <div className="card-body">

                        {isLoading ? <h2>Loading...</h2>
                            : <table className="table aiz-table mb-0 footable footable-1 breakpoint-xl" style={{}}>
                                <thead>
                                    <tr className="footable-header">
                                        <th className="footable-first-visible" style={{ display: 'table-cell' }}>#</th>
                                        <th style={{ display: 'table-cell' }}>Name</th>
                                        <th style={{ display: 'table-cell' }}>Code</th>
                                        <th className="text-right footable-last-visible" style={{ display: 'table-cell' }}>Options</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data && data.map((item, i) => {
                                        return <tr key={item._id}>
                                            <td className="footable-first-visible" style={{ display: 'table-cell' }}>{i + 1}</td>
                                            <td style={{ display: 'table-cell' }}>{item.name}</td>
                                            <td style={{ display: 'table-cell' }}>{item.code}</td>
                                            <td className="text-right footable-last-visible" style={{ display: 'table-cell' }}>

                                                <Link to={`edit/${item._id}`} className="btn btn-soft-primary btn-icon btn-circle btn-sm" title="Edit">
                                                    <i className="las la-edit" />
                                                </Link>

                                                <button type="button" onClick={() => { deleteColorData(item._id) }} className="btn btn-soft-danger btn-icon btn-circle btn-sm">
                                                    <i className="las la-trash" />
                                                </button>

                                            </td>
                                        </tr>
                                    })}

                                </tbody>
                            </table>
                        }

                        <div className="aiz-pagination">
                            <nav>
                                {/* <ul className="pagination">
                                    <li className="page-item disabled" aria-disabled="true" aria-label="« Previous">
                                        <span className="page-link" aria-hidden="true">‹</span>
                                    </li>
                                    <li className="page-item active" aria-current="page"><span className="page-link">1</span></li>
                                    <li className="page-item"><a className="page-link" href="https://mmslfashions.in/admin/colors?page=2">2</a></li>
                                    <li className="page-item"><a className="page-link" href="https://mmslfashions.in/admin/colors?page=3">3</a></li>
                                    <li className="page-item"><a className="page-link" href="https://mmslfashions.in/admin/colors?page=4">4</a></li>
                                    <li className="page-item"><a className="page-link" href="https://mmslfashions.in/admin/colors?page=5">5</a></li>
                                    <li className="page-item"><a className="page-link" href="https://mmslfashions.in/admin/colors?page=6">6</a></li>
                                    <li className="page-item"><a className="page-link" href="https://mmslfashions.in/admin/colors?page=7">7</a></li>
                                    <li className="page-item"><a className="page-link" href="https://mmslfashions.in/admin/colors?page=8">8</a></li>
                                    <li className="page-item"><a className="page-link" href="https://mmslfashions.in/admin/colors?page=9">9</a></li>
                                    <li className="page-item"><a className="page-link" href="https://mmslfashions.in/admin/colors?page=10">10</a></li>
                                    <li className="page-item disabled" aria-disabled="true"><span className="page-link">...</span></li>
                                    <li className="page-item"><a className="page-link" href="https://mmslfashions.in/admin/colors?page=14">14</a></li>
                                    <li className="page-item"><a className="page-link" href="https://mmslfashions.in/admin/colors?page=15">15</a></li>
                                    <li className="page-item">
                                        <a className="page-link" href="https://mmslfashions.in/admin/colors?page=2" rel="next" aria-label="Next »">›</a>
                                    </li>
                                </ul> */}
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Colors;