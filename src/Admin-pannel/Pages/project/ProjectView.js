import React from "react";
import { useState } from "react";
import { GrOverview } from 'react-icons/gr'
import { MdOutlineTaskAlt } from 'react-icons/md'
import { BiTimeFive } from 'react-icons/bi'
import { IoIosJet } from 'react-icons/io'
import { AiFillFile } from 'react-icons/ai'
import { BiComment } from 'react-icons/bi'
// import { FaChartGantt } from 'react-icons/fa'
import { BsTicketPerforated } from 'react-icons/bs'
import { FaFileContract } from 'react-icons/fa'
// import { IoNewspaperOutline } from 'react-icons/io'
// import { FaNoteSticky } from 'react-icons/fa'
import { AiOutlineFile } from 'react-icons/ai'

import "./Table.css";
import Overview from "./Overview";
import Task from "./Task";
import Timesheets from "./Timesheet";
import Milestone from "./Milestone";
import File from "./File";
import Discussion from "./Discussion";
import Gantt from "./Gantt";
import Ticket from "./Ticket";
import Contracts from "./Contracts";
import Sales from "./Sales";
import Notes from "./Notes";
import Activity from "./Activity";
function ProjectView(){
    const [value, onChange] = useState();
    const [toggle, setToggle] = useState(1);
    const [content, setContent] = useState("");
    const now = 60;
    function updateToggle(id) {
        setToggle(id);
      }
    return(
        <>
        <div className="conatiner">
            <div className="row">
                <div className="col-md-6">

                </div>
                <div className="col-md-6 text-end">
                    <button className="btn btn-primary mr-2">
                        + New Task
                    </button>
                    <button className="btn btn-primary">
                        Invoice Project
                    </button>
                    <button className="btn btn-outline-text-only ml-2">
                        More
                    </button>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                <div className="row">
                <div className="col-md-12">
                  <div className="">
                    <div className=" tab p-2">
                      <ul className="">
                        <li
                          className="flex-fil "
                          onClick={() => updateToggle(1)}
                        >
                          <GrOverview/> Overview
                        </li>

                        <li
                          className="flex-fil "
                          onClick={() => updateToggle(2)}
                        >
                           <MdOutlineTaskAlt/> Task
                        </li>

                        <li
                          className="flex-fil "
                          onClick={() => updateToggle(3)}
                        >
                          <BiTimeFive/> Timesheets
                        </li>

                        <li
                          className="flex-fil "
                          onClick={() => updateToggle(4)}
                        >
                          <IoIosJet/> Milestones
                        </li>

                        <li
                          className="flex-fil "
                          onClick={() => updateToggle(5)}
                        >
                          <AiFillFile/> Files
                        </li>

                        <li
                          className="flex-fil "
                          onClick={() => updateToggle(6)}
                        >
                          <BiComment/>Discussions
                          
                        </li>

                        <li
                          className="flex-fil "
                          onClick={() => updateToggle(7)}
                        >
                           Gantt
                        </li>
                        <li
                          className="flex-fil "
                          onClick={() => updateToggle(8)}
                        >
                          <BsTicketPerforated/> Tickets
                        </li>
                        <li
                          className="flex-fil "
                          onClick={() => updateToggle(9)}
                        >
                          <FaFileContract/> Contracts
                        </li>
                        <li
                          className="flex-fil "
                          onClick={() => updateToggle(10)}
                        >
                           Sales
                        </li>
                        <li
                          className="flex-fil "
                          onClick={() => updateToggle(11)}
                        >
                           Notes
                        </li>
                        <li
                          className="flex-fil "
                          onClick={() => updateToggle(12)}
                        >
                          <AiOutlineFile/> Activity
                        </li>
                      </ul>
                      <div
                        className={toggle === 1 ? "show-content" : "content"}
                      >
                        <Overview/>
                      </div>

                      <div
                        className={toggle === 2 ? "show-content" : "content"}
                      >
                       <Task/>
                      </div>
                      <div
                        className={toggle === 3 ? "show-content" : "content"}
                      >
                        <Timesheets/>
                      </div>
                      <div
                        className={toggle === 4 ? "show-content" : "content"}
                      >
                        <Milestone/>
                      </div>
                      <div
                        className={toggle === 5 ? "show-content" : "content"}
                      >
                        <File/>
                      </div>
                      <div
                        className={toggle === 6 ? "show-content" : "content"}
                      >
                        <Discussion/>
                      </div>
                      <div
                        className={toggle === 7 ? "show-content" : "content"}
                      >
                        <Gantt/>
                      </div>
                      <div
                        className={toggle === 8 ? "show-content" : "content"}
                      >
                        <Ticket/>
                      </div>
                      <div
                        className={toggle === 9 ? "show-content" : "content"}
                      >
                        <Contracts/>
                      </div>
                      <div
                        className={toggle === 10 ? "show-content" : "content"}
                      >
                        <Sales/>
                      </div>
                      <div
                        className={toggle === 11 ? "show-content" : "content"}
                      >
                        <Notes/>
                      </div>
                      <div
                        className={toggle === 12 ? "show-content" : "content"}
                      >
                        <Activity/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default ProjectView