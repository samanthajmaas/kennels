import React, { useContext, useEffect } from "react"
import { AnimalContext } from "./AnimalProvider"
import { Animal } from "./Animal"
import "./Animals.css"
import {CustomerContext} from "../customer/CustomerProvider"
import { LocationContext } from "../location/LocationProvider"

export const AnimalList = () => {
    const { animals, getAnimals } = useContext(AnimalContext)
    const { customers, getCustomers} = useContext(CustomerContext)
    const { locations, getLocations} = useContext(LocationContext)

    useEffect(() => {
        getAnimals()
        getCustomers()
        getLocations()
    }, [])

    return (
        <div className="animals">
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