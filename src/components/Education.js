import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import Lilcon from './Lilcon'

const Details = ({ type, time, place, info }) => {
    const ref = useRef(null)
    return (
        <li ref={ref} className='my-8 dark:text-light first:mt-8 last:md-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
            <Lilcon reference={ref} />
            <motion.div
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5, type: 'spring' }}
            >
                <h3 className='capitalize font-bold text-2xl'>{type}</h3>
                <span className='capitalize font-medium text-dark/75 '>{time} | {place}</span>
                <p className='font-medium w-full'>{
                    info}</p>
            </motion.div>
        </li>
    )
}

const Education = () => {
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
                Education
            </h2>

            <div ref={ref} className='w-[75%] mx-auto relative pt-10'>
                <motion.div
                    style={{ scaleY: scrollYProgress }}
                    className='absolute left-8 top-0  w-[4px] h-full bg-primary origin-top' />
                <ul className='w-full flex flex-col itmes-start justify-between ml-4'>
                    <Details
                        type='Bachelor Of Science In Computer Science'
                        time="Google"
                        place="Massachusetts Institute Of Technology (MIT)"
                        info='Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial 
                         Intelligence.'
                    />
                    <Details
                        type='Master Of Computer Science'
                        time="Google"
                        place="Stanford University"
                        info='Completed a masters project on deep learning, developing a new neural network architecture for natural 
                        language understanding.'
                    />
                    <Details
                        type='Online Coursework'
                        time="Google"
                        place="Coursera And EdX"
                        info='Completed coursework in advanced topics such as Reinforcement Learning, Computer Vision, and Machine 
                        Learning Engineering.
                        '
                    />
                </ul>
            </div>
        </div>
    )
}

export default Education
