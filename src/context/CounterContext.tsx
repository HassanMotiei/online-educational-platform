"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

export interface CounterContext {
	count: number;
	incrementCount: () => void;
	decrementCount: () => void;
}

const CounterContext = createContext<CounterContext | null>(null);

export const CounterProvider: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
	const [count, setCount] = useState(0);

	const incrementCount = () => {
		setCount(count + 1);
	};

	const decrementCount = () => {
		setCount(count - 1);
	};

	return (
		<CounterContext.Provider
			value={{ count, incrementCount, decrementCount }}
		>
			{children}
		</CounterContext.Provider>
	);
};

export const useCounter = () => {
	const context = useContext(CounterContext);

	if (!context) {
		throw new Error("useCounter must be used within a CounterProvider");
	}

	return context;
};
