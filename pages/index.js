import Head from 'next/head'
import Image from 'next/image'
import { ForHireCard } from '../src/ForHireCard'
import HeroImg from '../src/HeroImg'
import SkillCard from '../src/SkillCard'

export default function Home() {
  return (
    <div className="bg-white">
      <Head>
        <title>Md. Sabuj Sarker - Expert For Hire</title>
        <meta name="description" content="Md. Sabuj Sarker - doer as Software Architect, Project Manager, Business Consultant" />
      </Head>
      <div className='
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

      <div className='
        mt-4
        p-4
        rounded-2xl
        bg-siteGreen
        flex
        flex-wrap
        justify-center
      '>
        <ForHireCard text="Open Source Contributor" />
        <ForHireCard text="Software Architect for Hire" />
        <ForHireCard text="Software Engineer for Hire" />
        <ForHireCard text="Programmer for Hire" />
        <ForHireCard text="React.js Expert for Hire" />
        <ForHireCard text="Next.js Expert for Hire" />
      </div>
    </div>
  )
}
