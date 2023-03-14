import React from 'react'
import EmployeePage from './EmployeePage'
import HomePage from './HomePage'


function MainContainer(props) {
    return (
        <div className="mainContainer">
            <HomePage empList1={props.empList} />
            <EmployeePage empList1={props.empList} />
        </div>
    )
}

export default MainContainer