import React, { useContext, useEffect } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import { Employee } from "./Employee"
import "./Employees.css"
import { LocationContext } from "../location/LocationProvider"

export const EmployeeList = () => {
    const { employees, getEmployees } = useContext(EmployeeContext)
    const { locations, getLocations } = useContext(LocationContext)

    useEffect(() => {
        getEmployees()
        getLocations()
    }, [])

    useEffect(() => {

    }, [employees])

    return (
        <div className="employees">
            {
                employees.map(employee => {
                    const workplace = locations.find(location => location.id === employee.locationId) || {}

                   return <Employee key={employee.id} employee={employee} location = {workplace}/>

                })
            }
        </div>
    )
}