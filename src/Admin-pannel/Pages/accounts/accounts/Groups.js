import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";

function Groups() {
  return (
    <>
      <div className="container">
        <div className="dflexR9 row">
          <div className="col-md-2">
            <h4>Group</h4>
            <p class="fw-light">Home - Group</p>
          </div>

          <div className="DflexC8 col-md-8">
            <button className="btn btn-primary Bpadding" type="button">
              <AiOutlinePlus /> Account
            </button>
            <button className="btn btn-primary Bpadding" type="button">
              <AiOutlinePlus />
              Sub Group
            </button>

            <button className="btn btn-primary Bpadding" type="button">
              <AiOutlinePlus />
              Group
            </button>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-md-3">
                <label className="form-label" for="groups-name">
                  Groups Name<span className="text-danger">*</span>
                </label>
                <input className="form-control" type="text"></input>
              </div>
              <div className="col-md-3">
                <label className="form-label" for="groups-name">
                  Select Main Heads<span className="text-danger">*</span>
                </label>
                <select class="form-select" aria-label="Default select example">
                  <option></option>
                  <option value="1">Assets</option>
                  <option value="2">Liabilities</option>
                  <option value="3">Expenses</option>
                  <option value="3">Incomes</option>
                </select>
              </div>
              <div className="col-md-2">
                <button className="margin00 btn btn-primary" type="button">
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-md-6">
                <div>
                  <label className="form-label" for="show">
                    Show
                  </label>
                </div>
                <div>
                  <input className="form-control" type="number"></input>
                </div>
                <div>
                  <label className="form-label" for="show">
                    entries
                  </label>
                </div>
              </div>
              <div className="col-md-6">
                <label className="form-label" for="search">
                  Search
                </label>
                <input className="form-control" type="text"></input>
              </div>
            </div>
            <div>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Main Heads</th>
                    <th scope="col">Groups</th>
                    <th scope="col">Status</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td> Current Assets</td>
                    <td>Current Liability</td>
                    <td>Active</td>
                    <td>
                      {" "}
                      <button className="btn btn-primary" type="button">
                        <BiEdit />
                      </button>
                      <button className="btn btn-primary" type="button">
                        <AiFillDelete />
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>Liabilities</td>
                    <td>Current Liability</td>
                    <td>Active</td>
                    <td>
                      {" "}
                      <button className="btn btn-primary" type="button">
                        <BiEdit />
                      </button>
                      <button className="btn btn-primary" type="button">
                        <AiFillDelete />
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>Liabilities</td>
                    <td>Current Liability</td>
                    <td>Active</td>
                    <td>
                      {" "}
                      <button className="btn btn-primary" type="button">
                        <BiEdit />
                      </button>
                      <button className="btn btn-primary" type="button">
                        <AiFillDelete />
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>Liabilities</td>
                    <td>Current Liability</td>
                    <td>Active</td>
                    <td>
                      {" "}
                      <button className="btn btn-primary" type="button">
                        <BiEdit />
                      </button>
                      <button className="btn btn-primary" type="button">
                        <AiFillDelete />
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>Liabilities</td>
                    <td>Current Liability</td>
                    <td>Active</td>
                    <td>
                      {" "}
                      <button className="btn btn-primary" type="button">
                        <BiEdit />
                      </button>
                      <button className="btn btn-primary" type="button">
                        <AiFillDelete />
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>Liabilities</td>
                    <td>Current Liability</td>
                    <td>Active</td>
                    <td>
                      {" "}
                      <button className="btn btn-primary" type="button">
                        <BiEdit />
                      </button>
                      <button className="btn btn-primary" type="button">
                        <AiFillDelete />
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="Con4 container">
        <div className="row">
          <div className="col-md-12">
            <button type="button" className="btn btn-outline-secondary">
              Prev
            </button>
            <button type="button" className="btn btn-secondary">
              1
            </button>
            <button type="button" className="btn btn-outline-secondary">
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Groups