import React from "react";
import { Pagination } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux"
import * as types from "../redux/constants/blog.constants";
import { blogActions } from "../redux/actions";
const LIMIT = types.LIMIT_PER_PAGE

const PaginationHomePage = () => {
    const dispatch = useDispatch()
    const pageNum = useSelector(state => state.blog.pageNum)
    const totalResults = useSelector(state => state.blog.totalResults)
    let totalPageNum = 0
    if ((totalResults % LIMIT) > 0) totalPageNum = Math.floor(totalResults / LIMIT) + 1
    else totalPageNum = Math.floor(totalResults / LIMIT)
    console.log('pageNum:', pageNum)
    console.log('totalResults:', totalResults)

    const handleClickOnFirst = () => {
        // setPageNum(1)
        dispatch(blogActions.blogsRequest(1))
    }

    const handleClickOnPrev = () => {
        if (pageNum > 1) {
            // setPageNum((num) => num - 1)
            dispatch(blogActions.blogsRequest(pageNum - 1))
        }
    }

    const handleClickOnNext = () => {
        if (pageNum < totalPageNum) {
            // setPageNum((num) => num + 1)
            dispatch(blogActions.blogsRequest(pageNum + 1))
        }
    }

    const handleClickOnLast = () => {
        // setPageNum(totalPageNum)
        dispatch(blogActions.blogsRequest(totalPageNum))
    }

    const handleClickOnPage = (page) => {
        // setPageNum(page)
        dispatch(blogActions.blogsRequest(page))
    }

    return (
        <Pagination size="lg" className="justify-content-center">
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
