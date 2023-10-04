import React from "react";
function Products(){
    return(
        <>
        <div className="container">
           <div className="card">
           <table className="table" style={{overflow:"auto"}}>
                <thead className="table-secondary">
                   <tr>
                    <th>Products</th>
                    <th>Description</th>
                    <th>Quantity</th>
                    <th>received</th>
                    <th>Billed</th>
                    <th>UoM</th>
                    <th>Unit Price</th>
                    <th>Taxes</th>
                    <th>Tax  Excl</th>
                   </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>[FURN_6666] Acoustic Bloc Screens</td>
                        <td className="purch"> <input className="form-control purch" type="text" style={{border:'none',}}/></td>
                        <td><input className="" type="text" placeholder="20.00"/></td>
                        <td><input className="" type="text" placeholder="0.00" disabled/></td>
                        <td><input className="" type="text" placeholder="0.00" disabled/></td>
                        <td><input className="" type="text" placeholder="Units" disabled/></td>
                        <td className="purch"> <input className="form-control purch" type="text" style={{border:'none',}}/></td>
                        <td><input className="" type="text" placeholder="" disabled/></td>
                        <td><input className="" type="text" placeholder="$573.600" disabled/></td>
                        </tr>

                </tbody>
            </table>
           </div>
        </div>
        </>
    )
}
export default Products