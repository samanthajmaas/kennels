import React from "react"
import "./Employees.css"

export const Employee = ({employee, location}) => (
    <section className="employee">
        <h3 className="employee__name">{employee.name}</h3>
        <div className="employee__workplace">Workplace: {location.name}</div>
    </section>
)