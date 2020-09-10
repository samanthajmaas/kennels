import React, { useContext, useEffect } from "react"
import { AnimalContext } from "./AnimalProvider"
import { Animal } from "./Animal"
import "./Animals.css"
import {CustomerContext} from "../customer/CustomerProvider"
import { LocationContext } from "../location/LocationProvider"

export const AnimalList = (props) => {
    const { animals, getAnimals } = useContext(AnimalContext)
    const { customers, getCustomers} = useContext(CustomerContext)
    const { locations, getLocations} = useContext(LocationContext)

    useEffect(() => {
        getAnimals()
        getCustomers()
        getLocations()
    }, [])

    return (
        <div className="animalList">
            <h1> Animals </h1>
            <button onClick={() => props.history.push("/animals/create")}>
                Make Appointment
            </button>
            {
                animals.map(animal => {
                    const owner = customers.find(customer => customer.id === animal.customerId) || {}
                    const place = locations.find(location => location.id === animal.locationId) || {}
                    return <Animal key={animal.id} animal={animal} location = {place} customer = {owner} />
                })
            }
        </div>
    )
}