import Head from 'next/head'
import Image from 'next/image'
import { Footer } from '../src/Footer'
import { ForHireCard } from '../src/ForHireCard'
import Header from '../src/Header'
import HeroImg from '../src/HeroImg'
import SkillCard from '../src/SkillCard'

export default function Services() {
  return (
    <div className="bg-white">
      <Head>
        <title>Services Provided by Expert - Md. Sabuj Sarker</title>
        <meta name="description" content="Md. Sabuj Sarker - doer as Software Architect, Project Manager, Business Consultant" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
        </div>

        <div className='
          mt-4
        '>
          <Footer />
        </div>
      </main>
    </div>
  )
}
