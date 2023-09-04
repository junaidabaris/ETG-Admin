import React from 'react'
import { MdDateRange } from 'react-icons/md'
import { Link } from 'react-router-dom'
import "./Rpbalancesheetcomp.css"
import { Table } from 'react-bootstrap'

function Rpblancesheetcomprasion() {
    return (
        <div className='px-4'>
            <div className='card '>
                <div className='row'>
                    <div className='card-body'>
                        <h6 class="no-margin font-bold">Balance Sheet Comparison</h6>
                        <Link to="/admin/report">Back to report list</Link>
                        <hr />
                        <div className="row">
                            <div className="col-md-6">
                                <div className="row">
                                    <div className="col-md-3">
                                        <div className="form-group" app-field-wrapper="from_date"><label htmlFor="from_date" className="control-label"> <small className="req text-danger">* </small>From date</label><div className="input-group date"><input type="date" id="from_date" name="from_date" className="form-control datepicker" defaultValue="01/01/2023" autoComplete="off" /><div className="input-group-addon">
                                        </div></div></div>              </div>
                                    <div className="col-md-3">
                                        <div className="form-group" app-field-wrapper="to_date"><label htmlFor="to_date" className="control-label"> <small className="req text-danger">* </small>To date</label><div className="input-group date"><input type="date" id="to_date" name="to_date" className="form-control datepicker" defaultValue="31/08/2023" autoComplete="off" /><div className="input-group-addon">
                                        </div></div></div></div>
                                    <div className="col-md-3">
                                        <div className="form-group" app-field-wrapper="accounting_method"><label htmlFor="accounting_method" className="control-label">Accounting method</label><div className="dropdown bootstrap-select bs3" style={{ width: '100%' }}>
                                            <select id="accounting_method" name="accounting_method" className="selectpicker" data-width="100%" data-none-selected-text="Nothing selected" data-live-search="true" tabIndex={-98}><option value="cash">Cash</option><option value="accrual" >
                                                Accrual</option></select><button type="button" className="btn dropdown-toggle btn-default" data-toggle="dropdown" role="combobox" aria-owns="bs-select-1" aria-haspopup="listbox" aria-expanded="false" data-id="accounting_method" title="Accrual"><div className="filter-option"><div className="filter-option-inner"><div className="filter-option-inner-inner">Accrual</div></div> </div><span className="bs-caret"><span className="caret" /></span></button><div className="dropdown-menu open"><div className="bs-searchbox"><input type="search" className="form-control" autoComplete="off" role="combobox" aria-label="Search" aria-controls="bs-select-1" aria-autocomplete="list" /></div><div className="inner open" role="listbox" id="bs-select-1" tabIndex={-1}><ul className="dropdown-menu inner " role="presentation" /></div></div></div></div>              </div>
                                    <div className="col-md-3">
                                        {/* <input type="hidden" name="type" defaultValue="balance_sheet_comparison" /> */}
                                        <button type="submit" className="btn btn-info btn-submit mt-4">Filter</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="btn-group pull-right mtop25">
                                    <a href="#" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fa fa-print" /> <span className="caret" /></a>
                                    <ul className="dropdown-menu dropdown-menu-right">
                                        <li>
                                            <a href="#" onclick="printDiv(); return false;">
                                                Export to PDF                     </a>
                                        </li>
                                        <li>
                                            <a href="#" onclick="printExcel(); return false;">
                                                Export to Excel                     </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className='rpList'>
                    <div className='card-body'>
                        <div className='card'>
                            <h4 class="text-center">Custom Summary Report</h4><p class="text-center">01/01/2023 - 31/08/2023</p>
                        </div>
                        <div style={{ height: "800px", overflow: "auto" }}>

                            <Table bordered >

                                <thead>
                                    <tr class="tr_header">
                                        <th className='w-75'></th>
                                        <th class="th_total">Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className='treegrid-1 parent-node expanded'>
                                        <td className='parent'><div className='treegrid-container'><b>Income</b></div></td>
                                    </tr>
                                    <tr class="">
                                        <td><div class="treegrid-container" ><span class="treegrid-expander"></span>
                                            Revenue - General
                                        </div></td>
                                        <td class="total_amount">
                                            INR0,00
                                        </td>
                                    </tr>
                                    <tr class="">
                                        <td><div class="treegrid-container" ><span class="treegrid-expander"></span>
                                            Sales - retail
                                        </div></td>
                                        <td class="total_amount">
                                            INR0,00
                                        </td>
                                    </tr>
                                    <tr class="">
                                        <td><div class="treegrid-container" ><span class="treegrid-expander"></span>
                                            Sales - wholesale
                                        </div></td>
                                        <td class="total_amount">
                                            INR0,00
                                        </td>
                                    </tr>
                                    <tr class="">
                                        <td><div class="treegrid-container" ><span class="treegrid-expander"></span>
                                            Billable Expense Income
                                        </div></td>
                                        <td class="total_amount">
                                            INR0,00
                                        </td>
                                    </tr>
                                    <tr class="">
                                        <td><div class="treegrid-container" ><span class="treegrid-expander"></span>
                                            Sales
                                        </div></td>
                                        <td class="total_amount">
                                            INR0,00
                                        </td>
                                    </tr>
                                    <tr class="">
                                        <td><div class="treegrid-container" ><span class="treegrid-expander"></span>
                                            Sales of Product Income
                                        </div></td>
                                        <td class="total_amount">
                                            INR0,00
                                        </td>
                                    </tr>
                                    <tr class="">
                                        <td><div class="treegrid-container" ><span class="treegrid-expander"></span>
                                            Uncategorised Income
                                        </div></td>
                                        <td class="total_amount">
                                            INR0,00
                                        </td>
                                    </tr>
                                    <tr class="">
                                        <td><div class="treegrid-container" ><span class="treegrid-expander"></span>
                                            Unapplied Cash Payment Income
                                        </div></td>
                                        <td class="total_amount">
                                            INR0,00
                                        </td>
                                    </tr>


                                    <tr className='treegrid-1 parent-node expanded'>
                                        <td className='parent'><div className='treegrid-container'><b> Total Income</b></div></td>
                                        <td class="total_amount">
                                            <b>INR0,00</b>
                                        </td>
                                    </tr>
                                    <tr className='treegrid-1 parent-node expanded'>
                                        <td className='parent'><div className='treegrid-container'>
                                            <i>Cost of sales</i>
                                        </div></td>
                                    </tr>
                                    <tr class="">
                                        <td><div class="treegrid-container" ><span class="treegrid-expander"></span>
                                            Change in inventory - COS
                                        </div></td>
                                        <td class="total_amount">
                                            INR0,00
                                        </td>
                                    </tr>
                                    <tr class="">
                                        <td><div class="treegrid-container" ><span class="treegrid-expander"></span>
                                            Direct labour - COS
                                        </div></td>
                                        <td class="total_amount">
                                            INR0,00
                                        </td>
                                    </tr>
                                    <tr class="">
                                        <td><div class="treegrid-container" ><span class="treegrid-expander"></span>
                                            Discounts given - COS
                                        </div></td>
                                        <td class="total_amount">
                                            INR0,00
                                        </td>
                                    </tr>
                                    <tr class="">
                                        <td><div class="treegrid-container" ><span class="treegrid-expander"></span>
                                            Freight and delivery - COS
                                        </div></td>
                                        <td class="total_amount">
                                            INR0,00
                                        </td>
                                    </tr>
                                    <tr class="">
                                        <td><div class="treegrid-container" ><span class="treegrid-expander"></span>
                                            Materials - COS
                                        </div></td>
                                        <td class="total_amount">
                                            INR0,00
                                        </td>
                                    </tr>
                                    <tr class="">
                                        <td><div class="treegrid-container" ><span class="treegrid-expander"></span>
                                            Other - COS
                                        </div></td>
                                        <td class="total_amount">
                                            INR0,00
                                        </td>
                                    </tr>
                                    <tr class="">
                                        <td><div class="treegrid-container" ><span class="treegrid-expander"></span>
                                            Overhead - COS
                                        </div></td>
                                        <td class="total_amount">
                                            INR0,00
                                        </td>
                                    </tr>
                                    <tr class="">
                                        <td><div class="treegrid-container" ><span class="treegrid-expander"></span>
                                            Subcontractors - COS
                                        </div></td>
                                        <td class="total_amount">
                                            INR0,00
                                        </td>
                                    </tr>
                                    <tr class="">
                                        <td><div class="treegrid-container" ><span class="treegrid-expander"></span>
                                            Cost of sales
                                        </div></td>
                                        <td class="total_amount">
                                            INR0,00
                                        </td>
                                    </tr>
                                    <tr className='treegrid-1 parent-node expanded'>
                                        <td className='parent'><div className='treegrid-container'><b> Total Cost of Sales</b></div></td>
                                        <td class="total_amount">
                                            <b>INR0,00</b>
                                        </td>
                                    </tr>
                                    <tr className='treegrid-1 parent-node expanded'>
                                        <td className='parent'><div className='treegrid-container'><b> GROSS PROFIT</b></div></td>
                                        <td class="total_amount">
                                            <b>INR0,00</b>
                                        </td>
                                    </tr>
                                    <tr className='treegrid-1 parent-node expanded'>
                                        <td className='parent'><div className='treegrid-container'>
                                            <i>Other income</i>
                                        </div></td>
                                    </tr>
                                    <tr class="">
                                        <td><div class="treegrid-container" ><span class="treegrid-expander"></span>
                                            Dividend income
                                        </div></td>
                                        <td class="total_amount">
                                            INR0,00
                                        </td>
                                    </tr>
                                    <tr class="">
                                        <td><div class="treegrid-container" ><span class="treegrid-expander"></span>
                                            Interest income
                                        </div></td>
                                        <td class="total_amount">
                                            INR0,00
                                        </td>
                                    </tr>
                                    <tr class="">
                                        <td><div class="treegrid-container" ><span class="treegrid-expander"></span>
                                            Loss on disposal of assets
                                        </div></td>
                                        <td class="total_amount">
                                            INR0,00
                                        </td>
                                    </tr>
                                    <tr class="">
                                        <td><div class="treegrid-container" ><span class="treegrid-expander"></span>
                                            Other operating income (expenses)
                                        </div></td>
                                        <td class="total_amount">
                                            INR0,00
                                        </td>
                                    </tr>
                                    <tr class="">
                                        <td><div class="treegrid-container" ><span class="treegrid-expander"></span>
                                            Unrealised loss on securities, net of tax
                                        </div></td>
                                        <td class="total_amount">
                                            INR0,00
                                        </td>
                                    </tr>
                                    <tr className='treegrid-1 parent-node expanded'>
                                        <td className='parent'><div className='treegrid-container'><b> Total Other Income(Loss)
                                        </b></div></td>
                                        <td class="total_amount">
                                            <b>INR0,00</b>
                                        </td>
                                    </tr>
                                    <tr className='treegrid-1 parent-node expanded'>
                                        <td className='parent'><div className='treegrid-container'>
                                            <i>Expenses
                                            </i>
                                        </div></td>
                                    </tr>
                                    <tr class="">
                                        <td><div class="treegrid-container" ><span class="treegrid-expander"></span>
                                            Other Types of Expenses-Advertising Expenses
                                        </div></td>
                                        <td class="total_amount">
                                            INR0,00
                                        </td>
                                    </tr>
                                    <tr class="">
                                        <td><div class="treegrid-container" ><span class="treegrid-expander"></span>
                                            Amortisation expense
                                        </div></td>
                                        <td class="total_amount">
                                            INR0,00
                                        </td>
                                    </tr>
                                    <tr class="">
                                        <td><div class="treegrid-container" ><span class="treegrid-expander"></span>
                                            Bad debts
                                        </div></td>
                                        <td class="total_amount">
                                            INR0,00
                                        </td>
                                    </tr>
                                    <tr class="">
                                        <td><div class="treegrid-container" ><span class="treegrid-expander"></span>
                                            Bank charges
                                        </div></td>
                                        <td class="total_amount">
                                            INR0,00
                                        </td>
                                    </tr>
                                    <tr class="">
                                        <td><div class="treegrid-container" ><span class="treegrid-expander"></span>
                                            Commissions and fees
                                        </div></td>
                                        <td class="total_amount">
                                            INR0,00
                                        </td>
                                    </tr>
                                    <tr class="">
                                        <td><div class="treegrid-container" ><span class="treegrid-expander"></span>
                                            Dues and Subscriptions
                                        </div></td>
                                        <td class="total_amount">
                                            INR0,00
                                        </td>
                                    </tr>
                                    <tr class="">
                                        <td><div class="treegrid-container" ><span class="treegrid-expander"></span>
                                            Equipment rental
                                        </div></td>
                                        <td class="total_amount">
                                            INR0,00
                                        </td>
                                    </tr>
                                    <tr class="">
                                        <td><div class="treegrid-container" ><span class="treegrid-expander"></span>
                                            Income tax expense
                                        </div></td>
                                        <td class="total_amount">
                                            INR0,00
                                        </td>
                                    </tr>
                                    <tr class="">
                                        <td><div class="treegrid-container" ><span class="treegrid-expander"></span>
                                            Insurance - Disability
                                        </div></td>
                                        <td class="total_amount">
                                            INR0,00
                                        </td>
                                    </tr>
                                    <tr class="">
                                        <td><div class="treegrid-container" ><span class="treegrid-expander"></span>
                                            Insurance - General
                                        </div></td>
                                        <td class="total_amount">
                                            INR0,00
                                        </td>
                                    </tr>
                                    <tr class="">
                                        <td><div class="treegrid-container" ><span class="treegrid-expander"></span>
                                            Insurance - Liability
                                        </div></td>
                                        <td class="total_amount">
                                            INR0,00
                                        </td>
                                    </tr>



                                    <tr class="">
                                        <td><div class="treegrid-container" ><span class="treegrid-expander"></span>
                                            Interest expense
                                        </div></td>
                                        <td class="total_amount">
                                            INR0,00
                                        </td>
                                    </tr>
                                    <tr class="">
                                        <td><div class="treegrid-container" ><span class="treegrid-expander"></span>
                                            Legal and professional fees
                                        </div></td>
                                        <td class="total_amount">
                                            INR0,00
                                        </td>
                                    </tr>
                                    <tr class="">
                                        <td><div class="treegrid-container" ><span class="treegrid-expander"></span>
                                            Loss on discontinued operations, net of tax

                                        </div></td>
                                        <td class="total_amount">
                                            INR0,00
                                        </td>
                                    </tr>
                                    <tr class="">
                                        <td><div class="treegrid-container" ><span class="treegrid-expander"></span>
                                            Management compensation
                                        </div></td>
                                        <td class="total_amount">
                                            INR0,00
                                        </td>
                                    </tr>
                                    <tr class="">
                                        <td><div class="treegrid-container" ><span class="treegrid-expander"></span>
                                            Office expenses
                                        </div></td>
                                        <td class="total_amount">
                                            INR0,00
                                        </td>
                                    </tr>
                                    <tr class="">
                                        <td><div class="treegrid-container" ><span class="treegrid-expander"></span>
                                            Other general and administrative expenses
                                        </div></td>
                                        <td class="total_amount">
                                            INR0,00
                                        </td>
                                    </tr>
                                    <tr class="">
                                        <td><div class="treegrid-container" ><span class="treegrid-expander"></span>
                                            <b>
                                                Total expenses
                                            </b>
                                        </div></td>
                                        <td class="total_amount">
                                            <b>INR0,00</b>
                                        </td>
                                    </tr>
                                    <tr class="">
                                        <td><div class="treegrid-container" ><span class="treegrid-expander"></span>
                                            <i>
                                                Total expenses
                                            </i>
                                        </div></td>
                                        <td class="total_amount">

                                        </td>
                                    </tr>
                                    <tr class="">
                                        <td><div class="treegrid-container" ><span class="treegrid-expander"></span>
                                            Reconciliation Discrepancies
                                        </div></td>
                                        <td class="total_amount">

                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Rpblancesheetcomprasion