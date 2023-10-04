import React from "react";
function JournalItems(){
    return(
        <>
         <div className="container  mr-3">
        <div className="row">
            <table className="table">
                <thead>
                    <tr>
                        <th>Accounts</th>
                        <th>Label</th>
                        <th>Debit</th>
                        <th>Credit</th>
                        <th>Tax Grid</th>
                        
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>12000 Account Receivable
                        </td>
                        <td>
                        </td>
                        <td>1455 Rs INR </td>
                        <td>0.00 INR Rs</td>
                        <td></td>
                       
                    </tr>
                    <tr>
                        <td>21500 tax received
                        </td>
                        <td>15%
                        </td>
                        <td>00.00 Rs INR </td>
                        <td>200.00 INR Rs</td>
                        <td></td>
                       
                    </tr>
                    <tr>
                        <td>40000 Product Sales
                        </td>
                        <td>Renovation Arch
                        </td>
                        <td>00.00 Rs INR </td>
                        <td>1300.00 INR Rs</td>
                        <td></td>
                       
                    </tr>
                </tbody>
            </table>
        </div>
       </div>
        </>
    )
}
export default JournalItems