import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Multiselect from "multiselect-react-dropdown";

function AddStyleManagmentMultiLingual({ data, item, i, params, sendData, onChangeHandler, setValue, bringImage, bringImage1, bringImage2, bringImage3, bringFinalCaetgD, bringFinalCategoryTypeD }) {

    const [categ, setCateg] = useState([]);
    const [finalCatD, setFinalCatD] = useState();
    const [categoryType, setCategoryType] = useState([]);
    const [finalCategoryTypeD, setFinalCategoryTypeD] = useState()
    const [subCategory, setSubCategory] = useState([]);
    const [finalSubCategoryD, setFinalSubCategoryD] = useState();

    const [image, setImage] = useState(null)
    const [image1, setImage1] = useState(null)
    const [image2, setImage2] = useState(null)
    const [image3, setImage3] = useState(null)

    // const [state, setState] = useState({
    //     name: "",
    //     code: "",
    //     category_type: [],
    //     category: [],
    //     subCategory: [],
    //     product_id: [],
    //     banner_img: '',
    //     header_web_img: '',
    //     menu_log: '',
    //     header_mob_img: '',
    //     active: true,
    // });

    const token = window.localStorage.getItem('adminToken');

    useEffect(() => {
        const getCategoryTypeData = async () => {
            const getCategoryName = []
            const reqData = await axios.get("https://onlineparttimejobs.in/api/categoryType", {
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    Authorization: `Bearer ${token}`,
                },
            });

            for (let i = 0; i < reqData.data.length; i++) {
                getCategoryName.push({ name: reqData.data[i]?.name, _id: reqData.data[i]?._id })
            };
            if (getCategoryName.length) {
                setCategoryType(getCategoryName);
            }
        }
        getCategoryTypeData();
    }, []);

    useEffect(() => {
        const getCatData = async () => {
            const getCategoryName = []
            const reqData = await axios.get("https://onlineparttimejobs.in/api/category", {
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    Authorization: `Bearer ${token}`,
                },
            });
            for (let i = 0; i < reqData.data.length; i++) {
                getCategoryName.push({ name: reqData.data[i]?.name, _id: reqData.data[i]?._id })
            };
            if (getCategoryName.length) {
                setCateg(getCategoryName);
            }
        }
        getCatData();
    }, []);

    useEffect(() => {
        const getSubCategoryData = async () => {
            const getCategoryName = []
            const reqData = await axios.get("https://onlineparttimejobs.in/api/category/child", {
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    Authorization: `Bearer ${token}`,
                },
            });

            for (let i = 0; i < reqData.data.length; i++) {
                getCategoryName.push({ name: reqData.data[i]?.name, _id: reqData.data[i]?._id })
            };
            if (getCategoryName.length) {
                setSubCategory(getCategoryName);
            }
        }
        getSubCategoryData();
    }, [])

    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            setImage(URL.createObjectURL(event.target.files[0]));
            bringImage(URL.createObjectURL(event.target.files[0]))
        }
    }
    const onImageChange1 = (event) => {
        if (event.target.files && event.target.files[0]) {
            setImage1(URL.createObjectURL(event.target.files[0]));
            bringImage1(URL.createObjectURL(event.target.files[0]))
        }
    }
    const onImageChange2 = (event) => {
        if (event.target.files && event.target.files[0]) {
            setImage2(URL.createObjectURL(event.target.files[0]));
            bringImage2(URL.createObjectURL(event.target.files[0]))
        }
    }
    const onImageChange3 = (event) => {
        if (event.target.files && event.target.files[0]) {
            setImage3(URL.createObjectURL(event.target.files[0]));
            bringImage3(URL.createObjectURL(event.target.files[0]))
        }
    };

    bringFinalCaetgD(finalCatD)
    bringFinalCategoryTypeD(finalCategoryTypeD)



    // const finalSendingD = { ...state, isActive: activeD, banner_img: image1, header_web_img: image, menu_log: image3, header_mob_img: image2, category: finalCatD, category_type: finalCategoryTypeD }




    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="card-header">
                        <h5>{params?.id ? 'Update' : 'Add'} Style Management ({item?.lable})</h5>
                    </div>
                    <div className="card-body">

                        <section className="form-section">
                            <div className="row">
                    
                                <div className="col-lg-4 mb-2">
                                    <label className="form-check-label m-2" htmlFor="flexRadioDefault1">Name <span style={{ color: 'red' }}>*</span></label>
                                    <div>
                                        <input type="text" name="name" value={item?.name} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name*" onChange={(e) => { onChangeHandler(e, item.language_id) }} />
                                    </div>
                                </div>

                                <div className="col-lg-4 mb-2">
                                    <label className="form-check-label m-2" htmlFor="flexRadioDefault1">Code <span style={{ color: 'red' }}>*</span></label>
                                    <div>
                                        <input type="text" name="code" value={item?.code} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Code*" onChange={(e) => { onChangeHandler(e, item.language_id) }} />
                                    </div>
                                </div>

                                <div className="col-lg-4 mb-2">
                                    <label className="form-check-label m-2" htmlFor="flexRadioDefault1">Category Type <span style={{ color: 'red' }}>*</span></label>
                                    <Multiselect
                                        isObject={true}
                                        displayValue="name"
                                        options={categoryType}
                                        showCheckbox
                                        selectedValues={[]}
                                        onRemove={(selectedCat) => {
                                            const selectedIds = selectedCat.map((cat) => {
                                                return cat._id
                                            })
                                            setFinalCategoryTypeD(selectedIds)
                                        }}
                                        onSelect={(selectedCat) => {
                                            const selectedIds = selectedCat.map((cat) => {
                                                return cat._id
                                            })
                                            setFinalCategoryTypeD(selectedIds)
                                        }}
                                    />
                                </div>
                                <div className="col-lg-4 mb-2">
                                    <label className="form-check-label m-2" htmlFor="flexRadioDefault1">Category <span style={{ color: 'red' }}>*</span></label>
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
                                <div className="col-lg-4 mb-2">
                                    <label className="form-check-label m-2" htmlFor="flexRadioDefault1">Sub Category <span style={{ color: 'red' }}>*</span></label>
                                    <Multiselect
                                        isObject={true}
                                        displayValue="name"
                                        options={subCategory}
                                        showCheckbox
                                        selectedValues={[]}
                                        onRemove={(selectedCat) => {
                                            const selectedIds = selectedCat.map((cat) => {
                                                return cat._id
                                            })
                                            setFinalSubCategoryD(selectedIds)
                                        }}
                                        onSelect={(selectedCat) => {
                                            const selectedIds = selectedCat.map((cat) => {
                                                return cat._id
                                            })
                                            setFinalSubCategoryD(selectedIds)
                                        }}
                                    />
                                </div>
                                <div className="col-lg-4 mb-2">
                                    <label className="form-check-label m-2" htmlFor="flexRadioDefault1">Select Products</label>
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

                                <div className="col-lg-4 mb-2">
                                    <label className="form-check-label m-2" htmlFor="flexRadioDefault1">Header Image-Web<span style={{ color: 'red' }}>*</span></label>
                                    <div>
                                        <input type="file" name="header_web_img" className="form-control" aria-describedby="emailHelp" onChange={onImageChange} />
                                        <img src={image} style={{ width: '200px', height: '100px', objectFit: 'cover', margin: '10px', border: '1px solid black' }} />
                                    </div>
                                </div>


                                <div className="col-lg-4 mb-2">
                                    <label className="form-check-label m-2" htmlFor="flexRadioDefault1">Banner Image-Web<span style={{ color: 'red' }}>*</span></label>
                                    <div>
                                        <input type="file" name="banner_img" className="form-control" aria-describedby="emailHelp" onChange={onImageChange1} />
                                        <img src={image1} style={{ width: '200px', height: '100px', objectFit: 'cover', margin: '10px', border: '1px solid black' }} />
                                    </div>
                                </div>

                                <div className="col-lg-4 mb-2">
                                    <label className="form-check-label m-2" htmlFor="flexRadioDefault1">Banner Image-Mobile<span style={{ color: 'red' }}>*</span></label>
                                    <div>
                                        <input type="file" name="header_mob_img" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name*" onChange={onImageChange2} />
                                        <img src={image2} style={{ width: '200px', height: '100px', objectFit: 'cover', margin: '10px', border: '1px solid black' }} />
                                    </div>
                                </div>
                                <div className="col-lg-4 mb-2">
                                    <label className="form-check-label m-2" htmlFor="flexRadioDefault1">Menu Logo<span style={{ color: 'red' }}>*</span></label>
                                    <div>
                                        <input type="file" name="menu_log" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name*" onChange={onImageChange3} />
                                        <img src={image3} style={{ width: '200px', height: '100px', objectFit: 'cover', margin: '10px', border: '1px solid black' }} />
                                    </div>
                                </div>

                                <div className="col-lg-4">
                                    <label className="form-check-label m-2" htmlFor="flexRadioDefault1">Is Active<span style={{ color: 'red' }}>*</span></label>
                                    <select className="form-select" name="isActive" value={item?.isActive} aria-label="Default select example" onChange={(e) => { onChangeHandler(e, item.language_id) }}>
                                        <option selected>IS Active</option>
                                        <option value={true}>Yes</option>
                                        <option value={false}>No</option>
                                    </select>
                                </div>

                                <div className="col-lg-12 mt-3">
                                    {data.length == i + 1 ? <div className="form-group mb-3 text-right">
                                        <button type="button" className="btn btn-primary" fdprocessedid="uzw7ye" onClick={sendData}>Save</button>
                                        <button className="btn btn-danger ms-2">Cancel</button>
                                    </div>
                                        :
                                        <div className="form-group mb-3 text-right">
                                            {i !== 0 && <button type="submit" className="btn btn-primary" fdprocessedid="uzw7ye" onClick={() => { setValue(i - 1) }}>Prev</button>}
                                            <button type="submit" className="btn btn-primary" fdprocessedid="uzw7ye" onClick={() => { setValue(i + 1) }}>Next</button>
                                        </div>
                                    }

                                </div>
                             
                            </div>
                        </section>

                    </div>

                </div>

            </div>
        </>
    )
}

export default AddStyleManagmentMultiLingual