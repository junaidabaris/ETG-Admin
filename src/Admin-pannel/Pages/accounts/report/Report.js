import React from 'react'
import "./Report.css"
import { Link } from 'react-router-dom'
function Report() {
    return (
        <div className="p-4">
            <div className="card">
                <div className="card-body">
                    <h6><b>Reports</b></h6>
                    <hr />
                    <div className="panel-group my-5">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h6 className="panel-title">
                                    <Link data-toggle="collapse" to="#collapse1">Business overview</Link>
                                </h6>
                            </div>
                            {/* <div id="collapse1" className="panel-collapse collapse in"> */}
                            <ul className="list-group">
                                <li className="list-group-item">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <Link to="/admin/rp_balance_report_sheet">Balance Sheet Comparison</Link>
                                            <p>What you own (assets), what you owe (liabilities), and what you invested (equity) compared to last year.</p>
                                            <Link to="/admin/rp_balance_report_sheet">Balance Sheet Detail</Link>
                                            <p>A detailed view of what you own (assets), what you owe (liabilities), and what you invested (equity).</p>
                                            <Link to="/admin/rp_balance_report_sheet">Balance Sheet Summary</Link>
                                            <p>A summary of what you own (assets), what you owe (liabilities), and what you invested (equity).</p>
                                            <Link to="/admin/rp_balance_report_sheet">Balance Sheet</Link>
                                            <p>What you own (assets), what you owe (liabilities), and what you invested (equity).</p>
                                            <Link to="/admin/rp_balance_report_sheet" className="hide">Business Snapshot</Link>
                                            <p className="hide">Charts and graphs of your income and expenses and how they've change over time.</p>
                                            <Link to="/admin/rp_balance_report_sheet">Custom Summary Report</Link>
                                            <p>A report you build from scratch. With more options to customise.</p>
                                            <Link to="/admin/rp_balance_report_sheet">Profit and Loss as % of total income</Link>
                                            <p>Your expenses as a percentage of your total income.</p>
                                            <Link to="/admin/rp_balance_report_sheet">Profit and Loss Comparison</Link>
                                            <p>Your income, expenses, and net income (profit or loss) compared to last year.</p>
                                        </div>
                                        <div className="col-md-6">
                                            <Link to="/admin/rp_balance_report_sheet">Profit and Loss Detail</Link>
                                            <p>Profit and Loss Detail</p>
                                            <Link to="/admin/rp_balance_report_sheet">Profit and Loss year-to-date comparison</Link>
                                            <p>Your income, expenses, and net income (profit or loss) compared to this year so far.</p>
                                            <Link to="/admin/rp_balance_report_sheet" className="hide">Profit and Loss by Customer</Link>
                                            <p className="hide">Your income, expenses, and net income (profit or loss) by customer.</p>
                                            <Link to="/admin/rp_balance_report_sheet" className="hide">Profit and Loss by Month</Link>
                                            <p className="hide">Your income, expenses, and net income (profit or loss) by month.</p>
                                            <Link to="/admin/rp_balance_report_sheet">Profit and Loss</Link>
                                            <p>Your income, expenses, and net income (profit or loss). Also called an income statement.</p>
                                            <Link to="/admin/rp_balance_report_sheet" className="hide">Quarterly Profit and Loss Summary</Link>
                                            <p className="hide">A summary of your income, expenses, and net income (profit or loss) by quarter.</p>
                                            <Link to="/admin/rp_balance_report_sheet">Statement of Cash Flows</Link>
                                            <p>Cash flowing in and out from sales and expenses (operating activities), investments, and financing.</p>
                                            <Link to="/admin/rp_balance_report_sheet">Statement of Changes in Equity</Link>
                                            <p>Statement of changes in equity.</p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            {/* </div> */}
                        </div>
                    </div>
                    <div className="panel-group my-5">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h6 className="panel-title">
                                    <Link data-toggle="collapse" to="collapse1">Business overview</Link>
                                </h6>
                            </div>
                            {/* <div id="collapse5" className="panel-collapse collapse in"> */}
                            <ul className="list-group">
                                <li className="list-group-item">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <Link to="/admin/rp_balance_report_sheet">Account list</Link>
                                            <p>The name, type, and balance for each account in your chart of accounts.</p>
                                            <Link to="/admin/rp_balance_report_sheet">Balance Sheet Comparison</Link>
                                            <p>What you own (assets), what you owe (liabilities), and what you invested (equity) compared to last year.</p>
                                            <Link to="/admin/rp_balance_report_sheet">Balance Sheet</Link>
                                            <p>What you own (assets), what you owe (liabilities), and what you invested (equity).</p>
                                            <Link to="/admin/rp_balance_report_sheet" className="hide">Exceptions to Closing Date</Link>
                                            <p className="hide">Transactions dated before the closing date that you changed after closing the books.</p>
                                            <Link to="/admin/rp_balance_report_sheet">General Ledger</Link>
                                            <p>The beginning balance, transactions, and total for each account in your chart of accounts.</p>
                                            <Link to="/admin/rp_balance_report_sheet">Journal</Link>
                                            <p>The debits and credits for each transaction, listed by date.</p>
                                            <Link to="/admin/rp_balance_report_sheet">Profit and Loss Comparison</Link>
                                            <p>Your income, expenses, and net income (profit or loss) compared to last year.</p>
                                            <Link to="/admin/rp_balance_report_sheet">Profit and Loss</Link>
                                            <p>Your income, expenses, and net income (profit or loss). Also called an income statement.</p>
                                        </div>
                                        <div className="col-md-6">
                                            <Link to="/admin/rp_balance_report_sheet">Account history</Link>
                                            <p>Account history</p>
                                            <Link to="/admin/rp_balance_report_sheet">Recent Transactions</Link>
                                            <p>Transactions you created or edited in the last 4 days.</p>
                                            <Link to="/admin/rp_balance_report_sheet" className="hide">Reconciliation Reports</Link>
                                            <p className="hide">A list of your reconciliations, with links to individual reconcilation reports.</p>
                                            <Link to="/admin/rp_balance_report_sheet" className="hide">Recurring Template List</Link>
                                            <p className="hide">A list of your recurring transaction templates, grouped by type (scheduled, reminder, and unscheduled).</p>
                                            <Link to="/admin/rp_balance_report_sheet">Statement of Cash Flows</Link>
                                            <p>Cash flowing in and out from sales and expenses (operating activities), investments, and financing.</p>
                                            <Link to="/admin/rp_balance_report_sheet">Transaction Detail by Account</Link>
                                            <p>Transactions and total for each account in your chart of accounts.</p>
                                            <Link to="/admin/rp_balance_report_sheet">Transaction List by Date</Link>
                                            <p>A list of all your transactions, ordered by date.</p>
                                            <Link to="/admin/rp_balance_report_sheet" className="hide">Transaction List with Splits</Link>
                                            <p className="hide">All your transactions, with splits.</p>
                                            <Link to="/admin/rp_balance_report_sheet">Trial Balance</Link>
                                            <p>This report summarises the debit and credit balances of each account on your chart of accounts during a period of time.</p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            {/* </div> */}
                        </div>
                    </div>
                    <div className="panel-group my-5">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h6 className="panel-title">
                                    <Link data-toggle="collapse" to="#collapse7">Sales tax</Link>
                                </h6>
                            </div>
                            {/* <div id="collapse7" className="panel-collapse collapse in"> */}
                            <ul className="list-group">
                                <li className="list-group-item">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <Link to="https://ourcares.co.in/admin/accounting/rp_tax_detail_report">Tax Detail Report</Link>
                                            <p>This report lists the transactions that are included in each box on the tax return. The report is based on accrual accounting unless you changed your tax reporting preference to cash basis.</p>
                                            <Link to="https://ourcares.co.in/admin/accounting/rp_tax_exception_report" className="hide">Tax Exception Report</Link>
                                            <p className="hide">This report lists the transactions containing tax that have been added, modified or deleted in prior filed tax periods and have changed the companys tax liability.</p>
                                            <Link to="https://ourcares.co.in/admin/accounting/rp_tax_summary_report">Tax Summary Report</Link>
                                            <p>This report shows you the summary information for each box of the tax return. The report is based on accrual accounting unless you changed your tax reporting preference to cash basis.</p>
                                        </div>
                                        <div className="col-md-6">
                                            <Link to="https://ourcares.co.in/admin/accounting/rp_tax_liability_report">Tax Liability Report</Link>
                                            <p>How much sales tax you've collected and how much you owe to tax agencies.</p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            {/* </div> */}
                        </div>
                    </div>
                    <div className="panel-group my-5">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h6 className="panel-title">
                                    <Link data-toggle="collapse" to="#collapse2">Sales and customers</Link>
                                </h6>
                            </div>
                            {/* <div id="collapse2" className="panel-collapse collapse in"> */}
                            <ul className="list-group">
                                <li className="list-group-item">
                                    <div className="row">

                                        <div className="col-md-6">
                                            <Link to="https://ourcares.co.in/admin/accounting/rp_customer_contact_list" className="hide">Customer Contact List</Link>
                                            <p className="hide">Phone number, email, billing address, and other contact info for each customer.</p>
                                            <Link to="https://ourcares.co.in/admin/accounting/rp_deposit_detail">Deposit Detail</Link>
                                            <p>Your deposits, with the date, customer or supplier, and amount.</p>
                                            <Link to="https://ourcares.co.in/admin/accounting/rp_estimates_by_customer" className="hide">Estimates by Customer</Link>
                                            <p className="hide">Your estimates, grouped by customer. Shows whether they're accepted and invoiced.</p>
                                            <Link to="https://ourcares.co.in/admin/accounting/rp_income_by_customer_summary">Income by Customer Summary</Link>
                                            <p>Your income minus your expenses (net income) for each customer.</p>
                                            <Link to="https://ourcares.co.in/admin/accounting/rp_inventory_valuation_detail" className="hide">Inventory Valuation Detail</Link>
                                            <p className="hide">The quantity on hand, value, and average cost for each inventory item.</p>
                                            <Link to="https://ourcares.co.in/admin/accounting/rp_inventory_valuation_summary" className="hide">Inventory Valuation Summary</Link>
                                            <p className="hide">Your transactions for each inventory item, and how they affect quantity on hand, value, and cost.</p>
                                            <Link to="https://ourcares.co.in/admin/accounting/rp_payment_method_list" className="hide">Payment Method List</Link>
                                            <p className="hide">The payment methods (cash, cheque, card, and so on) you accept from customers.</p>
                                            <Link to="https://ourcares.co.in/admin/accounting/rp_product_service_list" className="hide">Product/Service List</Link>
                                            <p className="hide">Your products and services, with the sales price, name, description, and (optionally) purchase cost and quantity on hand.</p>
                                        </div>
                                        <div className="col-md-6">
                                            <Link to="https://ourcares.co.in/admin/accounting/rp_sales_by_customer_detail" className="hide">Sales by Customer Detail</Link>
                                            <p className="hide">Your sales, grouped by customer. Includes the date, type, amount, and total.</p>
                                            <Link to="https://ourcares.co.in/admin/accounting/rp_sales_by_customer_summary" className="hide">Sales by Customer Summary</Link>
                                            <p className="hide">Your total sales for each customer.</p>
                                            <Link to="https://ourcares.co.in/admin/accounting/rp_sales_by_product_service_detail" className="hide">Sales by Product/Service Detail</Link>
                                            <p className="hide">Your sales, grouped by product or service. Includes the date, transaction type, quantity, rate, amount, and total.</p>
                                            <Link to="https://ourcares.co.in/admin/accounting/rp_sales_by_product_service_summary" className="hide">Sales by Product/Service Summary</Link>
                                            <p className="hide">Your total sales for each product or service. Includes the quantity, amount, 0f sales, and average price.</p>
                                            <Link to="https://ourcares.co.in/admin/accounting/rp_stock_take_worksheet" className="hide">Stock Take Worksheet</Link>
                                            <p className="hide">Your inventory items, with space to enter your physical count so you can compare to the quantity on hand in system.</p>
                                            <Link to="https://ourcares.co.in/admin/accounting/rp_time_activities_by_customer_detail" className="hide">Time Activities by Customer Detail</Link>
                                            <p className="hide">The products and services (time activities) your employees provided to each customer.</p>
                                            <Link to="https://ourcares.co.in/admin/accounting/rp_transaction_list_by_customer" className="hide">Transaction List by Customer</Link>
                                            <p className="hide">Your transactions (income and expenses), grouped by customer.</p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            {/* </div> */}
                        </div>
                    </div>
                    <div className="panel-group my-5">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h6 className="panel-title">
                                    <Link data-toggle="collapse" to="#collapse3">Expenses and suppliers</Link>
                                </h6>
                            </div>
                            {/* <div id="collapse3" className="panel-collapse collapse in"> */}
                            <ul className="list-group">
                                <li className="list-group-item">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <Link to="https://ourcares.co.in/admin/accounting/rp_check_detail">Cheque Detail</Link>
                                            <p>The checks you've written, with the date, payee, and amount.</p>
                                            <Link to="https://ourcares.co.in/admin/accounting/rp_expenses_by_supplier_summary" className="hide">Expenses by Supplier Summary</Link>
                                            <p className="hide">Your total expenses for each supplier.</p>
                                            <Link to="https://ourcares.co.in/admin/accounting/rp_purchases_by_product_service_detail" className="hide">Purchases by Product/Service Detail</Link>
                                            <p className="hide">Your purchases, grouped by product or service.</p>
                                        </div>
                                        <div className="col-md-6">
                                            <Link to="https://ourcares.co.in/admin/accounting/rp_purchases_by_supplier_detail" className="hide">Purchases by Supplier Detail</Link>
                                            <p className="hide">Your purchases, grouped by supplier.</p>
                                            <Link to="https://ourcares.co.in/admin/accounting/rp_supplier_contact_list" className="hide">Supplier Contact List</Link>
                                            <p className="hide">Name, company, phone number, email, mailing address, and account number for each supplier.</p>
                                            <Link to="https://ourcares.co.in/admin/accounting/rp_transaction_list_by_supplier" className="hide">Transaction List by Supplier</Link>
                                            <p className="hide">Your transactions, grouped by supplier.</p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            {/* </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Report