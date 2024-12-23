import React, { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from './globals'
import NavBar from './components/NavBar'
import Home from './pages/home'
import PetList from './pages/PetList'
import PetDetails from './pages/PetDetails'
import PetForm from './pages/PetForm'
import './App.css'

const App = () => {
	const [pets, setPets] = useState([])

	useEffect(() => {
		const getAllPets = async () => {
			const response = await axios.get(`${BASE_URL}/pets`)
			setPets(response.data)
		}
		getAllPets()
	}, [])

	return (
		<>
			<header>
				<NavBar />
			</header>
			<main className="container mx-auto">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/pets" element={<PetList pets={pets} />} />
					<Route path="/pets/:id" element={<PetDetails pets={pets} />} />
					<Route path="/new" element={<PetForm />} />
				</Routes>
			</main>
		</>
	)
}

export default App
