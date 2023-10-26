import axios from "axios";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";

function ListFaqAdmin (){
    const token = window.localStorage.getItem('token')
    const [data, setData] = useState(null)
    const getData = async () => {
        try {
            const res = await axios.get(`https://onlineparttimejobs.in/api/faqs/admin`, {
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
        // try {
        //     const res = await axios.delete(`https://onlineparttimejobs.in/api/banner/${id}`,{
        //         headers: {
        //             "Content-type": "application/json; charset=UTF-8",
        //             Authorization: `Bearer ${token}`,
        //         },
        //     })
        //     getData()
        //     alert('Banner Delete Successfully')
        // } catch (error) {
        //     alert('Banner Not Delete')
        // }
    }

    return <div className="aiz-main-content">
        <div className="px-15px px-lg-25px">
            <div className="card" style={{ padding: "10px" }}>
                <h5>List FAQ </h5>

                <Table striped bordered>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Question</th>
                            <th>Answer</th>
                            <th>Categories</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {data && data.map((item, i) => {
                            return <tr>
                                <td>{i + 1}</td>
                                <td>{item?.question}</td>
                                <td>{item?.answer}</td>
                                <td>{item?.category_id?.title}</td>
                               
                                <td className="text-right footable-last-visible" style={{ display: 'table-cell' }}>
                                    <Link to={`bannerEdit/${item._id}`} className="btn btn-soft-primary btn-icon btn-circle btn-sm" title="Edit">
                                        <i className="las la-edit" />
                                    </Link>
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
export default ListFaqAdmin