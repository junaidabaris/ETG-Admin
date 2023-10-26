import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';

import TextEditor from '../../common/TextEditor'
import { setDataDescription } from './textEditorSlice';

function ProductDescriptionWrapper({ item }) {
    const dispatch = useDispatch();
    const handleData = (htmlValue) => {
        dispatch(setDataDescription(htmlValue))
    }
    useEffect(() => {
        dispatch(setDataDescription(item?.productDescription))
    }, [item])
    return (
        <div className="row">
            <div className="card mt-2 rest-part physical_product_show">
                <div className="card-header">
                    <h4 className="mb-0">Product Description</h4>
                </div>
                <div className="col-lg-12" style={{ padding: 25 + 'px', margin: 5 + 'px' }}>
                    <TextEditor handleData={handleData} />
                </div>
            </div>
        </div>
    )
}

export default ProductDescriptionWrapper