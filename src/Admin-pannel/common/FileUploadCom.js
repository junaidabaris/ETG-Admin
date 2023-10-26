import axios from "axios";
import { useState } from "react";
import { useGetSellersQuery } from "../Components/all-products/allproductsApi/allProductsApi";

const FileUploadCom = ({ url }) => {

    const [file, setFile] = useState(null);
    const [sellId, getSellerId] = useState(null);
    const token = window.localStorage.getItem('token')
    const { data } = useGetSellersQuery(token);
    const handleFile = (event) => {
        setFile(event.target.files[0])
    }
    const handleUpload = async (event) => {
        const obj = { seller_id: sellId, product: file }
        event.preventDefault();
        const formData = new FormData();
        formData.append('product', file);
        // formData.append('seller._id', sellId);
        try {
            const res = await axios.post(url, formData, {
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    'Authorization': 'Bearer ' + token
                }
            })
            alert('Bulk Import Successfully')
        } catch (error) {
            alert('Bulk Import Failed.')
        }
        console.log(obj);
    };


    return (
        <form className="form-horizontal" onSubmit={handleUpload} encType="multipart/form-data">
            <div className="form-group row">
                <div className="col-sm-9">
                    <div className="row">
                        <div className="col-3"><h5>Select File</h5></div>
                        <div className="col-8">
                            <div className="custom-file">
                                <label className="custom-file-label">
                                    <input type="file" name="file" className="selected-files" required onChange={handleFile} />
                                </label>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="col-sm-9">
                    <div className="row">
                        <div className="col-3"><h5>Select Seller</h5></div>
                        <div className="col-8">
                            <select class="form-select" aria-label="Default select example" onChange={(e) => { getSellerId(e.target.value) }}>
                                <option selected>Open this select menu</option>
                                {data && data?.map((item) => {
                                    return <option value={item?._id}>{item?.firstname} {item?.lastname}</option>
                                })}
                            </select>
                        </div>
                    </div>

                </div>
            </div>
            <div className="form-group mb-0">
                <button type="submit" className="btn btn-info">Upload CSV</button>
            </div>
        </form>
    )
}
export default FileUploadCom;