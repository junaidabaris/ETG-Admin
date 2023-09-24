

import axios from "axios"
import { useEffect, useState } from "react"
import { Table } from "react-bootstrap"
import { GrFormView } from "react-icons/gr"
import { MdDelete } from "react-icons/md"
import { token } from "../../common/TokenArea"
function ListvTechPurchase() {
    const [data, setData] = useState(null)

    const getData = async () => {
        const res = await axios.get(`https://onlineparttimejobs.in/api/servicePurchaseProduct`,{
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                'Authorization': 'Bearer ' + token
            }
        })
        setData(res.data)
    }

    useEffect(() => {
        getData()
    }, [])

    const DeleteMember = async (id) => {
        try {
            await axios.delete(`https://onlineparttimejobs.in/api/delete_TransferStock/${id}`)
            alert('Transfer Stock Deleted!')
            getData()
        } catch (error) {
            alert('Transfer Stock Not Deleted')
        }
    }
    return <div className="aiz-main-content" style={{ width: "1300px", margin: "auto" }}>
        <div className="px-15px px-lg-25px">
            <div className="card" style={{ padding: "10px" }}>
                <h5>List Purchase Transfer</h5>

                <div style={{ margin: "10px 0", display: "flex", justifyContent: "end" }}>
                    <input style={{ width: '250px' }} placeholder="Filter" className="form-control" />
                    <button type="button" style={{ margin: "0 10px" }} className="btn btn-info">Filter</button>
                </div>

                <Table striped bordered>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Date</th>
                            <th>Number Of Product</th>
                            <th>Reference</th>
                            <th>Supplier</th>
                            {/* <th>Pickup Points</th> */}
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data && data.map((item, i) => {
                            return <tr key={item?._id}>
                                <td>{i + 1}</td>
                                <td>{item.createdAt}</td>
                                <td> {item?.products?.length} </td>
                                <td> {item?.referenceNo} </td>
                                <td>{item?.supplier[0]?.firstname + " " + item?.supplier[0]?.lastname}</td>
                                <td>
                                    {item?.status[0]?.statusId?.name}
                                </td>
                                <td>
                                    <MdDelete style={{ fontSize: "22px" }} onClick={() => DeleteMember(item._id)} />
                                </td>
                            </tr>
                        })}

                    </tbody>
                </Table>
            </div>
        </div>
    </div>
}
export default ListvTechPurchase