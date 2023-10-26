import { Link } from "react-router-dom";
import { useDeleteSupportTicketMutation, useGetTicketListsQuery } from "../all-products/allproductsApi/allProductsApi";
import { useEffect } from "react";

function SupportTicketDesk() {

    const token = window.localStorage.getItem('token')
    const { isLoading, data } = useGetTicketListsQuery(token);

    const [deleteSuppTicket, response] = useDeleteSupportTicketMutation();

    const deleteSupportticketData = (id) => {
        deleteSuppTicket({ id: id, token: token })
    };

    useEffect(() => {
        if (response.isSuccess === true) {
            alert('Support Ticket Successfully deleted')
        };
    }, [response.isSuccess])


    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="card">
                        <form id="sort_support">
                            <div className="card-header row gutters-5">
                                <div className="col text-center text-md-left">
                                    <h5 className="mb-md-0 h6">Support Desk</h5>
                                </div>
                                <div className="col-md-2">
                                    <div className="input-group input-group-sm">
                                        <input type="text" className="form-control" id="search" name="search" placeholder="Type ticket code & Enter" />
                                    </div>
                                </div>
                            </div>
                        </form>
                        <div className="card-body">
                            {isLoading ? <h2>Loading...</h2>
                                : <table className="aiz-table footable footable-1 breakpoint-xl" cellSpacing={0} width="100%" style={{}}>
                                    <thead>
                                        <tr className="footable-header">
                                            <th data-breakpoints="lg" className="footable-first-visible" style={{ display: 'table-cell' }}>Ticket ID</th><th data-breakpoints="lg" style={{ display: 'table-cell' }}>Sending Date</th><th style={{ display: 'table-cell' }}>Subject</th><th data-breakpoints="lg" style={{ display: 'table-cell' }}>User</th><th data-breakpoints="lg" style={{ display: 'table-cell' }}>Status</th><th data-breakpoints="lg" style={{ display: 'table-cell' }}>Last reply</th><th className="text-right footable-last-visible" style={{ display: 'table-cell' }}>Options</th></tr>
                                    </thead>
                                    <tbody>

                                        {data && data.map((item, i) => {
                                            return <tr key={item._id}>
                                                <td className="footable-first-visible" style={{ display: 'table-cell' }}>{item._id}</td>
                                                <td style={{ display: 'table-cell' }}>{item?.createdAt} </td>
                                                <td style={{ display: 'table-cell' }}>{item.subject}</td>
                                                <td style={{ display: 'table-cell' }}>{item?.user_id?.firstname + " " + item?.user_id?.lastname}</td>
                                                <td style={{ display: 'table-cell' }}>
                                                    {/* <span className="badge badge-inline badge-danger">{item.status}</span> */}
                                                    <span class="badge badge-inline badge-danger" style={{ color: "black", fontSize: '14px', fontWeight: 'bold', backgroundColor: item?.status === "Solved" ? "green" : item?.status === 'Pending' || 'pending' ? 'yellow' : "red" }}>{item?.status}</span>
                                                </td>
                                                <td style={{ display: 'table-cell' }}>
                                                  {item?.updatedAt}
                                                </td>
                                                <td className="text-right footable-last-visible" style={{ display: 'table-cell' }}>
                                                    {/* <Link to={`edit/${item._id}`} className="btn btn-soft-primary btn-icon btn-circle btn-sm" title="Edit">
                                                        <i className="las la-edit" />
                                                    </Link> */}
                                                    <Link to={`/admin/support_ticket/detail/${item._id}`} className="btn btn-soft-primary btn-icon btn-circle btn-sm" title="View Details">
                                                        <i className="las la-eye" />
                                                    </Link>
                                                    <button type="button" onClick={() => deleteSupportticketData(item._id)} className="btn btn-soft-danger btn-icon btn-circle btn-sm">
                                                        <i className="las la-trash" />
                                                    </button>
                                                </td>
                                            </tr>
                                        })}

                                    </tbody>
                                </table>
                            }
                            <div className="clearfix">
                                <div className="pull-right">
                                </div>
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
export default SupportTicketDesk;