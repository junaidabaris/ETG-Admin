function PayFastCredential() {
    
    return (
        <>
            <div className="col-lg-6">
                <div className="card">
                    <div className="card-header">
                        <h3 className="mb-0 h6">PAYFAST Credential</h3>
                    </div>
                    <div className="card-body">
                        <form className="form-horizontal" >

                            <div className="form-group row">
                                <div className="col-lg-4">
                                    <label className="col-from-label">PAYFAST_MERCHANT_ID</label>
                                </div>
                                <div className="col-lg-8">
                                    <input type="text" className="form-control" name="PAYFAST_MERCHANT_ID" required fdprocessedid="3b7pv6" />
                                </div>
                            </div>

                            <div className="form-group row">
                                <input type="hidden" name="types[]" />
                                <div className="col-lg-4">
                                    <label className="col-from-label">PAYFAST_MERCHANT_KEY</label>
                                </div>
                                <div className="col-lg-8">
                                    <input type="text" className="form-control" name="PAYFAST_MERCHANT_KEY" required fdprocessedid="fan0vl" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-md-4">
                                    <label className="col-from-label">PAYFAST Sandbox Mode</label>
                                </div>
                                <div className="col-md-8">
                                    <label className="aiz-switch aiz-switch-success mb-0">
                                        <input name="payfast_sandbox" type="checkbox" defaultChecked />
                                        <span className="slider round" />
                                    </label>
                                </div>
                            </div>
                            <div className="form-group mb-0 text-right">
                                <button type="submit" className="btn btn-sm btn-primary" fdprocessedid="cjyzo">Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default PayFastCredential;