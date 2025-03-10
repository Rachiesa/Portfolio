import React from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { Textarea } from './ui/textarea'
import { gsap } from "gsap";
import ScrollTrigger from 'gsap/src/ScrollTrigger';


export default function Contact() {

    const [result, setResult] = React.useState("SUBMIT");
    const FORMS_API_KEY = import.meta.env.VITE_WEB3FORMS_API_KEY;
    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", `${FORMS_API_KEY}`);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("THANKS FOR YOUR MESSAGE!");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };
    gsap.registerPlugin(ScrollTrigger);
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#contact",
            start: "top center",
            end: "bottom center",
            toggleActions: "play none none reverse",
            scrub: false,
        }

    });
    tl.to("#contactitem", { y: -50, opacity: 1, duration: 1 },)
    return (
        <section id='contact' className='flex h-screen w-screen '>
            <div className='w-1/3 bg-secondary hidden md:block'></div>
            <div className='flex flex-col w-screen md:w-1/3  bg-primary text-tertiary font-anton p-1 gap-3'>
                <div className='flex justify-end items-end text-md h-1/12'>
                </div>
                <div className='flex items-end h-3/12 text-7xl z-2'>
                    <h1 id='contactitem' className='opacity-0'>LET'S TALK</h1>
                </div>
                <form id='contactitem' onSubmit={onSubmit} className='opacity-0 flex flex-col items-start h-7/12 gap-1 z-2'>
                    <Input type='text' placeholder='NAME' className='hover:animate-pulse placeholder:text-primary text-primary h-1/6 rounded-none bg-tertiary border-none hover:bg-secondary' name='name' required />
                    <Input type='email' placeholder='EMAIL' className='hover:animate-pulse placeholder:text-primary text-primary h-1/6 rounded-none bg-tertiary border-none hover:bg-secondary' name='email' required></Input>
                    <Textarea type='text' placeholder="MESSAGE" className='hover:animate-pulse placeholder:text-primary text-primary h-1/6 rounded-none bg-tertiary border-none hover:bg-secondary' name='message' required />
                    <Button type='submit' className='hover:animate-pulse text-primary h-1/6 w-full rounded-none bg-tertiary hover:bg-secondary border-primary'>{result}</Button>
                </form>
            </div>
            <div className='w-1/3 bg-secondary hidden md:block'></div>
        </section>
    )
}
