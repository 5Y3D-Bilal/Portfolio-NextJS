import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React, { useRef } from 'react'
import artical1 from '../../public/images/articles/pagination component in reactjs.jpg'
import artical2 from '../../public/images/articles/create modal component in react using react portals.png'
import { motion, useMotionValue } from 'framer-motion'
import articles1 from '../../public/images/articles/form validation in reactjs using custom react hook.png'
import articles2 from '../../public/images/articles/smooth scrolling in reactjs.png'
import articles3 from '../../public/images/articles/create modal component in react using react portals.png'
import articles4 from '../../public/images/articles/todo list app built using react redux and framer motion.png'
import articles5 from '../../public/images/articles/What is Redux with easy explanation.png'
import articles6 from '../../public/images/articles/What is higher order component in React.jpg'

const FramerIMAGE = motion(Image)

const HoverImage = ({ title, img, link }) => {

    const x = useMotionValue(0)
    const y = useMotionValue(0)
    const imgRef = useRef(null)


    function handleMouse(e) {
        imgRef.current.style.display = "inline-block"
        x.set(e.pageX)
        y.set(-10)
    }

    function handleMouseLeave(e) {
        imgRef.current.style.display = "none"
        x.set(0)
        y.set(0)
    }


    return (
        <Link
            onMouseMove={handleMouse}
            onMouseLeave={handleMouseLeave}
            href={link} target='_blank'>
            <h2 className='capitalize text-xl font-semibold hover:underline dark:text-light'>{title}</h2>
            <FramerIMAGE style={{ x: x, y: y }} ref={imgRef} src={img} alt={title} className='z-40 w-96 h-auto hidden absolute rounded-lg' />
        </Link>
    )
}

const Article = ({ img, title, date, link }) => {
    return (
        <motion.li
            initial={{ y: 200 }}
            whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}

            className='relative w-full p-4 py-5 my-4 rounded-lg flex items-center justify-between bg-light dark:bg-dark text-dark first:mt-0 dark:border-light border border-solid border-dark border-r-4 border-b-4 '>
            <HoverImage title={title} img={img} link={link} />
            <span className='text-primary font-semibold pl-4 '>{date}</span>
        </motion.li>
    )
}

const FeaturedArticle = ({ img, title, time, summary, link }) => {
    return (
        <li className='col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl '>
            <Link href={link} target='_blank' className='w-full cursor-pointer overflow-hidden rounded-lg inline-block'>
                <FramerIMAGE
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    src={img} alt={title} className='w-full h-auto' />
            </Link>
            <Link href={link} target='_blank' >
                <h2 className='capitalize text-2xl font-bold my-2 hover:underline mt-4'> {title}</h2>
            </Link>
            <p className='text-sm md-2 '>{summary}</p>
            <span className='text-primary font-semibold'>{time}</span>
        </li>
    )
}

const articles = () => {
    return (
        <>
            <Head>
                <title>Portfolio | Articles</title>
            </Head>
            <main>
                <Layout>
                    <AnimatedText text="Words Can Change The World! " className='mb-16' />
                    <ul className='grid grid-cols-2 gap-16'>
                        <FeaturedArticle
                            title="Build A Custom Pagination Component In Reactjs From Scratch"
                            summary="Learn how to build a custom pagination component in ReactJS from scratch. 
                        Follow this step-by-step guide to integrate Pagination component in your ReactJS project."

                            time="9 min read"
                            link="/"
                            img={artical1}
                        />
                        <FeaturedArticle
                            title="Creating An Efficient Modal Component In React Using Hooks And Portals"
                            summary="Learn how to build a custom Modal component in ReactJS from scratch. 
                        Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
                            time="20 min read"
                            link="/"
                            img={artical2}
                        />
                    </ul>
                    <h2 className='font-bold text-4xl w-full text-center my-16 mt-32 dark:text-light'>All Articles</h2>
                    <ul>
                        <Article
                            title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
                            date="March 2020"
                            img={articles1}
                            link="/"
                        />
                        <Article
                            title="Silky Smooth Scrolling In Reactjs: A Step-By-Step Guide For React Developers"
                            date="Dec 2002"
                            img={articles2}
                            link="/"
                        />
                        <Article
                            title="Creating An Efficient Modal Component In React Using Hooks And Portals"
                            date="Jan 2021"
                            img={articles3}
                            link="/"
                        />
                        <Article
                            title="Build A Fabulous Todo List App With React, Redux And Framer-Motion"
                            date="Fer 2023"
                            img={articles4}
                            link="/"
                        />
                        <Article
                            title="Redux Simplified: A Beginner's Guide For Web Developers"
                            date="jan 2012"
                            img={articles5}
                            link="/"
                        />
                        <Article
                            title="What Is Higher Order Component (Hoc) In React?"
                            date="March 2010"
                            img={articles6}
                            link="/"
                        />
                    </ul>
                </Layout>
            </main>
        </>
    )
}

export default articles
