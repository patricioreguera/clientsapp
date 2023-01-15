import { Client } from "./Client/Client";
import { useState, useEffect } from "react";
import Pagination from "./Pagination";
import PaginationControler from "./PaginationControler";
import TableHeader from "./TableHeader";
export function Table({ Data }) {
	const [users, setusers] = useState(Data);
	const [paginationIndex, setPaginationIndex] = useState(0);

	useEffect(() => {
		const usersSlice = Data?.slice(paginationIndex, paginationIndex + 10);
		setusers(usersSlice);
	}, [paginationIndex]);

	return (
		<>
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
