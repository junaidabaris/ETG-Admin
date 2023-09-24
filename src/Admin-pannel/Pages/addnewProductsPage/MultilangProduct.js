import { useEffect, useState } from "react";
import 'react-toastify/dist/ReactToastify.css';
import "./AddNewProduct.css";
import ShippingConfigurationAdmin from "../../Components/addNewProductsComponents/ShippingConfigurationAdmin";
import { useAddNewProductMutation, useEditProductMutation, useGetBrandsQuery, useGetCategoriesQuery, useGetLanguagesQuery, useGetPickupPointQuery, useGetProductByIdQuery, useGetSellersQuery, useGetUnitMasterQuery } from "../../Components/all-products/allproductsApi/allProductsApi";
import { ToastContainer, toast } from "react-toastify";
import { useParams } from "react-router-dom";
import Multiselect from "multiselect-react-dropdown";
import ToggleStatus from "../../Components/toggleStatus/ToggleStatus";
import ProductsVariation from "../../Components/addNewProductsComponents/ProductsVariation";
import ProductDescriptionWrapper from "../../Components/productDescriptionWrapper/productDescriptionWrapper";
import { useSelector } from "react-redux";
import axios from "axios";
import { RxCross1 } from "react-icons/rx";

function MultilangProduct({ data, item, i, addNewAttributeData, onChangeHandler, setValue, changeData }) {

    const [tags, setTags] = useState([]);
    const [categ, setCateg] = useState([]);
    const [finalCatD, setFinalCatD] = useState();
    const [finalCatD2, setFinalCatD2] = useState();

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


    const token = window.localStorage.getItem('token')
    const brandData = useGetBrandsQuery(token);
    const { data: sellerD } = useGetSellersQuery()
    const [varianstData, setVariantsData] = useState()
    const { productDescription } = useSelector((state) => {
        return state.textEditorData
    })
    const { data: langData } = useGetLanguagesQuery(token);
    useEffect(() => {
        const getCatData = async () => {
            const getCategoryName = []
            const resData = await axios.get(`https://onlineparttimejobs.in/api/category/admin`, {
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    Authorization: `Bearer ${token}`,
                },
            })
            // const resData = await reqData.json();
            // 
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
    // console.log('attributesVal', attributesVal);

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


    return <form className="form form-horizontal mar-top" id="choice_form">
        <div className="row gutters-5">
            <div className="col-lg-8">


                <div className="card">
                    <div className="card-header">
                        <h5 className="mb-0 h6">Product Information ({item.lable})</h5>
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
                                    selectedValues={[]}
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
                                <select className="form-select" aria-label="Default select example" name="seller_id" onChange={(e) => { onChangeHandler(e, item.language_id) }}>
                                    {sellerD && sellerD.map((item) => {
                                        return <option value={item._id} key={item._id}>{item.firstname + " " + item.lastname}</option>
                                    })}
                                </select>
                            </div>
                        </div>


                        <div className="form-group row" id="brand">
                            <label className="col-md-3 col-from-label">Brand</label>
                            <div className="col-md-8">
                                <select className="form-select" aria-label="Default select example" name="brand_id" onChange={(e) => { onChangeHandler(e, item.language_id) }}>
                                    {brandData.data && brandData.data.map((item) => {
                                        return <option value={item._id} key={item._id}>{item.name || item._id}</option>
                                    })}
                                </select>
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-md-3 col-from-label">Unit</label>
                            <div className="col-md-8">
                                <select className="form-select" value={item?.unit} aria-label="Default select example" name="unit" onChange={(e) => { onChangeHandler(e, item.language_id) }}>
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
                                        {tags.map((tag, index) => {
                                            return <div className='tag-item' key={index}>
                                                <span className='text'>{tag}</span>
                                                <span className='close' onClick={() => removetagTag(index)}>&times;</span>
                                            </div>
                                        })}
                                        <input type="text" onKeyDown={handleTagKeyDown} placeholder='type some text' className='tags-input' name="attributes" onChange={(e) => { onChangeHandler(e, item.language_id) }} />
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
                            <label className="col-md-3 col-from-label">Languages </label>
                            <div className="col-md-8">
                                <Multiselect
                                    isObject={true}
                                    displayValue="name"
                                    options={langData}
                                    showCheckbox
                                    selectedValues={[]}
                                    onRemove={(selectedCat) => {
                                        const selectedIds = selectedCat.map((cat) => {
                                            return cat
                                        })
                                        setFinalCatD2(selectedIds)
                                    }}
                                    onSelect={(selectedCat) => {
                                        const selectedIds = selectedCat.map((cat) => {
                                            return cat
                                        })
                                        setFinalCatD2(selectedIds)
                                    }}
                                />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-md-3 col-from-label">Refundable</label>
                            <div className="col-md-8">
                                <ToggleStatus item={item} name="refundable" isStatus={item.refundable} onChangeHandler={onChangeHandler} />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-md-3 col-from-label">Quotation</label>
                            <div className="col-md-8">
                                <ToggleStatus item={item} name="quotation" isStatus={item.quotation} onChangeHandler={onChangeHandler} />
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
                                <select className="form-select" value={item?.video_provider} aria-label="Default select example" name="video_provider" onChange={(e) => { onChangeHandler(e, item.language_id) }}>
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
                                <ToggleStatus item={item} name="show_stock_quantity" isStatus={item.show_stock_quantity} onChangeHandler={onChangeHandler} />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-md-6 col-from-label">Show Stock With Text Only</label>
                            <div className="col-md-6">
                                <ToggleStatus item={item} name="show_stock_with_text_only" isStatus={item.show_stock_with_text_only} onChangeHandler={onChangeHandler} />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-md-6 col-from-label">Hide Stock</label>
                            <div className="col-md-6">
                                <ToggleStatus item={item} name="hide_stock" isStatus={item.hide_stock} onChangeHandler={onChangeHandler} />
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
                                <ToggleStatus item={item} name="cash_on_delivery" isStatus={item.cash_on_delivery} onChangeHandler={onChangeHandler} />
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
                                <ToggleStatus item={item} name="featured" isStatus={item.featured} onChangeHandler={onChangeHandler} />
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
                                <ToggleStatus item={item} name="todays_deal" isStatus={item.todays_deal} onChangeHandler={onChangeHandler} />

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
                                <ToggleStatus item={item} name="trending" isStatus={item.trending} onChangeHandler={onChangeHandler} />
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
                <label className="title-color">Shipping cost multiply with quantity </label>
                <label className="switcher title-color">
                    <input className="switcher_input" type="checkbox" name=" Shipping_cost_multiply_with_quantity" onChange={(e) => { onChangeHandler(e, item.language_id) }} />
                    <span className="switcher_control" />
                </label>
            </div>
        </div>

        {data.length == i + 1 ? <div className="form-group mb-3 text-right">
            <button type="submit" className="btn btn-primary" fdprocessedid="uzw7ye" onClick={() => { setValue(i - 1) }}>Prev</button>
            <button type="submit" className="btn btn-primary" fdprocessedid="uzw7ye" onClick={addNewAttributeData}>Save</button>
        </div>
            :
            <div className="form-group mb-3 text-right">
                {i !== 0 && <button type="submit" className="btn btn-primary" fdprocessedid="uzw7ye" onClick={() => { setValue(i - 1) }}>Prev</button>}
                <button type="submit" className="btn btn-primary" fdprocessedid="uzw7ye" onClick={() => { setValue(i + 1) }}>Next</button>
            </div>

        }

    </form>

}

export default MultilangProduct