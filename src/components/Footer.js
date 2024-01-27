import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className='w-full border-t-2 border-solid border-dark dark:border-light font-medium text-lg '>
            <Layout className='py-8 flex items-center justify-between '>
                <span className='dark:text-light'>{new Date().getFullYear()}&copy; All Rights Reserved.</span>
                <div className='flex items-center dark:text-light'>
                    Build By <span className='text-primary text-2xl px-1'>&#9825;</span> <Link href='/' className='underline underline-offset-2'>Bilal567</Link>
                </div>
                <Link href='/' className='dark:text-light'>Say hello</Link>
            </Layout>
        </footer>
    )
}

export default Footer
