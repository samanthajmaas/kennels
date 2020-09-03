import React from "react"
import { NavBar } from "./nav/NavBar"
import { ApplicationViews } from "./ApplicationViews"
import "./Kennel.css"
import "./nav/NavBar.css"

export const Kennel = () => (
    <>
        <NavBar />
        <ApplicationViews />
    </>
)