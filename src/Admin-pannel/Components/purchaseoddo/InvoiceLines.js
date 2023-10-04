import React from "react";
function InvoiceLines(){
    return(
        <>
       <div className="container  mr-3">
        <div className="row">
            <table className="table">
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Label</th>
                        <th>Account</th>
                        <th>Qty</th>
                        <th>UoM</th>
                        <th>Price</th>
                        <th>Taxes</th>
                        <th>Tax excl</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Renovation
                            Arch
                        </td>
                        <td>Renovation
                            Arch
                        </td>
                        <td>40000 Product Sales</td>
                        <td>30.00</td>
                        <td>Units</td>
                        <td>45.00</td>
                        <td>15%</td>
                        <td>135000Rs</td>
                    </tr>
                </tbody>
            </table>
        </div>
       </div>
        </>
    )
}
export default InvoiceLines