import { FC } from 'react';
import Head from 'next/head';

import { Navbar } from '../Navbar';

import styles from './MainLayout.module.css';

export const MainLayout: FC = ({ children }) => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Home - zxzx</title>
                <meta name="description" content="Home Page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Head>
                <title>Home2 - zxzx</title>
                <meta name="keywords" content="fernando, herrera, curso, next.js" />
            </Head>

            <Navbar />

            <main className={styles.main}>
                
                { children }

            </main>
        </div>
    )
}
