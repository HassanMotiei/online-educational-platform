'use client'
import React from "react";
import { useCounter } from "@/context/CounterContext";

const Home: React.FC = () => {
	const { count, incrementCount, decrementCount } = useCounter();

	return (
		<div>
			<h1>شمارنده: {count}</h1>
			<button onClick={incrementCount}>افزایش</button>
			<button onClick={decrementCount}>کاهش</button>
		</div>
	);
};

export default Home;
