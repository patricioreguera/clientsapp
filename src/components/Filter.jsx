import { useState } from "react";

const originalState = {
	Select1: "",
};

export function Filter() {
	const [filterData, setFilterData] = useState(originalState);

	const setDataInfo = () => {
		console.log(filterData);
		setFilterData(originalState);
	};

	const deleteDataInfo = () => {
		setFilterData(originalState);
	};

	function handleChange(e) {
		e.target.id === "select1" &&
			setFilterData({
				...filterData,
				Select1: e.target.value,
			});
	}

	return (
		<div className="input-group mb-5 shadow-sm">
			<button
				className="btn btn-secondary"
				type="button"
				onClick={deleteDataInfo}
			>
				Deltete
			</button>
			<input
				type="text"
				id="select1"
				className="form-control"
				placeholder="Username"
				aria-label="Username"
				value={filterData.Select1}
				onChange={handleChange}
			/>

			<button className="btn btn-primary" type="button" onClick={setDataInfo}>
				Find
			</button>
		</div>
	);
}
