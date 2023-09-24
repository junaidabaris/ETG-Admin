import { token } from "../../../common/TokenArea";
import { useGetLanguagesQuery } from "../../all-products/allproductsApi/allProductsApi";

function DefaultLanguage() {


    const { data, res } = useGetLanguagesQuery(token);
    console.log(data);


    return (
        <>
            <div className="col-lg-6">
                <div className="card">
                    <div className="card-header">
                        <h5 className="mb-0 h6">Default Language</h5>
                    </div>
                    <div className="card-body">
                        <form className="form-horizontal">
                            <input type="hidden" name="_token" defaultValue="OlhMycqXuIcjZ16H1v7gFG49f12SloCusJTFh8sM" />
                            <div className="form-group row">
                                <div className="col-lg-3">
                                    <label className="col-from-label">Default Language</label>
                                </div>
                                <input type="hidden" name="types[]" defaultValue="DEFAULT_LANGUAGE" />
                                <div className="col-lg-6">
                                    <select className="form-select" aria-label="Default select example">
                                        {
                                            data && data.map((item, i) => {
                                                return <option key={item._id}>{item.name}</option>
                                            })
                                        }
                                    </select>
                                </div>
                                <div className="col-lg-3">
                                    <button type="submit" className="btn btn-info" fdprocessedid="obu1c">Save</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default DefaultLanguage;