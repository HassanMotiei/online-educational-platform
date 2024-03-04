"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

// تعریف اینترفیس برای داده
export interface Data {
	username: string;
	password: string;
	email: string;
}

// ایجاد یک Context
const DataContext = createContext<Data | undefined>(undefined);

// یک Provider ساخته و استفاده می‌کنیم
export const DataProvider: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
	const [data, setData] = useState<Data>({
		username: "",
		password: "",
		email: "hassan@gmail.com",
	});

	return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

// یک هوک ساده برای دسترسی به مقادیر Context
export const useData = () => {
	const context = useContext(DataContext);
	if (!context) {
		throw new Error("useData must be used within a DataProvider");
	}
	return context;
};
