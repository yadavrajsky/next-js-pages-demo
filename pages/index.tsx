import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Navbar from "../components/Navbar"
import Head from 'next/head';
export default function Home() {
  return (
  <>
  <Head>
    <title>Home</title>
  </Head>
    <Navbar/>
  </>
  )
}
