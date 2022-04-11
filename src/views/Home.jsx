import React, { useEffect, useState } from 'react';

import styles from './Home.module.css';

const Home = () => {
    const [quote, setQuote] = useState();
    const [character, setCharacter] = useState();

    useEffect(() => {
        const API_KEY = process.env.REACT_APP_API_KEY;
        const headers = {
            'Accept': 'application/json',
            'Authorization': API_KEY
        }

        const pullQuotes = async () => {
            const rawQuotes = await fetch('https://the-one-api.dev/v2/quote', { headers: headers })
            const quotes = await rawQuotes.json();
            const quote = quotes.docs[Math.floor(Math.random() * quotes.docs.length)];
            setQuote(quote.dialog)

            const rawCharacters = await fetch('https://the-one-api.dev/v2/character?_id=' + quote.character, { headers: headers })
            const characters = await rawCharacters.json();
            const character = characters.docs[0];
            setCharacter(character.name)
        };

        pullQuotes();
    }, []);

    return (
        <div className={styles.container}>
            <h1>{quote}</h1>
            <h3>- {character}</h3>
        </div>

    );

};

export default Home;