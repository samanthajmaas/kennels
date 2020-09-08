import React, {useContext, useRef, useEffect} from "react"
import {AnimalContext} from "./AnimalProvider"
import {LocationContext} from "../location/LocationProvider"
import{CustomerContext} from "../customer/CustomerProvider"
import "./Animals.css"

export const AnimalForm = (props) => {
    const {addAnimals} = useContext(AnimalContext)
    const {locations, getLocations} = useContext(LocationContext)
    const {customers, getCustomers} = useContext(CustomerContext)

    const name= useRef(null)
    const owner = useRef(null)
    const breed = useRef(null)
    const location= useRef(null)

    useEffect(()=> {
        getLocations()
        getCustomers()
    }, [])

    const constructNewAnimal = () => {
        const locationId = parseInt(location.current.value)
        const ownerId = parseInt(owner.current.value)

        if(locationId === 0) {
            window.alert("Please select a location")
        } else {
            addAnimals({
                name: name.current.value,
                breed: breed.current.value,
                ownerId,
                locationId
            })
            .then(() => props.history.push("/animals"))
        }
    }

    return (
        <form className="animalForm">
            <h2 className="animalForm__title">New Animal</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="animalName">Animal Name: </label>
                    <input type="text" id="animalName" ref={name} required autoFocus className="form-control" placeholder="Animal Name" />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="animalBreed">Animal Breed: </label>
                    <input type="text" id="animalBreed" ref={breed} required autoFocus className="form-control" placeholder="Animal Breed" />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="location">Assign to location: </label>
                    <select defaultValue="" name="location" ref={location} id="animalLocation" className="form-control" >
                        <option value="0">Select a location</option>
                        {locations.map(a => (
                            <option key={a.id} value={a.id}>
                                {a.name}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="owner">Owner:  </label>
                    <select defaultValue="" name="owner" ref={owner} id="animalOwner" className="form-control" >
                        <option value="0">Select a customer</option>
                        {customers.map(e => (
                            <option key={e.id} value={e.id}>
                                {e.name}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>
            <button type="submit"
                onClick={evt => {
                    evt.preventDefault() // Prevent browser from submitting the form
                    constructNewAnimal()
                }}
                className="btn btn-primary">
                Save Animal
            </button>
        </form>
    )

}