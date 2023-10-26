import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import Modal from 'react-bootstrap/Modal';
import { useParams } from 'react-router-dom';
import { useEditSupportTicketMutation, useGetSupportTicketByIdQuery, useUpdateSupportTicketDetailMutation } from '../all-products/allproductsApi/allProductsApi';

function SupportTicketDetail() {
    const params = useParams();
    const [dataa, setDataa] = useState(null)
    const userId = window.localStorage.getItem('adminId')

    const [inputval, setInputval] = useState({
        user_id: userId,
        ticket_id: params.id,
        code: '',
        subject: '',
        // status: '',
        end_date: '',
        reply: "",
    });

    const token = window.localStorage.getItem('token')
    const { data, refetch } = useGetSupportTicketByIdQuery({ id: params.id, token: token });

    useEffect(() => {
        const obj = { ...data }
        setInputval({
            user_id: userId,
            ticket_id: params.id,
            code: obj.code,
            subject: obj.subject,
            end_date: '',
            reply: "",
            // status: obj.status,
        })
    }, [data]);

    const [updateReplySupportTicket, response] = useUpdateSupportTicketDetailMutation();

    const onChangeHandler = (e) => {
        const inpName = e.target.name;
        const inpval = e.target.value;
        const clonedObj = { ...inputval };
        clonedObj[inpName] = inpval;
        setInputval(clonedObj)
    };
    const submitEditSupportTicketData = (e) => {
        // console.log('inputval---', inputval)
        e.preventDefault();
        updateReplySupportTicket({ data: inputval, token: token })
        document.getElementById("create-course-form").reset();
    };

    const toastSuccessMessage = () => {
        toast.success("Successfull", {
            position: "top-center"
        })
    };

    useEffect(() => {
        if (response.isSuccess === true) {
            toastSuccessMessage()
            refetch()
        };
        if (response.isError === true) {
            alert('!Ticket not updated')
        };
    }, [response.isSuccess, response.isError])



    const getData = async () => {
        try {
            const res = await axios.get(`https://onlineparttimejobs.in/api/ticketList/ticket/${params.id}`)
            setDataa(res.data)
        } catch (error) {
            // alert('Faild To load Ticket Detail')
        }
    }
    useEffect(() => {
        // getData()
    }, []);


    console.log('dattaa---', dataa)

    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="col-lg-10 mx-auto">
                        <div className="card">
                            <div className="card-header row gutters-5">
                                <div className="text-center text-md-left">
                                    <h5 className="mb-md-0 h5">{data?.getaTicket?.subject}</h5>
                                    <div className="mt-2">
                                        <span> {data?.getaTicket?.user_id?.firstname + " " + data?.getaTicket?.user_id?.lastname} </span>
                                        <span className="ml-2">{data?.getaTicket?.createdAt} </span>
                                        <span className="badge badge-inline badge-secondary ml-2 text-capitalize">
                                            {data?.getaTicket?.status}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="card-body">
                                {/* <form id="ticket-reply-form" encType="multipart/form-data">
                                    <div className="form-group row">
                                        <div className="col-md-12">
                                            <input
                                                type="text"
                                                className="form-control mb-3"
                                                placeholder="Reply"
                                                name="reply"
                                                required
                                            />
                                        </div>

                                    </div>
                                    <div className="form-group mb-0 text-right">
                                        <button type="button" className="btn btn-sm btn-dark" onclick="" fdprocessedid="1dsypw">
                                            Submit
                                        </button>
                                        <button type="submit" className="btn btn-icon btn-sm btn-dark" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" fdprocessedid="s51xc"><i className="las la-angle-down" /></button>
                                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                            <a className="dropdown-item" href="#" onclick="">Submit as <strong>Open</strong></a>
                                            <a className="dropdown-item" href="#" onclick="">Submit as <strong>Solved</strong></a>
                                        </div>
                                    </div>
                                </form> */}


                                <form className="p-4" id="create-course-form" onSubmit={submitEditSupportTicketData}>
                                    <div className="form-group row">
                                        <label className="col-sm-3 col-from-label" htmlFor="currency name">Code<i className="las la-language text-danger" title="Translatable" />
                                        </label>
                                        <div className="col-sm-9">
                                            <input type="number" placeholder="code" id="code" name="code" className="form-control" required fdprocessedid="zp6g3o" value={inputval?.code} onChange={onChangeHandler} />
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label className="col-sm-3 col-from-label">Subject</label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control" name="subject" placeholder="subject" fdprocessedid="vrvrin" value={inputval?.subject} onChange={onChangeHandler} />
                                        </div>
                                    </div>

                                    {/* <div className="form-group row">
                                        <label className="col-sm-3 col-from-label">Status</label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control" name="status" placeholder="status" fdprocessedid="vrvrin" value={inputval?.status} onChange={onChangeHandler} />
                                        </div>
                                    </div> */}
                                    <div className="form-group row">
                                        <label className="col-sm-3 col-from-label">Reply</label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control" name="reply" placeholder="reply" fdprocessedid="vrvrin" value={inputval?.reply} onChange={onChangeHandler} />
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label className="col-sm-3 col-from-label">Sending Date</label>
                                        <div className="col-sm-9">
                                            <input type="date" className="form-control" name="end_date" placeholder="end date" fdprocessedid="vrvrin" value={inputval?.end_date} onChange={onChangeHandler} />
                                        </div>
                                    </div>

                                    <div className="form-group mb-0 text-right">
                                        <button type="submit" className="btn btn-primary">Save</button>
                                    </div>

                                </form>

                                <div className="pad-top">
                                    <ul className="list-group list-group-flush">
                                        {data?.ticketList?.length && data?.ticketList?.map((item) => {
                                            return <li className="list-group-item px-0">
                                                <div className="media">
                                                    <a className="media-left" href="#">
                                                        <span className="avatar avatar-sm mr-3"><img src="https://mmslfashions.in/public/assets/img/avatar-place.png" /></span>
                                                    </a>

                                                    <div className="media-body">
                                                        {item?.staff_id ?  <div>
                                                            <span className="text-bold h6">{item?.staff_id?.firstname + " " + item?.staff_id?.lastname}</span>
                                                            <p className="text-muted text-sm fs-11">{item?.createdAt}</p>
                                                        </div> : <div>
                                                            <span className="text-bold h6">{item?.user_id?.firstname + " " + item?.user_id?.lastname}</span>
                                                            <p className="text-muted text-sm fs-11">{item?.createdAt}</p>
                                                        </div>}
                                                    </div>
                                                </div>
                                                <div className>
                                                    <p>{item?.subject}.<br /></p>
                                                    <div className="mt-3">
                                                    </div>
                                                </div>
                                            </li>
                                        })}


                                    </ul>
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
export default SupportTicketDetail;