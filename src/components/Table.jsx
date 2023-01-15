import { Client } from "./Client/Client";
import { useState, useEffect } from "react";
import Pagination from "./Pagination";
import PaginationControler from "./PaginationControler";
import TableHeader from "./TableHeader";
import { Filter } from "./Filter";
export function Table({ Data }) {
	const [users, setusers] = useState(Data);
	const [filterData, setFilterData] = useState("");
	const [paginationIndex, setPaginationIndex] = useState(0);

	useEffect(() => {
		if (filterData) {
			const filterResult = Data?.filter((user) => {
				const nameToLowerCase = user.fullName.toLowerCase();
				return nameToLowerCase.includes(filterData);
			});
			setusers(filterResult);
		} else {
			const usersSlice = Data?.slice(paginationIndex, paginationIndex + 10);

			setusers(usersSlice);
		}
	}, [paginationIndex, filterData]);

	return (
		<>
			<Filter setFilterData={setFilterData} filterData={filterData} />
			<table className="table shadow-sm">
				<TableHeader />
				<tbody>
					{users?.map((user) => (
						<Client key={user.id} user={user} />
					))}
				</tbody>
			</table>
			<Pagination users={users} Data={Data} paginationIndex={paginationIndex} />
			<PaginationControler
				setPaginationIndex={setPaginationIndex}
				paginationIndex={paginationIndex}
				Data={Data}
			/>
		</>
	);
}
