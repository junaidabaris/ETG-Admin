import { useEffect, useState } from "react";
import { MultiselectOption } from "../../common/MultiSelectOption";
import { useGetPickupPointQuery, useGetAttributesQuery, useForm_variatioMutation } from "../all-products/allproductsApi/allProductsApi";
import { AttributeItem } from "./AttributeItem";
import { ColorVariant } from "./ColorVariant";
import ImageVariantWiseModal from "./ImageVariantWiseModal";

let sendPayload = [];
function ProductsVariation({ handleVariantData, productData, setattributesVal, setVariantsData }) {

    // const [variantImg, setVariantImg] = useState()
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const [variationArr, setVariationArr] = useState([]);

    const { data: pickUp } = useGetPickupPointQuery();


    const [form_variatio, { data: variationsData, isLoading: isVariantLoading, isSuccess }] = useForm_variatioMutation();
    const [updatedVariants, setUpdatedVariants] = useState()
    useEffect(() => {
        if (isSuccess) {
            const clone = [...variationsData]
            setUpdatedVariants(clone)
        }
    }, [isVariantLoading, variationsData, isSuccess])

    const token = window.localStorage.getItem('token')
    const { data: attributesData } = useGetAttributesQuery(token)
    const [colorVariant, setColorVariant] = useState([]);
    const [allAttributes, setAllAttributes] = useState(null);
    const [allChoices, setAllChoices] = useState(null);

    const getAttributes = (attributes) => {
        setAllAttributes([...attributes])
    }
    const getChoiceValues = (choiceValues, currentAttr) => {

        setAllChoices(choiceValues && [...choiceValues])
        let flag = true;
        if (sendPayload.length) {
            sendPayload.map((item, i) => {
                if (item.id === currentAttr.id) {
                    sendPayload.splice(i, 1, currentAttr)
                    flag = false;
                }
            })
            if (flag) {
                sendPayload.push(currentAttr)
            }
        } else {
            sendPayload.push(currentAttr)
        }
        const filteredData = sendPayload.filter(item => item.data.length)
        if (filteredData.length) {
            form_variatio({ attributes: filteredData, variations: updatedVariants })
            console.log(filteredData);
            setattributesVal(filteredData)
        }
        if (!filteredData.length) {
            setVariationArr([])
        }

    }
    useEffect(() => {
        if (allChoices) {
            const finalAttributes = generateOb(colorVariant, allChoices)
            setColorVariant([...finalAttributes.flat()])
        }
    }, [allChoices]);



    function generateOb(data, prices) {
        const result = data.map((att, i) => {
            return prices.map((price) => {
                return {
                    ...att,
                    variant: `${att.name}-${price}`,
                    sku: `-${att.name}-${price}`,
                }
            })
        })
        return result;
    }

    const getUpdatedVariant = (variant) => {
        const updatedData = updatedVariants?.map(item => {
            if (variant._id === item._id) {
                return variant
            } else {
                return item
            }
        })
        setUpdatedVariants(updatedData);

    }

    useEffect(() => {
        if (updatedVariants) {
            handleVariantData(updatedVariants)
        }
    }, [updatedVariants]);

    const deleteRow = (id) => {
        const filterdData = updatedVariants.filter((item) => {
            return item._id !== id
        })
        setUpdatedVariants(filterdData);
    }

    return (
        <>
            <div className="row">
                <div className="card mt-2 rest-part physical_product_show" data-select2-id={176}>
                    <div className="card-header">
                        <h4 className="mb-0">Variation</h4>
                    </div>
                    <div className="col-lg-12" style={{ padding: 25 + 'px', margin: 5 + 'px' }}>
                        <div className="row">
                            <div className="col-lg-6">
                                <MultiselectOption data={attributesData} showCheckbox={true} getSelectedOptions={getAttributes}>
                                    <label>Attributes:</label>
                                </MultiselectOption>
                            </div>

                            <div className="col-lg-12 mt-3">
                                {allAttributes?.map((item) => {
                                    return <AttributeItem key={item._id} item={item} handleChoiceValues={getChoiceValues} setUpdatedVariants={setUpdatedVariants} />
                                })}
                            </div>

                        </div>
                    </div>
                </div>

                <div className="card mt-2 rest-part col-lg-12">
                    <div className="card-header">
                        <h4 className="mb-0">Product price &amp; stock</h4>
                    </div>
                    <div className="card-body">
                        <div className="row align-items-end">
                            <div className="col-12 sku_combination table-responsive form-group" id="sku_combination">
                                {/* <h6>
                                    <div className="form-check" style={{ marginLeft: "3px" }}>
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        <label className="form-check-label" htmlFor="flexCheckDefault" onClick={handleShow} style={{ width: "200px" }}>
                                            Variant Wise Image
                                        </label>
                                    </div>

                                    {show && <ImageVariantWiseModal show={show} handleClose={handleClose} vaiants={updatedVariants} setVariationArr={setVariationArr} updatedVariants={updatedVariants} setUpdatedVariants={setUpdatedVariants} />}
                                </h6> */}
                                <table className="table table-bordered physical_product_show">
                                    <thead>

                                        <tr>
                                            <td><label className="control-label">#</label></td>
                                            <td><label className="control-label">Variant</label></td>
                                            <td><label className="control-label">MRP</label></td>
                                            <td><label className="control-label">Purchase Rate</label></td>
                                            <td><label className="control-label">Tax %</label></td>
                                            <td><label className="control-label">Tax Type</label></td>
                                            <td><label className="control-label">Sale Rate</label></td>
                                            <td><label className="control-label">Discount</label></td>
                                            <td><label className="control-label">Discount Type</label></td>
                                            <td><label className="control-label">SKU</label></td>
                                            <td><label className="control-label">HSN Code</label></td>
                                            <td><label className="control-label">Sale Reward Point</label></td>
                                            <td><label className="control-label">Share Reward Point</label></td>
                                            <td><label className="control-label">Set Attribute</label></td>
                                            <td><label className="control-label">Gallery Images</label></td>
                                            <td><label className="">Thumbnail Image</label></td>
                                            {/* <td><label className="control-label">Pickup Point</label></td>
                                            <td><label className="control-label">Quantity</label></td> */}
                                        </tr>

                                    </thead>

                                    <tbody>
                                        {isVariantLoading && (
                                            <tr>
                                                <td colSpan={10}>
                                                    <div className="loader_spinner spinner-border text-primary" role="status">
                                                        <span className="visually-hidden">Loading...</span>
                                                    </div>
                                                </td>
                                            </tr>
                                        )}

                                        {updatedVariants && updatedVariants.map((variantItem, i) => {
                                            return (
                                                <ColorVariant deleteRow={deleteRow} key={i} data={variantItem} pickUp={pickUp} handleVariant={getUpdatedVariant} setVariantsData={setVariantsData} index={i} />
                                            )
                                        })}

                                    </tbody>

                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ProductsVariation;