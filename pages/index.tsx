import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Page</title>
        <meta name="description" content="My first blog on Nextjs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hi, my name is Julio!
        </h1>

        <p className={styles.description}>
          I'm a React Developer
        </p>

        <div className={styles.grid}>
          <a
            href="https://linkedin.com/in/jperdomo95"
            className={styles.card}
            target="_blank"
          >
            <h2>My LinkedIn &rarr;</h2>
            <p>Because it's professional, get it?</p>
          </a>

          <a
            href="https://github.com/jperdomo95"
            className={styles.card}
            target="_blank"
          >
            <h2>My code &rarr;</h2>
            <p>Projects that I've made, it's a bit dusty.</p>
          </a>


          <a
            href="https://t.me/kyratgale"
            className={styles.card}
            target="_blank"
          >
            <h2>Let's chat &rarr;</h2>
            <p>It's telegram so, don't be afraid 😄</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
