import React from 'react'
import { gsap } from "gsap";
import ScrollTrigger from 'gsap/src/ScrollTrigger';
import AfterEffectsLogo from '../assets/AfterEffectsLogo.svg';
import CSSLogo from '../assets/CSSLogo.svg';
import GitHubLogo from '../assets/GitHubLogo.svg';
import HTMLLogo from '../assets/HTMLLogo.svg';
import IllustratorLogo from '../assets/IllustratorLogo.svg';
import JSLogo from '../assets/JSLogo.svg';
import LinkedinLogo from '../assets/LinkedInLogo.svg';
import MailLogo from '../assets/MailLogo.svg';
import PhotoshopLogo from '../assets/PhotoshopLogo.svg';
import ReactLogo from '../assets/ReactLogo.svg';
import TailwindLogo from '../assets/TailwindLogo.svg';


export default function About() {
    gsap.registerPlugin(ScrollTrigger);
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#about",
            start: "top 50%",
            end: "30% 50%",
            scrub: true,
        }

    });
    tl.to("#aboutitem", { y: -50, opacity: 1, duration: 2 },)

    let tlr = gsap.timeline({
        scrollTrigger: {
            trigger: "#projects",
            start: "top 50%",
            end: "30% 50%",
            scrub: true,
        }

    });
    tlr.to("#aboutitem", { y: 50, opacity: 0, duration: 2 },)

    let itl = gsap.timeline({ repeat: -1 });
    itl.to("#react", { y: -2, duration: 0.1 },)
        .to("#react", { y: 0, duration: 0.1 },)
        .to("#tailwind", { y: -2, duration: 0.1 },)
        .to("#tailwind", { y: 0, duration: 0.1 },)
        .to("#js", { y: -2, duration: 0.1 },)
        .to("#js", { y: 0, duration: 0.1 },)
        .to("#html", { y: -2, duration: 0.1 },)
        .to("#html", { y: 0, duration: 0.1 },)
        .to("#css", { y: -2, duration: 0.1 },)
        .to("#css", { y: 0, duration: 0.1 },)
        .to("#photoshop", { y: -2, duration: 0.1 },)
        .to("#photoshop", { y: 0, duration: 0.1 },)
        .to("#illustrator", { y: -2, duration: 0.1 },)
        .to("#illustrator", { y: 0, duration: 0.1 },)
        .to("#aftereffects", { y: -2, duration: 0.1 },)
        .to("#aftereffects", { y: 0, duration: 0.1 },)
        .to("#email", { y: -2, duration: 0.1 },)
        .to("#email", { y: 0, duration: 0.1 },)
        .to("#github", { y: -2, duration: 0.1 },)
        .to("#github", { y: 0, duration: 0.1 },)
        .to("#linkedin", { y: -2, duration: 0.1 },)
        .to("#linkedin", { y: 0, duration: 0.1 },)




    return (
        <section id='about' className='flex h-screen w-screen '>
            <div className='w-1/3 bg-secondary hidden md:block'></div>
            <div className='flex flex-col w-screen md:w-1/3 bg-primary text-tertiary font-anton p-1 gap-3'>
                <div className='flex justify-end items-end text-xl h-4/12 z-2'>
                    <h2 id='aboutitem' className='opacity-0'>HI, IM RACHIESA YAZID AUDI</h2>
                </div>
                <div className=' h-3/12 text-7xl z-2'>
                    <h1 id='aboutitem' className='opacity-0'>FRONT-END</h1>
                    <h1 id='aboutitem' className='opacity-0'>DEVELOPER</h1>
                </div>
                <div className='flex flex-col gap-2 h-7/12 z-2'>
                    <p id='aboutitem' className='opacity-0 font-trispace'>I AM AN INFORMATICS ENGINEERING STUDENT WITH EXPERIENCE IN
                        BOTH DESIGN & PROGRAMMING. FAMILIAR WITH ADOBE PHOTOSHOP, ILLUSTRATOR, AND FIGMA FOR UI/UX AND GRAPHIC DESIGN. ALSO FAMILIAR WITH HTML & CSS, AND JAVASCRIPT.
                    </p>
                    <div id='aboutitem' className=' opacity-0 flex p-1 h-1/2'>
                        <div className='grid grid-cols-5 gap-1'>
                            <img onClick={() => { window.open("https://reactjs.org/", "_blank") }} id='react' src={ReactLogo} alt="React" className=' hover:animate-pulse rounded-sm' ></img>
                            <img onClick={() => { window.open("https://tailwindcss.com/", "_blank") }} id='tailwind' src={TailwindLogo} alt="Tailwind" className='hover:animate-pulse rounded-sm' ></img>
                            <img onClick={() => { window.open("https://developer.mozilla.org/en-US/docs/Web/JavaScript", "_blank") }} id='js' src={JSLogo} alt="JavaScript" className='hover:animate-pulse rounded-sm' ></img>
                            <img onClick={() => { window.open("https://developer.mozilla.org/en-US/docs/Web/HTML", "_blank") }} id='html' src={HTMLLogo} alt="HTML" className='hover:animate-pulse rounded-sm' ></img>
                            <img onClick={() => { window.open("https://developer.mozilla.org/en-US/docs/Web/CSS", "_blank") }} id='css' src={CSSLogo} alt="CSS" className='hover:animate-pulse rounded-sm' ></img>
                            <img alt="React" className='invisible' ></img>
                            <img onClick={() => { window.open("https://www.adobe.com/products/photoshop.html", "_blank") }} id='photoshop' src={PhotoshopLogo} alt="Photoshop" className='hover:animate-pulse rounded-sm' ></img>
                            <img onClick={() => { window.open("https://www.adobe.com/products/illustrator.html", "_blank") }} id='illustrator' src={IllustratorLogo} alt="Illustrator" className='hover:animate-pulse rounded-sm' ></img>
                            <img onClick={() => { window.open("https://www.adobe.com/products/aftereffects.html", "_blank") }} id='aftereffects' src={AfterEffectsLogo} alt="AfterEffects" className='hover:animate-pulse rounded-sm' ></img>
                            <img alt="React" className='invisible' ></img>
                            <img onClick={() => { window.open("https://mail.google.com/mail/?view=cm&fs=1&to=audichiesa99@gmail.com&su=Hello, Rachiesa let's talk", "_blank") }} id='email' src={MailLogo} alt="Email" className='hover:animate-pulse rounded-sm' ></img>
                            <img alt="React" className='invisible' ></img>
                            <img onClick={() => { window.open("https://github.com/Rachiesa", "_blank") }} id='github' src={GitHubLogo} alt="Github" className='hover:animate-pulse rounded-sm' ></img>
                            <img alt="React" className='invisible' ></img>
                            <img id='linkedin' src={LinkedinLogo} alt="Linkedin" className='hover:animate-pulse rounded-sm' ></img>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-1/3 bg-secondary hidden md:block'></div>
        </section>
    )
}
