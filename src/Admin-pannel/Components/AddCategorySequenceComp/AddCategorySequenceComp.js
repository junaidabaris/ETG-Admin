import axios from "axios";
import Multiselect from "multiselect-react-dropdown";
import { useEffect, useState } from "react"
import { AiFillEdit } from "react-icons/ai"
import { Link } from "react-router-dom"

function AddCategorySequencePage() {
    const [categ, setCateg] = useState([]);
    const [finalCatD, setFinalCatD] = useState();
    const [getListData, setgetListData] = useState();
    const [loading, setLoading] = useState(true)
    const token = window.localStorage.getItem('adminToken')

    const finalSendingD = { category_id: finalCatD }

    useEffect(() => {
        const getCatData = async () => {
            const getCategoryName = []
            const reqData = await axios.get("https://onlineparttimejobs.in/api/category/admin", {
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    Authorization: `Bearer ${token}`,
                },
            })
            for (let i = 0; i < reqData.data.length; i++) {
                getCategoryName.push({ name: reqData.data[i]?.name, _id: reqData.data[i]?._id })

            };
            if (getCategoryName.length) {
                setCateg(getCategoryName);
            }
        }
        getCatData();
    }, [])

    const sendData = async () => {
        try {
            const res = await axios.post(`https://onlineparttimejobs.in/api/categorySequence/add_CategorySequence`, finalSendingD, {
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    Authorization: `Bearer ${token}`,
                },
            });
            alert('added')
        } catch (error) {
            alert('not added')
        }
    };

    const getdata = async () => {
        const res = await axios.get('https://onlineparttimejobs.in/api/category/admin', {
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                Authorization: `Bearer ${token}`,
            },
        })
        setLoading(false)
        setgetListData(res.data)
    };

    useEffect(() => {
        getdata()
    }, []);



    console.log('getListData', getListData)


    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="aiz-titlebar text-left mt-2 mb-3">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <h1 className="h3">Category Management</h1>
                            </div>

                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header">
                            <h5 className="mb-0 h6">Category Management</h5>
                        </div>
                        <div className="card-body">

                            <section className="form-section ms-3">
                                <div className="row">
                                    {/* <form action=""> */}
                                    <div className="col-lg-6 col-md-6">
                                        <Multiselect
                                            isObject={true}
                                            displayValue="name"
                                            options={categ}
                                            showCheckbox
                                            selectedValues={[]}
                                            onRemove={(selectedCat) => {
                                                const selectedIds = selectedCat.map((cat) => {
                                                    return cat._id
                                                })
                                                setFinalCatD(selectedIds)
                                            }}
                                            onSelect={(selectedCat) => {
                                                const selectedIds = selectedCat.map((cat) => {
                                                    return cat._id
                                                })
                                                setFinalCatD(selectedIds)
                                            }}
                                        />
                                    </div>
                                    <div className="col-lg-3">
                                        <button className="btn btn-primary mr-3" type="button" onClick={sendData}>Save</button>
                                    </div>
                                    {/* </form> */}
                                </div>
                            </section>


                            <div className="col-lg-6 col-md-6">
                                <table className="table dark">
                                    <thead style={{ backgroundColor: "black", color: 'white' }}>
                                        <tr>
                                            <th class="table-secondary" scope="col">#</th>
                                            <th class="table-secondary" scope="col">Name</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {loading ? <h3>Loading...</h3> : getListData && getListData.map((item, i) => {
                                            return <tr key={i}>
                                                <td scope="row">{i}</td>
                                                <td scope="row">{item?.name}</td>
                                            </tr>
                                        })}
                                    </tbody>
                                </table>
                            </div>


                            <div className="aiz-pagination">
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto">
                </div>
            </div>
        </>
    )
}
export default AddCategorySequencePage