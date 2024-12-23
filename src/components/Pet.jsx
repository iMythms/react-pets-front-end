import React from 'react'
import { Link } from 'react-router-dom'

const Pet = ({ pet }) => {
	return (
		<Link to={`/pets/${pet._id}`} className="my-16">
			<div
				key={pet._id}
				className="bg-white w-full p-8 rounded-xl border border-[#e9ecef] flex flex-col justify-center items-center gap-4"
			>
				<h2 className="text-2xl font-semibold">{pet.name}</h2>
			</div>
		</Link>
	)
}

export default Pet
