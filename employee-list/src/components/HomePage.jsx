import React from 'react'
import EmployeeList from './EmployeeList'
import Header from './Header'


function HomePage(props) {
    return (
        <div className='subContainer'>
            <Header txt="Employee Directory" />
            <div className="searchDiv">
                <input type="text" className="search" name="search" placeholder='Search...' />
            </div>
            <EmployeeList empList1={props.empList} />

        </div>
    )
}

export default HomePage