import React from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { Textarea } from './ui/textarea'

export default function Contact() {
    return (
        <section className='flex h-screen w-screen '>
            <div className='w-1/3 bg-secondary hidden md:block'></div>
            <div className='flex flex-col w-screen md:w-1/3  bg-primary text-tertiary font-anton p-1 gap-3'>
                <div className='flex justify-end items-end text-md h-1/12'>
                </div>
                <div className='flex items-end h-3/12 text-7xl z-2'>
                    <h1>LET'S TALK</h1>
                </div>
                <form className='flex flex-col items-start h-7/12 gap-1 z-2'>
                    <Input type='text' placeholder='NAME' className='placeholder:text-primary text-primary h-1/6 rounded-none bg-tertiary border-none' required></Input>
                    <Input type='email' placeholder='EMAIL' className='placeholder:text-primary text-primary h-1/6 rounded-none bg-tertiary border-none' required></Input>
                    <Textarea placeholder="MESSAGE" className='placeholder:text-primary text-primary h-1/6 rounded-none bg-tertiary border-none' />
                    <Button type='submit' className='text-primary h-1/6 w-full rounded-none bg-tertiary hover:bg-secondary border-primary'>SUBMIT</Button>
                </form>
            </div>
            <div className='w-1/3 bg-secondary hidden md:block'></div>
        </section>
    )
}
