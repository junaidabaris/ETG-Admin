
import { useEffect, useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import { useAddNewAttributeMutation, useEditAttributeMutation, useGetAttributeByIdQuery, useGetLanguagesQuery } from "../all-products/allproductsApi/allProductsApi";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import FormsMultiLanguage from "./FormsMultiLanguage";
import { useParams } from "react-router-dom";

function EditAttribute() {
    const token = window.localStorage.getItem('token')
    const params = useParams()
    const { data: editData } = useGetAttributeByIdQuery({ id: params.id, token: token });

    const [editAttribute, response] = useEditAttributeMutation();

    const toastSuccessMessage = () => {
        toast.success("Attribute Edited Successfully", {
            position: "top-center"
        })
    };

    useEffect(() => {
        if (response.isSuccess === true) {
            toastSuccessMessage()
        };
        if (response.isError === true) {
            alert('!Error Attribute not Edited')
        }

    }, [response])
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const { data, refetch } = useGetLanguagesQuery(token);
    const [val, setVal] = useState(data)
    useEffect(() => {
        if (editData) {
            const clone = []
            for (let i = 0; i < data.length; i++) {
                const element = data[i];
                for (let j = 0; j < editData.length; j++) {
                    const element2 = editData[j];
                    if (element._id == element2.language_id) {
                        clone.push(element2)
                    }
                }

            }
            setVal(clone)
        }
    }, [editData])
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

    }

    const addNewAttributeData = (e) => {
        e.preventDefault();
        editAttribute({ id: params.id, data: { list: val }, token: token })

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
                                    <FormsMultiLanguage setValue={setValue} data={val} item={item} i={i} addNewAttributeData={addNewAttributeData} onChangeHandler={onChangeHandler} />
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
export default EditAttribute;