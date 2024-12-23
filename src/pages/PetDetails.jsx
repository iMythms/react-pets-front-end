import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const PetDetails = ({ pets }) => {
	const { id } = useParams()

	const [pet, setPet] = useState(null)

	useEffect(() => {
		const getPet = () => {
			const singlePet = pets.find((pet) => {
				return pet._id === id
			})
			setPet(singlePet)
		}
		getPet()
	}, [pets])

	return (
		<div className="mt-16">
			{pet ? (
				<>
					<h1 className="text-3xl font-extrabold">Pet Details</h1>
					<section className="w-fit mt-6 flex flex-col gap-2">
						<h2 className="text-2xl font-semibold">{pet.name}</h2>
						<p className="">{pet.breed}</p>
						<p className="">{pet.age} years old</p>
					</section>
				</>
			) : null}
		</div>
	)
}

export default PetDetails
