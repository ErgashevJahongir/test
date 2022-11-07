import ReactPaginate from "react-paginate";
import "./pagination.css";

export function Pagination({ totalItems, pageSize, current, setCurrent }) {
    const handlePageClick = (event) => {
        console.log(event);
        setCurrent(event.selected + 1);
    };

    return (
        <>
            <ReactPaginate
                breakLabel="..."
                nextLabel={<i className="fa-solid fa-chevron-right"></i>}
                onPageChange={handlePageClick}
                pageRangeDisplayed={4}
                marginPagesDisplayed={1}
                pageCount={totalItems}
                previousLabel={<i className="fa-solid fa-chevron-left"></i>}
                renderOnZeroPageCount={null}
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-prev"
                previousLinkClassName="page-link"
                nextClassName="page-next"
                nextLinkClassName="page-link"
                breakClassName="page-item"
                breakLinkClassName="page-link"
                containerClassName="pagination"
                activeClassName="active"
            />
        </>
    );
}
