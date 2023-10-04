import { Link } from "react-router-dom";
import { useDeleteBlogsMutation, useGetBlogsQuery } from "../all-products/allproductsApi/allProductsApi";
import { token } from "../../common/TokenArea";

function AllPost() {

  const { isLoading, data } = useGetBlogsQuery(token);

  const [deleteBlogs, response] = useDeleteBlogsMutation();

  const deleteBlogsData = (id) => {
    deleteBlogs(id)
  };

  if (response.isSuccess == true) {
    alert('Blog deleted Successfully')
  }

  return (
    <>
      <div className="aiz-main-content" style={{ backgroundColor: "#F2F3F8", marginTop: "0px" }}>
        <div className="px-15px px-lg-25px">
          <div className="aiz-titlebar text-left mt-2 mb-3">
            <div className="row align-items-center">
              <div className="col-auto">
                <h1 className="h3">All Posts</h1>
              </div>
              <div className="col text-right">
                <Link to="create" className="btn btn-circle btn-info">
                  <span>Add New Post</span>
                </Link>
              </div>
            </div>
          </div>
          <br />
          <div className="card">
            <form >
              <div className="card-header row gutters-5">
                <div className="col text-center text-md-left">
                  <h5 className="mb-md-0 h6">All blog posts</h5>
                </div>
                <div className="col-md-2">
                  <div className="form-group mb-0">
                    <input type="text" className="form-control form-control-sm" id="search" name="search" placeholder="Type & Enter" />
                  </div>
                </div>
              </div>
            </form>
            <div className="card-body">

              {isLoading ? <h2>Loading...</h2>
                : <table className="table aiz-table mb-0 footable footable-1 breakpoint breakpoint-lg" style={{}}>
                  <thead>
                    <tr className="footable-header">
                      <th className="footable-first-visible" style={{ display: 'table-cell' }}># </th>
                      <th style={{ display: 'table-cell' }}>Title</th>
                      <th style={{ display: 'table-cell' }}>Category</th>
                      <th style={{ display: 'table-cell' }}>Short Description</th>
                      <th style={{ display: 'table-cell' }}>Description</th>
                      <th data-breakpoints="sm" className="text-right footable-last-visible" style={{ display: 'table-cell' }}>Options</th>
                    </tr>
                  </thead>
                  <tbody>

                    {data && data.map((item, i) => {
                      return <tr key={item._id}>
                        <td className="footable-first-visible" style={{ display: 'table-cell' }} key={item._id}>{i + 1}</td>

                        <td style={{ display: 'table-cell' }}>{item.short_description}</td>

                        <td style={{ display: 'table-cell' }}>hello</td>
                        <td style={{ display: 'table-cell' }}>{item.short_description}</td>
                        <td style={{ display: 'table-cell' }}>{item.description && item.description}</td>

                        <td className="text-right footable-last-visible" style={{ display: 'table-cell' }}>
                          <Link to="#" className="btn btn-soft-success btn-icon btn-circle btn-sm">
                            <i className="las la-eye" />
                          </Link>
                          <Link to={`edit/${item._id}`} className="btn btn-soft-primary btn-icon btn-circle btn-sm">
                            <i className="las la-edit" />
                          </Link>
                          <button type="button" onClick={() => deleteBlogsData(item._id)} className="btn btn-soft-danger btn-icon btn-circle btn-sm">
                            <i className="las la-trash" />
                          </button>
                        </td>
                      </tr>
                    })}
                  </tbody>
                </table>
              }

              <div className="aiz-pagination">
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
export default AllPost;