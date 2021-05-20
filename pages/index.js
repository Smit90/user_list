import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <>
      <Head>
        <title>Coding Hell | Home</title>
        <meta name="keywords"  content="Coding"/>
      </Head>
      <div >
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>Some auto generated fake text.</p>
        <p className={styles.text}>Some auto generated fake text.</p>
        <Link href="/ninjas">
          <a className={styles.btn}>See User Listing</a>
        </Link>
      </div>
    </>
  )
}
