
import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useParams } from 'react-router-dom';
import MultiFaq from './MultiFaq';
import { useGetLanguagesQuuseAddNewCategoryMutation, useGetCategoriesQuery, useGetLanguagesQuery, useListFaqMasterQuery } from '../../Components/all-products/allproductsApi/allProductsApi';


function AddFaq() {
    const token = window.localStorage.getItem('token')


    const toastSuccessMessage = () => {
        toast.success("FAQ added Successfully", {
            position: "top-center"
        })
    };

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const { isLoading, data: allList } = useListFaqMasterQuery(token);
    const { data: langData, refetch } = useGetLanguagesQuery(token);
    const [val, setVal] = useState(langData)
    const params = useParams()
    useEffect(() => {
        if (langData) {
            if (!params) {
                const maped = langData.map((item) => {
                    return { question: "", language_id: item._id, category_id: '', lable: item.name, answer:''}
                })
                setVal(maped)
            } else {
                const maped = langData.map((item) => {
                    return { question: "", language_id: item._id, category_id: '', lable: item.name, answer:''}
                })
                setVal(maped)
            }
        }
    }, [langData])
    const onChangeHandler = (e, id, bul) => {

        const maped = val.map((item) => {
            if (item.language_id == id) {
                const obj = { ...item, [e.target.name]: e.target.value }
                return obj
            } else {
                return item
            }
        })
        setVal(maped);

    }
    const [spcOr, setspcOr] = useState(false)
    const submitEditCategoryData = async (data) => {

        const url = `https://onlineparttimejobs.in/api/category/${params.id}`
        try {
            const res = await axios.put(url, { list: data }, {
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    'Authorization': 'Bearer ' + token
                }
            });
            alert('Edit Catagary Successfully')
            setspcOr(false)
        } catch (error) {
            alert('Catagary not Edit')
            setspcOr(false)
        }
    }

    const addNewAttributeData = async (e) => {
        e.preventDefault();
        const images = new FormData();
        setspcOr(true)
        const clone = [...val]
        if (params?.id) {
            // submitEditCategoryData(clone)
        } else {

                const url = 'https://onlineparttimejobs.in/api/faqs/add_faq'

                try {
                    const res = await axios.post(url, { list: clone }, {
                        headers: {
                            "Content-type": "application/json; charset=UTF-8",
                            Authorization: `Bearer ${token}`,
                        },
                    });
                    toastSuccessMessage()
                    setspcOr(false)
                } catch (error) {
                    alert('Category Send Fail !')
                    setspcOr(false)
                }

        }
    };

    const [getDat, setGetDat] = useState(false)
    useEffect(() => {
        if (params?.id && langData) {
            const clone = []
            for (let j = 0; j < langData.length; j++) {
                const element2 = langData[j];
                for (let i = 0; i < val?.length; i++) {
                    const element = val[i];
                    if (element?.language_id == element2._id) {
                        clone.push(element)
                    }
                }
            }

            setVal(clone)
        }
    }, [params, langData, getDat])


    const getDetailCat = async () => {
        try {
            const res = await axios.get(`https://onlineparttimejobs.in/api/category/admin/${params.id}`, {
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    Authorization: `Bearer ${token}`,
                },
            })
            setVal(res.data);
            setGetDat(true)

        } catch (error) {
            alert('Server Error !')
        }
    }


    useEffect(() => {
        if (params.id) {
            getDetailCat()
        }
    }, [params.id])

    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="row">
                        <div className="col-lg-8 mx-auto">
                            {spcOr && <div className="preloaderCount">
                                <div className="spinner-border" role="status">
                                    <span className="visually-hidden">ded</span>
                                </div>
                                <h6>please wait your FAQ is uploading</h6>
                            </div>}

                            <Box sx={{ width: '100%', typography: 'body1' }}>
                                <TabContext value={value}>
                                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                                            {langData && langData.map((item, i) => {
                                                return <Tab label={item?.name} value={i} />
                                            })}

                                        </TabList>
                                    </Box>
                                    {val && val.map((item, i) => {
                                        return <TabPanel value={i}>
                                            <div className="card">
                                                <MultiFaq setValue={setValue} data={val} item={item} allList={allList} i={i} addNewAttributeData={addNewAttributeData} onChangeHandler={onChangeHandler} />
                                            </div>

                                        </TabPanel>
                                    })}

                                </TabContext>
                            </Box>
                        </div>
                    </div>
                </div>
                <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto">
                    {/*p class="mb-0">&copy;  v6.3.3</p*/}
                </div>
            </div>
            <ToastContainer />

        </>
    )
}
export default AddFaq