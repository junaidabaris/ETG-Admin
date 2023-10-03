import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import AddRingSizeMultiLingual from "./AddRingSizeMultiLingual";

function AddRingSize() {
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(false)
    const [inputval, setInputval] = useState({
        name: '',
    });

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
    }, [])

    const [val, setVal] = useState(data)

    useEffect(() => {
        if (data) {
            const maped = data.map((item) => {
                return { name: "", code: '', description: '', image: '', language_id: item._id, isActive: false, lable: item.name }
            })
            setVal(maped)
        }
    }, [data]);

    const onChangeHandler = (e, id, bul) => {
        console.log('onChangeD----', e, id, bul)
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
        toast.success("RingSize Updated", {
            position: "top-center"
        })
    };
    const toastErrorMessage1 = () => {
        toast.error("RingSize Not Updated ", {
            position: "top-center"
        })
    };

    const toastSuccessMessage2 = () => {
        toast.success("RingSize Added", {
            position: "top-center"
        })
    };
    const toastErrorMessage2 = () => {
        toast.error("RingSize Not Added", {
            position: "top-center"
        })
    };

    const getByIdData = async () => {
        const res = await axios.get(`https://onlineparttimejobs.in/api/ringSize/${params?.uid}`, {
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
    }, [params?.uid])

    const finalSendingD = { list: val };


    const sendData = async () => {
        if (params?.uid) {
            try {
                const res = await axios.put(`https://onlineparttimejobs.in/api/ringSize/update_ringsize/${params?.uid}`, finalSendingD, {
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
                const res = await axios.post(`https://onlineparttimejobs.in/api/ringSize/add_ringsize`, finalSendingD, {
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
                                <AddRingSizeMultiLingual setValue={setValue} data={val} params={params} item={item} i={i} sendData={sendData} onChangeHandler={onChangeHandler} />
                            </div>

                        </TabPanel>
                    })}

                </TabContext>
            </Box>}
            <ToastContainer />
        </>
    )
}
export default AddRingSize

