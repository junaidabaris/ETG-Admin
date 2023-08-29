
import { useEffect, useState } from "react";
import { DatabaseFilled, QuestionCircleOutlined } from '@ant-design/icons';
import { Button, Popconfirm } from 'antd';
import { AiTwotoneDelete } from "react-icons/ai";
import AttributeModal from "./AttributeModal";
export const ColorVariant = ({ data, deleteRow, pickUp, handleVariant, setVariantsData, bringSelectedVariantImage, index }) => {
    const [formData, setFormData] = useState(data);

    const onChangeHandler = (e) => {
        const inputName = e.target.name;
        const inputVal = e.target.value;
        // if (e.target.name === 'discount') {
        //     const inputName = e.target.name;
        //     const inputVal = e.target.value;
        //     setFormData({ ...formData, sale_rate: formData.mrp - formData.discount, [inputName]: inputVal });
        //     setVariantsData(formData)
        // }
        if (e.target.value === 'Percent') {

            // const resss = axios.post(`https://onlineparttimejobs.in/api/product/variation_cost`, formData)
            // const inputName = e.target.name;  
            // const inputVal = e.target.value;
            const calculatedSalePercent = formData.mrp * formData.discount / 100
            const calculatedSalerate = formData.mrp - calculatedSalePercent
            setFormData({ ...formData, sale_rate: calculatedSalerate, [inputName]: inputVal });
            setVariantsData(formData)
        } else if (e.target.value === 'Amount') {
            // const inputName = e.target.name;
            // const inputVal = e.target.value;
            setFormData({ ...formData, sale_rate: formData.mrp - formData.discount, [inputName]: inputVal });
            setVariantsData(formData)
        }
        else {
            const inputName = e.target.name;
            const inputVal = e.target.value;
            setFormData({ ...formData, [inputName]: inputVal });
            setVariantsData(formData)
        }
    };

    useEffect(() => {
        if (formData) {
            handleVariant(formData)
        }
    }, [formData])
    useEffect(() => {
        setFormData(data)
    }, [])
    
    const onchangeImagehandle = async (e) => {
        const inpVal = e.target.files;
        const cloneObj = { ...formData, images: inpVal }

        setVariantsData(cloneObj)
        setFormData({ ...cloneObj });
    }
    const onchangeImagehandle1 = async (e) => {
        const inpVal = e.target.files[0];
        const cloneObj = { ...formData, mainImage_url: inpVal }
        setVariantsData(cloneObj)
        setFormData({ ...cloneObj });
    }

    const [modalShow, setModalShow] = useState(false);
    return (
        <tr className="sizzings">
            <td>
                <Popconfirm
                    title="Delete the task"
                    description="Are you sure to delete this variant?"
                    icon={
                        <QuestionCircleOutlined
                            style={{
                                color: 'red',
                            }}
                        />

                    }
                    onConfirm={() => { deleteRow(data._id) }}
                >
                    <Button danger><AiTwotoneDelete /></Button>
                </Popconfirm>
            </td>
            <td>
                <label name="varient" className="control-label">{data.weight}</label>
            </td>
            <td>
                <input type="number" name="mrp" value={formData?.mrp} className="form-control" required onChange={onChangeHandler} />
            </td>

            <td>
                <input type="text" name="purchase_rate" value={formData?.purchase_rate} className="form-control" defaultValue={""} onChange={onChangeHandler} />
            </td>

            <td>
                <input type="number" name="tax" value={formData?.tax} className="form-control" required onChange={onChangeHandler} />
            </td>

            <td>
                <select className="selectOptions" name="tax_type" aria-label="Default select example" onChange={onChangeHandler}>
                    <option value={'Inclusive'}>Inclusive</option>
                    <option value={'Exclusive'}>Exclusive</option>
                </select>
            </td>


            <td>
                <input type="number" name="sale_rate" value={formData?.sale_rate} className="form-control" required onChange={onChangeHandler} />
            </td>

            <td>
                <input type="number" name="discount" value={formData?.discount} className="form-control" required onChange={onChangeHandler} />
            </td>

            <td>
                <select className="selectOptions" value={formData?.discount_type} name="discount_type" aria-label="Default select example" onChange={onChangeHandler}>
                    <option value={'Amount'}>Amount</option>
                    <option value={'Percent'}>Percent</option>
                </select>
            </td>
            <td>
                <input type="text" name="sku" value={formData?.sku} className="form-control" onChange={onChangeHandler} />
            </td>

            <td>
                <input type="text" name="hsn_code" value={formData?.hsn_code} className="form-control" onChange={onChangeHandler} />
            </td>
            <td>
                <input type="text" name="sale_rp" value={formData?.sale_rp} className="form-control" onChange={onChangeHandler} />
            </td>
            <td>
                <input type="text" name="share_rp" value={formData?.share_rp} className="form-control" onChange={onChangeHandler} />
            </td>
            <td>
                <DatabaseFilled onClick={() => setModalShow(true)} />
            </td>
            <td>
                <input type="file" name="gallery_image" multiple accept="image/*" className="selected-files" onChange={onchangeImagehandle} />
            </td>
            <td>
                <input type="file" name="mainImage_url" accept="image/*" className="selected-files" onChange={onchangeImagehandle1} />
            </td>

            {modalShow && <AttributeModal show={modalShow}
                onHide={() => setModalShow(false)}
                setFormData={setFormData}
                formData={formData}
                data={data}
            />}
        </tr>


    )
}