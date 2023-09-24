
import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { useAddNewBrandMutation, useEditBrandMutation, useGetBrandByIdQuery, useGetLanguagesQuery } from '../all-products/allproductsApi/allProductsApi';
import axios from 'axios';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import FormsMultiLang from './FormMultiLag';
import { useParams } from 'react-router-dom';
function EditBrands() {
    const [inputval, setInputval] = useState({ name: '', image: null, meta_title: '', meta_description: '' });
    const [file, setFile] = useState(null);
    const token = window.localStorage.getItem('token')
    const { data, refetch } = useGetLanguagesQuery(token);
    const handleFile = (event) => {
        setFile(event.target.files[0])
    }
    const [value, setValue] = useState(0);
    const [val, setVal] = useState(data)
    const onChangeHandler = (e, id, bul) => {
        if (bul) {
            const maped = val.map((item) => {
                if (item.language_id == id) {
                    const obj = { ...item, logo: e.target.files[0] }
                    return obj
                } else {
                    return item
                }
            })
            setVal(maped)
        } else {
            const maped = val.map((item) => {
                if (item.language_id == id) {
                    const obj = { ...item, [e.target.name]: e.target.value }
                    return obj
                } else {
                    return item
                }
            })
            setVal(maped)
        }
    }

    const params = useParams();
    const { data: valEdit } = useGetBrandByIdQuery({ id: params.id, token: token });
    const [editBrand, { isSuccess, isError }] = useEditBrandMutation();

    useEffect(() => {
        if (valEdit) {
            const clone = []
            for (let i = 0; i < data.length; i++) {
                const element = data[i];
                for (let j = 0; j < valEdit.length; j++) {
                    const element2 = valEdit[j];
                    if (element._id == element2.language_id) {
                        clone.push(element2)
                    }
                }

            }
            setVal(clone)
        }
    }, [params, valEdit])

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    const toastSuccessMessage = () => {
        toast.success("brand  Edit Successfully", {
            position: "top-center"
        })
    };
    useEffect(() => {
        if (isSuccess) {
            toastSuccessMessage()
        }
        if (isError) {
            alert('brand  Edit Failed')
        }
    }, [isSuccess, isError])
    const addNewAttributeData = async (e) => {
        e.preventDefault()
        editBrand({ id: params.id, data: { list: val }, token: token })

    };


    return (
        <>
            <div className="col-md-5">
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
                                <div className="card">
                                    <FormsMultiLang setValue={setValue} data={val} item={item} i={i} addNewAttributeData={addNewAttributeData} onChangeHandler={onChangeHandler} handleFile={handleFile} />
                                </div>

                            </TabPanel>
                        })}

                    </TabContext>
                </Box>
                <ToastContainer />
            </div>
        </>
    )
}
export default EditBrands