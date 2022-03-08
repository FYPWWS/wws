import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Forecast() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Forecast
        </h1>
      </main>
    </div>
  )
}
