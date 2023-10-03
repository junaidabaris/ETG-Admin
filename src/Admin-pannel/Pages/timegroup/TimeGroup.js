
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { token } from "../../common/TokenArea";
import { useDeleteUnitMutation, useDeletetimeSloteMutation, useGetLanguagesQuery, useGetTimeSloteQuery, useGetTimegroupQuery, usePostTimeGroupMutation, usePostTimeSloteMutation } from "../../Components/all-products/allproductsApi/allProductsApi";
import MultiLangGroup from "./MultiLangGroup";

function AddTimeGroup() {

    const [finalCatD, setFinalCatD] = useState();
    const toastSuccessMessage = (str) => {
        toast.success(`Time Group ${str} Successfully`, {
            position: "top-center"
        })
    };

    const toastErrorMessage = (str) => {
        toast.error(`Time Group not ${str}`, {
            position: "top-center"
        })
    };
    const { isLoading, data, refetch } = useGetTimegroupQuery(token);
    const [sendData, { isSuccess, isError }] = usePostTimeGroupMutation()
    useEffect(() => {
        if (isSuccess) {
            toastSuccessMessage('Add')
            refetch()
        }
        if (isError) {
            toastErrorMessage('Add')
        }
    }, [isSuccess, isError])

    const [value, setValue] = useState(0);
    const { data: valData } = useGetLanguagesQuery(token);
    const [val, setVal] = useState(valData)
    useEffect(() => {
        if (valData) {
            const maped = valData.map((item) => {
                return { name: "", language_id: item._id, lable: item.name, area_id: "", start_time: "", end_time: "", seller_id: '', displayName: "", value: [] }
            })
            setVal(maped)
        }
    }, [valData])
    const onChangeHandler = (e, id, bul) => {
        if (bul) {
            const maped = val.map((item) => {
                if (item.language_id == id) {
                    const obj = { ...item, approve: !item.approve }
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

    const addNewAttributeData = (e,id) => {

        const maped = val.map((item) => {
            if (item.language_id == id) {
                const obj = { ...item, value: finalCatD }
                return obj
            } else {
                return item
            }
        })
        setVal(maped)
        e.preventDefault();
        const clone = [...val]
        for (let i = 0; i < clone.length; i++) {
            const element = clone[i];
            let ids = []
            for (let j = 0; j < element.value?.length; j++) {
                const element2 = element.value[j];
                ids.push(element2?._id)
            }
            element.value = ids
            clone.splice(i,1,element)
            ids = []
        }
        sendData({ data: { list: clone }, token: token })


    };
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const setTabs = (i, str, id) => {
        if (str == 'nex') {
            setValue(i + 1)
        } else {
            setValue(i - 1)
        }
        const maped = val.map((item) => {
            if (item.language_id == id) {
                const obj = { ...item, value: finalCatD }
                return obj
            } else {
                return item
            }
        })
        setVal(maped)
        setFinalCatD([])

    }

    const [deleteValue, { isSuccess: deleteSucc, isError: isErr }] = useDeletetimeSloteMutation()
    useEffect(() => {
        if (isSuccess) {
            toastSuccessMessage('Delete')
            refetch()
        }
        if (isError) {
            toastErrorMessage('Delete')
        }
    }, [deleteSucc, isErr])

    const deleteData = (id) => {
        deleteValue({ id: id, token: token })
    }
    return (
        <>
            <ToastContainer />
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="row">
                        <div className="col-lg-6">

                            <Box sx={{ width: '100%', typography: 'body1' }}>
                                <TabContext value={value}>
                                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                                            {valData && valData.map((item, i) => {
                                                return <Tab label={item?.name} value={i} />
                                            })}

                                        </TabList>
                                    </Box>
                                    {val && val.map((item, i) => {
                                        return <TabPanel value={i}>
                                            <div className="card">
                                                <MultiLangGroup setTabs={setTabs} setValue={setValue} setFinalCatD={setFinalCatD} data={val} item={item} i={i} addNewAttributeData={addNewAttributeData} onChangeHandler={onChangeHandler} />
                                            </div>

                                        </TabPanel>
                                    })}

                                </TabContext>
                            </Box>


                        </div>
                    </div>
                    <>

                        <div className="card">
                            <div className="card-header row gutters-5">
                                <div className="col text-center text-md-left">
                                    <h5 className="mb-md-0 h6">All Units</h5>
                                </div>
                                <div className="col-md-4">
                                    <form id="sort_currencies">
                                        <div className="input-group input-group-sm">
                                            <input type="text" className="form-control" id="search" name="search" placeholder="Type name & Enter" fdprocessedid="skb3yv" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="card-body">

                                {isLoading ? <h2>Loading...</h2>
                                    : <table className="table aiz-table mb-0 footable footable-1 breakpoint-xl" style={{}}>
                                        <thead>
                                            <tr className="footable-header">
                                                <th data-breakpoints="lg" className="footable-first-visible" style={{ display: 'table-cell' }}>#</th>
                                                <th style={{ display: 'table-cell' }}>Time Slote Name</th>
                                                <th data-breakpoints="lg" style={{ display: 'table-cell' }}>Status</th>
                                                <th className="text-right footable-last-visible" style={{ display: 'table-cell' }}>Options</th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            {data && data.map((item, i) => {
                                                return <tr key={item._id}>
                                                    <td className="footable-first-visible" style={{ display: 'table-cell' }}>{i + 1}</td>
                                                    <td style={{ display: 'table-cell' }}>{item.name}</td>
                                                    <td style={{ display: 'table-cell' }}>
                                                        <label className="aiz-switch aiz-switch-success mb-0">
                                                            <input defaultValue={29} type="checkbox" defaultChecked />
                                                            <span className="slider round" />
                                                        </label>
                                                    </td>
                                                    <td className="text-right footable-last-visible" style={{ display: 'table-cell' }}>
                                                        <Link to={`#`} className="btn btn-soft-primary btn-icon btn-circle btn-sm" title="Edit">
                                                            <i className="las la-edit" />
                                                        </Link>
                                                        <button onClick={() => { deleteData(item._id) }} type="button" className="btn btn-soft-danger btn-icon btn-circle btn-sm">
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
                    </>
                </div>
                <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto">
                    {/*p class="mb-0">&copy;  v6.3.3</p*/}
                </div>
            </div>


        </>
    )
}
export default AddTimeGroup;