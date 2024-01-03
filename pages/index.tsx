import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/Components/Header'
import Head from 'next/head'
import SocialButton from '@/Components/SocialButton'
import Instagram from "../public/instagram.svg"
import Linkedin from "../public/linkedin.svg"
import ProjectPreview from '@/Components/ProjectPreview'
import Link from 'next/link'

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
        <div className="h-[30rem] flex flex-col gap-10 lg:gap-16 bg-gradient-to-br from-white via-neutral-300 to-stone-500 rounded-3xl p-10">
          <h1 className='text-3xl lg:text-5xl md:text-5xl text-semibold '>Hello, I'm Rehan, a frontend engineer</h1>
          <p className='flex-1 text-sm md:text-[16px] lg:text-[16px]'>As a dedicated Frontend Engineer, I thrive on transforming innovative design concepts into seamless, user-centric digital experiences, with a passion for crafting visually stunning and highly functional interfaces. </p>

          <div className='flex flex-col lg:flex-row items-center gap-4 justify-self-end'>
            <a href="mailto:ra3702672@gmail.com? subject=subject text">
              <button className='py-3 px-4 lg:px-12 md:px-12 font-medium w-60 lg:w-auto bg-black text-white rounded-3xl transition hover:opacity-75'> Contact me</button>
            </a>            <div className='flex items-center gap-4'>
              {/* <SocialButton bgColor='instagram'>
                <Instagram className="h-5 w-5" />
              </SocialButton> */}
              <Link href="https://www.linkedin.com/in/rehanali2003" target='_blank'>
                <SocialButton bgColor='linkedin'>
                  <Linkedin className="h-5 w-5" />
                </SocialButton>
              </Link>

            </div>
          </div>
        </div>
        <div className="h-[30rem] rounded-3xl p-8 bg-[url('/Photo.jpeg')] bg-cover bg-center" />
      </section>

      <section className='grid grid-cols-1 lg:grid-cols-2 gap-4 my-4' id='projects'>
        <a href="https://apple-redesign-git-main-rehan517.vercel.app/" target='_blank'>
          <ProjectPreview imageUrl='/apple.png' name='Apple Redesign' description='Redesigned the Apple website' />
        </a>
        <a href="https://rehan-internship.vercel.app/" target='_blank'>
          <ProjectPreview imageUrl='/ultra.png' name='Ultraverse' description='nft marketplace clone' />
        </a>
        <a href="https://clothing-brand-next.vercel.app/" target='_blank'>
          <ProjectPreview imageUrl='/clothing.png' name='Ecommerce' description='Online clothing brand' dark />
        </a>
        <a href="https://library-react-rehan.vercel.app/" target='_blank'>
          <ProjectPreview imageUrl='/library.png' name='Library' description='Book store' />
        </a>
      </section>

      <section className='grid grid-cols-1 my-4' id='contact'>
        <div className="h-[20rem] flex flex-col gap-10 bg-gradient-to-br from-white via-neutral-300 to-stone-500 rounded-3xl p-10">
          <h1 className='text-3xl lg:text-5xl md:text-5xl text-semibold '>Want to work together?</h1>
          <p className='flex-1'>Feel free to reach out for collaborations or just a friendly hello.</p>

          <div className='flex flex-row items-center gap-4 justify-self-end'>
            <a href="mailto:ra3702672@gmail.com? subject=subject text">
              <button className='py-3 px-4 lg:px-12 md:px-12 font-medium w-60 lg:w-auto bg-black text-white rounded-3xl transition hover:opacity-75'> Contact me</button>
            </a>
            <div className='flex items-center gap-3 lg:gap-4 md:gap-4'>

              <Link href="https://www.linkedin.com/in/rehanali2003" target='_blank'>
                <SocialButton bgColor='linkedin'>
                  <Linkedin className="h-5 w-5" />
                </SocialButton>
              </Link>
            </div>
          </div>
        </div>
      </section>


    </div>

  )
}
