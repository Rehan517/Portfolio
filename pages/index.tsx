import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/Components/Header'
import Head from 'next/head'
import SocialButton from '@/Components/SocialButton'
import Instagram from "../public/instagram.svg"
import Linkedin from "../public/linkedin.svg"
import ProjectPreview from '@/Components/ProjectPreview'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>Rehan Ali</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <section className='grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-4 mb-4'>
        <div className="h-[30rem] flex flex-col gap-16 bg-gradient-to-br from-neutral-50 to-slate-900 rounded-3xl p-10">
          <h1 className='text-5xl text-semibold '>Hello, I'm Rehan, a frontend engineer</h1>
          <p className='flex-1'>I care a lot about using design for positive impact, and enjoy creating user-centric, delightful, and human experiences.</p>

          <div className='flex flex-col lg:flex-row items-center gap-4 justify-self-end'>
            <button className='py-3 px-12 font-medium w-60 lg:w-auto bg-black text-white rounded-3xl transition hover:opacity-75'> Contact me</button>
            <div className='flex items-center gap-4'>
              <SocialButton bgColor='instagram'>
                <Instagram className="h-5 w-5" />
              </SocialButton>
              <SocialButton bgColor='linkedin'>
                <Linkedin className="h-5 w-5" />
              </SocialButton>

            </div>
          </div>
        </div>
        <div className="h-[30rem] rounded-3xl p-8 bg-[url('/IMG_8071.JPG')] bg-cover bg-center" />
      </section>

      <section className='grid grid-cols-1 lg:grid-cols-2 gap-4 my-4' id='projects'>
        <ProjectPreview imageUrl='/apple.png' name='Apple Redesign' description='Redesigned the Apple website'/>
        <ProjectPreview />
        <ProjectPreview />
        <ProjectPreview />
      </section>

      <section className='grid grid-cols-1 my-4' id='contact'>
        <div className="h-[20rem] flex flex-col gap-10 bg-gradient-to-br from-neutral-50 to-slate-900 rounded-3xl p-10">
          <h1 className='text-5xl text-semibold '>Want to work together?</h1>
          <p className='flex-1'>Feel free to reach out for collaborations or just a friendly hello.</p>

          <div className='flex flex-row items-center gap-4 justify-self-end'>
            <button className='py-3 px-12 font-medium w-60 lg:w-auto bg-black text-white rounded-3xl transition hover:opacity-75'> Contact me</button>
            <div className='flex items-center gap-4'>
              <SocialButton bgColor='instagram'>
                <Instagram className="h-5 w-5" />
              </SocialButton>
              <SocialButton bgColor='linkedin'>
                <Linkedin className="h-5 w-5" />
              </SocialButton>

            </div>
          </div>
        </div>
      </section>


    </div>

  )
}
