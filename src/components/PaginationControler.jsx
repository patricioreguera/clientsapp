import React from "react";

const PaginationControler = ({ setPaginationIndex, paginationIndex, Data }) => {
	const PAGINATION_INDEX = 10;
	return (
		<div>
			<button
				className="btn btn-outline-primary "
				onClick={() => {
					paginationIndex >= PAGINATION_INDEX &&
						setPaginationIndex(paginationIndex - PAGINATION_INDEX);
				}}
			>
				Previus
			</button>
			<button
				className="btn btn-outline-primary ms-3"
				onClick={() => {
					paginationIndex + PAGINATION_INDEX < Data.length &&
						setPaginationIndex(paginationIndex + PAGINATION_INDEX);
				}}
			>
				Next Page
			</button>
		</div>
	);
};

export default PaginationControler;
