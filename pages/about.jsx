import Image from "next/image"
import styles from "../styles/about.module.css"
import Head from 'next/head';
const about = () => {
  return (

    <>
    <Head>
      <title>About</title>
    </Head>
      <div className={styles.heading}>about</div>
      <div className="heading">This is about</div>
      <style jsx>
      {
        `
        .heading{
        color:blue;
        }
        `
      }
      </style>
      <Image src="https://images.pexels.com/photos/1433052/pexels-photo-1433052.jpeg?auto=compress&cs=tinysrgb&w=600" width="600" height="600" alt="about image"></Image>
    </>

  )
}

export default about