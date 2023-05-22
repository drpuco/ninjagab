import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

import Link from 'next/link'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>

      <h1 className={styles.title}>
        Homepage
      </h1>
      <p className={styles.text}>loremipsum
      </p>
      <p className={styles.text}>loremipsum</p>
      <Link href="/ninjas" className={styles.btn}>
        See Ninjas listing
      </Link>

    </div>
  )
}
