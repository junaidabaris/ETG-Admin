import axios from "axios";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
import { token } from "../../common/TokenArea";

function ListBanner() {
    const [data, setData] = useState(null)
    const [error, seterror] = useState(null)
    const getData = async () => {
        try {
            const res = await axios.get(`https://onlineparttimejobs.in/api/banner/admin`, {
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    Authorization: `Bearer ${token}`,
                },

            })
            setData(res.data)
        } catch (error) {
            seterror('Server Error')
        }
    }
    useEffect(() => {
        getData()
    }, [])


    const changeStatus = async (item) => {
        const obj = { approval: !item.approval }
        try {
            const res = await axios.put(`https://onlineparttimejobs.in/api/banner/updateStatus/${item._id}`, obj, {
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    Authorization: `Bearer ${token}`,
                },
            })
            setTimeout(() => {
                getData()
            }, 1000);
        } catch (error) {
            alert('Server Error Status not change')
        }
    }


    const deleteBrandData = async (id) => {
        try {
            const res = await axios.delete(`https://onlineparttimejobs.in/api/banner/${id}`,{
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    Authorization: `Bearer ${token}`,
                },
            })
            getData()
            alert('Banner Delete Successfully')
        } catch (error) {
            alert('Banner Not Delete')
        }
    }

    return <div className="aiz-main-content">
        <div className="px-15px px-lg-25px">
            <div className="card" style={{ padding: "10px" }}>
                <h5>List Banner</h5>

                <Table striped bordered>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Slider Image</th>
                            <th>Slider Content</th>
                            <th>Active</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {data && data.map((item, i) => {
                            return <tr>
                                <td>{i + 1}</td>
                                <td>
                                    {item?.image?.url ? <img style={{ width: "140px", height: "140px" }} src={item?.image?.url} /> : <>No Image</>}
                                </td>
                                <td>
                                    <div>Slider Top Heading : {item?.SliderTopHeading}</div>
                                    <div>Link : {item?.url}</div>
                                    <div>Bottom Text : {item?.bottomText}</div>
                                </td>
                                <td style={{ display: "table-cell" }}>
                                    <label className="aiz-switch aiz-switch-success mb-0">
                                        <input
                                            onChange={() => { changeStatus(item) }}
                                            type="checkbox"
                                            checked={item.approval}
                                        />
                                        <span className="slider round" />
                                    </label>
                                </td>

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
export default ListBanner