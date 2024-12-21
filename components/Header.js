import React from "react";
import Image from 'next/image';
import styles from "./Header.module.css";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.flex}>
                <div className={styles.logo}>
                    <Image src="logo.svg" alt="Логотип" width={180} height={38} />
                </div>
                <div className={styles.contact}>
                    <div><p>По вопросам и предложениям </p><a href="mailto:pionerrr@sila.ru">pionerrr@sila.ru</a></div>
                    <div><p>Для консультаций </p><a href="tel:+7 (495) 456-24-21">+7 (495) 456-24-21</a></div>
                </div>
            </div>
        </header>
    );
};

export default Header;
