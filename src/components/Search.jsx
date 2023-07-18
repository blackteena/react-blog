import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const Search = ({ onSearch }) => {
    const [value, setValue] = useState('')

    const handleSearchClick = () => {
        onSearch(value);
    };

    return (
        <Form className="d-flex">
            <Form.Control
                value={value}
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                onChange={e => setValue(e.target.value)}
            />
            <Button onClick={handleSearchClick} variant="outline-success">Search</Button>
        </Form>
    )
}

export default Search