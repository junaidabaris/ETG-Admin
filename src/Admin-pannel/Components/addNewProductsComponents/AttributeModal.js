

import axios from 'axios';
import Multiselect from 'multiselect-react-dropdown';
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { RxCross1 } from 'react-icons/rx';

// import { token } from '../../common/TokenArea';
function AttributeModal(props) {
    const [finalCatD, setFinalCatD] = useState();
    const token = window.localStorage.getItem('token')
    console.log(props.formData);
    const [data1, setData1] = useState()
    const getDatas = async () => {
        const res = await axios.get('https://onlineparttimejobs.in/api/attributeSetMaster', {
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                'Authorization': 'Bearer ' + token
            }
        })
        setData1(res.data)
    }

    useEffect(() => {
        getDatas()
    }, [])
    const [proAtt, setProAtt] = useState()

    const removeRowAt = (id, indx) => {
        const clone = [...proAtt]

        const getobj = clone[indx]
        const separateArr = getobj.list

        const mapedData = separateArr.filter((item) => {
            return id !== item.attribute._id
        })
        getobj.list = mapedData

        clone.splice(indx, 1, getobj)

        setProAtt(clone);
    }
    const changeValues = (e, val) => {
        const clone = [...proAtt]
        const indx = e.target.id

        let getobj = {...clone[indx]}
        // const separateArr = getobj.list

        const mapedData = getobj.list.map((item) => {
            if (val == item.attribute._id) {
                return { ...item, value: e.target.value }
            } else {
                return item
            }
        })
        getobj.list = mapedData
        clone.splice(indx, 1, getobj)
        setProAtt(clone)

    }

    const getAttributes = async () => {
        const res = await axios.post('https://onlineparttimejobs.in/api/attributeSetMaster/categ/get', { id: finalCatD })
        setProAtt(res.data);
    }

    const seenData = () => {
        props.setDataArtibutr({ ...props.formData, attributeList: proAtt })
        setProAtt([])
        props.onHide()
    }
    const [sel, setSel] = useState()
    useEffect(() => {
        if (props.formData?.attributeList?.length) {
            const maped = props.formData?.attributeList.map((item) => {
                return { _id: item?.attributeSetMaster?._id, name: item?.attributeSetMaster?.name }
            })
            setSel(maped)
            setProAtt(props.formData?.attributeList)
        }
    }, [props.formData])

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Set Attribute (Variant Wise)
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>

                <div className="form-group row">
                    <label className="col-md-3 col-from-label"> Attribute </label>

                    <div className="col-md-9 d-flex classatt">
                        <Multiselect
                            isObject={true}
                            displayValue="name"
                            options={data1}
                            showCheckbox
                            selectedValues={sel}
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
                        <Button onClick={getAttributes} variant="success">Success</Button>
                    </div>
                </div>



                {true && <div className="form-group row">
                    <div className="col-md-12">

                        <div  >
                            {proAtt && proAtt?.map((item, i) => {
                                return <div className='mainboxatt' key={i}>
                                    <div className='col-4'>{item.attributeSetMaster.name}</div>
                                    <div>
                                        {item?.list?.map((val, v) => {
                                            console.log(val);
                                            return <div key={v} style={{ display: "flex", alignContent: "baseline", margin: "7px 0" }}>
                                                <label className="col-md-3 col-from-label">{val.attribute.name}</label>
                                                <input placeholder="Value" name={v._id} value={val.value} id={i} className="form-control" onChange={
                                                    (e) => {
                                                        changeValues(e, val.attribute._id)
                                                    }
                                                } />
                                                <div style={{ fontSize: "17px", margin: "0 5px" }}> <RxCross1 onClick={() => { removeRowAt(val?.attribute._id, i) }} /></div>
                                            </div>
                                        })}
                                    </div>
                                </div>

                            })}

                        </div>

                    </div>
                </div>}

            </Modal.Body>
            <Modal.Footer>
                <Button onClick={seenData}>Save</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default AttributeModal
