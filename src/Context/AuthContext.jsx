import React, { createContext, useState } from "react";

export const AuthContext = createContext();

function AuthProvider({ children }) {
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [currentUser, setCurrentUser] = useState(null);
	const [users, setUsers] = useState([
		{
			id: 1,
			name: "admin",
			surname: "user",
			email: "admin@example.com",
			phone: "0000000000",
			dateOfBirth: "1990-01-01",
			password: "password",
		},
	]);

	function Login(email, password) {
		if (!email || !password) {
			return false;
		}

		const user = users.find(
			(u) => u.email === email && u.password === password
		);

		if (user) {
			setIsAuthenticated(true);
			setCurrentUser(user);
			return true;
		} else {
			return false;
		}
	}

	function SignUp(name, surname, email, phone, dateOfBirth, password) {
		if (
			!name ||
			!surname ||
			!email ||
			!phone ||
			!dateOfBirth ||
			!password
		) {
			return false;
		}

		const existingUser = users.find((u) => u.email === email);

		if (!existingUser) {
			const newUser = {
				id: users.length + 1,
				name,
				surname,
				email,
				phone,
				dateOfBirth,
				password,
			};
			setUsers([...users, newUser]);
			// Don't auto-authenticate after signup
			return true;
		} else {
			return false;
		}
	}

	function logout() {
		setIsAuthenticated(false);
		setCurrentUser(null);
	}

	return (
		<AuthContext.Provider
			value={{
				Login,
				SignUp,
				logout,
				isAuthenticated,
				currentUser,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
}

export default AuthProvider;
