import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import { useAddStaffMutation, useGetRolesQuery, useGetTicketareaDQuery, useGetTicketBlockDQuery, useGetTicketBuildingDQuery, useGetTicketFloorDQuery, useGetTicketOfficeRoomDQuery, useGetTicketWardDQuery } from "../../all-products/allproductsApi/allProductsApi";

function StaffInformation() {

  const [inputVal, setInputVal] = useState({
    firstname: '',
    lastname: '',
    email: '',
    mobile: '',
    password: '',
    role_id: '63fb963aba4c5193700943b0',
    building_id: '',
    block_id: '',
    floor_id: "",
    ward_id: "",
    officeRoom_id: "",
    area_id: '',

  });
  const params = useParams();

  const { data: buildingD } = useGetTicketBuildingDQuery();
  const { data: blockD } = useGetTicketBlockDQuery();
  const { data: floorD } = useGetTicketFloorDQuery();
  const { data: wardD } = useGetTicketWardDQuery();
  const { data: roomD } = useGetTicketOfficeRoomDQuery();
  const { data: areaD } = useGetTicketareaDQuery();

  const onChangeHandler = (e) => {
    const inpName = e.target.name;
    const inpVal = e.target.value;
    const clonedObj = { ...inputVal };
    clonedObj[inpName] = inpVal;
    setInputVal(clonedObj)
  };


  const { data } = useGetRolesQuery(params.id);

  const [addAllStaffsD, response] = useAddStaffMutation();


  const token = window.localStorage.getItem('token')
  const submitStaffData = (e) => {
    e.preventDefault();
    const clone = { ...inputVal }
    addAllStaffsD({ data: clone, token: token })
    // document.getElementById("create-course-form").reset();
  };


  const toastSuccessMessage = () => {
    toast.success("Staff added Successfully", {
      position: "top-center"
    })
  };

  useEffect(() => {
    if (response.isSuccess === true) {
      toastSuccessMessage()
    };
    if (response.isError === true) {
      alert('Staff Not aad')
    };
  }, [response])

  return (
    <>
      <div className="aiz-main-content">
        <div className="px-15px px-lg-25px">
          <div className="row">
            <div className="col-lg-6 mx-auto">
              <div className="card">
                <div className="card-header">
                  <h5 className="mb-0 h6">Staff Information</h5>
                </div>
                <form className="form-horizontal" id="create-course-form" onSubmit={submitStaffData}>
                  <input type="hidden" name="_token" defaultValue="S0f7vDDtqJ5NbxPupX86gbiFGZumqx0Q8PyryILc" />
                  <div className="card-body">

                    <div className="form-group row">
                      <label className="col-sm-3 col-from-label" htmlFor="first name">First Name</label>
                      <div className="col-sm-9">
                        <input type="text" placeholder="First Name" name="firstname" className="form-control" required onChange={onChangeHandler} />
                      </div>
                    </div>

                    <div className="form-group row">
                      <label className="col-sm-3 col-from-label" htmlFor="last name">Last Name</label>
                      <div className="col-sm-9">
                        <input type="text" placeholder="Last Name" name="lastname" className="form-control" required onChange={onChangeHandler} />
                      </div>
                    </div>

                    <div className="form-group row">
                      <label className="col-sm-3 col-from-label" htmlFor="email">Email</label>
                      <div className="col-sm-9">
                        <input type="email" placeholder="abc@gmail.com" autoComplete="off" name="email" className="form-control" required onChange={onChangeHandler} />
                      </div>
                    </div>

                    <div className="form-group row">
                      <label className="col-sm-3 col-from-label" htmlFor="mobile">Phone</label>
                      <div className="col-sm-9">
                        <input type="text" placeholder="Phone" name="mobile" className="form-control" required onChange={onChangeHandler} />
                      </div>
                    </div>

                    <div className="form-group row">
                      <label className="col-sm-3 col-from-label" htmlFor="password">Password</label>
                      <div className="col-sm-9">
                        <input type="password" placeholder="Password" name="password" className="form-control" required onChange={onChangeHandler} />
                      </div>
                    </div>

                    <div className="form-group row">
                      <label className="col-sm-3 col-from-label" htmlFor="name">Role</label>
                      <div className="col-sm-9">
                        <div >
                          <select className="form-select" name="role_id" aria-label="Default select example" onChange={onChangeHandler}>
                            {data && data.map((item, i) => {
                              return <option value={item._id} key={item._id}>{item.name || item.role_name}</option>
                            })}
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="form-group row">
                      <label className="col-sm-3 col-from-label">Building</label>
                      <div className="col-sm-9">
                        <select className="form-select" value={inputVal?.building_id} name='building_id' aria-label="Default select example" onChange={onChangeHandler}>
                          {buildingD && buildingD.map((item, i) => {
                            return <option value={item._id} key={i}>{item.name}</option>
                          })}

                        </select>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-sm-3 col-from-label">Block</label>
                      <div className="col-sm-9">
                        <select className="form-select" name='block_id' value={inputVal?.block_id} aria-label="Default select example" onChange={onChangeHandler}>
                          {blockD && blockD.map((item, i) => {
                            return <option value={item._id} key={i}>{item.name}</option>
                          })}

                        </select>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-sm-3 col-from-label">Office Room</label>
                      <div className="col-sm-9">
                        <select className="form-select" value={inputVal?.officeRoom_id} name='officeRoom_id' aria-label="Default select example" onChange={onChangeHandler}>
                          {roomD && roomD.map((item, i) => {
                            return <option value={item._id} key={i}>{item.name}</option>
                          })}
                        </select>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-sm-3 col-from-label">Ward</label>
                      <div className="col-sm-9">
                        <select className="form-select" value={inputVal?.ward_id} name='ward_id' aria-label="Default select example" onChange={onChangeHandler}>
                          {wardD && wardD.map((item, i) => {
                            return <option value={item._id} key={i}>{item.name}</option>
                          })}
                        </select>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-sm-3 col-from-label">Area</label>
                      <div className="col-sm-9">
                        <select className="form-select" value={inputVal?.area_id} name='area_id' aria-label="Default select example" onChange={onChangeHandler}>
                          {areaD && areaD.map((item, i) => {
                            return <option value={item._id} key={i}>{item.name}</option>
                          })}
                        </select>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-sm-3 col-from-label">Floor</label>
                      <div className="col-sm-9">
                        <select className="form-select" value={inputVal?.floor_id} name='floor_id' aria-label="Default select example" onChange={onChangeHandler}>
                          {floorD && floorD.map((item, i) => {
                            return <option value={item._id} key={i}>{item.name}</option>
                          })}
                        </select>
                      </div>
                    </div>

                    <div className="form-group mb-0 text-right">
                      <button type="submit" className="btn btn-sm btn-primary">Save</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto"></div>
        <ToastContainer />
      </div>

    </>
  )
}
export default StaffInformation;