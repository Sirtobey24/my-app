import React from "react";
import data from "./Employee-date.json";
import { useState } from 'react';

function EmployeeTable() {

    const [employees, setEmployees] = useState(data);
    const [addEmployeeData, setEmployeeData] = useState({
        Id: NaN,
        FirstName: "",
        LastName: "",
        Age: NaN
    });

    const handleAddformChange = (event) => {
        event.preventDefault();
        const fieldname = event.target.getAttribute("name");
        const fieldval = event.target.value;

        const newemployeedata = { ...addEmployeeData };
        newemployeedata[fieldname] = fieldval;

        setEmployeeData(newemployeedata);
    }

    const handleAddformSubmit = (event) => {
        event.preventDefault();

        const newEmployee = {
            Id: addEmployeeData.Id,
            FirstName: addEmployeeData.FirstName,
            LastName: addEmployeeData.LastName,
            Age: addEmployeeData.Age
        };

        const newEmployees = [...employees, newEmployee];
        setEmployees(newEmployees);
    }

    const employeeDelete = (empID) => {
        const newEmployee = [...employees];
        const index = employees.findIndex((employee) => employee.id === empID);
        newEmployee.splice(index, 1);
        setEmployees(newEmployee);
    }
    return (
        <div className="App">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Age</th>
                        <th>Edit/Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((employee) => (
                        <tr>
                            <td>{employee.Id}</td>
                            <td>{employee.FirstName}</td>
                            <td>{employee.LastName}</td>
                            <td>{employee.Age}</td>
                            <td>
                                <button onClick={() => employeeDelete(employee.id)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <h3>Add an Employee</h3>
            <form onSubmit={handleAddformSubmit}>
                <input type="text" name="Id" required="required" placeholder='Enter the ID' onChange={handleAddformChange} />
                <input type="text" name="FirstName" required="required" placeholder='Enter the First Name' onChange={handleAddformChange} />
                <input type="text" name="LastName" required="required" placeholder='Enter the Last Name' onChange={handleAddformChange} />
                <input type="text" name="Age" required="required" placeholder='Enter the Age' onChange={handleAddformChange} />
                <button type="submit">Add</button>
            </form>
        </div>
    );
}

export default EmployeeTable;