import React from "react"
import { Route } from "react-router-dom"
import { LocationProvider } from "./location/LocationProvider"
import { AnimalProvider } from "./animal/AnimalProvider"
import { LocationList } from "./location/LocationList"
import { AnimalList } from "./animal/AnimalList"
import {CustomerProvider} from "./customer/CustomerProvider"
import {CustomerList} from "./customer/CustomerList"
import {EmployeeList} from "./employee/EmployeeList"
import {EmployeeProvider} from "./employee/EmployeeProvider"

export const ApplicationViews = (props) => {
    return (
        <>
            <LocationProvider>
                <Route exact path="/">
                    <LocationList />
                </Route>
            </LocationProvider>

            <AnimalProvider>
                <LocationProvider>
                    <CustomerProvider>
                        <Route path="/animals">
                            <AnimalList />
                        </Route>
                    </CustomerProvider>

                </LocationProvider> 
            </AnimalProvider>

            <CustomerProvider>
                <Route path="/customers">
                    <CustomerList />
                </Route>
            </CustomerProvider>

            <EmployeeProvider>
                <LocationProvider>
                    <Route path="/employees">
                        <EmployeeList  />
                    </Route>
                </LocationProvider>
            </EmployeeProvider>
        </>
    )
}