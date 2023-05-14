import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/page.module.scss';

export default function Home() {
	return (
		<div className={styles.container}>
			<h1>Home</h1>
		</div>
	);
}
