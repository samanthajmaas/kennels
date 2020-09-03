import React from "react"
import "./Animals.css"

export const Animal = ({animal, customer, location}) => (
    <section className="animal">
        <h3 className="animal__name">{animal.name}</h3>
        <div className="animal__breed">Breed: {animal.breed}</div>
        <div className="animal__breed">Owner: {customer.name}</div>
        <div className="animal__breed">Location: {location.name}</div>
    </section>
)