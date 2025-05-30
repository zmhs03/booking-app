import React, { useContext, useState, useRef, useEffect } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router";
import { FiSearch, FiUser } from "react-icons/fi";
import Logo from "../Assets/Logo.png";
import Login from "./Login";
import SignUp from "./SignUp";
import "../index.css";

function Navbar() {
	const { logout, isAuthenticated } = useContext(AuthContext);
	const navigate = useNavigate();

	const [showLogin, setShowLogin] = useState(false);
	const [showSignUp, setShowSignUp] = useState(false);
	const [showProfileDropdown, setShowProfileDropdown] = useState(false);
	const dropdownRef = useRef(null);

	useEffect(() => {
		function handleClickOutside(event) {
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(event.target)
			) {
				setShowProfileDropdown(false);
			}
		}

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	function handleLogout() {
		logout();
		setShowProfileDropdown(false);
		navigate("/");
	}

	function handleDashboard() {
		setShowProfileDropdown(false);
		navigate("/dashboard");
	}

	function handleSwitchToSignUp() {
		setShowLogin(false);
		setShowSignUp(true);
	}

	function handleSwitchToLogin() {
		setShowSignUp(false);
		setShowLogin(true);
	}

	function closeAllModals() {
		setShowLogin(false);
		setShowSignUp(false);
	}

	return (
		<>
			<nav className="navbar">
				<div className="navbar-container">
					<div className="navbar-content">
						<Link to="#" className="logo-link">
							<img src={Logo} alt="Logo" className="logo-image" />
						</Link>

						<div className="nav-links">
							{isAuthenticated ? (
								<>
									<NavLink
										to="/"
										className={({ isActive }) =>
											isActive ? "nav-link active-link" : "nav-link"
										}
									>
										Home
									</NavLink>
									<NavLink
										to="/About"
										className={({ isActive }) =>
											isActive ? "nav-link active-link" : "nav-link"
										}
									>
										About Us
									</NavLink>
									<NavLink
										to="/Explore"
										className={({ isActive }) =>
											isActive ? "nav-link active-link" : "nav-link"
										}
									>
										Explore
									</NavLink>

									<button className="icon-button">
										<FiSearch size={20} />
									</button>

									<div className="profile-dropdown" ref={dropdownRef}>
										<button
											className="icon-button"
											onClick={() =>
												setShowProfileDropdown(!showProfileDropdown)
											}
										>
											<FiUser size={20} />
										</button>

										{showProfileDropdown && (
											<div className="dropdown-menu">
												<button
													className="dropdown-item"
													onClick={handleDashboard}
												>
													Dashboard
												</button>
												<button
													className="dropdown-item"
													onClick={handleLogout}
												>
													Log out
												</button>
											</div>
										)}
									</div>
								</>
							) : (
								<>
									<Link to="/" className="nav-link">
										Home
									</Link>
									<Link to="/About" className="nav-link">
										About Us
									</Link>
									<Link to="/Explore" className="nav-link">
										Explore
									</Link>

									<button
										onClick={() => setShowSignUp(true)}
										className="btn-primary"
										disabled={showLogin}
									>
										Sign Up
									</button>

									<button
										onClick={() => setShowLogin(true)}
										className="btn-secondary"
										disabled={showSignUp}
									>
										Login
									</button>
								</>
							)}
						</div>
					</div>
				</div>
			</nav>

			{!isAuthenticated && (
				<>
					<Login
						visible={showLogin}
						onClose={closeAllModals}
						onSwitchToSignUp={handleSwitchToSignUp}
					/>
					<SignUp
						visible={showSignUp}
						onClose={closeAllModals}
						onSwitchToLogin={handleSwitchToLogin}
					/>
				</>
			)}
		</>
	);
}

export default Navbar;
