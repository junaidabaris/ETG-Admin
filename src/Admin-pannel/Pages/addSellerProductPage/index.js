import { useEffect, useState } from "react";
import 'react-toastify/dist/ReactToastify.css';
import "../addnewProductsPage/AddNewProduct.css";
import ShippingConfigurationAdmin from "../../Components/addNewProductsComponents/ShippingConfigurationAdmin";
import { useAddNewProductMutation, useEditProductMutation, useGetBrandsQuery, useGetCategoriesQuery, useGetPickupPointQuery, useGetProductByIdQuery, useGetSellersQuery, useGetUnitMasterQuery } from "../../Components/all-products/allproductsApi/allProductsApi";
import { ToastContainer, toast } from "react-toastify";
import { useParams } from "react-router-dom";
import Multiselect from "multiselect-react-dropdown";
import ToggleStatus from "../../Components/toggleStatus/ToggleStatus";
import ProductsVariation from "../../Components/addNewProductsComponents/ProductsVariation";
import ProductDescriptionWrapper from "../../Components/productDescriptionWrapper/productDescriptionWrapper";
import { useSelector } from "react-redux";
import axios from "axios";
import { RxCross1 } from "react-icons/rx";

const toastSuccessMessage = () => {
    toast.success("Product added Successfully", {
        position: "top-center"
    })
};

const toastErrorMessage = () => {
    toast.error("Product not added", {
        position: "top-center"
    })
};

const addFile = async (clonedObj, payload, categ, setspcOr) => {
    setspcOr(true)

    console.log(clonedObj);
    const url = 'https://onlineparttimejobs.in/api/seller_product/seller_add_product'
    const formData = new FormData();
    const images = new FormData();


    const arr = []
    if (payload) {
        for (const iterator of payload) {
            images.append('image', iterator);
            try {
                const res = await axios.post(`https://onlineparttimejobs.in/api/cloudinaryImage/addImage`, images)
                const obj = { public_id: res.data.public_id, url: res.data.url }
                arr.push(obj)
            } catch (error) {
                alert('Somthing Went Wrong Image Not Up ')
            }
            images.delete('image');
        }
    }

    let varclone = []

    for (let ind = 0; ind < clonedObj?.variations?.length; ind++) {
        const varImgs = []
        let element = clonedObj.variations[ind];
        for (let indi = 0; indi < element?.images?.length; indi++) {
            images.delete('image');
            const element2 = element?.images[indi];
            images.append('image', element2);
            const res = await axios.post(`https://onlineparttimejobs.in/api/cloudinaryImage/addImage`, images)
            const obj = { public_id: res.data.public_id, url: res.data.url }
            varImgs.push(obj)
        }
        images.delete('image');
        images.append('image', element.mainImage_url);
        const res2 = await axios.post(`https://onlineparttimejobs.in/api/cloudinaryImage/addImage`, images)
        varclone.push({ ...element, images: varImgs, mainImage_url: { public_id: res2.data.public_id, url: res2.data.url } })

    }

    const clone = {...clonedObj ,variations:varclone }
    formData.append('name', clonedObj.name);
    // formData.append('thumbnail_image', clonedObj.thumbnail_image ? clonedObj.thumbnail_image[0] : '');
    formData.append('brand_id', clonedObj.brand_id);
    formData.append('seller_id', clonedObj.seller_id);
    formData.append('shipping_cost', clonedObj.shipping_cost);
    formData.append('tags', clonedObj.tags);
    formData.append('slug', clonedObj.slug)
    formData.append('video_link', clonedObj.video_link);
    formData.append('video_provider', clonedObj.video_provider);
    formData.append('quotation', clonedObj.quotation);
    formData.append('refundable', clonedObj.refundable);
    formData.append('meta_title', clonedObj.meta_title);
    formData.append('meta_description', clonedObj.meta_description);

    formData.append('category_id', JSON.stringify(clonedObj.category_id));
    // formData.append('attributes', JSON.stringify(categ.attributeSet));
    // formData.append('attributeSet', JSON.stringify(categ.attributes));
    formData.append('flashDeal', JSON.stringify(clonedObj.flashDeal));
    // formData.append('images', JSON.stringify(arr));
    formData.append('variations', JSON.stringify(varclone));
    console.log('variations---to-send-pul---', clonedObj.variations)
    formData.append('variation_Form', JSON.stringify(clonedObj.variation_Form));
    formData.append('productDescription', JSON.stringify(clonedObj.productDescription))
    formData.append('weights', clonedObj.weights)
    formData.append('unit', clonedObj.unit)
    // formData.append('company_id', clonedObj.company_id)
    formData.append('barcode', clonedObj.barcode)
    formData.append('minimum_purchase_qty', clonedObj.minimum_purchase_qty)
    formData.append('minimum_order_qty', clonedObj.minimum_order_qty)


    try {
        const res = await axios.post(url, clone);
        toastSuccessMessage()
        setspcOr(false)
    } catch (error) {
        toastErrorMessage()
        setspcOr(false)
    }
}

function AddNewProductsPage() {
    // setspcOr(false)
    const [tags, setTags] = useState([]);
    const [categ, setCateg] = useState([]);
    const [finalCatD, setFinalCatD] = useState();

    const [flashDeal, setFlashdeal] = useState({
        start_Date: '',
        end_Date: '',
        discount_type: '',
        discount: '',
    })

    const freshDeals = (e) => {
        const clone = { ...flashDeal }
        clone[e.target.name] = e.target.value
        setFlashdeal(clone)
    }
    const [proAtt, setProAtt] = useState()
    const params = useParams();
    const { data: unitMast } = useGetUnitMasterQuery()

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
        // user_id: '63e6579c455104434981d8da',
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
    const brandData = useGetBrandsQuery();
    const { data: sellerD } = useGetSellersQuery()
    // const [addProduct, response] = useAddNewProductMutation();
    const [varianstData, setVariantsData] = useState()
    const { productDescription } = useSelector((state) => {
        return state.textEditorData
    })

    useEffect(() => {
        const getCatData = async () => {
            const getCategoryName = []
            const reqData = await fetch("https://onlineparttimejobs.in/api/category")
            const resData = await reqData.json();

            for (let i = 0; i < resData.length; i++) {
                getCategoryName.push({ name: resData[i].name, _id: resData[i]._id })

            };
            if (getCategoryName.length) {
                setCateg(getCategoryName);
            }
        }
        getCatData();
    }, [])

    const onChangeHandler = (e) => {
        let slug = e.target.value + new Date().getUTCMilliseconds();
        const inpName = e.target.name;
        const inpVal = e.target.value;
        const clonedObj = { ...inputval, slug };
        clonedObj[inpName] = inpVal;
        setInputVal(clonedObj)
    };
    const onchengePhotoHandel = (e) => {
        const clonedObj = { ...inputval };
        const inpName = e.target.name;
        const inpVal = e.target.files;
        clonedObj[inpName] = inpVal;
        setInputVal(clonedObj)
    }

    const [attributesVal, setattributesVals] = useState()

    const setattributesVal = (val) => {
        setattributesVals(val)
    }


    const [spinn, setspinn] = useState(false)
    const [spcOr, setspcOr] = useState(false)


    const seller_id = window.localStorage.getItem('isSellerId')
    const submitAddProductData = async () => {
        setspinn(true)
        // const seller_id = sellerD && sellerD[0]._id;
        const brand_id = brandData.data && brandData.data[0]._id;
        const slug = 'youtube' + new Date().getUTCMilliseconds();
        const clonedObj = { ...inputval, variations: varianstData, flashDeal: flashDeal, variation_Form: attributesVal, tags: tags, category_id: finalCatD, seller_id, slug, productDescription: productDescription };

        const clone = { attributes: [proAtt?._id], attributeSet: proAtt?.values }
        addFile(clonedObj, clonedObj.gallery_image, clone, setspcOr)

        setspinn(false)

    };
    // setspinn(false)


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
    const [data2, setData2] = useState()
    const getDatas = async () => {
        const res = await axios.get('https://onlineparttimejobs.in/api/attributeSetMaster')
        setData1(res.data)
    }

    const token = window.localStorage.getItem('adminToken')
    const getDatas1 = async () => {
        const res = await axios.get(`https://onlineparttimejobs.in/api/accountCompany`, {
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                Authorization: `Bearer ${token}`,
            },
        })
        setData2(res.data)
    }

    useEffect(() => {
        // getDatas()
        // getDatas1()
    }, [])



    // const changettriPro = (e) => {
    //     const maped = data1.find((item) => {
    //         return item._id === e.target.value
    //     })
    //     setProAtt(maped);
    // }

    // const changeValues = (e) => {
    //     const clone = { ...proAtt }
    //     const filterd = clone.values.map((item) => {
    //         if (item._id === e.target.name) {
    //             return { ...item, value: e.target.value }
    //         } else {
    //             return item
    //         }
    //     })
    //     clone.values = filterd
    //     setProAtt(clone)
    // }
    // const removeRowAt = (id) => {
    //     const clone = { ...proAtt }
    //     const filterd = clone.values.filter((item) => {
    //         if (item._id === id) {
    //             return
    //         } else {
    //             return item
    //         }
    //     })
    //     clone.values = filterd
    //     setProAtt(clone)
    // }

    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="aiz-titlebar text-left mt-2 mb-3">
                        {params.id ? <h5 className="mb-0 h6">Edit Product</h5> : <h5 className="mb-0 h6">Add New Product</h5>}
                    </div>
                    <div>

                        {spcOr && <div className="preloaderCount">
                            <div className="spinner-border" role="status">
                                <span className="visually-hidden">ded</span>
                            </div>
                            <h6>please wait your product in uploading</h6>
                        </div>}

                        {spinn && <div className="preloaderCount">
                            <div className="spinner-border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>}
                        <form className="form form-horizontal mar-top" id="choice_form">
                            <div className="row gutters-5">
                                <div className="col-lg-8">

                                    <input type="hidden" name="_token" defaultValue="6klBhNOhEcSYzHAP1WU8ctR90lIocmkKBETVGkNx" />
                                    <input type="hidden" name="added_by" defaultValue="admin" onChange={onChangeHandler} />


                                    <div className="card">
                                        <div className="card-header">
                                            <h5 className="mb-0 h6">Product Information</h5>
                                        </div>
                                        <div className="card-body">

                                            <div className="form-group row">
                                                <label className="col-md-3 col-from-label">Product Name <span className="text-danger">*</span></label>
                                                <div className="col-md-8">
                                                    <input type="text" className="form-control" value={inputval?.name} name="name" placeholder="Product Name" required fdprocessedid="3bss68" onChange={onChangeHandler} />
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
                                                        selectedValues={[]}
                                                        onRemove={(selectedCat) => {
                                                            const selectedIds = selectedCat.map((cat) => {
                                                                return cat._id
                                                            })
                                                            setFinalCatD(selectedIds)
                                                        }}
                                                        onSelect={(selectedCat) => {
                                                            // setFinalCatD(event)
                                                            const selectedIds = selectedCat.map((cat) => {
                                                                return cat._id
                                                            })
                                                            setFinalCatD(selectedIds)
                                                        }}
                                                    />
                                                </div>
                                            </div>


                                            <div className="form-group row" id="seller">
                                                <label className="col-md-3 col-from-label">Seller</label>
                                                <div className="col-md-8">
                                                    <select className="form-select" disabled aria-label="Default select example" name="seller_id" onChange={onChangeHandler}>
                                                        {sellerD && sellerD.map((item) => {
                                                            return <option value={item._id} key={item._id}>{item.firstname + " " + item.lastname}</option>
                                                        })}
                                                    </select>
                                                </div>
                                            </div>


                                            <div className="form-group row" id="brand">
                                                <label className="col-md-3 col-from-label">Brand</label>
                                                <div className="col-md-8">
                                                    <select className="form-select" aria-label="Default select example" name="brand_id" onChange={onChangeHandler}>
                                                        {brandData.data && brandData.data.map((item) => {
                                                            return <option value={item._id} key={item._id}>{item.name || item._id}</option>
                                                        })}
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <label className="col-md-3 col-from-label">Unit</label>
                                                <div className="col-md-8">
                                                    <select className="form-select" value={inputval?.unit} aria-label="Default select example" name="unit" onChange={onChangeHandler}>
                                                        <option value={1}>Select Unit</option>
                                                        {unitMast && unitMast.map((item) => {
                                                            return <option value={item.name} key={item._id}>{item.name}</option>
                                                        })}
                                                    </select>
                                                </div>
                                            </div>
                                            {/* <div className="form-group row">
                                                <label className="col-md-3 col-from-label">Company</label>
                                                <div className="col-md-8">
                                                    <select className="form-select" value={inputval?.company_id} aria-label="Default select example" name="company_id" onChange={onChangeHandler}>
                                                        <option value={1}>Select Unit</option>
                                                        {data2 && data2.map((item) => {
                                                            return <option value={item.name} key={item._id}>{item.name}</option>
                                                        })}
                                                    </select>
                                                </div>
                                            </div> */}

                                            <div className="form-group row">
                                                <label className="col-md-3 col-from-label">Weight <small>(In Kg)</small></label>
                                                <div className="col-md-8">
                                                    <input type="text" value={inputval?.weights} className="form-control" name="weights" step="0.01" placeholder="weight" fdprocessedid="sq5qc3" onChange={onChangeHandler} />
                                                </div>
                                            </div>


                                            {/* <div className="form-group row">
                                                <label className="col-md-3 col-from-label"> Attribute </label>

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
                                            </div>} */}







                                            <div className="form-group row">
                                                <label className="col-md-3 col-from-label">Minimum Purchase Qty <span className="text-danger">*</span></label>
                                                <div className="col-md-8">
                                                    <input type="number" value={inputval?.minimum_purchase_qty} lang="en" className="form-control" name="minimum_purchase_qty" required fdprocessedid="d0gl3m" onChange={onChangeHandler} />
                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <label className="col-md-3 col-from-label">Tags <span className="text-danger">*</span>
                                                </label>
                                                <div className="col-md-8">
                                                    <div className="tags_inp_wrapper">
                                                        <div className='tags-input-container'>
                                                            {tags.map((tag, index) => {
                                                                return <div className='tag-item' key={index}>
                                                                    <span className='text'>{tag}</span>
                                                                    <span className='close' onClick={() => removetagTag(index)}>&times;</span>
                                                                </div>
                                                            })}
                                                            <input type="text" onKeyDown={handleTagKeyDown} placeholder='type some text' className='tags-input' name="attributes" onChange={onChangeHandler} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <label className="col-md-3 col-from-label">Barcode</label>
                                                <div className="col-md-8">
                                                    <input type="text" value={inputval?.barcode} className="form-control" name="barcode" placeholder="Barcode" fdprocessedid="ifjwoo" onChange={onChangeHandler} />
                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <label className="col-md-3 col-from-label">Refundable</label>
                                                <div className="col-md-8">
                                                    <ToggleStatus name="refundable" isStatus={inputval.refundable} changeStatus={changeStatus} />
                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <label className="col-md-3 col-from-label">Quotation</label>
                                                <div className="col-md-8">
                                                    <ToggleStatus name="quotation" isStatus={inputval.quotation} changeStatus={changeStatus} />
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
                                                    <select className="form-select" value={inputval?.video_provider} aria-label="Default select example" name="video_provider" onChange={onChangeHandler}>
                                                        <option value="youtube">Youtube</option>
                                                        <option value="dailymotion">Dailymotion</option>
                                                        <option value="vimeo">Vimeo</option>
                                                    </select>

                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <label className="col-md-3 col-from-label">Video Link</label>
                                                <div className="col-md-8">
                                                    <input type="text" value={inputval?.video_link} className="form-control" name="video_link" placeholder="Video Link" fdprocessedid="2pggse" onChange={onChangeHandler} />
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
                                                    <input type="text" value={inputval?.meta_title} className="form-control" name="meta_title" placeholder="Meta Title" fdprocessedid="1hz7zu" onChange={onChangeHandler} />
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
                                                    <textarea name="meta_description" value={inputval?.meta_description} rows={8} className="form-control" onChange={onChangeHandler} />
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
                                                            <input type="file" name="meta_image" className="selected-files" onChange={onChangeHandler} />
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
                                                <input type="number" name="low_stock_quantity" value={inputval?.low_stock_quantity} className="form-control" fdprocessedid="dtmr1" onChange={onChangeHandler} />
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
                                                    <ToggleStatus name="show_stock_quantity" isStatus={inputval.show_stock_quantity} changeStatus={changeStatus} />
                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <label className="col-md-6 col-from-label">Show Stock With Text Only</label>
                                                <div className="col-md-6">
                                                    <ToggleStatus name="show_stock_with_text_only" isStatus={inputval.show_stock_with_text_only} changeStatus={changeStatus} />
                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <label className="col-md-6 col-from-label">Hide Stock</label>
                                                <div className="col-md-6">
                                                    <ToggleStatus name="hide_stock" isStatus={inputval.hide_stock} changeStatus={changeStatus} />
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
                                                    <ToggleStatus name="cash_on_delivery" isStatus={inputval.cash_on_delivery} changeStatus={changeStatus} />
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
                                                    <ToggleStatus name="featured" isStatus={inputval.featured} changeStatus={changeStatus} />
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
                                                    <ToggleStatus name="todays_deal" isStatus={inputval.todays_deal} changeStatus={changeStatus} />

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
                                                    <ToggleStatus name="trending" isStatus={inputval.trending} changeStatus={changeStatus} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card">



                                        <div className="card-header">
                                            <h5 className="mb-0 h6">Flash Deal</h5>
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
                                                    <option value="amount">Amount</option>
                                                    <option value="percent">Percent</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>



                                </div>

                            </div>

                            <ProductDescriptionWrapper />
                            <ProductsVariation handleVariantData={handleVariantData} setattributes={setattributesVal} setattributesVal={setattributesVal} setVariantsData={setVariantsData} />

                            <div className="row">
                                <div className="col-md-3 form-group physical_product_show" id="quantity">
                                    <label className="title-color">Total Quantity</label>
                                    <input type="number" placeholder="Quantity" name="current_stock" className="form-control" required fdprocessedid="gny5jm" readOnly="readonly" onChange={onChangeHandler} />
                                </div>
                                <div className="col-md-3 form-group" id="minimum_order_qty">
                                    <label className="title-color">Minimum order quantity</label>
                                    <input type="number" value={inputval?.minimum_order_qty} placeholder="Minimum order quantity" name="minimum_order_qty" className="form-control" required fdprocessedid="wabmv" onChange={onChangeHandler} />
                                </div>
                                <div className="col-md-3 form-group physical_product_show" id="shipping_cost">
                                    <label className="title-color">Shipping cost </label>
                                    <input type="number" placeholder="Shipping cost" name="shipping_cost" className="form-control" required fdprocessedid="pvn15" onChange={onChangeHandler} />
                                </div>
                                <div className="col-md-3 form-group physical_product_show" id="shipping_cost">
                                    <label className="title-color">Shipping cost multiply with quantity </label>
                                    <label className="switcher title-color">
                                        <input className="switcher_input" type="checkbox" name=" Shipping_cost_multiply_with_quantity" onChange={onChangeHandler} />
                                        <span className="switcher_control" />
                                    </label>
                                </div>
                            </div>

                        </form>

                    </div>
                    {params.id ? <button type="button" onClick={submitAddProductData} className="btn btn-primary m-3">Update Products</button>
                        : <button type="button" onClick={submitAddProductData} className="btn btn-primary m-3">Add Products</button>
                    }
                    <ToastContainer />
                </div>
            </div>
        </>
    )
}
export default AddNewProductsPage;

