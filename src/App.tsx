import React from 'react'
import { Header } from './components/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'
import './App.css'

function App() {
	return (
		<BrowserRouter>
			<Header />
			<main>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
			</main>
		</BrowserRouter>
	)
}

export default App
