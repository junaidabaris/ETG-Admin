import React from "react";
import JoditEditor from "jodit-react";
import { useState } from "react";
import { useRef } from "react";
function Notes(){
    const editor = useRef(null);
    const [content, setContent] = useState("");
    return(
       
        <>
        <div className="container">
            <div className="card">
                <h4>Personal notes</h4>
                <div className="row p-3">
                <div className="editor">
                                <JoditEditor
                      ref={editor}
                      value={content}
                      onChange={(newContent) => setContent(newContent)}
                    />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Notes