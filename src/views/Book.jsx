import React, { useEffect, useState } from "react";

import Header from "../components/Header";

import styles from './Book.module.css';

const BookList = () => {
    const [title, setTitle] = useState();

    useEffect(() => {
        const API_KEY = process.env.REACT_APP_API_KEY;
        const headers = {
            'Accept': 'application/json',
            'Authorization': API_KEY
        }

        const pullBooks = async () => {
            const rawTitles = await fetch('https://the-one-api.dev/v2/book', { headers: headers })
            const titles = await rawTitles.json();
            const title = titles.docs;
            setTitle(title.name)
        };
        pullBooks();
    }, []);

    return (
        <div>
            <Header/>
            <div>
                <h1>{title}</h1>
            </div>
        </div>
    )
};

export default BookList;