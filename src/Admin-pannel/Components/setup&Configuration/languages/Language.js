import { Link } from "react-router-dom";
import { useDeleteLanguageMutation, useGetLanguagesQuery } from "../../all-products/allproductsApi/allProductsApi";
import { token } from "../../../common/TokenArea";

function Language() {

    const { data ,refetch } = useGetLanguagesQuery(token);

    const [deleteLang, response] = useDeleteLanguageMutation();

    const deleteLanguageData = (id) => {
        deleteLang({id,token})
        refetch()
    };

    if (response.isSuccess === true) {
        alert('Language deleted successfully')
    }

    return (
        <>
            <div className="card">
                <div className="card-header">
                    <h5 className="mb-0 h6">Language</h5>
                </div>
                <div className="card-body">
                    <table className="table aiz-table mb-0 footable footable-1 breakpoint-xl" style={{}}>
                        <thead>
                            <tr className="footable-header">
                                <th data-breakpoints="lg" className="footable-first-visible" style={{ display: 'table-cell' }}>#</th>
                                <th style={{ display: 'table-cell' }}>Name</th>
                                <th data-breakpoints="lg" style={{ display: 'table-cell' }}>Code</th>
                                <th data-breakpoints="lg" style={{ display: 'table-cell' }}>Flutter App Lang Code</th>
                                <th data-breakpoints="lg" style={{ display: 'table-cell' }}>RTL</th>
                                <th style={{ display: 'table-cell' }}>Status</th>
                                <th className="text-right footable-last-visible" width="15%" style={{ display: 'table-cell' }}>Options</th>
                            </tr>
                        </thead>
                        <tbody>

                            {data && data.map((item, i) => {
                                return <tr key={i}>
                                    <td className="footable-first-visible" style={{ display: 'table-cell' }}>{i + 1}</td>
                                    <td style={{ display: 'table-cell' }}>{item.name}</td>
                                    <td style={{ display: 'table-cell' }}>{item.code}</td>
                                    <td style={{ display: 'table-cell' }}>{item.app_lang_code}</td>
                                    <td style={{ display: 'table-cell' }}><label className="aiz-switch aiz-switch-success mb-0">
                                        <input defaultValue={1} type="checkbox" />
                                        <span className="slider round" /></label>
                                    </td>
                                    <td style={{ display: 'table-cell' }}><label className="aiz-switch aiz-switch-success mb-0">
                                        <input defaultValue={1} type="checkbox" defaultChecked />
                                        <span className="slider round" /></label>
                                    </td>

                                    <td className="text-right footable-last-visible" style={{ display: 'table-cell' }}>
                                        {/* <Link to="/admin/languages/translation" className="btn btn-soft-info btn-icon btn-circle btn-sm" title="Translation">
                                            <i className="las la-language" />
                                        </Link> */}

                                        {/* <Link to="/admin/languages/app-translation" className="btn btn-soft-warning btn-icon btn-circle btn-sm" title="App Translation">
                                            <i className="las la-language" />
                                        </Link> */}

                                        {/* <Link to="https://mmslfashions.in/admin/languages/app-translations/export/1" className="btn btn-soft-success btn-icon btn-circle btn-sm" title="arb File Export" download>
                                    <i className="las la-download" />
                                </Link> */}

                                        <Link to={`edit/${item._id}`} className="btn btn-soft-primary btn-icon btn-circle btn-sm" title="Edit">
                                            <i className="las la-edit" />
                                        </Link>
                                        <button type="button" onClick={() => deleteLanguageData(item._id)} className="btn btn-soft-danger btn-icon btn-circle btn-sm">
                                            <i className="las la-trash" />
                                        </button>
                                    </td>

                                </tr>
                            })}

                        </tbody>
                    </table>
                    <div className="aiz-pagination">
                    </div>
                </div>
            </div>
        </>
    )
}
export default Language;