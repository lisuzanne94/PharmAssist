import React from "react"
import MedicationCreateForm from "../medication_form/medication_create_form"



const test = ({ openModal }) => {
   const createForm = e => {
    e.preventDefault()
    openModal('createMedication')
   }

    return (
        <div>
            <button onClick={(e) => createForm(e)}>YO</button>
        </div>
    )
}

export default test