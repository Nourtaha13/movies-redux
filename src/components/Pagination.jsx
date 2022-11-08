import React, { useState, useEffect } from 'react'
import ReactPaginate from 'react-paginate';
import { getPage } from "../redux/action";
import { useSelector, useDispatch } from "react-redux"

export default function PaginationComponent() {
    const [ pageCount, setPageCount ] = useState(0)
    const dispatch = useDispatch()
    const pages = useSelector(state => state.pageCount)
    
    useEffect(() => {
        setPageCount(pages)
    },[pages])
    
    const handlePageClick = data => {
        dispatch(getPage(data.selected + 1))
    }

    return (
        <ReactPaginate
        breakLabel="..."
        nextLabel="التالي"
        onPageChange={handlePageClick}
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        pageCount={pageCount}
        previousLabel="السابق"
        containerClassName={"pagination justify-content-center p-3"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
        />
    )
}
