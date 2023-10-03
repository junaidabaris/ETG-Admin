import Select from "react-select";
import { useState } from "react";
import JoditEditor from "jodit-react";
import { useRef } from "react";

function TLAddB() {
  const [value, setValue] = useState(null);
  const Ttype = [
    {
      value: 1,
      label: "test Training",
    },
    {
      value: 2,
      label: "Main training",
    },
    {
      value: 3,
      label: "Training",
    },
  ];
  const editor = useRef(null);
  const [content, setContent] = useState("");

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <div className="card">
              {" "}
              <div className="card-body">
                <h6 className="card-title">Add new Training</h6>
                <hr style={{ opacity: "20" }} />
                <div className="row" style={{ marginBottom: "15px" }}>
                  <div className="col-md-12">
                    <label
                      classNmae="form-label"
                      for="training-type"
                      style={{ paddingLeft: "0px", paddingBottom: "3px" }}
                    >
                      <span className="text-danger">*</span>Training type
                    </label>
                    <Select
                      options={Ttype}
                      placeholder="None selected"
                      value={value}
                    />
                  </div>
                </div>
                <div className="row" style={{ marginBottom: "15px" }}>
                  <div className="col-md-12">
                    <label
                      classNmae="form-label"
                      for="Name "
                      style={{ paddingLeft: "0px", paddingBottom: "3px" }}
                    >
                      Name
                    </label>
                    <input className="form-control" type="text"></input>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <label className="Marginlb1 form-label" for="description">
                      Description
                    </label>
                  </div>
                </div>
                <div className="editor">
                  <JoditEditor
                    ref={editor}
                    value={content}
                    onChange={(newContent) => setContent(newContent)}
                  />
                </div>
                <hr style={{ opacity: "20" }} />
                <div
                  className="12"
                  style={{ display: "flex", justifyContent: "end" }}
                >
                  <button
                    className="btn btn-light btn-sm"
                    type="button"
                    style={{ marginRight: "5px" }}
                  >
                    CLOSE
                  </button>
                  <button className="btn btn-primary btn-sm" type="button">
                    SAVE
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-7">
            <div className="card">
              {" "}
              <div className="card-body">
                <span>
                  Please create relevant information before creating questions
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default TLAddB