// TaskContext.js
"use client";
import React, { createContext, useContext, useReducer } from "react";
import { taskReducer } from "./TaskReducer";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
	const [tasks, dispatch] = useReducer(taskReducer, []);

	return (
		<TaskContext.Provider value={{ tasks, dispatch }}>
			{children}
		</TaskContext.Provider>
	);
};

export const useTask = () => useContext(TaskContext);
