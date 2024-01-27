import React from 'react'
import { motion } from 'framer-motion'
import { FaGlobeAsia } from "react-icons/fa";

const SKILL = ({ name, x, y }) => {
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            initial={{ x: 0, y: 0 }}
            animate={{}}
            whileInView={{ x: x, y: y }}
            transition={{ duration: 1.5 }}
            className='flex items-center absolute  justify-center rounded-full font-semibold  bg-dark dark:bg-light dark:text-dark text-light py-3 px-6 shadow-dark ' >
            {name}
        </motion.div>
    )
}

const Skills = () => {
    return (
        <>
            <h2 className='font-bold text-8xl mt-64 w-full text-center dark:text-light '>Skills</h2>
            <div
                className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark dark:bg-light'>
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    className='flex items-center justify-center rounded-full font-semibold  bg-dark  text-[28px] text-light p-8 shadow-dark ' >
                    {/* web */}
                    <FaGlobeAsia />
                </motion.div>

                <SKILL name="HTML" x="-12vw" y='4vw' />
                <SKILL name="CSS" x="-5vw" y='-8vw' />
                <SKILL name="JavaScript" x="20vw" y='6vw' />
                <SKILL name="ReactJS" x="0vw" y='12vw' />
                <SKILL name="NextJS" x="-20vw" y='-12vw' />
                <SKILL name="GatsbyJS" x="18vw" y='-12vw' />
                <SKILL name="AI and Chat-GPT" x="35vw" y='-5vw' />
                <SKILL name="Ethical Hacking" x="0vw" y='-21vw' />
                <SKILL name="Node JS" x="-25vw" y='15vw' />
                <SKILL name="Tailwind CSS" x="18vw" y='-7vw' />
                <SKILL name="MERN" x="-20vw" y='3vw' />
                <SKILL name="Mechine Learning" x="18vw" y='18vw' />
                {/* <SKILL name="Tailwind CSS" x="18vw" y='18vw' /> */}
                {/* <SKILL name="Tailwind CSS" x="18vw" y='18vw' /> */}
            </div>
        </>
    )
}

export default Skills
