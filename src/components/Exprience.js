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
                        postion='Software Engineer'
                        company="Google"
                        time="2022-Present"
                        address='Mountain View, CA'
                        work="Worked on a team responsible for developing new features for Google's 
                     search engine, including improving the accuracy and relevance of search results and 
                     developing new tools for data analysis and visualization."


                    />
                    <Details
                        postion='Intern '
                        company="Facebook"
                        time="Summer 2021"
                        address='Menlo Park, CA.'
                        work="Worked on a team responsible for developing a new mobile app feature that allowed users to create and 
                        share short-form video content, including designing and implementing a new user interface and developing 
                        the backend infrastructure to support the feature."


                    />
                    <Details
                        postion='Software Developer'
                        company="Amazon"
                        time="2020-2021"
                        address='Seattle, WA.'
                        work="Worked on a team responsible for developing Amazon's mobile app, including implementing new features such 
                        as product recommendations and user reviews, and optimizing the app's performance and reliability."


                    />
                    <Details
                        postion='Software Developer'
                        company="Microsoft"
                        time="Summer 2019"
                        address='Redmond, WA.'
                        work="Worked on a team responsible for developing new features for Microsoft's Windows operating system, 
                        including implementing a new user interface for a system settings panel and optimizing the performance of 
                        a core system component."


                    />
                    <Details
                        postion='Teaching Assistant'
                        company="MIT"
                        time="Fall 2018"
                        address='Massachusetts Ave, Cambridge, MA.'
                        work="Assisted in teaching a course on computer programming, held office hours to help students with assignments, 
                        and graded exams and assignments."


                    />

                </ul>
            </div>
        </div>
    )
}

export default Exprience
