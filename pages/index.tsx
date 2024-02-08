import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/Components/Header'
import Head from 'next/head'
import SocialButton from '@/Components/SocialButton'
import Instagram from "../public/instagram.svg"
import Linkedin from "../public/linkedin.svg"
import ProjectPreview from '@/Components/ProjectPreview'
import Link from 'next/link'
import { AcademicCapIcon, ClipboardDocumentIcon } from '@heroicons/react/24/outline'


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
              <Link href="/Rehan Ali | Resume.pdf" target='_blank'>
                <SocialButton bgColor=''>
                  <ClipboardDocumentIcon className='h-6 w-6' />
                </SocialButton>
              </Link>

            </div>
          </div>
        </div>
        <div className="h-[30rem] rounded-3xl p-8 bg-[url('/Photo.jpeg')] bg-cover bg-center" />
      </section>

      <section className='grid gap-4 my-4' id='projects'>
        <div className='flex flex-col lg:flex-row w-full py-6'>
          <a href="https://apple-redesign-git-main-rehan517.vercel.app/" className='w-[100%] lg:w-[75%] pt-5 lg:pt-0' target='_blank'>
            <ProjectPreview imageUrl='/apple.png' name='' description='' />
          </a>
          <div className='lg:w-[40%] w-[100%]  flex flex-col items-center justify-center px-4 pt-5 lg:pt-0'>
            <h1 className='text-lg font-bold'>Apple Redesign</h1>
            <p className='text-center pt-4'>Redsigned the Apple website with the use of NEXT JS, TypeScript,Tailwind CSS, Redux, Sanity Studios for content managment and Stripe to facilitate payments.</p>
          </div>
        </div>

        <div className='flex flex-col lg:flex-row w-full py-6'>
          <div className='lg:w-[40%] w-[100%] lg:flex flex-col items-center justify-center px-4 hidden '>
            <h1 className='text-lg font-bold'>Ultraverse</h1>
            <p className='text-center pt-4'>Created a fully responsive and dynamic NFT marketplace. Utilised React framework and fetched data from cloud APIs with Axios. Implemented animations and loading states to enhance user experience.</p>
          </div>

          <a href="https://rehan-internship.vercel.app/" className='w-[100%] lg:w-[75%] pt-5 lg:pt-0' target='_blank'>
            <ProjectPreview imageUrl='/ultra.png' name='' description='' />
          </a>

          <div className='lg:w-[40%] w-[100%] lg:hidden flex-col items-center justify-center px-4 flex pt-5 lg:pt-0'>
            <h1 className='text-lg font-bold'>Ultraverse</h1>
            <p className='text-center pt-4'>Created a fully responsive and dynamic NFT marketplace. Utilised React framework and fetched data from cloud APIs with Axios. Implemented animations and loading states to enhance user experience.</p>
          </div>
        </div>

        <div className='flex flex-col lg:flex-row w-full py-6'>
          <a href="https://clothing-brand-next.vercel.app/" className='w-[100%] lg:w-[60%] pt-5 lg:pt-0' target='_blank'>
            <ProjectPreview imageUrl='/clothing.png' name='' description='' dark />
          </a>

          <div className='lg:w-[40%] w-[100%] flex flex-col items-center justify-center px-4 pt-5 lg:pt-0'>
            <h1 className='text-lg font-bold'>Ecommerce</h1>
            <p className='text-center pt-4'>Designed an online Ecommerce shop for a clothing brand using NEXT JS, TypeScript, Tailwind CSS, Redux and Sanity Studios.</p>
          </div>
        </div>

        <div className='flex flex-col lg:flex-row w-full py-6'>
        <div className='lg:w-[40%] w-[100%]  lg:flex flex-col items-center justify-center px-4 hidden'>
            <h1 className='text-lg font-bold'>Library</h1>
            <p className='text-center pt-4'>Online Library shop built with React, JavaScript and styled with CSS. Product data fetched from API with the use of Axios.</p>
          </div>

          <a href="https://library-react-rehan.vercel.app/" className='w-[100%] lg:w-[75%] pt-5 lg:pt-0' target='_blank'>
            <ProjectPreview imageUrl='/library.png' name='' description='' />
          </a>

          <div className='lg:w-[40%] w-[100%]  lg:hidden flex-col items-center justify-center px-4 flex pt-5 lg:pt-0'>
            <h1 className='text-lg font-bold'>Library</h1>
            <p className='text-center pt-4'>Online Library shop built with React, JavaScript and styled with CSS. Product data fetched from API with the use of Axios.</p>
          </div>
        </div>
      </section>

      <section className='grid grid-cols-1 my-4' id='contact'>
        <div className="h-[24rem] flex flex-col gap-10 bg-gradient-to-br from-white via-neutral-300 to-stone-500 rounded-3xl p-10">
          <h1 className='text-3xl lg:text-5xl md:text-5xl text-semibold '>Want to work together?</h1>
          <p className='flex'>Feel free to reach out for collaborations or just a friendly hello.</p>

          <div className='flex flex-col lg:flex-row items-center gap-4 justify-self-end pt-0 lg:pt-10'>
            <a href="mailto:ra3702672@gmail.com? subject=subject text">
              <button className='py-3 px-4 lg:px-12 md:px-12 font-medium w-60 lg:w-auto bg-black text-white rounded-3xl transition hover:opacity-75'> Contact me</button>
            </a>
            <div className='flex items-center gap-3 lg:gap-4 md:gap-4'>

              <Link href="https://www.linkedin.com/in/rehanali2003" target='_blank'>
                <SocialButton bgColor='linkedin'>
                  <Linkedin className="h-5 w-5" />
                </SocialButton>
              </Link>
              <Link href="/Rehan Ali | Resume.pdf" target='_blank'>
                <SocialButton bgColor=''>
                  <ClipboardDocumentIcon className='h-6 w-6' />
                </SocialButton>
              </Link>
              <Link href="/Rehan's Certificate of Completion.pdf" target='_blank'>
                <SocialButton bgColor=''>
                  <AcademicCapIcon className='h-6 w-6' />
                </SocialButton>
              </Link>
            </div>
          </div>
        </div>
      </section>


    </div>

  )
}
