import React from 'react'
import Arrow from "../public/arrow.svg"
import { motion } from "framer-motion"

interface Props {
    name?: string | undefined;
    description?: string | undefined;
    imageUrl?: string | undefined;
    bgColor?: string | undefined;
    dark?: boolean | undefined;
}

function ProjectPreview({
    name = "Block name",
    description = "This is an amazing block",
    imageUrl = "/project-1.png",
    bgColor = "#e4e4e7",
    dark = false

}: Props) {
    return (
        <motion.div className={`h-[25rem] rounded-3xl overflow-hidden ${dark ? "dark" : ""} shadow-xl w-[100%]`}
            style={{ background: `${bgColor}` }}
            initial = "initial"
            whileInView="animate"
            variants={PreviewAnimation}>
            <div className='h-full w-full px-10 py-6 duration-[500ms] transition-all ease-in-out hover:scale-105 bg-cover bg-no-repeat bg-center '
                style={{ backgroundImage: `url(${imageUrl})` }}>
                <div className='flex justify-between'>
                    <div>
                        <h2 className='font-medium text-lg dark:text-white'>{name}</h2>
                        <p className='text-sm text-zinc-500 dark:text-zinc-100'>{description}</p>
                    </div>
                    <div className='h-12 w-12 bg-white rounded-full flex justify-center items-center cursor-pointer'>
                        <Arrow className="h-6 w-6" />
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

const PreviewAnimation = {
    initial: {
        y:30,
        opacity: 0,
        scale: 0.9,
    },
    animate: {
        y:0,
        opacity: 1,
        scale: 1,
        transition: {
            ease: [0.6,0.01, 0.05, 0.95],
            duration: 0.8,
        }
    }
}

export default ProjectPreview