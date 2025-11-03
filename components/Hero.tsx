import React from 'react';
import useScrollFadeUp from '../hooks/useScrollFadeUp';
import { StarIcon } from './Icons';

const PromoBubble = ({ text, color, position }: { text: string; color: string; position: string }) => (
    <div className={`absolute ${position} w-32 h-32 md:w-40 md:h-40 flex items-center justify-center text-center text-white font-bold text-lg rounded-full shadow-lg transform -rotate-12 ${color}`}>
        <span className="transform rotate-12">{text}</span>
    </div>
);

const Hero = () => {
    const { ref, style } = useScrollFadeUp();

    return (
        <div
            ref={ref as any}
            className="relative w-full h-[70vh] md:h-[85vh] bg-cover bg-center bg-no-repeat"
            style={{
                ...style,
                backgroundImage: "url('https://www.jollyroom.de/storage/FECC836BC48DDD5CE51D03EB483853CC47615ACC0BD030684DD2E2B9A46BD14F/b9f1032e5344448cad983493b176a827/jpg/media/696abbafa05a42cbae0809934540a43c/v42_Slide_Startsida_banner_1920x700_WinterShop_DEAT.jpg')",
            }}
        >
            <div className="container mx-auto px-6 h-full relative">
                
                {/* Promo Bubbles Area */}
                {/* <div className="absolute top-1/4 left-0 md:left-10 w-1/3 h-1/2">
                    <PromoBubble text="New!" color="bg-pink-400" position="top-0 left-10" />
                    <PromoBubble text="Hot Deals!" color="bg-indigo-600" position="top-24 left-0 md:left-[-2rem]" />
                    <PromoBubble text="Best in Test" color="bg-blue-500" position="top-20 left-24 md:left-32" />
                </div> */}
                
                {/* Main Text Area */}
                <div className="absolute inset-0 flex flex-col justify-center items-end text-right pr-4 md:pr-12">
                    <div className="text-white" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.6)' }}>
                        <h2 className="text-6xl md:text-8xl font-extrabold">Ready<br/>for winter!</h2>
                        <p className="mt-4 text-md md:text-lg">Discover everything you need for the winter season</p>
                        <a href="#" className="inline-block mt-4 font-semibold hover:underline">
                            Shop here &rarr;
                        </a>
                    </div>
                </div>

                {/* Product Snippet */}
                <div className="absolute bottom-10 right-10 md:right-20 text-white">
                     <div className="relative">
                        <div className="absolute bottom-full right-0 mb-2 w-px h-10 bg-white/50"></div>
                        <div className="flex items-center space-x-2">
                           <span className="font-bold text-lg">4.8</span>
                           <StarIcon className="h-5 w-5 text-yellow-400" />
                        </div>
                        <p className="font-semibold">Didriksons</p>
                        <p className="text-sm">Migisi Overall</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Hero;
