import React from 'react'
import Pagination from 'react-bootstrap/Pagination';

const PaginationComponent = ({totalPages,onChangePage,active}) => {
    let items = [];
    for (let number = 1; number <= totalPages; number++) {
        items.push(
            <Pagination.Item key={number} active={number === active} onClick={()=>onChangePage(number)}>
                {number}
            </Pagination.Item>,
        );
    }
    return (
        <Pagination className='pagination'>{items}</Pagination>
    )
}

export default PaginationComponent

