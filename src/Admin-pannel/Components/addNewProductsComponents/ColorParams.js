
import { useEffect, useState } from "react";
import { DatabaseFilled, QuestionCircleOutlined } from '@ant-design/icons';
import { Button, Popconfirm } from 'antd';
import { AiTwotoneDelete } from "react-icons/ai";
import AttributeModal from "./AttributeModal";
import { GiPriceTag } from "react-icons/gi";
import { useParams } from "react-router-dom";
import PriceMoalParams from "./PriceMoalParams";
export const ColorParams = ({ data, deleteRow, pickUp, handleVariant, setVariantsData, bringSelectedVariantImage, index, item }) => {
    const [formData, setFormData] = useState(data);
    const [prices, setprices] = useState(data.prices);
    const onChangeHandler = (e) => {
        const inputName = e.target.name;
        const inputVal = e.target.value;
        setFormData({ ...formData, [inputName]: inputVal, prices:data.prices});
        setVariantsData(formData)
    };

    const params = useParams()
    useEffect(() => {
        if (formData) {
            handleVariant({ ...formData})
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
    const setData = (data, i) => {
        const clone = { ...data }
        setFormData(clone)
    }
    const [modalShow, setModalShow] = useState(false);
    const [modalShow2, setModalShow2] = useState(false);
    
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
                <input type="text" name="uid" value={data.uid} className="form-control" onChange={onChangeHandler} />

            </td>
            <td>
                <label name="varient" className="control-label" style={{ cursor: "pointer" }} onClick={() => setModalShow2(true)}><GiPriceTag style={{ fontSize: "20px" }} /></label>
            </td>
            <td>
                <DatabaseFilled onClick={() => setModalShow(true)} />
            </td>
            <td>
                {params?.id ?
                    <>
                        {data?.images?.length && data?.images[0]?.url && data?.images?.map((item) => {
                            return <img key={item.url} style={{ width: "100px", height: "100px" }} src={item?.url} />
                        })}
                        <input type="file" name="gallery_image" multiple accept="image/*" className="form-control" onChange={onchangeImagehandle} />
                    </>

                    : <input type="file" name="gallery_image" multiple accept="image/*" className="form-control" onChange={onchangeImagehandle} />
                }
            </td>
            <td>
                {params?.id ?
                    <>
                        {data?.mainImage_url?.url && <img style={{ width: "100px", height: "100px" }} src={data?.mainImage_url?.url} />}
                        <input type="file" name="mainImage_url" accept="image/*" className="form-control" onChange={onchangeImagehandle1} />
                    </>

                    :
                    <input type="file" name="mainImage_url" accept="image/*" className="form-control" onChange={onchangeImagehandle1} />
                }

            </td>

            {modalShow && <AttributeModal show={modalShow}
                onHide={() => setModalShow(false)}
                setFormData={setFormData}
                formData={formData}
                data={data}
            />}
            {modalShow2 && <PriceMoalParams show={modalShow2}
                onHide={() => setModalShow2(false)}
                prices={prices}
                data={data}
                setData={setData}
                index={index}
            />}
        </tr>


    )
}