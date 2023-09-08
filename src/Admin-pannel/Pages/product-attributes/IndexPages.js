import axios from "axios"
import AddProductAttributes from "./AddProductAttributes"
import ListinSide from "./ListinSide"
import { useEffect, useState } from "react"

function IndexPages() {
    const [data, setData] = useState()
    const token = window.localStorage.getItem('token')
    const getDatas = async () => {
        const res = await axios.get('https://onlineparttimejobs.in/api/attributeSetMaster', {
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                Authorization: `Bearer ${token}`,
            },
        })
        setData(res.data)
    }

    useEffect(() => {
        getDatas()
    }, [])


    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="aiz-titlebar text-left mt-2 mb-3">
                        <div className="align-items-center">
                            <h1 className="h3">All Product Attributes</h1>
                        </div>
                    </div>
                    <div className="row">
                        <ListinSide data={data} getDatas={getDatas} />
                        <AddProductAttributes getDatas={getDatas} />
                    </div>
                </div>
                <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto">
                </div>
            </div>

        </>
    )
}
export default IndexPages