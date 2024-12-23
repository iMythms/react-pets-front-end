import React from 'react'
import Pet from '../components/Pet'

const PetList = ({ pets }) => {
	return (
		<div className="mt-16">
			<h1 className="text-3xl font-extrabold">Pet List</h1>
			<section className="my-16 grid grid-cols-4">
				{pets?.map((pet) => (
					<Pet pet={pet} key={pet._id} />
				))}
			</section>
		</div>
	)
}

export default PetList
