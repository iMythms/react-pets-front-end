import React, { useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'

const PetForm = ({ pets, setPets }) => {
	let initialState = {
		name: '',
		breed: '',
		age: '',
		image: '',
	}

	const [formValues, setFormValues] = useState(initialState)

	const handleSubmit = async (event) => {
		event.preventDefault()
		const response = await axios.post(`${BASE_URL}/pets`, formValues)
		setPets([...pets, response.data])
		setFormValues(initialState)
		Navigate('/pets')
	}

	const handleChange = (event) => {
		setFormValues({ ...formValues, [event.target.id]: event.target.value })
	}

	return (
		<div className="mt-16">
			<h1 className="text-3xl font-extrabold">New Pet</h1>
			<form onSubmit={handleSubmit} className="flex flex-col gap-2 w-64 mt-8">
				<div className="flex flex-col gap-1">
					<label htmlFor="name">Name</label>
					<input
						type="text"
						name="name"
						id="name"
						onChange={handleChange}
						value={formValues.name}
						className="border px-1 rounded-md"
					/>
				</div>
				<div className="flex flex-col gap-1">
					<label htmlFor="breed">Breed</label>
					<input
						type="text"
						name="breed"
						id="breed"
						onChange={handleChange}
						value={formValues.breed}
						className="border px-1 rounded-md"
					/>
				</div>
				<div className="flex flex-col gap-1">
					<label htmlFor="age">Age</label>
					<input
						type="text"
						name="age"
						id="age"
						onChange={handleChange}
						value={formValues.age}
						className="border px-1 rounded-md"
					/>
				</div>
				<div className="flex flex-col gap-1">
					<label htmlFor="image">Image URL</label>
					<input
						type="text"
						name="image"
						id="image"
						onChange={handleChange}
						value={formValues.image}
						className="border px-1 rounded-md"
					/>
				</div>
				<button className="bg-[#121212] text-white px-4 py-0.5 rounded-md hover:bg-zinc-700">
					Submit
				</button>
			</form>
		</div>
	)
}

export default PetForm
