import React from 'react'
import Logo from '../../public/React.svg'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
	return (
		<nav className="bg-white h-12 drop-shadow-md sticky flex items-center">
			<div className="container mx-auto flex items-center justify-between">
				<img src={Logo} className="w-8" />

				{/* Items */}
				<div className="flex gap-8">
					<NavLink to="/" className="hover:underline">
						Home
					</NavLink>
					<NavLink to="/pets" className="hover:underline">
						Pets
					</NavLink>
				</div>

				{/* Others */}
				<div>
					<NavLink
						to="/new"
						className="bg-[#121212] text-white px-4 py-1 rounded-full hover:bg-zinc-700"
					>
						New Pet
					</NavLink>
				</div>
			</div>
		</nav>
	)
}

export default NavBar
