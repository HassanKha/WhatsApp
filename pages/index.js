import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import SideBar from './../components/SideBar';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Whatsapp</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <SideBar/>
    </>
  )
}
