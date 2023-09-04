import axios from "axios"
import { useEffect, useState } from "react"
import { FcApproval, FcDisapprove } from 'react-icons/fc';
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

function ListGroups() {
    const token = window.localStorage.getItem('adminToken')
    const [underSelect, SetUnder] = useState(null)
    const getData = async () => {
        const res = await axios.get(`https://onlineparttimejobs.in/api/accountGroup`, {
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                Authorization: `Bearer ${token}`,
            },
        })
        SetUnder(res.data)
    }
    useEffect(() => {
        getData()
    }, [])


    const toastSuccessMessage1 = () => {
        toast.success("Group Delete Successfully", {
            position: "top-center"
        })
    };

    const toastErrorMessage1 = () => {
        toast.error("Group Not Delete ", {
            position: "top-center"
        })
    };
    const deleteData = async (id) => {
        try {
            const res = await axios.delete(`https://onlineparttimejobs.in/api/accountGroup/delete_groupMaster/${id}`, {
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    Authorization: `Bearer ${token}`,
                },
            })
            toastSuccessMessage1()
            getData()

        } catch (error) {
            toastErrorMessage1()
        }
    }
    return <>
        <ToastContainer />
        <div className="container">
            <div className="row ml-3">
                <h5>List Group</h5>
            </div>
            <div className="card">
                <div className="card-body">
                    <div className="row">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Under</th>
                                    <th scope="col">Alias</th>
                                    <th scope="col">Group Behave</th>
                                    <th scope="col">Balance for reporting</th>
                                    <th scope="col">Used for calculation</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {underSelect && underSelect.map((item, i) => {
                                    return <tr key={item._id}>
                                        <th scope="row">{i + 1}</th>
                                        <td>{item?.name}</td>
                                        <td>{item?.under?.name}</td>
                                        <td>{item?.alias}</td>
                                        <td style={{ fontSize: "22px", paddingLeft: "60px" }}>{item?.group_behave ? <FcApproval /> : <FcDisapprove />}</td>
                                        <td style={{ fontSize: "22px", paddingLeft: "60px" }}>{item?.balance_for_reporting ? <FcApproval /> : <FcDisapprove />}</td>
                                        <td style={{ fontSize: "22px", paddingLeft: "60px" }}>{item?.used_for_calculation ? <FcApproval /> : <FcDisapprove />}</td>
                                        <td>
                                            <Link
                                                className="btn btn-soft-primary btn-icon btn-circle btn-sm"
                                                title="Edit"
                                                to={`/admin/group_edit/${item?._id}`}
                                            >
                                                <i className="las la-edit" />
                                            </Link>
                                            <button
                                                type="button"
                                                className="btn btn-soft-danger btn-icon btn-circle btn-sm"
                                                onClick={() => { deleteData(item._id) }}
                                            >
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
        </div>
    </>
}
export default ListGroups