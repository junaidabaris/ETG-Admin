import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function ListVoucherTypeComp() {
    const token = window.localStorage.getItem('adminToken');
    const [voucherTypeList, setVoucherTyoeList] = useState(null);
    const [loading, setLoading] = useState(true);

    const getVoucherTypeListData = async () => {
        const res = await axios.get('https://onlineparttimejobs.in/api/voucherType', {
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                Authorization: `Bearer ${token}`,
            },
        });
        setLoading(false)
        setVoucherTyoeList(res.data)
    };

    const deleteVoucherTypeData = async (id) => {
        try {
            const res = await axios.delete(`https://onlineparttimejobs.in/api/voucherType/delete_voucherType/${id}`, {
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    Authorization: `Bearer ${token}`,
                },
            });
            alert('Deleted')
            getVoucherTypeListData()
        } catch (error) {
            alert('Not deleted')
        }
    }

    useEffect(() => {
        getVoucherTypeListData()
    }, []);

    console.log('voucherTypeList---', voucherTypeList)

    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="card">
                        <form id="sort_support">
                            <div className="card-header row gutters-5">
                                <div className="col text-center text-md-left">
                                    <h5 className="mb-md-0 h6">Voucher Types</h5>
                                </div>
                                <div className="col-md-2">
                                    <div className="input-group input-group-sm">
                                        <input type="text" className="form-control" name="search" placeholder="Type & Enter" />
                                    </div>
                                </div>
                            </div>
                        </form>
                        <div className="card-body">

                            <table className="aiz-table footable footable-1 breakpoint-xl" cellSpacing={0} width="100%" style={{}}>
                                <thead>
                                    <tr className="footable-header">
                                        <th data-breakpoints="lg" className="footable-first-visible" style={{ display: 'table-cell' }}>Name</th>
                                        <th data-breakpoints="lg" style={{ display: 'table-cell' }}>Type of Voucher</th>
                                        <th data-breakpoints="lg" className="footable-first-visible" style={{ display: 'table-cell' }}>Abbreviation</th>
                                        <th data-breakpoints="lg" style={{ display: 'table-cell' }}>Method of Voucher Numbering</th>
                                        <th data-breakpoints="lg" style={{ display: 'table-cell' }}>Advance Configuration</th>
                                        <th className="text-right footable-last-visible" style={{ display: 'table-cell' }}>Options</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {loading ? <h3>Loading...</h3> : voucherTypeList && voucherTypeList.map((item, i) => {
                                        return <tr key={i}>
                                            <td className="footable-first-visible" style={{ display: 'table-cell' }}>{item?.name}</td>
                                            <td style={{ display: 'table-cell' }}>XYX</td>
                                            <td style={{ display: 'table-cell' }}>{item?.abbreviation}</td>
                                            <td style={{ display: 'table-cell' }}>{item?.methodOfNumber}</td>
                                            <td style={{ display: 'table-cell' }}>AXxbaa</td>
                                            <td className="text-right footable-last-visible" style={{ display: 'table-cell' }}>
                                                <Link to={`edit/${item?._id}`} className="btn btn-soft-primary btn-icon btn-circle btn-sm" title="Edit">
                                                    <i className="las la-edit" />
                                                </Link>
                                                {/* <Link to={`/${'1'}`} className="btn btn-soft-primary btn-icon btn-circle btn-sm" title="View Details">
                                                <i className="las la-eye" />
                                            </Link> */}
                                                <button type="button" onClick={() => deleteVoucherTypeData(item?._id)} className="btn btn-soft-danger btn-icon btn-circle btn-sm">
                                                    <i className="las la-trash" />
                                                </button>
                                            </td>
                                        </tr>
                                    })}

                                </tbody>
                            </table>

                            <div className="clearfix">
                                <div className="pull-right">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto">
                    {/*p class="mb-0">&copy;  v6.3.3</p*/}
                </div>
            </div>
        </>
    )
}

export default ListVoucherTypeComp