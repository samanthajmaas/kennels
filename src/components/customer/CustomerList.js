import React, {useContext, useEffect} from "react"
import { CustomerContext } from "./CustomerProvider"
import { Customer } from "./Customer"
import "./Customers.css"

export const CustomerList = () => {
    const {customers, getCustomers} = useContext(CustomerContext)

    useEffect(() => {
        getCustomers()
    }, [])

    useEffect(()=> {

    }, [customers])

    return (
        <div className="customers">
            {
                customers.map(customer => <Customer key={customer.id} customer ={customer} />)
            }
        </div>

    )
}