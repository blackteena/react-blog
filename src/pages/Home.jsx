import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Post from '../components/Post';
import Pagination from '../components/Pagination';

const Home = ({ searchValue }) => {
    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalItems, setTotalItems] = useState(0);
    const itemsPerPage = 5;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const onChangePage = (pageNum) => {
        setCurrentPage(pageNum);
    };

    useEffect(() => {
        let url = `https://my-json-server.typicode.com/blackteena/db/posts?_page=${currentPage}&_limit=${itemsPerPage}`;

        if (searchValue) {
            url += `&title_like=${searchValue}`;
        }

        axios
            .get(url)
            .then((res) => {
                setPosts(res.data);
                setTotalItems(res.headers['x-total-count']);
            })
            .catch((error) => {
                console.error(error);
            });
        window.scrollTo(0, 0) 
    }, [currentPage, searchValue]);

    return (
        <>
            {posts.map((post) => (
                <Post key={post.id} {...post} />
            ))}
            <Pagination onChangePage={onChangePage} totalPages={totalPages} active={currentPage} />
        </>
    );
};

export default Home;
