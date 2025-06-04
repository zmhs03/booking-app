import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import Home from "./Pages/Home";
import Explore from "./Pages/Explore";
import About from "./Pages/About";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Dashboard from "./Pages/Dashboard";
import { BookingProvider } from "./Context/BookingContext";
import BusinessProfile from "./Pages/BusinessProfile";
import AuthProvider, { AuthContext } from "./Context/AuthContext";
import { useContext } from "react";

function App() {
	return (
		<AuthProvider>
			<BookingProvider>
				<BrowserRouter>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/Login" element={<Login />} />
						<Route path="/SignUp" element={<SignUp />} />
						<Route path="/About" element={<About />} />
						<Route path="/Explore" element={<Explore />} />
						<Route path="/business/:id" element={<BusinessProfile />} />
						<Route path="/Dashboard" element={Dashboard} />
					</Routes>
					<Footer />
				</BrowserRouter>
			</BookingProvider>
		</AuthProvider>
	);
}

export default App;
