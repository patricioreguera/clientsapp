import { useState, useEffect } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Filter } from "./components/Filter";
import { Table } from "./components/Table";
import { useFetch } from "./hooks/useFetch";
import Spiner from "./components/Spiner/Spiner";

function App() {
	const { Data, isLoading } = useFetch();

	return (
		<div className="App text-center">
			<Header />
			<div className="container">
				{isLoading ? <Spiner /> : <Table Data={Data} />}
			</div>
		</div>
	);
}

export default App;
