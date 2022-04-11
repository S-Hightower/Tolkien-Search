import React from "react";

import styles from './component_css/Header.module.css';

function Header() {

    return(
        <div className={styles.header}>
            <h1>Tolkien Search</h1>
        </div>
    )
};

export default Header;