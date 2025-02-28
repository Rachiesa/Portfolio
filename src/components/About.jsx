import React from 'react'

export default function About() {
    return (
        <section className='flex h-screen w-screen '>
            <div className='w-1/3 bg-secondary hidden md:block'></div>
            <div className='flex flex-col w-screen md:w-1/3 bg-primary text-tertiary font-anton p-1 gap-3'>
                <div className='flex justify-end items-end text-md h-4/12 z-2'>
                    <h2 className=''>HI, IM RACHIESA YAZID AUDI</h2>
                </div>
                <div className=' h-3/12 text-7xl z-2'>
                    <h1>FRONT-END</h1>
                    <h1>DEVELOPER</h1>
                </div>
                <div className='h-7/12 z-2'>
                    <p className='font-trispace'>I AM AN INFORMATICS ENGINEERING STUDENT WITH EXPERIENCE IN
                        BOTH DESIGN & PROGRAMMING. FAMILIAR WITH ADOBE PHOTOSHOP, ILLUSTRATOR, AND FIGMA FOR UI/UX AND GRAPHIC DESIGN. ALSO FAMILIAR WITH HTML & CSS, AND JAVASCRIPT.
                    </p>
                </div>
            </div>
            <div className='w-1/3 bg-secondary hidden md:block'></div>
        </section>
    )
}
