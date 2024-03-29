import Head from 'next/head'
import { Inter } from 'next/font/google'
import Layout from '@/components/Layout'
import Image from 'next/image'
import profilePic from '../../public/images/profile/developer-pic-1.png'
import lightBulb from '../../public/images/svgs/miscellaneous_icons_1.svg'
import AnimatedText from '@/components/AnimatedText'
import { motion } from "framer-motion"
import Link from 'next/link'
import { LinkArrow } from '@/components/icons'
import HireMe from '@/components/HireMe'

const inter = Inter({ subsets: ['latin'] })

// Fade
const Fade = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 2,
    }
  }
}

// hover:bg-light hover:text-dark border-solid  border-2 duration-300 hover:duration-500 border-transparent hover:border-dark

const MotionLink = motion(Link)


export default function Home() {
  return (
    <>
      <Head>
        <title>Portifolio</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main className='flex items-center text-dark w-full min-h-screen'>
        <Layout className='pt-0'>
          <div className='flex items-center justify-between w-full'>
            <motion.div variants={Fade} animate="animate" initial="initial" className='w-1/2'>
              <Image src={profilePic} alt='Codings' className='w-full h-auto' />
            </motion.div>
            <div className='w-1/2 flex flex-col items-center self-center'>
              <AnimatedText text="Turning Vision Into Reality With Code And Design." className='dark:text-light !text-6xl text-left ' />
              <p className='my-4 text-base font-medium dark:text-light'>As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications.
                Explore my latest projects and articles, showcasing my expertise in React.js and web development.</p>
              <div className='flex items-center self-start mt-2'>
                <MotionLink
                  whileHover={{
                    backgroundColor: ["#121212", "rgba(131,58,180,1)", "rgba(253,29,29,1)", "rgba(252,176,69,1)", "rgba(131,58,180,1)", "#121212"],
                    transition: { duration: 3, repeat: Infinity }
                  }}
                  href="/dummy.pdf" target='_blank' className='dark:border-light border flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold ' download={true}>Resume
                  <LinkArrow className={"w-6 ml-1"} />
                </MotionLink>
                <Link href="mailto:54587dfdd@gmail.com" className='ml-4 text-lg font-medium capitalize text-dark underline dark:text-light'>Contact</Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />

        <div className='absolute right-8 bottom-8 inline-block w-24'>
          <Image src={lightBulb} alt='Bilal' className='w-full h-auto' />
        </div>
      </main>
    </>
  )
}



