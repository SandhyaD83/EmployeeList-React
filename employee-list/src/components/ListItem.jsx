import React from 'react'

import EmployeePage from './EmployeePage'
// import employees from '../models/employees'


function ListItem(props) {


    return (
        <div className="list"  >
            < div className="empImage" >
                <img src={props.empList2.img} alt="" className='image' />

            </div>
            <div className="empDetails" >
                <div className="name" >{props.empList2.name}</div>
                <div className="position">{props.empList2.position}</div>

            </div>
        </div>
    )



}


export default ListItem