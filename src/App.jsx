import React from 'react'
import Navbar from './pages/components/Home/Navbar'
import Hero from './pages/components/Home/Hero'
import Services from './pages/components/Home/Services'
import FAQ from './pages/components/Home/FAQ'
import Contact from './pages/components/Home/Contact'
import Footer from './pages/components/Home/Footer'

function App() {
	return (
		<>
			<Navbar />
			<Hero />
			<div id="services">
				<Services />
			</div>
			<FAQ />
			<Contact />
			<Footer />
		</>
	)
}

export default App