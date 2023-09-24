import React from "react";
import JoditEditor from "jodit-react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaShirtsinbulk } from "react-icons/fa";
import TableHead from "../tableHeader/TableHead";
function ViewRouting(){
    const editor = useRef(null);
    const [content, setContent] = useState("");
    return(
        <>
        <div className="container">
            <div className="row">
                <div className="col-6">
                   
                        
                        
                    
                    <div className="card p-3">
                    <div className="col-6">ENR00003</div>
                    <div className="row">
                        <div className="col-4">
                            <div className="">
                                <label className="form-label">
                                Routing code
                                </label>
                                <input className="form-control" type="text"/>
                            </div>
                        </div>
                        <div className="col-8">
                            <div className="">
                                <label className="form-label">
                                Routing name
                                </label>
                                <input className="form-control" type="text"/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label className="form-label">
                            Notes
                            </label>
                            <JoditEditor
                      ref={editor}
                      value={content}
                      onChange={(newContent) => setContent(newContent)}
                    />
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-6">
                
                <div className="card p-3">
                <div className="col"><FaShirtsinbulk/> Operations</div>
                <div className="row mt-3">
                    <div className="col-4">
                        <button className="btn btn-primary">
                            Add Operation   
                        </button>
                    </div>
                </div>
                <div className="">
                    <TableHead/>
                </div>
                <div className="row p-2">
                    <table className="tabel">
                        <thead className="table-secondary">
                            <tr>
                                <th>Order</th>
                                <th>Operation</th>
                                <th>Work Center name</th>
                                <th>Duration(Minutes)</th>
                            </tr>
                        </thead>
                        <tbody>
                            No entries Found
                        </tbody>
                    </table>
                </div>

                </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default ViewRouting