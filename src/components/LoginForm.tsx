// LoginForm.tsx
"use client";

import React, { useState } from "react";
import { DataProvider } from "@/context/DataContext";

const LoginForm: React.FC = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = () => {
		// ارسال داده‌های ورودی به DataProvider
		// در اینجا باید از useState در DataContext استفاده کنید و داده های مورد نظر را از طریق آن تنظیم کنید.
	};

	return (
		<DataProvider>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="Enter username"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
				/>
				<input
					type="password"
					placeholder="Enter password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<button type="submit">Login</button>
			</form>
		</DataProvider>
	);
};

export default LoginForm;
