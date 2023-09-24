

import axios from "axios";
import { Link } from "react-router-dom";
function ListinSide({ data,getDatas }) {

    const DeleteData = async (id) => {
        const res = await axios.delete(`https://onlineparttimejobs.in/api/attributeSetMaster/delete_attributeSetMasters/${id}`)
        getDatas()
    }
    return (
        <>
            <div className=" col-lg-10 ">
                <div className="card">
                    <div className="card-header row gutters-5">
                        <div className="col text-center text-md-left">
                            <h5 className="mb-md-0 h6">Product Attributes</h5>
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
                        <table className="table aiz-table mb-0 footable footable-1 breakpoint-xl" style={{}}>
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
                                            {item?.values?.map((item,i)=>{
                                                return <div key={i}>{item?.name}</div>
                                            })}
                                        </td>
                                        <td className="text-right footable-last-visible" style={{ display: 'table-cell' }}>
                                            <Link to={`#`} className="btn btn-soft-primary btn-icon btn-circle btn-sm">
                                                <i className="las la-edit" />
                                            </Link>
                                            <button type="button" onClick={()=>DeleteData(item._id)} className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete">
                                                <i className="las la-trash" />
                                            </button>
                                        </td>
                                    </tr>
                                })}

                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </>
    )
}
export default ListinSide;