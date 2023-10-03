import { useEffect, useState } from "react";
import 'react-toastify/dist/ReactToastify.css';
// import "./AddNewProduct.css";
import ShippingConfigurationAdmin from "../../Components/addNewProductsComponents/ShippingConfigurationAdmin";
import { useAddNewProductMutation, useEditProductMutation, useGetBrandsQuery, useGetCategoriesQuery, useGetCurrencyQuery, useGetLanguagesQuery, useGetPickupPointQuery, useGetProductByIdQuery, useGetSellersQuery, useGetUnitMasterQuery } from "../../Components/all-products/allproductsApi/allProductsApi";
import { ToastContainer, toast } from "react-toastify";
import { useParams } from "react-router-dom";
import Multiselect from "multiselect-react-dropdown";
import ToggleStatus from "../../Components/toggleStatus/ToggleStatus";
import ProductsVariation from "../../Components/addNewProductsComponents/ProductsVariation";
import ProductDescriptionWrapper from "../../Components/productDescriptionWrapper/productDescriptionWrapper";
import { useSelector } from "react-redux";
import axios from "axios";
import { RxCross1 } from "react-icons/rx";

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { token } from "../../common/TokenArea";
import ProductParams from "../addNewProductsComponents/ProductParams";
import { Checkbox, ConfigProvider, Radio } from 'antd';
const toastSuccessMessage = () => {
    toast.success("Product updated Successfully", {
        position: "top-center"
    })
};

const toastErrorMessage = () => {
    toast.error("Product not updated", {
        position: "top-center"
    })
};

function AddNewProductsPage() {
    const [tags, setTags] = useState([]);
    const [categ, setCateg] = useState([]);
    const [finalCatD, setFinalCatD] = useState();

    const [flashDeal, setFlashdeal] = useState({
        start_Date: '',
        end_Date: '',
        discount_type: '',
        discount: '',
    })
    const token = window.localStorage.getItem('token')

    const [proAtt, setProAtt] = useState()
    const params = useParams();
    const { data: unitMast } = useGetUnitMasterQuery(token)

    const [inputval, setInputVal] = useState({
        todays_deal: false,
        quotation: false,
        featured: false,
        cash_on_delivery: false,
        show_stock_quantity: false,
        show_stock_with_text_only: false,
        hide_stock: false,
        low_stock_quantity: false,
        trending: false,
        // products information
        name: '',
        user_id: '63e6579c455104434981d8da',
        // category_id: '',
        category_id: [],
        brand_id: '642d520da94153a958c06be6',
        unit_price: '',
        hsn_code: '',
        sale_rp: '',
        share_rp: '',
        weights: "",
        minimum_purchase_qty: '',
        tags: [],
        barcode: '',
        refundable: false,
        // products images
        gallery_image: null,
        thumbnail_image: null,
        // product vedios
        video_provider: '',
        video_link: '',
        variations: [],
        attributes: [],
        size: '',
        current_stock: '',
        minimum_order_qty: '',
        shipping_cost: '',
        // Product price & stock
        // price: '',
        purchase_price: '',
        variant: '',
        variant_price: '',
        quantity: '',
        total_quantity: '',
        minimum_order_quantity: '',
        shipping_coast: '',
        Shipping_cost_multiply_with_quantity: '',
        slug: '',
        mrp: '',
        meta_title: '',
        meta_description: '',
        meta_keywords: '',
        meta_img: '',
        // low stock quantity
        Quantity: '',
        seller_id: '',
        unit: "",
        company_id: ""
    });

    const changeStatus = (isStatus, key) => {
        const clonedInputVal = { ...inputval }
        clonedInputVal[key] = isStatus;
        setInputVal(clonedInputVal)
    }
    const brandData = useGetBrandsQuery(token);
    const { data: sellerD } = useGetSellersQuery(token)
    // const [addProduct, response] = useAddNewProductMutation();
    const [varianstData, setVariantsData] = useState()
    const { productDescription } = useSelector((state) => {
        return state.textEditorData
    })

    useEffect(() => {
        const getCatData = async () => {
            const getCategoryName = []
            const resData = await axios.get(`https://onlineparttimejobs.in/api/category/admin`, {
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    Authorization: `Bearer ${token}`,
                },
            })
            for (let i = 0; i < resData.data.length; i++) {
                getCategoryName.push({ name: resData.data[i].name, _id: resData.data[i]._id })

            };
            if (getCategoryName.length) {
                setCateg(getCategoryName);
            }
        }
        getCatData();
    }, [])
    const [attributesVal, setattributesVals] = useState()

    const setattributesVal = (val) => {
        setattributesVals(val)
    }


    const [spinn, setspinn] = useState(false)
    const [spcOr, setspcOr] = useState(false)



    const handleVariantData = (data) => {
        setVariantsData(data)
    }


    function handleTagKeyDown(e) {
        if (e.key !== 'Enter') return
        const value = e.target.value
        if (!value.trim()) return
        setTags([...tags, value])
        e.target.value = ''
    };
    const removetagTag = (index) => [
        setTags(tags.filter((el, i) => i !== index))
    ];


    const [data1, setData1] = useState()
    const getDatas = async () => {
        const res = await axios.get('https://onlineparttimejobs.in/api/attributeSetMaster/admin', {
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                Authorization: `Bearer ${token}`,
            },
        })
        setData1(res.data)
    }
    useEffect(() => {
        getDatas()
    }, [])

    const changettriPro = (e) => {
        const maped = data1.find((item) => {
            return item._id === e.target.value
        })
        setProAtt(maped);
    }
    const removeRowAt = (id) => {
        const clone = { ...proAtt }
        const filterd = clone.values.filter((item) => {
            if (item._id === id) {
                return
            } else {
                return item
            }
        })
        clone.values = filterd
        setProAtt(clone)
    }

    const changeValues = (e) => {
        const clone = { ...proAtt }
        const filterd = clone.values.map((item) => {
            if (item._id === e.target.name) {
                return { ...item, value: e.target.value }
            } else {
                return item
            }
        })
        clone.values = filterd
        setProAtt(clone)
    }






    const { data, refetch } = useGetLanguagesQuery(token);

    const [shoing, setShoaing] = useState({
        featured: false,
        todays_deal: false,
        trending: false,
    })

    const [value, setValue] = useState(0);
    const [val, setVal] = useState(data)

    const changeDataForm = (index) => {
        setFinalCatD(val[index].category_id)
        setTags(val[index].tags)
        setVariantsData(val[index].variations)
        setShoaing({
            featured: val[index].featured,
            todays_deal: val[index]?.todays_deal,
            trending: val[index]?.trending,
        })
    }



    const handleChange = (event, newValue) => {
        setValue(newValue);
        const maped = val.map((item, id) => {
            if (newValue == id) {
                const obj = { ...item, ...shoing, variations: varianstData, flashDeal: flashDeal, variation_Form: attributesVal, tags: tags, category_id: finalCatD, productDescription: productDescription, attributes: [proAtt?._id], attributeSet: proAtt?.values }
                return obj
            } else {
                return item
            }
        })
        setVal(maped)
        changeDataForm(newValue)
    };


    const changeHandr = (e) => {
        const clone = { ...shoing }
        const name = e.target.name
        clone[e.target.name] = !clone[name]
        setShoaing(clone)
    }
    const onChangeHandler = (e, id, bul) => {
        if (bul) {
            const maped = val.map((item) => {
                if (item.language_id == id) {
                    const obj = { ...item, [e.target.name]: [!e.target.name], variations: varianstData, flashDeal: flashDeal, variation_Form: attributesVal, tags: tags, category_id: finalCatD, productDescription: productDescription }
                    return obj
                } else {
                    return item
                }
            })
            setVal(maped)

        } else {

        } const maped = val.map((item) => {
            if (item.language_id == id) {
                const obj = { ...item, [e.target.name]: e.target.value, }
                return obj
            } else {
                return item
            }
        })
        setVal(maped)

    }

    const [disNextVal, setdisNextVal] = useState(true)
    const freshDeals = (e) => {
        const clone = { ...flashDeal }
        clone[e.target.name] = e.target.value
        setFlashdeal(clone)
        if (clone.start_Date) {
            setdisNextVal(false)
        }
    }


    const addFile = async (clonedObj) => {

        // const url = 'https://onlineparttimejobs.in/api/product/add_product'
        const url = `https://onlineparttimejobs.in/api/product/${params.id}`
        const images = new FormData();
        let cloned = [...clonedObj]
        let varclone1 = []
        for (let indi = 0; indi < cloned?.length; indi++) {
            const element3 = cloned[indi];
            for (let ind = 0; ind < element3.images?.length; ind++) {
                images.delete('image');
                const element0 = element3?.images[ind];
                images.append('image', element0);
                if (element0?.url) {

                } else {
                    try {
                        const res = await axios.post(`https://onlineparttimejobs.in/api/cloudinaryImage/addImage`, images)
                        const obj = { public_id: res.data.public_id, url: res.data.url }
                        varclone1.push(obj)
                    } catch (error) {
                        console.log("Gallery Image  not uploded --outer");
                    }
                }

            }
            cloned[indi].images = varclone1
            varclone1 = []
            images.delete('image');

            images.append('image', element3?.mainImage_url);
            if (element3?.mainImage_url?.url) {

            } else {
                if (element3?.mainImage_url) {
                    try {
                        const res = await axios.post(`https://onlineparttimejobs.in/api/cloudinaryImage/addImage`, images)
                        const obj = { public_id: res.data.public_id, url: res.data.url }
                        cloned[indi].mainImage_url = obj
                    } catch (error) {
                        console.log("Gallery Image  not uploded--outer");
                    }
                }
            }

        }

        let varclone = []

        for (let ind = 0; ind < cloned?.length; ind++) {
            let element = cloned[ind].variations;
            for (let k = 0; k < element.length; k++) {
                let varImgs = []
                let element2 = element[k];
                for (let indi = 0; indi < element2.images?.length; indi++) {
                    images.delete('image');
                    const element3 = element2?.images[indi];
                    images.append('image', element3);
                    if (element3?.url) {

                    } else {
                        try {
                            const res = await axios.post(`https://onlineparttimejobs.in/api/cloudinaryImage/addImage`, images)
                            const obj = { public_id: res.data.public_id, url: res.data.url }
                            varImgs.push(obj)
                        } catch (error) {
                            console.log("Gallery Image  not uploded");
                        }
                    }

                }

                images.delete('image');
                images.append('image', element2.mainImage_url);
                if (element2.mainImage_url) {
                    if (element2.mainImage_url?.url) {

                    } else {
                        try {
                            const res2 = await axios.post(`https://onlineparttimejobs.in/api/cloudinaryImage/addImage`, images)
                            varclone.push({ ...element2, images: varImgs, mainImage_url: { public_id: res2.data.public_id, url: res2.data.url } })
                            varImgs = []
                        } catch (error) {
                            console.log("Thumnail Image  not uploded")
                        }
                    }
                }

            }

            if (varclone?.length) {
                cloned[ind].variations = varclone
            }
            varclone = []
        }
        try {
            const res = await axios.put(url, { list: cloned }, {
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    Authorization: `Bearer ${token}`,
                },
            });
            toastSuccessMessage()
            setspcOr(false)
        } catch (error) {
            toastErrorMessage()
            setspcOr(false)
        }
    }
    const addNewAttributeData = async (e, id) => {

        e.preventDefault();
        let clone2 = [...val]
        setspcOr(true)
        const maped = clone2.map((item) => {
            if (item.language_id == id) {

                const obj = { ...item, ...shoing, variations: varianstData, flashDeal: flashDeal, variation_Form: attributesVal, tags: tags, category_id: finalCatD, productDescription: productDescription, attributes: [proAtt?._id], attributeSet: proAtt?.values }
                return obj
            } else {
                return item
            }
        })
        setVal(maped)
        addFile(maped, token)
    };

    const { data: productData, isSuccess, isLoading } = useGetProductByIdQuery({ id: params.id, token: token });


    const setTabs = (i, str, id) => {
        if (str == 'nex') {
            setValue(i + 1)
        } else {
            setValue(i - 1)
        }
        const maped = val.map((item) => {
            if (item.language_id == id) {
                const obj = { ...item, ...shoing, variations: varianstData, flashDeal: flashDeal, variation_Form: attributesVal, tags: tags, category_id: finalCatD, productDescription: productDescription, attributes: [proAtt?._id], attributeSet: proAtt?.values }
                return obj
            } else {
                return item
            }
        })
        setVal(maped)
        changeDataForm(i)
    }


    useEffect(() => {
        if (productData && data) {
            const clone = []
            for (let j = 0; j < data.length; j++) {
                const element2 = data[j];
                for (let i = 0; i < productData?.product.length; i++) {
                    const element = productData?.product[i];
                    if (element?.language_id?._id == element2._id) {
                        clone.push(element)
                    }

                }

            }

            setVal(clone)
            if (val) {
                changeDataForm(0)
            }
        }
    }, [productData, data])


    const onchangeImges = (e, id) => {
        const inpVal = e.target.files;
        const maped = val.map((item) => {
            if (item.language_id == id) {
                const obj = { ...item, images: inpVal }
                return obj
            } else {
                return item
            }
        })
        setVal(maped)
    }
    const onchangeImges1 = (e, id) => {
        const inpVal = e.target.files[0];
        const maped = val.map((item) => {
            if (item.language_id == id) {
                const obj = { ...item, mainImage_url: inpVal }
                return obj
            } else {
                return item
            }
        })
        setVal(maped)
    }

    const SaveData = (i, str, id) => {
        const maped = val.map((item) => {
            if (item.language_id == id) {
                const obj = { ...item, ...shoing, variations: varianstData, flashDeal: flashDeal, variation_Form: attributesVal, tags: tags, category_id: finalCatD, productDescription: productDescription, attributes: [proAtt?._id], attributeSet: proAtt?.values }
                return obj
            } else {
                return item
            }
        })
        setVal(maped)
    }


    return (
        <>
            <div className="aiz-main-content">
                {spcOr && <div className="preloaderCount">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">ded</span>
                    </div>
                    <h6>please wait your product in Updating</h6>
                </div>}

                {spinn && <div className="preloaderCount">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>}
                <Box sx={{ width: '100%', typography: 'body1' }}>
                    <TabContext value={value}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList onChange={handleChange} aria-label="lab API tabs example">
                                {data && data.map((item, i) => {
                                    return <Tab label={item?.name} value={i} />
                                })}
                            </TabList>
                        </Box>
                        {val && val.map((item, i) => {
                            return <TabPanel value={i} key={i}>
                                <div className="px-15px px-lg-25px">
                                    <div className="aiz-titlebar text-left mt-2 mb-3">
                                        {params.id ? <h5 className="mb-0 h6">Edit Product {item.lable}</h5> : <h5 className="mb-0 h6">Add New Product {item.lable}</h5>}
                                    </div>
                                    <div>
                                        <form className="form form-horizontal mar-top" id="choice_form">
                                            <div className="row gutters-5">
                                                <div className="col-lg-8">

                                                    <div className="card">
                                                        <div className="card-header">
                                                            <h5 className="mb-0 h6">Product Information</h5>
                                                        </div>
                                                        <div className="card-body">

                                                            <div className="form-group row">
                                                                <label className="col-md-3 col-from-label">Product Name <span className="text-danger">*</span></label>
                                                                <div className="col-md-8">
                                                                    <input type="text" className="form-control" value={item?.name} name="name" placeholder="Product Name" required fdprocessedid="3bss68" onChange={(e) => { onChangeHandler(e, item.language_id) }} />
                                                                </div>
                                                            </div>

                                                            <div className="form-group row" id="category">
                                                                <label className="col-md-3 col-from-label">Category <span className="text-danger">*</span></label>
                                                                <div className="col-md-8">
                                                                    <Multiselect
                                                                        isObject={true}
                                                                        displayValue="name"

                                                                        options={categ}
                                                                        showCheckbox
                                                                        selectedValues={item?.category_id}
                                                                        onRemove={(selectedCat) => {
                                                                            const selectedIds = selectedCat.map((cat) => {
                                                                                return cat
                                                                            })
                                                                            setFinalCatD(selectedIds)
                                                                        }}
                                                                        onSelect={(selectedCat) => {
                                                                            const selectedIds = selectedCat.map((cat) => {
                                                                                return cat
                                                                            })
                                                                            setFinalCatD(selectedIds)
                                                                        }}
                                                                    />
                                                                </div>
                                                            </div>


                                                            <div className="form-group row" id="seller">
                                                                <label className="col-md-3 col-from-label">Seller</label>
                                                                <div className="col-md-8">
                                                                    <select className="form-select" aria-label="Default select example" value={item?.seller_id?._id} name="seller_id" onChange={(e) => { onChangeHandler(e, item.language_id) }} >
                                                                        <option>Select Seller</option>
                                                                        {sellerD && sellerD.map((item) => {
                                                                            return <option value={item._id} key={item._id}>{item.firstname + " " + item.lastname}</option>
                                                                        })}
                                                                    </select>
                                                                </div>
                                                            </div>


                                                            <div className="form-group row" id="brand">
                                                                <label className="col-md-3 col-from-label">Brand</label>
                                                                <div className="col-md-8">
                                                                    <select className="form-select" aria-label="Default select example" value={item?.brand_id?._id} name="brand_id" onChange={(e) => { onChangeHandler(e, item.language_id) }} >
                                                                        <option>Select Brand</option>
                                                                        {brandData.data && brandData.data.map((item) => {
                                                                            return <option value={item._id} key={item._id}>{item.name || item._id}</option>
                                                                        })}
                                                                    </select>
                                                                </div>
                                                            </div>

                                                            <div className="form-group row">
                                                                <label className="col-md-3 col-from-label">Unit</label>
                                                                <div className="col-md-8">
                                                                    <select className="form-select" value={item?.unit} aria-label="Default select example" name="unit" onChange={(e) => { onChangeHandler(e, item.language_id) }} >
                                                                        <option value={1}>Select Unit</option>
                                                                        {unitMast && unitMast.map((item) => {
                                                                            return <option value={item.name} key={item._id}>{item.name}</option>
                                                                        })}
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="form-group row">
                                                                <label className="col-md-3 col-from-label">Weight <small>(In Kg)</small></label>
                                                                <div className="col-md-8">
                                                                    <input type="text" value={item?.weights} className="form-control" name="weights" step="0.01" placeholder="weight" fdprocessedid="sq5qc3" onChange={(e) => { onChangeHandler(e, item.language_id) }} />
                                                                </div>
                                                            </div>




                                                            <div className="form-group row">
                                                                <label className="col-md-3 col-from-label">Minimum Purchase Qty <span className="text-danger">*</span></label>
                                                                <div className="col-md-8">
                                                                    <input type="number" value={item?.minimum_purchase_qty} lang="en" className="form-control" name="minimum_purchase_qty" required fdprocessedid="d0gl3m" onChange={(e) => { onChangeHandler(e, item.language_id) }} />
                                                                </div>
                                                            </div>

                                                            <div className="form-group row">
                                                                <label className="col-md-3 col-from-label">Tags <span className="text-danger">*</span>
                                                                </label>
                                                                <div className="col-md-8">
                                                                    <div className="tags_inp_wrapper">
                                                                        <div className='tags-input-container'>
                                                                            {tags?.map((tag, index) => {
                                                                                return <div className='tag-item' key={index}>
                                                                                    <span className='text'>{tag}</span>
                                                                                    <span className='close' onClick={() => removetagTag(index)}>&times;</span>
                                                                                </div>
                                                                            })}
                                                                            <input type="text" onKeyDown={(e) => { handleTagKeyDown(e, item.language_id) }} placeholder='type some text' className='tags-input' name="attributes" onChange={(e) => { onChangeHandler(e, item.language_id) }} />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="form-group row">
                                                                <label className="col-md-3 col-from-label">Barcode</label>
                                                                <div className="col-md-8">
                                                                    <input type="text" value={item?.barcode} className="form-control" name="barcode" placeholder="Barcode" fdprocessedid="ifjwoo" onChange={(e) => { onChangeHandler(e, item.language_id) }} />
                                                                </div>
                                                            </div>

                                                            <div className="form-group row">
                                                                <label className="col-md-3 col-from-label">Gallery Images</label>
                                                                <div className="col-md-8">
                                                                    <input type="file" className="form-control" name="gallery_image" multiple accept="image/*" onChange={(e) => { onchangeImges(e, item.language_id) }} />
                                                                </div>
                                                            </div>
                                                            <div className="form-group row">
                                                                <label className="col-md-3 col-from-label">Thumbnail Image</label>
                                                                <div className="col-md-8">
                                                                    <input type="file" name="mainImage_url" accept="image/*" className="form-control" onChange={(e) => { onchangeImges1(e, item.language_id) }} />
                                                                </div>
                                                            </div>

                                                            <div className="form-group row">
                                                                <label className="col-md-3 col-from-label"> Product Attribute </label>

                                                                <div className="col-md-8">
                                                                    <select className="form-select" aria-label="Default select example" name="unit" onChange={changettriPro}>
                                                                        <option value={1}>Select Unit</option>
                                                                        {data1 && data1.map((item) => {
                                                                            return <option value={item._id} key={item._id} id={item._id}>{item.name}</option>
                                                                        })}
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            {proAtt && <div className="form-group row">
                                                                <label className="col-md-3 col-from-label">Set Attribute Values</label>
                                                                <div className="col-md-8">
                                                                    {proAtt?.values && proAtt.values.map((item, i) => {
                                                                        return <div style={{ display: "flex", margin: "5px 0" }} key={i}>
                                                                            <label className="col-md-3 col-from-label">{item?.name}</label>
                                                                            <input placeholder="Value" name={item?._id} className="form-control" onChange={changeValues} />
                                                                            <div style={{ fontSize: "17px", margin: "0 5px" }}> <RxCross1 onClick={() => { removeRowAt(item?._id) }} /></div>
                                                                        </div>
                                                                    })}
                                                                </div>
                                                            </div>}








                                                            <div className="form-group row">
                                                                <label className="col-md-3 col-from-label">Refundable</label>
                                                                <div className="col-md-8">
                                                                    <ToggleStatus name="refundable" isStatus={item.refundable} changeStatus={changeStatus} />
                                                                </div>
                                                            </div>

                                                            <div className="form-group row">
                                                                <label className="col-md-3 col-from-label">Quotation</label>
                                                                <div className="col-md-8">
                                                                    <ToggleStatus name="quotation" isStatus={item.quotation} changeStatus={changeStatus} />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* <ProductsInformationAdmin /> */}



                                                    {/* <ProductsImages /> */}

                                                    <div className="card">
                                                        <div className="card-header">
                                                            <h5 className="mb-0 h6">Product Videos</h5>
                                                        </div>
                                                        <div className="card-body">

                                                            <div className="form-group row">
                                                                <label className="col-md-3 col-from-label">Video Provider</label>
                                                                <div className="col-md-8">
                                                                    <select className="form-select" value={item?.video_provider} aria-label="Default select example" name="video_provider" onChange={(e) => { onChangeHandler(e, item.language_id) }} >
                                                                        <option value="youtube">Youtube</option>
                                                                        <option value="dailymotion">Dailymotion</option>
                                                                        <option value="vimeo">Vimeo</option>
                                                                    </select>

                                                                </div>
                                                            </div>

                                                            <div className="form-group row">
                                                                <label className="col-md-3 col-from-label">Video Link</label>
                                                                <div className="col-md-8">
                                                                    <input type="text" value={item?.video_link} className="form-control" name="video_link" placeholder="Video Link" fdprocessedid="2pggse" onChange={(e) => { onChangeHandler(e, item.language_id) }} />
                                                                    <small className="text-muted">Use proper link without extra parameter. Don't use short share link/embeded iframe code.</small>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* <ProductsDescriptionAdmin /> */}

                                                    <div className="card">
                                                        <div className="card-header">
                                                            <h5 className="mb-0 h6">SEO Meta Tags</h5>
                                                        </div>
                                                        <div className="card-body">
                                                            <div className="form-group row">
                                                                <label className="col-md-3 col-from-label">Meta Title</label>
                                                                <div className="col-md-8">
                                                                    <input type="text" value={item?.meta_title} className="form-control" name="meta_title" placeholder="Meta Title" fdprocessedid="1hz7zu" onChange={(e) => { onChangeHandler(e, item.language_id) }} />
                                                                </div>
                                                            </div>
                                                            <div className="form-group row">
                                                                <label className="col-md-3 col-from-label">Meta Keyword</label>
                                                                <div className="col-md-8">
                                                                    <input type="text" value={item?.meta_keywords} className="form-control" name="meta_keywords" placeholder="Meta Key Word" fdprocessedid="1hz7zu" onChange={(e) => { onChangeHandler(e, item.language_id) }} />
                                                                </div>
                                                            </div>


                                                            <div className="form-group row">
                                                                <label className="col-md-3 col-from-label"></label>
                                                                <div className="col-md-8">
                                                                    <button type="button" className="btn btn-primary">Fetch AI Content</button>
                                                                </div>
                                                            </div>

                                                            <div className="form-group row">
                                                                <label className="col-md-3 col-from-label">Description</label>
                                                                <div className="col-md-8">
                                                                    <textarea name="meta_description" value={item?.meta_description} rows={8} className="form-control" onChange={(e) => { onChangeHandler(e, item.language_id) }} />
                                                                </div>
                                                            </div>

                                                            <div className="form-group row">
                                                                <label className="col-md-3 col-from-label"></label>
                                                                <div className="col-md-8">
                                                                    <button type="button" className="btn btn-primary">Fetch AI Content</button>
                                                                </div>
                                                            </div>

                                                            <div className="form-group row">
                                                                <label className="col-md-3 col-form-label" htmlFor="signinSrEmail">Meta Image</label>
                                                                <div className="col-md-8">
                                                                    <div className="input-group" data-toggle="aizuploader" data-type="image">
                                                                        <div className="input-group-prepend">
                                                                            <div className="input-group-text bg-soft-secondary font-weight-medium">Browse</div>
                                                                        </div>
                                                                        <div className="form-control file-amount">
                                                                            <input type="file" name="meta_image" className="selected-files" onChange={(e) => { onChangeHandler(e, item.language_id) }} />
                                                                        </div>
                                                                    </div>
                                                                    <div className="file-preview box sm">
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* <SeoMetaTagsAdmin /> */}
                                                </div>
                                                <div className="col-lg-4">
                                                    <ShippingConfigurationAdmin />

                                                    <div className="card">
                                                        <div className="card-header">
                                                            <h5 className="mb-0 h6">Low Stock Quantity Warning</h5>
                                                        </div>
                                                        <div className="card-body">
                                                            <div className="form-group mb-3">
                                                                <label htmlFor="name">
                                                                    Quantity
                                                                </label>
                                                                <input type="number" name="low_stock_quantity" value={item?.low_stock_quantity} className="form-control" fdprocessedid="dtmr1" onChange={(e) => { onChangeHandler(e, item.language_id) }} />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="card">
                                                        <div className="card-header">
                                                            <h5 className="mb-0 h6">
                                                                Stock Visibility State
                                                            </h5>
                                                        </div>
                                                        <div className="card-body">

                                                            <div className="form-group row">
                                                                <label className="col-md-6 col-from-label">Show Stock Quantity</label>
                                                                <div className="col-md-6">
                                                                    <ToggleStatus name="show_stock_quantity" isStatus={item.show_stock_quantity} changeStatus={changeStatus} />
                                                                </div>
                                                            </div>

                                                            <div className="form-group row">
                                                                <label className="col-md-6 col-from-label">Show Stock With Text Only</label>
                                                                <div className="col-md-6">
                                                                    <ToggleStatus name="show_stock_with_text_only" isStatus={item.show_stock_with_text_only} changeStatus={changeStatus} />
                                                                </div>
                                                            </div>

                                                            <div className="form-group row">
                                                                <label className="col-md-6 col-from-label">Hide Stock</label>
                                                                <div className="col-md-6">
                                                                    <ToggleStatus name="hide_stock" isStatus={item.hide_stock} changeStatus={changeStatus} />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="card">
                                                        <div className="card-header">
                                                            <h5 className="mb-0 h6">Cash on Delivery</h5>
                                                        </div>
                                                        <div className="card-body">
                                                            <div className="form-group row">
                                                                <label className="col-md-6 col-from-label">Status</label>
                                                                <div className="col-md-6">
                                                                    <ToggleStatus name="cash_on_delivery" isStatus={item.cash_on_delivery} changeStatus={changeStatus} />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="card">
                                                        <div className="card-header">
                                                            <h5 className="mb-0 h6">Featured</h5>
                                                        </div>
                                                        <div className="card-body">
                                                            <div className="form-group row">
                                                                <label className="col-md-6 col-from-label">Status</label>
                                                                <div className="col-md-6">
                                                                    <input type="checkbox" name={'featured'} checked={shoing.featured} onChange={changeHandr} />
                                                                    <span />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="card">
                                                        <div className="card-header">
                                                            <h5 className="mb-0 h6">Todays Deal</h5>
                                                        </div>
                                                        <div className="card-body">
                                                            <div className="form-group row">
                                                                <label className="col-md-6 col-from-label">Status</label>
                                                                <div className="col-md-6">
                                                                    <input type="checkbox" name={'todays_deal'} checked={shoing.todays_deal} onChange={changeHandr} />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="card">
                                                        <div className="card-header">
                                                            <h5 className="mb-0 h6">Trending</h5>
                                                        </div>
                                                        <div className="card-body">
                                                            <div className="form-group row">
                                                                <label className="col-md-6 col-from-label">Status</label>
                                                                <div className="col-md-6">
                                                                    <input type="checkbox" name={'trending'} checked={shoing.trending} onChange={changeHandr} />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>


                                                    <div className="card">



                                                        <div className="card-header">
                                                            <h5 className="mb-0 h6">**Flash Deal (This Field is mandatory)</h5>
                                                        </div>
                                                        <div className="card-body">
                                                            <div className="form-group mb-3">
                                                                <label htmlFor="name">
                                                                    Start Date
                                                                </label>
                                                                <input type="date" name='start_Date' value={flashDeal.start_Date} onChange={freshDeals} className="form-control" />
                                                            </div>
                                                            <div className="form-group mb-3">
                                                                <label htmlFor="name">
                                                                    End Date
                                                                </label>
                                                                <input type="date" name="end_Date" value={flashDeal.end_Date} onChange={freshDeals} className="form-control" />
                                                            </div>
                                                            <div className="form-group mb-3">
                                                                <label htmlFor="name">
                                                                    Discount
                                                                </label>
                                                                <input type="number" onChange={freshDeals} value={flashDeal.discount} name="discount" defaultValue={0} min={0} step="0.01" className="form-control" fdprocessedid="hltlp8" />
                                                            </div>
                                                            <div className="form-group mb-3">
                                                                <label htmlFor="name">
                                                                    Discount Type
                                                                </label>
                                                                <select className="form-control aiz-selectpicker" onChange={freshDeals} name="discount_type" id="flash_discount_type" tabIndex={-98}>
                                                                    <option value>Choose Discount Type</option>
                                                                    <option value="Amount">Amount</option>
                                                                    <option value="Percent">Percent</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>



                                                </div>

                                            </div>

                                            <ProductDescriptionWrapper item={item} />
                                            <ProductParams item={item} handleVariantData={handleVariantData} setattributes={setattributesVal} setattributesVal={setattributesVal} setVariantsData={setVariantsData} />

                                            <div className="row">
                                                <div className="col-md-3 form-group physical_product_show" id="quantity">
                                                    <label className="title-color">Total Quantity</label>
                                                    <input type="number" placeholder="Quantity" name="current_stock" className="form-control" required fdprocessedid="gny5jm" readOnly="readonly" onChange={(e) => { onChangeHandler(e, item.language_id) }} />
                                                </div>
                                                <div className="col-md-3 form-group" id="minimum_order_qty">
                                                    <label className="title-color">Minimum order quantity</label>
                                                    <input type="number" value={item?.minimum_order_qty} placeholder="Minimum order quantity" name="minimum_order_qty" className="form-control" required fdprocessedid="wabmv" onChange={(e) => { onChangeHandler(e, item.language_id) }} />
                                                </div>
                                                <div className="col-md-3 form-group physical_product_show" id="shipping_cost">
                                                    <label className="title-color">Shipping cost </label>
                                                    <input type="number" placeholder="Shipping cost" name="shipping_cost" className="form-control" required fdprocessedid="pvn15" onChange={(e) => { onChangeHandler(e, item.language_id) }} />
                                                </div>
                                                <div className="col-md-3 form-group physical_product_show" id="shipping_cost">
                                                    <label className="title-color">Save Data ! </label>

                                                    <div>
                                                        <ConfigProvider
                                                            theme={{
                                                                components: {
                                                                    Checkbox: {
                                                                        colorPrimary: '#ff4d4f',
                                                                    },
                                                                },

                                                            }}
                                                        >
                                                            <Checkbox className="chBox" onClick={() => { SaveData(i, '', item.language_id) }} >Checkbox</Checkbox>
                                                        </ConfigProvider>
                                                    </div>
                                                </div>
                                                <div className="col-md-3 form-group physical_product_show" id="shipping_cost">
                                                    <label className="title-color">Shipping cost multiply with quantity </label>
                                                    <label className="switcher title-color">
                                                        <input className="switcher_input" type="checkbox" name=" Shipping_cost_multiply_with_quantity" onChange={(e) => { onChangeHandler(e, item.language_id) }} />
                                                        <span className="switcher_control" />
                                                    </label>
                                                </div>
                                            </div>

                                        </form>

                                    </div>
                                    {val.length == i + 1 ? <div className="form-group mb-3 text-right">
                                        <button type="button" className="btn btn-primary" fdprocessedid="uzw7ye" onClick={() => { setTabs(i, 'pre', item.language_id) }}>Prev</button>
                                        <button type="button" className="btn btn-primary" fdprocessedid="uzw7ye" onClick={(e) => { addNewAttributeData(e, item.language_id) }}>Save</button>
                                    </div>
                                        :
                                        <div className="form-group mb-3 text-right">
                                            {i !== 0 && <button type="button" className="btn btn-primary" fdprocessedid="uzw7ye" onClick={() => { setTabs(i, 'pre', item.language_id) }}>Prev</button>}
                                            <button type="button" className="btn btn-primary" fdprocessedid="uzw7ye" onClick={() => { setTabs(i, 'nex', item.language_id) }}>Next</button>
                                        </div>

                                    }
                                    <ToastContainer />
                                </div>

                            </TabPanel>
                        })}

                    </TabContext>
                </Box>




            </div>
        </>
    )
}
export default AddNewProductsPage;
