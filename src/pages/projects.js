import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import { GithubIcon } from '@/components/icons'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import project1 from '../../public/images/projects/crypto-screener-cover-image.jpg'
import project5 from '../../public/images/projects/devdreaming.jpg'
import project2 from '../../public/images/projects/agency-website-cover-image.jpg'
import project3 from '../../public/images/projects/fashion-studio-website.jpg'
import project4 from '../../public/images/projects/nft-collection-website-cover-image.jpg'
import { motion } from 'framer-motion'

const FramerIMAGE = motion(Image)


const FeturedProject = ({ type, title, summary, img, link, github }) => {
    return (
        <article className='w-full flex items-center justify-between p-8 rounded-3xl border border-solid border-dark bg-light shadow-2xl'>
            {/* <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark' /> */}
            <Link href={link} target='_blank' className='w-1/2 cursor-pointer overflow-hidden rounded-lg'>
                <FramerIMAGE src={img} alt={title} className='w-full h-auto' whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }} />
            </Link>

            <div className='w-1/2 flex flex-col items-start justify-between pl-6 '>
                <span className='text-primary font-medium text-xl '>{type}</span>
                <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-4xl font-bold'>{title}</h2>
                </Link>
                <p className='my-2 font-medium text-dark'>{summary}</p>
                <div className='mt-2 flex items-center'>
                    <Link href={github} target='_blank' className='w-10'><GithubIcon /></Link>
                    <Link href={link} target='_blank' className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold'>Visit Project</Link>
                </div>
            </div>
        </article>
    )
}

const Project = ({ title, type, img, link, github }) => {
    return (
        <article className='w-full flex flex-col items-center justify-center rounded-2xl border border-solid dark:border-light border-dark bg-light dark:bg-dark p-6 relative '>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-light' />
            <Link href={link} target='_blank' className='w-full cursor-pointer overflow-hidden rounded-lg'>
                <FramerIMAGE
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    src={img} alt={title} className='w-full h-auto' />
            </Link>

            <div className='w-full flex flex-col items-start justify-between mt-4 '>
                <span className='text-primary font-medium text-xl '>{type}</span>
                <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-3xl font-bold dark:text-light'>{title}</h2>
                </Link>
                <div className='mt-2 flex items-center w-full justify-between'>
                    <Link href={link} target='_blank' className='underline text-lg font-semibold text-light'>Visit</Link>
                    <Link href={github} target='_blank' className='w-8 dark:bg-light dark:rounded-full'><GithubIcon /></Link>
                </div>
            </div>
        </article>
    )
}

const projects = () => {
    return (
        <>
            <Head>
                <title>Portfolio | Projects</title>
            </Head>
            <main className='w-full mb-16 flex flex-col items-center justify-center'>


                <Layout className='pt-16'>
                    <AnimatedText text='Imagination Trumps Knowledge!' className='mb-16' />

                    <div className='grid grid-cols-12 gap-24'>
                        <div className='col-span-12'>

                            <FeturedProject
                                title="  Crypto Screener Application "
                                type="Featured Project"
                                img={project1}
                                github='https://github.com/5Y3D-Bilal'
                                summary="
                                A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts.
                            It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your
                            local currency.
                                "
                                link="/"
                            />
                        </div>
                        <div className='col-span-6'>
                            <Project
                                title="  Crypto Screener Application "
                                type="Featured Project"
                                img={project1}
                                github='https://github.com/5Y3D-Bilal'
                                link="/"
                            />
                        </div>
                        <div className='col-span-6'>
                            <Project
                                title=" Crypto Screener Application "
                                type="Featured Project"
                                img={project2}
                                github='https://github.com/5Y3D-Bilal'
                                link="/"
                            />
                        </div>

                        <div className='col-span-12'>
                            <FeturedProject
                                title="  Crypto Screener Application "
                                type="Featured Project"
                                img={project5}
                                github='https://github.com/5Y3D-Bilal'
                                summary="
                                A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts.
                            It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your
                            local currency.
                                "
                                link="/"
                            />
                        </div>
                        <div className='col-span-6'>
                            <Project
                                title=" Crypto Screener Application "
                                type="Featured Project"
                                img={project3}
                                github='https://github.com/5Y3D-Bilal'
                                link="/"
                            />
                        </div>
                        <div className='col-span-6'>
                            <Project
                                title=" Crypto Screener Application "
                                type="Featured Project"
                                img={project4}
                                github='https://github.com/5Y3D-Bilal'
                                link="/"
                            />
                        </div>
                    </div>
                </Layout>
            </main>
        </>
    )
}

export default projects
