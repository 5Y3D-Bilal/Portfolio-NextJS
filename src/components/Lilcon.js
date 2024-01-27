import React, { useRef } from 'react'
import { motion, useScroll } from "framer-motion"

const Lilcon = ({ reference }) => {
    const { scrollYProgress } = useScroll(
        {
            target: reference,
            offset: ['center end', 'center center']
        }
    )
    return (
        <figure className='absolute -left-[23px] stroke-dark dark:stroke-light '>
            <svg width="75" height='75' viewBox='0 0 100 100'>
                <circle cx='75' cy='50' r="20 " className='stroke-primary stroke-1 fill-none' />
                <motion.circle cx='75' cy='50' r="20 " className=' stroke-[5px] fill-white dark:stroke-primary'
                    style={{ pathLength: scrollYProgress }}
                />
                <circle cx='75' cy='50' r="10 " className='animate-pulse stroke-1 fill-dark' />
            </svg>
        </figure>
    )
}

export default Lilcon
