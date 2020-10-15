import React, { useState, useEffect, useContext } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import "./Employees.css"


export const EmployeeDetail = (props) => {
    const {removeEmployee, getEmployeeById} = useContext(EmployeeContext)

    const [employee, setEmployee] = useState({location:{name: ""}, animal:{name:""}})
  
    useEffect(() => {
        const employeeId = parseInt(props.match.params.employeeId)
        getEmployeeById(employeeId)
            .then(setEmployee)
    }, [])

    return (
        <section className="employee">
            <h3 className="employee__name">{employee && employee.name}</h3>
            <div>Currently working at {employee && employee.location.name}</div>
            <div>
                {
                    (employee.animalId === null)
                        ? "Not assigned to an animal"
                        : `Currently taking care of ${employee && employee.animal.name}`
                }
            </div>
            <button onClick={
                () => {
                    removeEmployee(employee.id)
                        .then(() => {
                            props.history.push("/employees")
                        })
                }
            }>
                Fire Employee
            </button>
        </section>
    )
}