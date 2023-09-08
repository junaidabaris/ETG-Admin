import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

function AddNewBanner() {

    const [inputval, setInputval] = useState({
        SliderTopHeading: '',
        bottomText: '',
        url: '',
        image: '',

    });
    const [file, setFile] = useState()

    const onChangeHandler = (e) => {
        const inpName = e.target.name;
        const inpval = e.target.value;
        const clonedObj = { ...inputval };
        clonedObj[inpName] = inpval;
        setInputval(clonedObj)
    };
    const token = window.localStorage.getItem('token')
    const imgHandle = (e) => {
        setFile(e.target.files[0])
        setInputval({ ...inputval, image: e.target.files[0] })
    }

    const [loader, setLoader] = useState(false)
    const [errorFile, setError] = useState(false)
    const [isSusses, setIssusses] = useState(false)


    const addGeneralSettingData = async (e) => {
        setLoader(true)
        e.preventDefault();
        const clonedObj = { ...inputval, image: file };
        const formData = new FormData();

        formData.append('SliderTopHeading', clonedObj.SliderTopHeading);
        formData.append('bottomText', clonedObj.bottomText);
        formData.append('url', clonedObj.url);
        formData.append('image', clonedObj.image);

        if (params.id) {
            try {
                const res = await axios.put(` https://onlineparttimejobs.in/api/banner/update/${params.id}`, formData, {
                    headers: {
                        "Content-type": "application/json; charset=UTF-8",
                        Authorization: `Bearer ${token}`,
                    },
                })
                setLoader(false)
                setIssusses(true)
            } catch (error) {
                setLoader(false)
                setError(true)
            }
        } else {
            try {
                const res = await axios.post(`https://onlineparttimejobs.in/api/banner/admin`, formData, {
                    headers: {
                        "Content-type": "application/json; charset=UTF-8",
                        Authorization: `Bearer ${token}`,
                    },
                })
                setLoader(false)
                setIssusses(true)
            } catch (error) {
                setLoader(false)
                setError(true)
            }
            document.getElementById("create-course-form").reset();
        }

    };

    const params = useParams()

    const getParamdata = async (id) => {
        try {
            const res = await axios.get(`https://onlineparttimejobs.in/api/banner/${id}`)
            setInputval({
                SliderTopHeading: res.data.SliderTopHeading,
                bottomText: res.data.bottomText,
                url: res.data.url,
                image: res.data.image,
            })
        } catch (error) {
            alert('Server Error')
        }
    }

    useEffect(() => {
        if (params.id) {
            getParamdata(params.id)
        }
    }, [])

    const toastSuccessMessage = () => {
        if (params.id) {
            toast.success("Banner Updated Successfully", {
                position: "top-center"
            })
        } else {
            toast.success("Banner Add Successfully", {
                position: "top-center"
            })
        }
    };

    const toastErrorMessage = () => {
        if (params.id) {
            toast.error("Brand Update Faild..", {
                position: "top-center"
            })
        } else {
            toast.error("Brand Add Faild..", {
                position: "top-center"
            })
        }
    };

    useEffect(() => {
        if (isSusses === true) {
            toastSuccessMessage()
        };
    }, [isSusses]);

    useEffect(() => {
        if (errorFile === true) {
            toastErrorMessage()
        };
    }, [errorFile])


    return <div className="aiz-main-content">
        <div className="px-15px px-lg-25px">
            <div className="row">
                <div className="col-lg-8 mx-auto">
                    <div className="card">
                        <div className="card-header">
                            {params.id ? <h1 className="mb-0 h6">Edit Banner</h1> : <h1 className="mb-0 h6">Add New Banner</h1>}
                        </div>
                        <div className="card-body">

                            <form className="form-horizontal" id='create-course-form' onSubmit={addGeneralSettingData}>
                                <input type="hidden" name="_token" defaultValue="MfWj9eEof7fNq0mKB42pyG49sPDPkHAVyVSS7UBT" />


                                <div className="form-group row">
                                    <label className="col-sm-3 col-from-label">Choose Slider Image :</label>
                                    <div className="col-sm-9">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text bg-soft-secondary">Browse</div>
                                            </div>
                                            <div className="form-control file-amount">
                                                <input type="file" name="image" className="selected-files" onChange={imgHandle} />
                                            </div>
                                        </div>
                                        <div className="file-preview box sm" />
                                    </div>
                                </div>




                                <div className="form-group row">
                                    <label className="col-sm-3 col-from-label">URL</label>
                                    <div className="col-sm-9">
                                        <input type="text" name="url" value={inputval.url} className="form-control" fdprocessedid="ihieoq" onChange={onChangeHandler} />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-sm-3 col-from-label">Slider Top Heading :</label>
                                    <div className="col-sm-9">
                                        <input type="text" name="SliderTopHeading" value={inputval.SliderTopHeading} className="form-control" fdprocessedid="ihieoq" onChange={onChangeHandler} />
                                    </div>
                                </div>


                                <div className="form-group row">
                                    <label className="col-sm-3 col-from-label">Button Text :</label>
                                    <div className="col-sm-9">
                                        <input type="text" name="bottomText" value={inputval.bottomText} className="form-control" fdprocessedid="ihieoq" onChange={onChangeHandler} />
                                    </div>
                                </div>



                                <div className="text-right">
                                    <button type="submit" className="btn btn-primary" fdprocessedid="a528s9">{params.id ? 'Update Banner' : 'Add Banner'}</button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto">
            {/*p class="mb-0">&copy;  v6.3.3</p*/}
        </div>
        <ToastContainer />
    </div>
}
export default AddNewBanner