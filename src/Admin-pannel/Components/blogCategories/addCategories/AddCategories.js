import { useEffect, useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import { useAddBlogCategoryMutation, useGetLanguagesQuery } from "../../all-products/allproductsApi/allProductsApi";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
function AddCategories() {

  const [inputval, setInputval] = useState({
    name: '',
  });

  const [AddBlogCat, response] = useAddBlogCategoryMutation();

  // const addBlogCategoryData = (e) => {
  //   e.preventDefault();
  //   AddBlogCat(inputval)
  //   console.log(inputval)
  //   document.getElementById("create-course-form").reset();
  // };

  const toastSuccessMessage = () => {
    toast.success("BlogsCategory added Successfully", {
      position: "top-center"
    })
  };
  const token = window.localStorage.getItem('token')

  useEffect(() => {
    if (response.isSuccess === true) {
      toastSuccessMessage()
    };
    if (response.isError === true) {
      alert('!Error BlogsCategory not added')
    };
  }, [response])
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const { data, refetch } = useGetLanguagesQuery(token);
  const [val, setVal] = useState(data)
  useEffect(() => {
    if (data) {
      const maped = data.map((item) => {
        return { name: "", language_id: item._id, approve: false, lable: item.name }
      })
      setVal(maped)
    }
  }, [data])

  const onChangeHandler = (e, id, bul) => {
    const maped = val.map((item) => {
      if (item.language_id == id) {
        const obj = { ...item, [e.target.name]: e.target.value }
        return obj
      } else {
        return item
      }
    })
    setVal(maped);
  }
  const addNewAttributeData = (e) => {
    e.preventDefault();
    AddBlogCat({ data: { list: val }, token: token })

  };

  return (
    <>
      <div className="aiz-main-content">
        <div className="px-15px px-lg-25px">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="card">
                <div className="card-header">
                  <h5 className="mb-0 h6">Blog Category Information</h5>
                </div>
                <div className="card-body">



                  <Box sx={{ width: '100%', typography: 'body1' }}>
                    <TabContext value={value}>
                      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                          {data && data.map((item, i) => {
                            return <Tab label={item?.name} value={i} />
                          })}

                        </TabList>
                      </Box>
                      {val && val.map((item, i) => {
                        return <TabPanel value={i}>
                          <form className="form-horizontal" id="create-course-form">
                            <input type="hidden" name="_token" defaultValue="rRBTDvBDDxDPFQUsYxC4w0Y2kUjP3Ojr7STfSH1l" />
                            <div className="form-group row">
                              <label className="col-md-3 col-form-label">Name</label>
                              <div className="col-md-9">
                                <input type="text" placeholder="Name" id="category_name" name="name" className="form-control" value={item?.name} required onChange={(e) => { onChangeHandler(e, item.language_id) }} />
                              </div>
                            </div>
                            {data.length == i + 1 ? <div className="form-group mb-3 text-right">
                              <button type="submit" className="btn btn-primary" fdprocessedid="uzw7ye" onClick={addNewAttributeData}>Save</button>
                            </div>
                              :
                              <div className="form-group mb-3 text-right">
                                {i !== 0 && <button type="submit" className="btn btn-primary" fdprocessedid="uzw7ye" onClick={() => { setValue(i - 1) }}>Prev</button>}
                                <button type="submit" className="btn btn-primary" fdprocessedid="uzw7ye" onClick={() => { setValue(i + 1) }}>Next</button>
                              </div>
                            }
                          </form>
                        </TabPanel>
                      })}

                    </TabContext>
                  </Box>




                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto">
          {/*p class="mb-0">&copy;  v6.3.3</p*/}
        </div>
        <ToastContainer />
      </div>

    </>
  )
}
export default AddCategories;