import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import Register2 from './pages/auth/Register2'
import Welcome from './pages/auth/Welcome'
import App from './App'
import Navbar from './components/utils/Navbar'
import Footer from './components/ui/Footer'
import Home from './pages/home/Home'
import Planification from './pages/other/Planification'
import Voiture from './pages/auth/Registervoit'
import Permis from './pages/auth/Permis'
import Profil from './pages/other/Profil'
import Trajets from './pages/other/trajets'

const Root = () => {
	return (
		<>
			<Navbar/>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/auth/login" element={<Login />} />
					<Route path="/auth/register" element={<Register />} />
					<Route path="/auth/register2" element={<Register2 />} />
					<Route path="/auth/welcome" element={<Welcome />} />
					<Route path="/Planification" element={<Planification/>}/>
					<Route path="/auth/Permis" element={<Permis/>}/>
					<Route path="/auth/Voiture" element={<Voiture/>}/>
					<Route path="/Profil" element={<Profil/>}/>
					<Route path="/Trajets" element={<Trajets/>}/>

				</Routes>
			<Footer />
		</>
	)
}

export default Root