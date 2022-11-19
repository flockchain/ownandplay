import Head from 'next/head'
import Image from 'next/image'
import Homescreen from '../components/Homescreen'

export default function Home() {
  return (
    <div className="text-xl">
      <Head>
        <title>OWN&PLAY</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Homescreen/>
    </div>
  )
}
