//import logo from './logo.svg';
import './App.css';
// import MainContainer from './components/MainContainer';
import employees from './models/employees';
import EmployeePage from './components/EmployeePage';
import HomePage from './components/HomePage';

function App() {
  // const employeeList = employees.map((employee) => {
  //   return (
  //     <div className="App">

  //       <HomePage empList1={employee} />
  //       <EmployeePage empList1={employee} />


  //     </div>
  //   )
  // })
  return (
    <div className="App">
      <div className="mainContainer">
        <HomePage empList={employees} />
        <EmployeePage empList={employees} />
      </div>
    </div>

  );
}

export default App;
