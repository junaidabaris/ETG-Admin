import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { useAddNewBrandMutation, useGetLanguagesQuery } from '../all-products/allproductsApi/allProductsApi';
import axios from 'axios';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import FormsMultiLang from './FormMultiLag';
function AddnewBrandsAdmin() {
    const [inputval, setInputval] = useState({ name: '', image: null, meta_title: '', meta_description: '' });
    const [file, setFile] = useState(null);
    const token = window.localStorage.getItem('token')
    const [addNewBrand, response] = useAddNewBrandMutation();
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


    useEffect(() => {
        if (data) {
            const maped = data.map((item) => {
                return { name: "", language_id: item._id, meta_title: '', meta_description: '', lable: item.name }
            })
            setVal(maped)
        }
    }, [data])

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    const toastSuccessMessage = () => {
        toast.success("Brand added Successfully", {
            position: "top-center"
        })
    };

    // if (response.isSuccess === true) {
    //     toastSuccessMessage()
    // };
    // if (response.isError === true) {
    //     alert('!Error Brand not added')
    // }

    const addNewAttributeData = async (e) => {
        e.preventDefault();
        const images = new FormData();
        const clone  = [...val]

        for (let i = 0; i < clone.length; i++) {
            let element = clone[i];
            if (element?.logo) {
                images.append('image', element?.logo);
                const res2 = await axios.post(`https://onlineparttimejobs.in/api/cloudinaryImage/addImage`, images)
                images.delete('image');
                const obj = { ...element, logo: { public_id: res2.data.public_id, url: res2.data.url } }
                clone.splice(i ,1, obj)
            }
        }
        const url = 'https://onlineparttimejobs.in/api/brand/add'
        try {
            const res = await axios.post(url, {list:clone}, {
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    Authorization: `Bearer ${token}`,
                },
            });
            alert('brand  Request Send Successfully')
        } catch (error) {
            alert('brand  Request Send Fail !')
        }

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
                            return <TabPanel value={i}>
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
export default AddnewBrandsAdmin;