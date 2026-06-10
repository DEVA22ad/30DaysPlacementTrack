import React, { useState } from "react";

function EmployeeRegistration() {
  const [employeeName, setEmployeeName] = useState("");
  const [department, setDepartment] = useState("");
  const [salary, setSalary] = useState("");
  const [employees, setEmployees] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newEmployee = {
      name: employeeName,
      department: department,
      salary: salary,
    };

    setEmployees([...employees, newEmployee]);

    setEmployeeName("");
    setDepartment("");
    setSalary("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Employee Registration Form</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Employee Name:</label>
          <br />
          <input
            type="text"
            value={employeeName}
            onChange={(e) => setEmployeeName(e.target.value)}
            required
          />
        </div>

        <br />

        <div>
          <label>Department:</label>
          <br />
          <input
            type="text"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            required
          />
        </div>

        <br />

        <div>
          <label>Salary:</label>
          <br />
          <input
            type="number"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            required
          />
        </div>

        <br />

        <button type="submit">Add Employee</button>
      </form>

      <hr />

      <h3>Total Employees: {employees.length}</h3>

      <h3>Employee List</h3>

      {employees.length === 0 ? (
        <p>No employees added yet.</p>
      ) : (
        <ul>
          {employees.map((employee, index) => (
            <li key={index}>
              <strong>Name:</strong> {employee.name} |{" "}
              <strong>Department:</strong> {employee.department} |{" "}
              <strong>Salary:</strong> ₹{employee.salary}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default EmployeeRegistration;