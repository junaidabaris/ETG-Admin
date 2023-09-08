import { useEffect, useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import { useAddNewAttributeMutation } from "../all-products/allproductsApi/allProductsApi";

function AddNewAttributesAdmin() {

    const [inputval, setInputval] = useState({
        name: '',
    });

    const onChangeHandler = (e) => {
        const inpName = e.target.name;
        const inpval = e.target.value;
        const clonedObj = { ...inputval };
        clonedObj[inpName] = inpval;
        setInputval(clonedObj)
    };

    const [addNewAttribute, response] = useAddNewAttributeMutation();
    const token = window.localStorage.getItem('token')
    const addNewAttributeData = (e) => {
        e.preventDefault();
        addNewAttribute({ data: inputval, token: token })
        document.getElementById("create-course-form").reset();
    };

    const toastSuccessMessage = () => {
        toast.success("Attribute added Successfully", {
            position: "top-center"
        })
    };

    useEffect(() => {
        if (response.isSuccess === true) {
            toastSuccessMessage()
        };
        if (response.isError === true) {
            alert('!Error Attribute not added')
        }

    }, [response])

    return (
        <>
            <div className="col-md-5">
                <div className="card">
                    <div className="card-header">
                        <h5 className="mb-0 h6">Add New Attribute</h5>
                    </div>
                    <div className="card-body">
                        <form id="create-course-form" onSubmit={addNewAttributeData}>
                            <input type="hidden" name="_token" defaultValue="6klBhNOhEcSYzHAP1WU8ctR90lIocmkKBETVGkNx" />

                            <div className="form-group mb-3">
                                <label htmlFor="name">Name</label>
                                <input type="text" placeholder="Name" id="name" name="name" className="form-control" required fdprocessedid="8s3s9v" onChange={onChangeHandler} />
                            </div>

                            <div className="form-group mb-3 text-right">
                                <button type="submit" className="btn btn-primary" fdprocessedid="uzw7ye">Save</button>
                            </div>

                        </form>
                    </div>
                </div>
                <ToastContainer />
            </div>
        </>
    )
}
export default AddNewAttributesAdmin;