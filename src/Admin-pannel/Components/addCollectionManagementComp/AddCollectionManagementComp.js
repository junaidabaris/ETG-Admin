import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import AddCollectionManagmentMultiLingual from "./AddCollectionManagmentMultiLingual";

function AddCollectionManagementComp() {
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(false)
    const [image, setImage] = useState()
    const [image1, setImage1] = useState()
    const [image2, setImage2] = useState()
    const [image3, setImage3] = useState()
    const [finalCatD, setFinalCatD] = useState();
    const [finalCategoryTypeD, setFinalCategoryTypeD] = useState();

    const token = window.localStorage.getItem('adminToken');
    const params = useParams();

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    const getData = async () => {
        setIsLoading(true)
        const res = await axios.get(`https://onlineparttimejobs.in/api/language/admin`, {
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                Authorization: `Bearer ${token}`,
            },
        });
        setIsLoading(false)
        setData(res.data)
    };

    useEffect(() => {
        getData()
    }, []);


    const [val, setVal] = useState(data);


    const getByIdData = async () => {
        const res = await axios.get(`https://onlineparttimejobs.in/api/collection/${params?.uid}`, {
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                Authorization: `Bearer ${token}`,
            },
        });
        setVal(res.data)
    };
    useEffect(() => {
        if (params?.uid) {
            getByIdData()
        }
    }, [params?.uid]);

    const bringImage = (img) => {
        setImage(img)
        console.log('img---', img)
    };
    const bringImage1 = (img) => {
        setImage1(img)
        console.log('img1---', img)
    };
    const bringImage2 = (img) => {
        setImage2(img)
        console.log('img2---', img)
    };
    const bringImage3 = (img) => {
        setImage3(img)
        console.log('img3---', img)
    };

    const bringFinalCaetgD = (finalCatD) => {
        setFinalCatD(finalCatD)
        console.log('finalCatD---', finalCatD)
    };
    const bringFinalCategoryTypeD = (finalCategoryTypeD) => {
        setFinalCategoryTypeD(finalCategoryTypeD)
        console.log('setFinalCategoryTypeD---', finalCategoryTypeD)
    };


    useEffect(() => {
        if (data) {
            const maped = data.map((item) => {
                return { name: "", code: '', language_id: item._id, isActive: false, lable: item.name, banner_img: image1, header_web_img: image, menu_log: image3, header_mob_img: image2, category: finalCatD, category_type: finalCategoryTypeD }
            })
            setVal(maped)
        }
    }, [data]);

    const onChangeHandler = (e, id, bul) => {
        if (e.target.name == 'approve') {
            const maped = val.map((item) => {
                if (item.language_id == id) {
                    const obj = { ...item, [e.target.name]: !bul }
                    return obj
                } else {
                    return item
                }
            })
            setVal(maped);
        } else {
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
    };

    const toastSuccessMessage1 = () => {
        toast.success("Collection Updated", {
            position: "top-center"
        })
    };
    const toastErrorMessage1 = () => {
        toast.error("Collection Not Updated ", {
            position: "top-center"
        })
    };
    const toastSuccessMessage2 = () => {
        toast.success("Collection Added", {
            position: "top-center"
        })
    };
    const toastErrorMessage2 = () => {
        toast.error("Collection Not Added", {
            position: "top-center"
        })
    };


    const sendData = async () => {
        if (params?.uid) {
            try {
                const res = await axios.put(`https://onlineparttimejobs.in/api/collection/update_collection/${params?.uid}`, finalSendingD, {
                    headers: {
                        "Content-type": "application/json; charset=UTF-8",
                        Authorization: `Bearer ${token}`,
                    },
                })
                toastSuccessMessage1()
            } catch (error) {
                toastErrorMessage1()
            }

        } else {
            try {
                const res = await axios.post(`https://onlineparttimejobs.in/api/collection/add_Collection`, finalSendingD, {
                    headers: {
                        "Content-type": "application/json; charset=UTF-8",
                        Authorization: `Bearer ${token}`,
                    },
                })
                toastSuccessMessage2()
            } catch (error) {
                toastErrorMessage2()
            }
        }
    };

    const finalSendingD = { list: val };


    return (
        <>
            {isLoading ? <h3>Loading...</h3> : <Box sx={{ width: '100%', typography: 'body1' }}>
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
                                <AddCollectionManagmentMultiLingual setValue={setValue} data={val} params={params} item={item} i={i} sendData={sendData} onChangeHandler={onChangeHandler} bringImage={bringImage} bringImage1={bringImage1} bringImage2={bringImage2} bringImage3={bringImage3} bringFinalCaetgD={bringFinalCaetgD} bringFinalCategoryTypeD={bringFinalCategoryTypeD} />
                            </div>

                        </TabPanel>
                    })}

                </TabContext>
            </Box>}
            <ToastContainer />
        </>
    )
}
export default AddCollectionManagementComp

