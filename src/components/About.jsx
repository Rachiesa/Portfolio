import React from 'react'
import { gsap } from "gsap";
import ScrollTrigger from 'gsap/src/ScrollTrigger';

export default function About() {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from("#aboutitem", { scrollTrigger: "#aboutitem", duration: 2, y: 100, opacity: 0 })
    gsap.to("#aboutitem", { scrollTrigger: "#aboutitem", duration: 2, y: 0, opacity: 1 })

    return (
        <section id='about' className='flex h-screen w-screen '>
            <div className='w-1/3 bg-secondary hidden md:block'></div>
            <div className='flex flex-col w-screen md:w-1/3 bg-primary text-tertiary font-anton p-1 gap-3'>
                <div className='flex justify-end items-end text-xl h-4/12 z-2'>
                    <h2 id='aboutitem' className=''>HI, IM RACHIESA YAZID AUDI</h2>
                </div>
                <div className=' h-3/12 text-7xl z-2'>
                    <h1 id='aboutitem'>FRONT-END</h1>
                    <h1 id='aboutitem'>DEVELOPER</h1>
                </div>
                <div className='h-7/12 z-2'>
                    <p id='aboutitem' className='font-trispace'>I AM AN INFORMATICS ENGINEERING STUDENT WITH EXPERIENCE IN
                        BOTH DESIGN & PROGRAMMING. FAMILIAR WITH ADOBE PHOTOSHOP, ILLUSTRATOR, AND FIGMA FOR UI/UX AND GRAPHIC DESIGN. ALSO FAMILIAR WITH HTML & CSS, AND JAVASCRIPT.
                    </p>
                </div>
            </div>
            <div className='w-1/3 bg-secondary hidden md:block'></div>
        </section>
    )
}
