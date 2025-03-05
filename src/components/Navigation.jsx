import React from 'react'
import { gsap } from "gsap";


export default function Navigation() {

    gsap.from("#R", { duration: 2, x: -500, opacity: 0 });
    gsap.to("#R", { duration: 2, x: 0, opacity: 1 });
    gsap.from("#Y", { duration: 2, y: 500, opacity: 0 });
    gsap.to("#Y", { duration: 2, y: 0, opacity: 1 });
    gsap.from("#A", { duration: 2, x: 500, opacity: 0 });
    gsap.to("#A", { duration: 2, x: 0, opacity: 1 });
    return (
        <section className='flex h-screen w-screen'>
            <div className='flex justify-end items-center w-1/3 bg-secondary text-tertiary'>
                <h1 id='R' className='font-anton text-[200px] fixed z-10 p-3'>R</h1>
            </div>
            <div className='flex justify-center items-center w-1/3 bg-primary  text-tertiary  '>
                <h1 id='Y' className='font-anton text-[200px] z-2'>Y</h1>
            </div>
            <div className='flex justify-start items-center w-1/3 bg-secondary text-tertiary'>
                <h1 id='A' className='font-anton text-[200px] fixed z-10 p-3'>A</h1>
            </div>
        </section >
    )
}
