import { useEffect, useState } from "react";
import { useAddPickUpPointMutation, useGetAllStaffsQuery } from "../../../all-products/allproductsApi/allProductsApi";
import { toast, ToastContainer } from 'react-toastify';
import ToggleStatus from "../../../toggleStatus/ToggleStatus";

function AddnewPickupPoint() {
  const [lonLatObj, setLongLatObj] = useState({
    long: '',
    lat: ''
  });
  const token = window.localStorage.getItem('token')
  const { isLoading, data } = useGetAllStaffsQuery(token);

  const [inputVal, setInputVal] = useState({
    pickupPoint_name: '',
    address: '',
    location: {},
    province: '',
    phone: '',
    pickUpPointStatus: true,
    PickUpManagerSchema: '',
    email: ''
  });

  const changeStatus = (isStatus, key) => {
    const clonedInputVal = { ...inputVal }
    clonedInputVal[key] = isStatus;
    setInputVal(clonedInputVal)
  }

  const onChangeHandler = (e) => {
    const inpName = e.target.name;
    const inpVal = e.target.value;
    const clonedObj = { ...inputVal };
    clonedObj[inpName] = inpVal;
    setInputVal(clonedObj)
  };

  const onChangeHandlerLogLat = (e) => {
    const val = e.target.value;
    const name = e.target.name;
    const cloneLongLat = { ...lonLatObj };
    cloneLongLat[name] = val
    setLongLatObj(cloneLongLat)
  }

  const [addPickUpPointD, response] = useAddPickUpPointMutation();
  // const token = window.localStorage.getItem('token')

  const submitPickUpPointData = (e) => {
    e.preventDefault();
    const clone = { ...inputVal }
    clone.location = lonLatObj
    addPickUpPointD({ data: clone, token: token })
    // document.getElementById("create-course-form").reset();
  };


  const toastSuccessMessage = () => {
    toast.success("PickUpPoints added Successfully", {
      position: "top-center"
    })
  };

  useEffect(()=>{
    if (response.isSuccess === true) {
      toastSuccessMessage()
    };
  },[response])

  return (
    <>
      <div className="aiz-main-content">
        <div className="px-15px px-lg-25px">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="card">
                <div className="card-header">
                  <h5 className="mb-0 h6">Pickup Point Information</h5>
                </div>

                <form id="create-course-form" onSubmit={submitPickUpPointData}>
                  <input type="hidden" name="_token" defaultValue="mA5KQp7HZlXz1fB8P6Hv66tiXkkVBymNn0MEMOHZ" />
                  <div className="card-body">

                    <div className="form-group row row">
                      <label className="col-sm-3 col-from-label" htmlFor="name">Name</label>
                      <div className="col-sm-9">
                        <input type="text" placeholder="Name" id="name" name="pickupPoint_name" className="form-control" required onChange={onChangeHandler} />
                      </div>
                    </div>

                    <div className="form-group row row">
                      <label className="col-sm-3 col-from-label" htmlFor="address">Address</label>
                      <div className="col-sm-9">
                        <input type="text" placeholder="Adress" id="adress" name="address" className="form-control" required onChange={onChangeHandler} />
                      </div>
                    </div>

                    <div className="form-group row row">
                      <label className="col-sm-3 col-from-label" htmlFor="location">Location</label>
                      <div className="col-sm-9">
                        <textarea name="address" rows={8} className="form-control" required onChange={onChangeHandler} />
                      </div>
                    </div>

                    <div className="form-group row row">
                      <label className="col-sm-3 col-from-label" htmlFor="longitude">Longitude</label>
                      <div className="col-sm-9">
                        <input type="text" placeholder="Longitude" id="phone" name="long" className="form-control" required onChange={onChangeHandlerLogLat} />
                      </div>
                    </div>

                    <div className="form-group row row">
                      <label className="col-sm-3 col-from-label" htmlFor="latitude">Latitude</label>
                      <div className="col-sm-9">
                        <input type="text" placeholder="Latitude" id="phone" name="lat" className="form-control" required onChange={onChangeHandlerLogLat} />
                      </div>
                    </div>

                    <div className="form-group row row">
                      <label className="col-sm-3 col-from-label" htmlFor="province">Province</label>
                      <div className="col-sm-9">
                        <input type="text" placeholder="Province" id="phone" name="province" className="form-control" required onChange={onChangeHandler} />
                      </div>
                    </div>

                    <div className="form-group row row">
                      <label className="col-sm-3 col-from-label" htmlFor="phone">Phone</label>
                      <div className="col-sm-9">
                        <input type="text" placeholder="Phone" id="phone" name="phone" className="form-control" required onChange={onChangeHandler} />
                      </div>
                    </div>

                    <div className="form-group row row">
                      <label className="col-sm-3 col-from-label" htmlFor="email">Email</label>
                      <div className="col-sm-9">
                        <input type="email" placeholder="email" id="phone" name="email" className="form-control" required onChange={onChangeHandler} />
                      </div>
                    </div>

                    {/* <div className="form-group row row">
                      <label className="col-sm-3 col-from-label">Pickup Point Status</label>
                      <div className="col-sm-3">
                        <label className="aiz-switch aiz-switch-success mb-0" style={{ marginTop: 5 }}>
                          <input defaultValue={1} type="checkbox" name="pickUpPointStatus" onChange={onChangeHandler} />
                          <span className="slider round" />
                        </label>
                        <ToggleStatus name="pickUpPointStatus" isStatus={inputVal.pickUpPointStatus} changeStatus={changeStatus} />
                      </div>
                    </div> */}

                    <div className="form-group row row">
                      <label className="col-sm-3 col-from-label" htmlFor="name">Pick-up Point Manager</label>
                      <div className="col-sm-9">
                        <div >
                          <select className="form-select" name="PickUpManagerSchema" aria-label="Default select example" onChange={onChangeHandler}>
                            <option>Open this select</option>
                            {data && data.map((item) => {
                              return <option>{item.firstname} {item.lastname}</option>
                            })}

                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="form-group mb-0 text-right">
                      <button type="submit" className="btn btn-primary">Save</button>
                    </div>

                  </div>
                </form>
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
export default AddnewPickupPoint;