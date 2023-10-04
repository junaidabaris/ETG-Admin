import React from "react";
function Chats(){
    return(
        <>
        <div className="container">
            <div className="row mt-3">
                <div className="col-6">
                    <button className="btn btn-primary">
                        Send Messages
                    </button>
                    <button className="btn btn-primary ml-3">
                        Log Note
                    </button>
                    <button className="btn btn-primary ml-3">
                        Activities
                    </button>
                </div>
                <div className="col-6 text-right">
                    <button className="btn btn-text-only">
                        Follow
                    </button>
                </div>

            </div>
        </div>
        </>
    )
}
export default Chats