import { useEffect, useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import { useAddRoleMutation, useAddStaffMutation, useGetRolesQuery } from "../../all-products/allproductsApi/allProductsApi";
import axios from "axios";

function AddRole() {

    const [inputVal, setInputVal] = useState({
        role_name: ''
    });

    const onChangeHandler = (e) => {
        const inpName = e.target.name;
        const inpVal = e.target.value;
        const clonedObj = { ...inputVal };
        clonedObj[inpName] = inpVal;
        setInputVal(clonedObj)
    };


    const { data } = useGetRolesQuery();
    const [addRoleD, response] = useAddRoleMutation();
    const [inputs, setInputs] = useState()

    const submitAddRoleData = (e) => {
        e.preventDefault();
        const clone = { ...inputVal , inputs }
        setInputVal(clone)
        addRoleD(inputVal)
        console.log(inputVal)
        document.getElementById("create-course-form").reset();
    };


    const toastSuccessMessage = () => {
        toast.success("Role added Successfully", {
            position: "top-center"
        })
    };
    const token = window.localStorage.getItem('token')
   
    const getData = async () => {
        try {
            const res = await axios.get(`https://onlineparttimejobs.in/api/roleParent/form`, {
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    Authorization: `Bearer ${token}`,
                },
            })
            setInputs(res.data)
        } catch (error) {

        }
    }
    useEffect(() => {
        if (response.isSuccess === true) {
            toastSuccessMessage()
        };
        getData()
    }, [response])

    const onchangeActive = (childId, perentId) => {
        const clone = [...inputs]
        for (let i = 0; i < clone.length; i++) {
            const element = clone[i];
            if (element._id == perentId) {
                for (let j = 0; j < element?.list.length; j++) {
                    const element2 = element?.list[j];
                    if (element2._id == childId) {
                        element2.active = !element2.active
                    }
                }
            }
        }
        setInputs(clone)
        // console.log(clone);
    }



    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="row">
                        <div className="col-lg-6 mx-auto">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="mb-0 h6">Role Information</h5>
                                </div>
                                <form className="form-horizontal" id="create-course-form" onSubmit={submitAddRoleData}>
                                    <input type="hidden" name="_token" defaultValue="S0f7vDDtqJ5NbxPupX86gbiFGZumqx0Q8PyryILc" />
                                    <div className="card-body">

                                        <div className="form-group row">
                                            <label className="col-sm-3 col-from-label" htmlFor="Role name">Role Name</label>
                                            <div className="col-sm-9">
                                                <input type="text" placeholder="Role Name" name="role_name" className="form-control" required onChange={onChangeHandler} />
                                            </div>
                                        </div>

                                        {inputs && inputs?.map((item) => {
                                            return <div key={item._id} className="form-group row">
                                                <h6>{item?.title} </h6>

                                                {item?.list && item.list?.map((val) => {
                                                    return <div key={val._id} className="col-sm-12" style={{ display: "flex", alignItems: "center" }}>
                                                        <label className="col-sm-3 col-from-label" htmlFor="Role name">{val?.label} </label>
                                                        <div class="form-check form-switch">
                                                            <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked={val?.active} onChange={() => { onchangeActive(val._id, item._id) }} />
                                                        </div>
                                                        {/* <input style={{ margin: "10px 0" }} type="text" placeholder={val.roleLabel} name="role_name" className="form-control" required onChange={onChangeHandler} /> */}

                                                    </div>
                                                })}
                                            </div>
                                        })}

                                        <div className="form-group mb-0 text-right">
                                            <button type="submit" className="btn btn-sm btn-primary">Save</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto"></div>
                <ToastContainer />
            </div>

        </>
    )
}
export default AddRole;