import Head from 'next/head'
import Image from 'next/image'
import Header from '../src/Header'
import HeroImg from '../src/HeroImg'
import SkillCard from '../src/SkillCard'

export default function Home() {
  return (
    <div className="bg-white">
      <Head>
        <title>Md. Sabuj Sarker - Expert For Hire</title>
        <meta name="description" content="Md. Sabuj Sarker - doer as Software Architect, Project Manager, Business Consultant" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="m-4">
        <Header />
        <div className='
        pt-4
        flex
        flex-col
        md:flex-row
        justify-between
        '>
          <div className='flex-1'>
              <SkillCard />
          </div>
          <div className='h-6 md:w-6'>

          </div>
          <div className='flex-1'>
            <HeroImg />
          </div>
        </div>
      </main>
    </div>
  )
}
