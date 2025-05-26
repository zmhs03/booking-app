import React, { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { FiX } from "react-icons/fi";

function SignUp({ visible, onClose, onSwitchToLogin }) {
	const [email, setEmail] = useState("");
	const [name, setName] = useState("");
	const [surname, setSurname] = useState("");
	const [phone, setPhone] = useState("");
	const [dateOfBirth, setDateOfBirth] = useState("");
	const [password, setPassword] = useState("");
	const [confirmation, setConfirmation] = useState("");
	const [error, setError] = useState("");
	const [success, setSuccess] = useState("");
	const { SignUp } = useContext(AuthContext);

	if (!visible) return null;

	function handleSignUp() {
		setError("");
		setSuccess("");

		if (
			!name ||
			!surname ||
			!phone ||
			!email ||
			!dateOfBirth ||
			!password ||
			!confirmation
		) {
			setError("All fields are required.");
			return;
		}

		if (password !== confirmation) {
			setError("Passwords do not match.");
			return;
		}

		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(email)) {
			setError("Please enter a valid email address.");
			return;
		}

		if (password.length < 6) {
			setError("Password must be at least 6 characters long.");
			return;
		}

		if (SignUp(name, surname, email, phone, dateOfBirth, password)) {
			setSuccess(
				"Account created successfully! Please login to continue."
			);

			setName("");
			setSurname("");
			setPhone("");
			setEmail("");
			setDateOfBirth("");
			setPassword("");
			setConfirmation("");

			setTimeout(() => {
				setSuccess("");
				onSwitchToLogin();
			}, 2000);
		} else {
			setError("An account with this email already exists.");
		}
	}

	function handleKeyPress(e) {
		if (e.key === "Enter") {
			handleSignUp();
		}
	}

	function handleSwitchToLogin() {
		setName("");
		setSurname("");
		setPhone("");
		setEmail("");
		setDateOfBirth("");
		setPassword("");
		setConfirmation("");
		setError("");
		setSuccess("");
		onSwitchToLogin();
	}

	return (
		<div className="modal-overlay" onClick={onClose}>
			<div
				className="auth-modal signup-modal"
				onClick={(e) => e.stopPropagation()}
			>
				<button className="modal-close" onClick={onClose}>
					<FiX size={22} />
				</button>

				<div className="auth-header">
					<h2>Sign up</h2>
					<p>
						Enter your details below to create your account and get
						started.
					</p>
				</div>

				<div className="auth-form">
					<div className="input-row">
						<div className="input-group">
							<label>Name</label>
							<input
								type="text"
								placeholder="Name"
								onChange={(e) => setName(e.target.value)}
								value={name}
								onKeyDown={handleKeyPress}
							/>
						</div>
						<div className="input-group">
							<label>Surname</label>
							<input
								type="text"
								placeholder="Surname"
								onChange={(e) => setSurname(e.target.value)}
								value={surname}
								onKeyDown={handleKeyPress}
							/>
						</div>
					</div>

					<div className="input-group">
						<label>Email</label>
						<input
							type="email"
							placeholder="Email Address"
							onChange={(e) => setEmail(e.target.value)}
							value={email}
							onKeyDown={handleKeyPress}
						/>
					</div>

					<div className="input-row">
						<div className="input-group">
							<label>Date of Birth</label>
							<input
								type="date"
								onChange={(e) => setDateOfBirth(e.target.value)}
								value={dateOfBirth}
								onKeyDown={handleKeyPress}
							/>
						</div>
						<div className="input-group">
							<label>Phone Number</label>
							<input
								type="tel"
								placeholder="078 345 6789"
								onChange={(e) => setPhone(e.target.value)}
								value={phone}
								onKeyDown={handleKeyPress}
							/>
						</div>
					</div>

					<div className="input-row">
						<div className="input-group">
							<label>Password</label>
							<input
								type="password"
								placeholder="Password"
								onChange={(e) => setPassword(e.target.value)}
								value={password}
								onKeyDown={handleKeyPress}
							/>
						</div>
						<div className="input-group">
							<label>Confirm Password</label>
							<input
								type="password"
								placeholder="Confirm Password"
								onChange={(e) => setConfirmation(e.target.value)}
								value={confirmation}
								onKeyDown={handleKeyPress}
							/>
						</div>
					</div>

					{error && <p className="error-message">{error}</p>}
					{success && <p className="success-message">{success}</p>}

					<div className="button-group">
						<button className="auth-button" onClick={handleSignUp}>
							Confirm
						</button>
						<button className="cancel-button" onClick={onClose}>
							Cancel
						</button>
					</div>

					<p className="auth-switch">
						Already have an account?
						<button className="switch-link" onClick={handleSwitchToLogin}>
							Login
						</button>
					</p>
				</div>
			</div>
		</div>
	);
}

export default SignUp;
