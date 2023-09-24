import { token } from "../../../common/TokenArea";
import { useGetCurrencyQuery } from "../../all-products/allproductsApi/allProductsApi";

function SystemDefaultCurrency() {

    const { data } = useGetCurrencyQuery(token);
    console.log(data);

    return (
        <>
            <div className="col-lg-6">
                <div className="card">
                    <div className="card-header">
                        <h5 className="mb-0 h6">System Default Currency</h5>
                    </div>
                    <div className="card-body">
                        <form className="form-horizontal">
                            <input type="hidden" name="_token" defaultValue="OlhMycqXuIcjZ16H1v7gFG49f12SloCusJTFh8sM" />
                            <div className="form-group row">
                                <div className="col-lg-3">
                                    <label className="control-label">System Default Currency</label>
                                </div>
                                <div className="col-lg-6">
                                    <select className="form-select" aria-label="Default select example">
                                        {data && data.map((item) => {
                                            return <option key={item._id}>{item.name}</option>
                                        })}
                                    </select>
                                </div>
                                <input type="hidden" name="types[]" defaultValue="system_default_currency" />
                                <div className="col-lg-3">
                                    <button className="btn btn-sm btn-primary" type="submit" fdprocessedid="g7gno">Save</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SystemDefaultCurrency;