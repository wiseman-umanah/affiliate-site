"use client"

import "./App.css"
import { Route, Routes } from "react-router-dom"
import { Header } from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import About from "./pages/About"
import Privacy from "./pages/Privacy"
import Terms from "./pages/Terms"
import Contact from "./pages/Contact"
import Admin from "./pages/Admin"
import Login from "./pages/Login"


function App() {
  return (
    <div className="min-h-screen bg-black">
		<Header />
      
        <Routes>
			<Route path="/" element={<Home />} />
			<Route path="/about" element={<About />} />
			<Route path="/privacy-policy" element={<Privacy />} />
			<Route path="/terms" element={<Terms />} /> 
			<Route path="/contact" element={<Contact />} />
			<Route path="/login" element={<Login />} />
			<Route path="/admin" element={<Admin />} />
		</Routes>

	  <Footer />
    </div>
  )
}

export default App
