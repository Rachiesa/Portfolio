import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { gsap } from "gsap";
import ScrollTrigger from 'gsap/src/ScrollTrigger';

export default function Projects() {
    gsap.registerPlugin(ScrollTrigger);
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#projects",
            start: "top center",
            end: "bottom center",
            toggleActions: "play reverse play reverse",
            scrub: false,
        }

    });
    tl.to("#projectsitem", { y: -50, opacity: 1, duration: 1 },)
    gsap.utils.snap(0.1);




    return (
        <section id='projects' className='flex h-screen w-screen '>
            <div className='w-1/3 bg-secondary hidden md:block'></div>
            <div className='flex flex-col w-screen md:w-1/3 bg-primary text-tertiary font-anton p-1 gap-3'>
                <div className='flex justify-end items-end text-md h-4/12'>
                </div>
                <div className='flex items-end h-3/12 text-7xl z-2'>
                    <h1 id='projectsitem' className='opacity-0'>PROJECTS</h1>
                </div>
                <div className='h-7/12 text-md z-2'>
                    <Accordion id="projectsitem" type="single" collapsible className="opacity-0 bg-tertiary text-primary w-full p-2">
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="text-xl">SPOTIFY.UTILS</AccordionTrigger>
                            <AccordionContent className="font-trispace">
                                UTILIZEING SPOTIFY API FOR EXPLORING NEW MUSIC AND ARTISTS
                            </AccordionContent>
                            <AccordionContent className="font-anton text-md">
                                <a href='https://spotify-utils.vercel.app' target='_blank' className='hover:underline'>WEB-APP</a> <br /><a href='https://github.com/Rachiesa/SpotifyUtils' target='_blank' className='hover:underline'>SOURCE-CODE</a>
                            </AccordionContent>
                            <AccordionContent className="font-anton text-md">
                                STATUS : <span className='animate-pulse'>ONLINE</span>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger className="text-xl">GAMES.FUN</AccordionTrigger>
                            <AccordionContent className="font-trispace">
                                JUST CLASSIC GAMES WITH SOME ANIMATION
                            </AccordionContent>
                            <AccordionContent className="font-anton text-md">
                                STATUS : <span className='animate-pulse'>ON.PROGGRES</span>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
            <div className='w-1/3 bg-secondary hidden md:block'></div>
        </section>
    )
}
