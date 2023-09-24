import React from 'react'
import { Outlet } from "react-router-dom"
import ViewRecords from '../ViewHrRecords/View'

function NestedView() {
    return (
        <div className='container'>
            <div className="row">
                <ViewRecords />
                <Outlet></Outlet>
            </div>
        </div>
    )
}

export default NestedView
