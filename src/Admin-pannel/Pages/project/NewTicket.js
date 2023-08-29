import React from "react";
import Select from "react-select";
import { useState } from "react";
import JoditEditor from "jodit-react";
import { useRef } from "react";

function NewTicket() {
    const editor = useRef(null);
  const [content, setContent] = useState("");
  const [value, setValue] = useState(null);
  const options = [
    { value: "", label: " " },
    { value: "Completed", label: "Completed" },
    // { value: "Fail to accomplised", label: "Fail to accomplised" },
    // { value: "JustDial", label: "JustDial" },
    // { value: "Personal", label: "Personal" },
    // { value: "Web", label: "Web" },
    // { value: "WhatsApp", label: "WhatsApp" },
  ];
  const options1 = [
    { value: "", label: " " },
    { value: "Gst Department", label: "Gst Department" },
    {
      value: "Electricity Work Department",
      label: "Electricity Work Department",
    },
    { value: "Certificates Department", label: "Certificates Department" },
    // { value: "Personal", label: "Personal" },
    // { value: "Web", label: "Web" },
    // { value: "WhatsApp", label: "WhatsApp" },
  ];
  const options2 = [
    { value: "None", label: "None" },
    { value: "Staff 1 Sikandrabad", label: "Staff 1 Sikandrabad" },
    { value: "Azharuddin Shamim", label: "Azharuddin Shamim" },
  ];

  const options3 = [
    { value: "Low", label: "Low" },
    { value: "Medium", label: "Medium" },
    { value: "High", label: "High" },
  ];
  const options4 = [
    { value: "", label: "" },
    { value: "Aadhar card", label: "Aadhar card" },
    { value: "Pen Card New", label: "Pen Card New" },
  ];
  const options5 = [
    { value: "", label: " " },
    { value: "", label: "" },
  ];
  const options6 = [
    { value: "", label: " " },
    { value: "Define Return Support", label: "Define Return Support" },
  ];
  return (
    <>
      <div className="container">
        <h3>Ticket Information</h3>
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-md-6">
                <div className="">
                  <label className="form-label">Subject</label>
                  <input className="form-control" type="text" />
                </div>
                <div className="">
                  <label className="form-label">Contact</label>
                  <Select options={options} defaultValue={value} />
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="mt-3">
                      <label className="form-label">Name</label>
                      <input className="form-control" type="text" disabled />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mt-3">
                      <label className="form-label">Email address</label>
                      <input className="form-control" type="email" disabled />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mt-3">
                      <label className="form-label">Department</label>
                      <Select options={options1} defaultValue={value} />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mt-3">
                      <label className="form-label">CC</label>
                      <input className="form-control" type="text" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Tags</label>
                  {/* <input className="form-control" type="text"/> */}
                </div>
                <div className="">
                  <label className="form-label">
                    Assign ticket (default is current user)
                  </label>
                  <Select options={options2} defaultValue={value} />
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="mt-3">
                      <label className="form-label">Priority</label>
                      <Select options={options3} defaultValue={value} />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mt-3">
                      <label className="form-label">Service</label>
                      <Select options={options4} defaultValue={value} />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mt-3">
                      <label className="form-label">Project</label>
                      <Select options={options4} defaultValue={value} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr className="border-1 border-secondary"/>
            <div className="row mt-3">
                <div className="row">
                    <div className="col-md-6">
                        <div className="">
                        <div className="">
                  <label className="form-label">Ticket Body</label>
                  <Select options={options5} defaultValue={value} />
                </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        
                        <div className="">
                  <label className="form-label"></label>
                  <Select options6={options5} defaultValue={value} />
                </div>
                        
                    </div>
                </div>
                <div className="row mt-3">
                <div className="editor">
                                <JoditEditor
                      ref={editor}
                      value={content}
                      onChange={(newContent) => setContent(newContent)}
                    />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-8">

                    </div>
                    <div className="col-md-4">
                    <div className="mt-3">
                  <label className="form-label">Attachments</label>
                 <input className="form-control" type="file"/>
                </div>
                        </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default NewTicket;
