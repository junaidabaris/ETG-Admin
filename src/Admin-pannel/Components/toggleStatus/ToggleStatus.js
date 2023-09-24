import React, { useEffect, useState } from 'react'

function ToggleStatus({ isStatus, name, onChangeHandler ,item }) {
    const [status, setStatus] = useState(isStatus);
    const handleChange = (e) => {
        setStatus(!status);
        onChangeHandler(e, item.language_id) 
        // changeStatus(!status, name);
    }
    useEffect(()=> {
        if(isStatus) {
            setStatus(isStatus)
        }
    }, [isStatus])

    return (
        <label className="aiz-switch aiz-switch-success mb-0">
            <input type="checkbox" name={name} value={isStatus} onChange={handleChange}  checked={isStatus} />
            <span />
        </label>
    )
}

export default ToggleStatus