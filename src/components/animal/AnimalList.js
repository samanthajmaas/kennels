import React, {useContext, useEffect} from "react"
import {AnimalContext} from "./AnimalProvider"
import {Animal} from "./Animal"
import "./Animals.css"

export const AnimalList = () => {
    const { animals, getAnimals } = useContext(AnimalContext)

    useEffect(() => {
        getAnimals()
    }, [])

    useEffect(() => {
    }, [animals])

    return (
        <div className="animals">
            {
                animals.map(animal => <Animal key={animal.id} animal ={animal} />) 
            }
        </div>
    )
}