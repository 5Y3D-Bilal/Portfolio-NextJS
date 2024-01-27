import Link from 'next/link'
import React from 'react'
import Logo from './Logo'
import { useRouter } from 'next/router'
import { DribbbleIcon, GithubIcon, LinkedInIcon, MoonIcon, PinterestIcon, SunIcon, TwitterIcon } from './icons'
import { motion } from "framer-motion"
import useSwitchHook from './Hooks/useSwitchHook'

const CoustomLink = ({ href, title, className = "" }) => {
    // Made dynamic pathing for routes
    const routor = useRouter()
    return (
        <Link href={href} className={`${className} relative group dark:text-white`}>
            {title}

            <span className={`
            h-[1px] inline-block group-hover:w-full transition-[width] ease duration-300 dark:bg-light  bg-dark absolute left-0 -bottom-0.5 ${routor.asPath === href ? 'w-full' : 'w-0'}
            `}>&nbsp;</span>
        </Link>
    )
}

const NavBar = () => {
    const [mode, setMode] = useSwitchHook()
    return (
        <header className='w-full px-32 py-8 font-medium flex items-center justify-between'>
            {/* Sections */}
            <nav>
                <CoustomLink href="/" title='Home' className='mr-4' />
                <CoustomLink href="/about" title='About' className='mx-4' />
                <CoustomLink href="/projects" title='Projects' className='mx-4' />
                <CoustomLink href="/articles" title='Articles' className='ml-4' />
            </nav>
            {/* Socials */}
            <nav className='flex items-center justify-center flex-wrap'>
                {/* Here we are using motion framer + WhileHover Method */}
                <motion.a className='w-6 mr-3' whileHover={{ y: -8 }} href="https://twitter.com" target="_blank"><TwitterIcon /></motion.a>
                <motion.a className='w-6 mx-3 dark:bg-light rounded-full ' whileHover={{ y: -8 }} href="https://github.com/5Y3D-Bilal" target="_blank"><GithubIcon /></motion.a>
                <motion.a className='w-6 mx-3' whileHover={{ y: -8 }} href="https://linkedin.com" target="_blank"><LinkedInIcon /></motion.a>
                <motion.a className='w-6 mx-3' whileHover={{ y: -8 }} href="https://pinterest.com" target="_blank"><PinterestIcon /></motion.a>
                <motion.a className='w-6 ml-3' whileHover={{ y: -8 }} href="https://dribbble.com" target="_blank"><DribbbleIcon /></motion.a>

                <button onClick={() => setMode(mode === 'light' ? 'dark' : 'light')} className='ml-3 flex items-center justify-center rounded-full p-1 bg-light border-gray-500 dark:bg-light border-solid border '>
                    {mode === "dark" ? <SunIcon className={"fill-dark"} /> : <MoonIcon className={"fill-dark"} />}
                </button>
            </nav>
            {/* Logo */}
            <div className='absolute left-[50%] top-2 translate-x-[-50%]' >
                <Logo />
            </div>
        </header>
    )
}

export default NavBar
