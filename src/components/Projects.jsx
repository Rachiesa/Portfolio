import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export default function Projects() {
    return (
        <section className='flex h-screen w-screen '>
            <div className='w-1/3 bg-secondary hidden md:block'></div>
            <div className='flex flex-col w-screen md:w-1/3 bg-primary text-tertiary font-anton p-1 gap-3'>
                <div className='flex justify-end items-end text-md h-4/12'>
                </div>
                <div className='flex items-end h-3/12 text-7xl z-2'>
                    <h1>PROJECTS</h1>
                </div>
                <div className='h-7/12 text-md z-2'>
                    <Accordion type="single" collapsible className="bg-tertiary text-primary w-full p-2">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>SPOTIFY RANDOM SONG GENERATOR</AccordionTrigger>
                            <AccordionContent>
                                ON.PROGGRES
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>ON.PROGGRES</AccordionTrigger>
                            <AccordionContent>
                                ON.PROGGRES
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
            <div className='w-1/3 bg-secondary hidden md:block'></div>
        </section>
    )
}
