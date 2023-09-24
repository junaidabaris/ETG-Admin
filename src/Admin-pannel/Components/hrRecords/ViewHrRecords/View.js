import React from 'react'
import { IoMdContact } from 'react-icons/io'
import { AiFillFile } from 'react-icons/ai'
import { TbUsersGroup } from 'react-icons/tb'
import { FaGraduationCap } from 'react-icons/fa'
import { AiOutlineBars } from 'react-icons/ai'
import { BiLink } from 'react-icons/bi'
import { GrTasks } from 'react-icons/gr'
import { FaBath } from 'react-icons/fa'

function ViewRecords() {
    return (
        <>
            <div className='col-md-3'>
                <div className='bg-white'>
                    <h5 className='text-center p-3'>سوداني احمد - EC00091</h5>
                </div>
                <ul className='list-group'>
                    <li className="list-group-item fs-6"><IoMdContact className='fs-5 mr-1' />Staff Profile </li>
                    <li className="list-group-item fs-6"><AiFillFile className='fs-5 mr-1' />Contract</li>
                    <li className="list-group-item fs-6"><TbUsersGroup className='fs-5 mr-1' />Dependent Person</li>
                    <li className="list-group-item fs-6"><FaGraduationCap className='fs-5 mr-1' />Training</li>
                    <li className="list-group-item fs-6"><AiOutlineBars className='fs-5 mr-1' />Project </li>
                    <li className="list-group-item fs-6"><BiLink className='fs-5 mr-1' />Attach</li>
                    <li className="list-group-item fs-6"><GrTasks className='fs-5 mr-1' />Payslips</li>
                    <li className="list-group-item fs-6"><FaBath className='fs-5 mr-1' />Asset</li>
                </ul>
            </div>

        </>
    )
}

export default ViewRecords