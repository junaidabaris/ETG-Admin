import axios from "axios";
import Multiselect from "multiselect-react-dropdown"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { base_Url, base_Url_Assets } from "../../../server";
import { ToastContainer, toast } from "react-toastify";
const token = window.localStorage.getItem('token')

function RoboticMasterEdit() {
    const [add, setAdd] = useState({
        userid: '',
        categoryPermit: '',
        productPermit: ''
    })

    // console.log(add);

    const [select, setSelect] = useState(null)

    const [style, setSTyle] = useState([]);
    // console.log('style', style);
    const [finalStyleD, setFinalStyleD] = useState();
    const [products, setProducts] = useState();

    // console.log('finalStyleD', finalStyleD);


    const [style2, setSTyle2] = useState([]);
    // console.log('style', style2);
    const [finalStyleD2, setFinalStyleD2] = useState();
    const param = useParams()

    // console.log('finalStyleD2', finalStyleD2);

    const handleChange = (e) => {
        const clone = { ...add }
        const val = e.target.value
        const name = e.target.name
        clone[name] = val
        setAdd(clone)
    }

    const selectCat = async () => {
        const res = await axios.get(`https://onlineparttimejobs.in/api/customerPermit/user`, {
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                Authorization: `Bearer ${token}`,
            },
        })
        setSelect(res.data)
    }

    const getSubAsetsId = async () => {
        const getByIdData = await axios.get(`${base_Url_Assets}customerPermit/user/${param.id}`, {
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                Authorization: `Bearer ${token}`,
            },
        })
        setAdd(getByIdData.data)
        // console.log(getByIdData.data);

        const maped = getByIdData.data.prodSet.map((item) => {
            // console.log(item, 'productset');
            return { ...item, name: item.name, uid: item.uid, _id: item._id }
        })
        const maped2 = getByIdData.data.categSet.map((item) => {
            return { ...item, name: item.name, uid: item.uid, _id: item._id }
        })
        setFinalStyleD(maped2)
        setFinalStyleD2(maped)
        // setFinalStyleD2(getByIdData.data.user.email)
        const clone = { ...add, userid: getByIdData.data.user?._id }
        setAdd(clone)
    }

    useEffect(() => {
        getSubAsetsId()
        selectCat()
    }, [])

    useEffect(() => {
        const getStyleData = async () => {
            const getCategoryName = []
            const reqData = await axios.get(`https://onlineparttimejobs.in/api/category/admin`,
                {
                    headers: {
                        "Content-type": "application/json; charset=UTF-8",
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            for (let i = 0; i < reqData.data.length; i++) {
                getCategoryName.push({ name: reqData.data[i]?.name, _id: reqData.data[i]?._id, uid: reqData.data[i]?.uid })
            };
            if (getCategoryName.length) {
                setSTyle(getCategoryName);
            }
        }
        getStyleData();
    }, []);


    useEffect(() => {
        if (finalStyleD?.length) {
            const getStyleData = async () => {
                const getCategoryName = []
                const reqData = await axios.post(`https://onlineparttimejobs.in/api/customerPermit/category`, { categoryList: finalStyleD },
                    {
                        headers: {
                            "Content-type": "application/json; charset=UTF-8",
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );


                setProducts(reqData.data);
            }
            getStyleData();
        }
    }, [finalStyleD]);

    const postData = async () => {
        const obj = { userid: add.userid, categoryPermit: finalStyleD, productPermit: finalStyleD2 }
        const postApi = await axios.put(`https://onlineparttimejobs.in/api/customerPermit/user`, obj,
            {
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    Authorization: `Bearer ${token}`,
                },
            }
        )
        console.log(postApi);
    }

    const toastSuccessMessage = () => {
        toast.success("Robotic Master updated Successfully.", {
            position: "top-center"
        })
    };

    const handleEdit = async () => {
        console.log('finalStyleD', finalStyleD);
        console.log('finalStyleD2', finalStyleD2);

        const finalD = []
        const finalD2 = []

        for (let index = 0; index < finalStyleD.length; index++) {
            const element = finalStyleD[index];
            finalD.push(element.uid)

        }
        for (let index = 0; index < finalStyleD2.length; index++) {
            const element = finalStyleD2[index];
            finalD2.push(element.uid)

        }

        const fD = {
            userid: add.userid,
            categoryPermit: finalD,
            productPermit: finalD2
        }

        // const finalD = [...finalStyleD ]
        const responce = await axios.put(`https://onlineparttimejobs.in/api/customerPermit/user`, fD, {
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                Authorization: `Bearer ${token}`,
            },
        })
        if (responce.status == '200') {
            toastSuccessMessage()
        }
        toastSuccessMessage()

    }

    // const handleEdit = () => {
    //     postData(add)
    // }
    console.log(finalStyleD);

    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="aiz-titlebar text-left mt-2 mb-3">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <h1 className="h3">Edit Robotic SubCategories</h1>
                            </div>
                            {/* <div className="col-md-6 text-md-right">
                                <Link to="/admin/roles/create" className="btn btn-circle btn-info">
                                    <span>Add New Role</span>
                                </Link>
                            </div> */}
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header">
                            <h5 className="mb-0 h6">Edit Robotic  SubCategories</h5>
                        </div>
                        <div className="card">

                            <div className="card-body">

                                <section className="form-section">
                                    <div className="row">
                                        {/* <form action=""> */}
                                        <div className="col-lg-4">
                                            <div class="mb-3">
                                                <label for="exampleFormControlInput1" class="form-label">User Customer Email</label>
                                                <select className="form-select" aria-label="Default select example" name="userid" value={add.userid} onChange={handleChange}>
                                                    <option selected>Open this select menu</option>
                                                    {select && select.map((item) => {
                                                        return <option key={item?._id} value={item?._id}>{item?.email}</option>
                                                    })}
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="">
                                                <label for="exampleFormControlInput1" class="form-label">Choose Category</label>
                                                <Multiselect
                                                    isObject={true}
                                                    displayValue="name"
                                                    options={style}
                                                    showCheckbox
                                                    selectedValues={finalStyleD}
                                                    onRemove={(selectedCat) => {
                                                        console.log(selectedCat);
                                                        const selectedIds = selectedCat.map((cat) => {
                                                            return cat
                                                        })
                                                        setFinalStyleD(selectedIds)
                                                    }}
                                                    onSelect={(selectedCat) => {
                                                        // setFinalCatD(event)
                                                        console.log(selectedCat);
                                                        // console.log('selectedCat', selectedCat);
                                                        const selectedIds = selectedCat.map((cat) => {
                                                            // console.log('cat', cat);
                                                            return cat
                                                        })
                                                        setFinalStyleD(selectedIds)
                                                    }}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="">
                                                <label for="exampleFormControlInput1" class="form-label">Choose Products</label>
                                                <Multiselect
                                                    isObject={true}
                                                    displayValue="name"
                                                    options={style}
                                                    showCheckbox
                                                    selectedValues={finalStyleD2}
                                                    onRemove={(selectedCat) => {
                                                        const selectedIds = selectedCat.map((cat) => {
                                                            return cat
                                                        })
                                                        setFinalStyleD2(selectedIds)
                                                    }}
                                                    onSelect={(selectedCat) => {
                                                        // setFinalCatD(event)
                                                        const selectedIds = selectedCat.map((cat) => {
                                                            return cat
                                                        })
                                                        setFinalStyleD2(selectedIds)
                                                    }}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 m-4">
                                            <button className="btn btn-primary mr-3" type="button" onClick={handleEdit}>Save</button>
                                            {/* <Link to="/admin/asset-category" className="btn  rounded-2 btn-danger">Close</Link> */}
                                        </div>
                                        {/* </form> */}
                                    </div>
                                </section>
                                <div className="aiz-pagination">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto">
                </div>
                <ToastContainer />
            </div>
        </>
    )
}
export default RoboticMasterEdit