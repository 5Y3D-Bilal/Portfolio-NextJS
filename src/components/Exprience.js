import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import Lilcon from './Lilcon'

const Details = ({ postion, company, companyLink, time, address, work }) => {
    const ref = useRef(null)
    return (
        <li ref={ref} className='my-8 first:mt-8 dark:text-light last:md-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
            <Lilcon reference={ref} />
            <motion.div
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5, type: 'spring' }}
            >
                <h3 className='capitalize font-bold text-2xl'>{postion}&nbsp; <a target="_blank" className='text-primary capitalize' href={companyLink}>{`@${company}`}</a></h3>
                <span className='capitalize font-medium text-dark/75 '>{time} | {address}</span>
                <p className='font-medium w-full'>{work}</p>
            </motion.div>
        </li>
    )
}

const Exprience = () => {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll(
        {
            target: ref,
            offset: ['start end', 'center start']
        }
    )
    return (
        <div className='my-64'>
            <h2 className='font-bold text-8xl md-32 w-full text-center dark:text-light'>
                Experience
            </h2>

            <div ref={ref} className='w-[75%] mx-auto relative pt-10'>
                <motion.div
                    style={{ scaleY: scrollYProgress }}
                    className='absolute left-8 top-0  w-[4px] h-full bg-primary origin-top' />
                <ul className='w-full flex flex-col itmes-start justify-between ml-4'>
                    <Details
                        postion='Trainner'
                        company="Quaid College"
                        time="Winter 2023"
                        address='Bank Stop, 114-A Wahdat Rd, Block A Muslim Town, Lahore, Punjab 54000'
                        work="Worked on a team responsible for developing new features for Google's 
                     search engine, including improving the accuracy and relevance of search results and 
                     developing new tools for data analysis and visualization."


                    />
                    <Details
                        postion='Seinor Trainner'
                        company="Quaid College"
                        time="Summer 2024"
                        address='Bank Stop, 114-A Wahdat Rd, Block A Muslim Town, Lahore, Punjab 54000'
                        work="Worked on a team responsible for developing a new mobile app feature that allowed users to create and 
                        share short-form video content, including designing and implementing a new user interface and developing 
                        the backend infrastructure to support the feature."


                    />
                </ul>
            </div>
        </div>
    )
}

export default Exprience
