function USD() {
  return (
    <>
      <div className="container">
        <div className="row">
          <table className="table">
            <tbody>
              <tr>
                <td colspan="3" className="TextC1 table-light">
                  <h4>The transaction has not been mapped</h4>
                </td>
              </tr>
              <tr>
                <td>Transaction</td>
                <td>Qty</td>
                <td>Amount</td>
              </tr>
              <tr>
                <td className="table-light">
                  <a href="#">Invoice</a>
                </td>
                <td className="table-light">0</td>
                <td className="table-light">$0.00</td>
              </tr>
              <tr>
                <td>
                  <a href="#">Payment</a>
                </td>
                <td>0</td>
                <td>$0.00</td>
              </tr>
              <tr>
                <td className="table-light">
                  <a href="#">Expense</a>
                </td>
                <td className="table-light">0</td>
                <td className="table-light">$0.00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
export default USD;
