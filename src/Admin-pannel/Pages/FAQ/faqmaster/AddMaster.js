
import { useEffect, useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import { useAddFaqMasterMutation, useDeleteAttributesMutation, useGetAttributesQuery, useGetLanguagesQuery, useListFaqMasterQuery } from "../../../Components/all-products/allproductsApi/allProductsApi";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import MultiLangMas from "./MultiLangMas";
import { Link } from "react-router-dom";

function AddMaster() {

    const [addNewAttribute, response] = useAddFaqMasterMutation();
    const token = window.localStorage.getItem('token')
    const { data, refetch } = useGetLanguagesQuery(token);
    const [val, setVal] = useState(data)

    const toastSuccessMessage = () => {
        toast.success("Faq Master added Successfully", {
            position: "top-center"
        })
    };

    useEffect(() => {
        if (response.isSuccess === true) {
            toastSuccessMessage()
            const maped = data.map((item) => {
                return { title: "", language_id: item._id, lable: item.name }
            })
            setVal(maped)
        };
        if (response.isError === true) {
            alert('!Error Faq Master not added')
        }

    }, [response])
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    
    useEffect(() => {
        if (data) {
            const maped = data.map((item) => {
                return { title: "", language_id: item._id, lable: item.name }
            })
            setVal(maped)
        }
    }, [data])
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

    const addNewAttributeData = (e) => {
        e.preventDefault();
        addNewAttribute({ data: { list: val }, token: token })

    };




    // List Section
    const { isLoading, data: allList } = useListFaqMasterQuery(token);
    const [deleteAttribute, { isSuccess }] = useDeleteAttributesMutation();

    const deleteAttributeData = (id) => {
        deleteAttribute(id)
    };

    useEffect(() => {
        if (isSuccess) {
            alert('Faq Master Deleted Successfully')
        }
    }, [isSuccess])

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
                                    <MultiLangMas setValue={setValue} data={val} item={item} i={i} addNewAttributeData={addNewAttributeData} onChangeHandler={onChangeHandler} />
                                </div>

                            </TabPanel>
                        })}

                    </TabContext>
                </Box>
                <ToastContainer />
            </div>

            <div className=" col-lg-10 ">
                <div className="card">
                    <div className="card-header row gutters-5">
                        <div className="col text-center text-md-left">
                        </div>

                    </div>

                    <div className="card-body">

                        {isLoading ? <h2>Loading...</h2>
                            : <table className="table aiz-table mb-0 footable footable-1 breakpoint-xl" style={{}}>
                                <thead>
                                    <tr className="footable-header">
                                        <th className="footable-first-visible" style={{ display: 'table-cell' }}>#</th><th style={{ display: 'table-cell' }}>Name</th><th className="text-right footable-last-visible" style={{ display: 'table-cell' }}>Options</th></tr>
                                </thead>
                                <tbody>

                                    {allList && allList.map((item, i) => {
                                        return <tr key={item._id}>
                                            <td className="footable-first-visible" style={{ display: 'table-cell' }}>{i + 1}</td>
                                            <td style={{ display: 'table-cell' }}>{item.title}</td>
                                            <td className="text-right footable-last-visible" style={{ display: 'table-cell' }}>
                                                <Link to={`edit/${item.uid}`} className="btn btn-soft-primary btn-icon btn-circle btn-sm">
                                                    <i className="las la-edit" />
                                                </Link>
                                                <button type="button" onClick={() => deleteAttributeData(item._id)} className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete">
                                                    <i className="las la-trash" />
                                                </button>
                                            </td>
                                        </tr>
                                    })}

                                </tbody>
                            </table>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
export default AddMaster;