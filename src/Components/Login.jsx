import React, { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router";
import { FiX } from "react-icons/fi";

function Login({ visible, onClose, onSwitchToSignUp }) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const { Login } = useContext(AuthContext);
	const navigate = useNavigate();

	if (!visible) return null;

	function handleLogin() {
		setError("");

		if (!email || !password) {
			setError("Please fill in all fields.");
			return;
		}

		if (Login(email, password)) {
			setEmail("");
			setPassword("");
			setError("");
			onClose();
			navigate("/");
		} else {
			setError("Invalid credentials. Please try again.");
		}
	}

	function handleKeyPress(e) {
		if (e.key === "Enter") {
			handleLogin();
		}
	}

	function handleSwitchToSignUp() {
		setEmail("");
		setPassword("");
		setError("");
		onSwitchToSignUp();
	}

	return (
		<div className="modal-overlay" onClick={onClose}>
			<div className="auth-modal" onClick={(e) => e.stopPropagation()}>
				<button className="modal-close" onClick={onClose}>
					<FiX size={20} />
				</button>

				<div className="auth-header">
					<h2>Welcome back</h2>
					<p>Login to your account below</p>
				</div>

				<div className="auth-form">
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

					{error && <p className="error-message">{error}</p>}

					<button className="auth-button" onClick={handleLogin}>
						Login
					</button>

					<p className="auth-switch">
						Don't have an account?
						<button className="switch-link" onClick={handleSwitchToSignUp}>
							Sign up
						</button>
					</p>
				</div>
			</div>
		</div>
	);
}

export default Login;
