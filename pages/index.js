import Head from 'next/head'
import Image from 'next/image'
import Header from '../src/Header'

export default function Home() {
  return (
    <div className="bg-white">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Md. Sabuj Sarker - doer as Software Architect, Project Manager, Business Consultant" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="m-[20px]">
        <Header />
      </main>
    </div>
  )
}
