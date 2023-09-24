import { useEffect, useState } from "react";
import { MultiselectOption } from "../../common/MultiSelectOption";
import { useGetPickupPointQuery, useGetAttributesQuery, useForm_variatioMutation, useGetCounterQuery } from "../all-products/allproductsApi/allProductsApi";
import { AttributeItem } from "./AttributeItem";
import { ColorVariant } from "./ColorVariant";
import { useParams } from "react-router-dom";
// let sendPayload = [];
function ProductsVariation({ handleVariantData, productData, setattributesVal, setVariantsData, item }) {
    const [sendPayload, setsendPayload] = useState([])
    const token = window.localStorage.getItem('token')
    const [variationArr, setVariationArr] = useState([]);

    const { data: pickUp } = useGetPickupPointQuery();
    const params = useParams()

    const [form_variatio, { data: variationsData, isLoading: isVariantLoading, isSuccess }] = useForm_variatioMutation();
    const [updatedVariants, setUpdatedVariants] = useState()
    const { data: countryData } = useGetCounterQuery(token)
    useEffect(() => {
        if (params?.id) {
            setUpdatedVariants(item.variations)
            
        } else {
            if (isSuccess && countryData) {
                const clone = [...variationsData]

                for (let i = 0; i < clone?.length; i++) {
                    let element = { ...clone[i], prices: [] };
                    let clone2 = []
                    for (let j = 0; j < countryData?.length; j++) {
                        const val = countryData[j];
                        const newClo = { country_id: val, mrp: "", purchase_rate: "", sale_price: "", discount: "", discount_type: "Inclusive", tax_type: "Amount", tax: "", sku: "", sale_rate: "" }
                        clone2.push(newClo)
                    }
                    element.prices = clone2
                    clone.splice(i, 1, element)
                }

                setUpdatedVariants(clone)
            }
        }
    }, [isVariantLoading, variationsData, isSuccess, countryData,item])

    const { data: attributesData } = useGetAttributesQuery(token)
    const [colorVariant, setColorVariant] = useState([]);
    const [allAttributes, setAllAttributes] = useState(null);
    const [allChoices, setAllChoices] = useState(null);



    useEffect(() => {
        if (params) {
            setAllAttributes(item.variation_Form)
        }
    }, [params,item])

    const getAttributes = (attributes) => {
        setAllAttributes([...attributes])
    }
    const getChoiceValues = (choiceValues, currentAttr) => {
        setAllChoices(choiceValues && [...choiceValues])
        const clone = [...sendPayload]

        for (let i = 0; i < clone.length; i++) {
            const element = clone[i];
            if (element._id !== choiceValues._id) {
                clone.push(choiceValues)
            }
        }
        setsendPayload(clone)
        let flag = true;
        if (clone.length) {
            clone.map((item, i) => {
                if (item.id === currentAttr.id) {
                    clone.splice(i, 1, currentAttr)
                    flag = false;
                }
            })
            if (flag) {
                clone.push(currentAttr)
            }
        } else {
            clone.push(currentAttr)
        }
        
        const filteredData = clone.filter(item => item.data.length)

        if (filteredData.length) {

            form_variatio({ data: { attributes: filteredData, variations: updatedVariants }, token: token })
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
                                <MultiselectOption item={item} allAttributes={allAttributes} data={attributesData} showCheckbox={true} getSelectedOptions={getAttributes}>
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

                                <table className="table table-bordered physical_product_show">
                                    <thead>

                                        <tr>
                                            <td><label className="control-label">#</label></td>
                                            <td><label className="control-label">Variant</label></td>
                                            <td><label className="control-label">Unique ID</label></td>
                                            <td><label className="control-label">Pricing</label></td>
                                            <td><label className="control-label">Set Attribute</label></td>
                                            <td><label className="control-label">Gallery Images</label></td>
                                            <td><label className="">Thumbnail Image</label></td>
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
                                                <ColorVariant deleteRow={deleteRow} key={i} item={item} data={variantItem} pickUp={pickUp} handleVariant={getUpdatedVariant} setVariantsData={setVariantsData} index={i} />
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