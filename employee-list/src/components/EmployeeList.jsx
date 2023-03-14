import React from 'react'


import ListItem from './ListItem'


function EmployeeList(props) {
    return (
        <div className="employeeList">
            <ListItem empList2={props.empList1.worker1} />
            <ListItem empList2={props.empList1.worker2} />
            <ListItem empList2={props.empList1.worker3} />
            <ListItem empList2={props.empList1.worker4} />
            <ListItem empList2={props.empList1.worker5} />
            <ListItem empList2={props.empList1.worker6} />

        </div>
    )
}

export default EmployeeList