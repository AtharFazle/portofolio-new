"use client"
import React from 'react'
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { Meteors } from '@/components/ui/meteor';

type Props = {}

const Section2 = (props: Props) => {
    const [isReady, setIsReady] = React.useState(false);
    const words = " Web Developer | FullStack Developer | 3D Artist | Frontend Developer | Typescript enthusiast";

    React.useEffect(() => {
        setIsReady(true);
    }, []);
    return (
        <div className='layout-section flex justify-center items-center relative'>
                <Meteors number={20} className='absolute -top-40 right-0' />
            <div className='text-center max-w-2xl text-base md:text-2xl relative'>
                <TextGenerateEffect words={words} />
            </div>
        </div>
    )
}

export default Section2