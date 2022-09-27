import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>JSON Formatter</title>
        <meta name="description" content="JSON Formatter for beautify view of javascript object notation." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div>
          <h1 className='text-center bg-red-400 ' >Hello JSON Formatter</h1>
          <img src="/vercel.svg" alt="Icon" />
        </div>
      </main>
    </div>
  )
}
