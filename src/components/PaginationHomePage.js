import React from "react";
import { Pagination } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux"
import * as types from "../redux/constants/blog.constants";
import { blogActions } from "../redux/actions";


const PaginationHomePage = () => {
    const dispatch = useDispatch()
    const pageNum = useSelector(state => state.blog.pageNum)
    const totalPageNum = useSelector(state => state.blog.totalResults)


    const handleClickOnFirst = () => {

        dispatch(blogActions.blogsRequest(1))
    }

    const handleClickOnPrev = () => {
        if (pageNum > 1) {

            dispatch(blogActions.blogsRequest(pageNum - 1))
        }
    }

    const handleClickOnNext = () => {
        if (pageNum < totalPageNum) {

            dispatch(blogActions.blogsRequest(pageNum + 1))
        }
    }

    const handleClickOnLast = () => {

        dispatch(blogActions.blogsRequest(totalPageNum))
    }

    const handleClickOnPage = (page) => {


        dispatch(blogActions.blogsRequest(page))
    }
    console.log("check pageNum", pageNum)
    console.log("check total page", totalPageNum)

    return (
        <Pagination size="lg" className="justify-content-center tien-pagination-style">
            <Pagination.First disabled={pageNum === 1} onClick={handleClickOnFirst} />
            <Pagination.Prev disabled={pageNum === 1} onClick={handleClickOnPrev} />
            <Pagination.Item active={pageNum === 1} onClick={() => handleClickOnPage(1)}>{1}</Pagination.Item>
            {pageNum > 3 && <Pagination.Ellipsis />}
            {pageNum > 2 && <Pagination.Item onClick={() => handleClickOnPage(pageNum - 1)}>{pageNum - 1}</Pagination.Item>}
            {pageNum > 1 && pageNum < totalPageNum && <Pagination.Item active>{pageNum}</Pagination.Item>}
            {pageNum < totalPageNum - 1 && < Pagination.Item onClick={() => handleClickOnPage(pageNum + 1)} > {pageNum + 1}</Pagination.Item>}
            {pageNum < totalPageNum - 2 && <Pagination.Ellipsis />}
            {
                totalPageNum > 1 &&
                <Pagination.Item active={pageNum === totalPageNum} onClick={() => handleClickOnPage(totalPageNum)}>
                    {totalPageNum}
                </Pagination.Item>
            }
            <Pagination.Next disabled={pageNum === totalPageNum} onClick={handleClickOnNext} />
            <Pagination.Last disabled={pageNum === totalPageNum} onClick={handleClickOnLast} />
        </Pagination >
    );
};

export default PaginationHomePage;
