import Form from 'react-bootstrap/Form';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useGetCategoriesQuery } from '../../all-products/allproductsApi/allProductsApi';
import axios from 'axios';
function EditCategories() {
  const [inputval, setInputVal] = useState({
    name: "",
    parent_category: "",
    ordering_number: "",
    type: "",
    image: "",
    image1: "",
    meta_title: "",
    meta_description: "",
    commision_rate: "",
    filtering_attribute: "",
    order_level: "",
  });

  const onChangeHandler = (e) => {
    const inpName = e.target.name;
    const inpVal = e.target.value;
    const clonedObj = { ...inputval }
    clonedObj[inpName] = inpVal
    setInputVal(clonedObj)
  };


  const onchengePhotoHandel = (e) => {
    const clonedObj = { ...inputval };
    const inpName = e.target.name;
    const inpVal = e.target.files[0];
    clonedObj[inpName] = inpVal;
    setInputVal(clonedObj)
  }

  const token = window.localStorage.getItem('token')
  const submitEditCategoryData = async () => {

    const url = `https://onlineparttimejobs.in/api/category/${params.id}`
    const formData = new FormData();

    formData.append('name', inputval.name);
    // formData.append('image1', inputval.image1);
    formData.append('image', inputval.image);
    formData.append('meta_title', inputval.meta_title);
    formData.append('meta_description', inputval.meta_description);
    formData.append('parent_category', inputval.parent_category);
    formData.append('commision_rate', inputval.commision_rate);
    formData.append('order_level', inputval.order_level);

    try {
      const res = await axios.put(url, formData,{
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
          'Authorization': 'Bearer ' + token
        }
      });
      alert('Edit Catagary Successfully')
    } catch (error) {
      alert('Catagary not Edit')
    }

    // document.getElementById("create-course-form").reset();
  }

  const params = useParams()
  // const token = window.localStorage.getItem('token')
  const { data } = useGetCategoriesQuery(token);
  
  const getDetailCat = async () => {
    try {
      const res = await axios.get(`https://onlineparttimejobs.in/api/category/${params.id}`)
      setInputVal({
        name: res?.data?.name,
        parent_category: "",
        ordering_number: "",
        type: "",
        image: "",
        image1: "",
        meta_title: res?.data?.meta_title,
        meta_description: res?.data?.meta_description,
        commision_rate: res?.data?.commision_rate,
        order_level: res?.data?.order_level,
        filtering_attribute: "",
      })
    } catch (error) {
      alert('Server Error !')
    }
  }


  useEffect(() => {
    if (params.id) {
      getDetailCat()
    }
  }, [params.id])

  return (
    <>
      <div className="aiz-main-content">
        <div className="px-15px px-lg-25px">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="card">
                <div className="card-header">
                  <h5 className="mb-0 h6">Category Information</h5>
                </div>
                <div className="card-body">

                  <form className="form-horizontal" id="create-course-form">
                    <input type="hidden" name="_token" defaultValue="JX7Efxc0fWnjgSTDtnGEP5Yd23Vk7icCfLqqxizf" />

                    <div className="form-group row">
                      <label className="col-md-3 col-form-label">Name</label>
                      <div className="col-md-9">
                        <input type="text" placeholder={'name'} value={inputval?.name} id="name" name="name" className="form-control" required onChange={onChangeHandler} />
                      </div>
                    </div>

                    <div className="form-group row">
                      <label className="col-md-3 col-form-label">Parent Category</label>
                      <div className="col-md-9">
                      <select className="form-select" name='parent_id' onChange={onChangeHandler} required>
                          <option>Select Parent Catagary</option>
                          <option value='null'>Null</option>
                          {data && data.map((item, i) => {
                            return <option key={item._id} value={item._id}>{item.name}</option>
                          })}
                        </select>
                      </div>
                    </div>


                    <div className="form-group row">
                      <label className="col-md-3 col-form-label">
                        Ordering Number
                      </label>
                      <div className="col-md-9">
                        <input type="number" name="order_level" value={inputval?.order_level} className="form-control" id="order_level" placeholder="Order Level" onChange={onChangeHandler} />
                        <small>Higher number has high priority</small>
                      </div>
                    </div>

                    <div className="form-group row">
                      <label className="col-md-3 col-form-label">Type</label>
                      <div className="col-md-9">
                        <Form.Select aria-label="Default select example" className='form-control' name='type' onChange={onChangeHandler}>
                          <option value={0}>Physical</option>
                          <option value={1}>Digital</option>
                        </Form.Select>
                      </div>
                    </div>

                    <div className="form-group row">
                      <label className="col-md-3 col-form-label" htmlFor="signinSrEmail">image <small>(200x200)</small></label>
                      <div className="col-md-9">
                        <div className="input-group" data-type="image">
                          <div className="input-group-prepend">
                            <div className="input-group-text bg-soft-secondary font-weight-medium">Browse</div>
                          </div>
                          <div className="form-control file-amount">
                            <input type="file" name="image" className="selected-files" onChange={onchengePhotoHandel} />
                          </div>
                        </div>
                        <div className="file-preview box sm">
                        </div>
                      </div>
                    </div>

                    <div className="form-group row">
                      <label className="col-md-3 col-form-label" htmlFor="signinSrEmail">Icon <small>(32x32)</small></label>
                      <div className="col-md-9">
                        <div className="input-group" data-toggle="aizuploader" data-type="image">
                          <div className="input-group-prepend">
                            <div className="input-group-text bg-soft-secondary font-weight-medium">Browse</div>
                          </div>
                          <div className="form-control file-amount">
                            <input type="file" name="image1" className="selected-files" onChange={onchengePhotoHandel} />
                          </div>
                        </div>
                        <div className="file-preview box sm">
                        </div>
                      </div>
                    </div>

                    <div className="form-group row">
                      <label className="col-md-3 col-form-label">Meta Title</label>
                      <div className="col-md-9">
                        <input type="text" className="form-control" value={inputval?.meta_title} name="meta_title" placeholder="Meta Title" onChange={onChangeHandler} />
                      </div>
                    </div>

                    <div className="form-group row">
                      <label className="col-md-3 col-form-label">Meta description</label>
                      <div className="col-md-9">
                        <textarea name="meta_description" rows={5} className="form-control" value={inputval?.meta_description} onChange={onChangeHandler} />
                      </div>
                    </div>

                    <div className="form-group row">
                      <label className="col-md-3 col-form-label">Commission Rate</label>
                      <div className="col-md-9 input-group">
                        <input type="number" lang="en" min={0} step="0.01" placeholder="Commission Rate" value={inputval?.commision_rate} id="commision_rate" name="commision_rate" className="form-control" onChange={onChangeHandler} />
                        <div className="input-group-append">
                          <span className="input-group-text">%</span>
                        </div>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-md-3 col-form-label">Filtering Attributes</label>
                      <div className="col-md-9">

                        <Form.Select aria-label="Default select example" className='form-control' name='filtering_attribute' onChange={onChangeHandler}>
                          <option>Fertilizer</option>
                          <option value="1">-- Straight Fertilizer</option>
                          <option value="2">Specialty Fertilizer</option>
                          <option value="3">-- Foliar Fertilizer</option>
                          <option value="4">-- Water Soluble Fertilizer</option>
                          <option value="5">-- Blended Fartilizer</option>
                          <option value="6">-- Enhanced Granular Blends</option>
                        </Form.Select>
                      </div>
                    </div>

                    <div className="form-group mb-0 text-right">
                      <button type="button" onClick={submitEditCategoryData} className="btn btn-primary">Save</button>
                    </div>

                  </form>
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
export default EditCategories