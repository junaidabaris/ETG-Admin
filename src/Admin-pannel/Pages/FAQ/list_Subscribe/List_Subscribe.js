
import axios from "axios";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";

function List_Subscribe (){
    const token = window.localStorage.getItem('token')
    const [data, setData] = useState(null)
    const getData = async () => {
        try {
            const res = await axios.get(`https://onlineparttimejobs.in/api/newsletter`, {
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    Authorization: `Bearer ${token}`,
                },

            })
            setData(res.data)
        } catch (error) {
            alert('SERVER ERROR!!')
        }
    }
    useEffect(() => {
        getData()
    }, [])


    const deleteBrandData = async (id) => {
        try {
            const res = await axios.delete(`https://onlineparttimejobs.in/api/newsletter/delete_newsletter/${id}`,{
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    Authorization: `Bearer ${token}`,
                },
            })
            getData()
            alert('Subscribe Delete Successfully')
        } catch (error) {
            alert('Subscribe Not Delete')
        }
    }

    return <div className="aiz-main-content">
        <div className="px-15px px-lg-25px">
            <div className="card" style={{ padding: "10px" }}>
                <h5>List Subscribe </h5>

                <Table striped bordered>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {data && data.map((item, i) => {
                            return <tr>
                                <td>{i + 1}</td>
                                <td>{item?.email}</td>
                               
                                <td className="text-right footable-last-visible" style={{ display: 'table-cell' }}>
                                 
                                    <button type="button" onClick={() => { deleteBrandData(item._id) }} className="btn btn-soft-danger btn-icon btn-circle btn-sm">
                                        <i className="las la-trash" />
                                    </button>
                                </td>
                            </tr>
                        })}

                    </tbody>
                </Table>
            </div>
        </div>

    </div>
}
export default List_Subscribe