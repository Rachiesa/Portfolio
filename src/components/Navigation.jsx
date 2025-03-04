import React from 'react'

export default function Navigation() {
    return (
        <section id='navigation' className='flex h-screen w-screen'>
            <div className='flex justify-end items-center w-1/3 bg-secondary text-tertiary'>
                <h1 className='font-anton text-[200px] fixed z-10 p-3'>R</h1>
            </div>
            <div className='flex justify-center items-center w-1/3 bg-primary  text-tertiary  '>
                <h1 className='font-anton text-[200px] z-2'>Y</h1>
            </div>
            <div className='flex justify-start items-center w-1/3 bg-secondary text-tertiary'>
                <h1 className='font-anton text-[200px] fixed z-10 p-3'>A</h1>
            </div>
        </section>
    )
}
