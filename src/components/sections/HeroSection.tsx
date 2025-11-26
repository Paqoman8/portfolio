import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';

export const HeroSection = () => {
    return (
        <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-void px-4 text-center sm:px-6 lg:px-8 pt-20">

            {/* Background Effects */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <div className="h-[500px] w-[500px] rounded-full bg-indigo-500/10 blur-[120px]" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 max-w-4xl space-y-8">

                {/* Availability Badge */}
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-text-low backdrop-blur-sm transition-colors hover:bg-white/10">
                    <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
                    </span>
                    Available for new opportunities
                </div>

                {/* Main Headline */}
                <h1 className="font-display text-5xl font-bold tracking-tight text-text-high sm:text-6xl md:text-7xl">
                    Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-500">Scalable SaaS</span> <br className="hidden md:block" />
                    & Robust Architectures.
                </h1>

                {/* Subheadline */}
                <p className="mx-auto max-w-2xl text-lg text-text-low md:text-xl leading-relaxed">
                    Senior Full Stack Engineer. I bridge the gap between complex backend logic and fluid frontend experiences. Specialized in Next.js, NestJS, and Cloud Native solutions.
                </p>

                {/* CTA Group */}
                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <a href="#projects" className="group relative inline-flex h-12 items-center justify-center gap-2 overflow-hidden rounded-md bg-text-high px-8 font-medium text-void transition-all hover:bg-white/90">
                        <span>View Selected Work</span>
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>

                    <a href="#contact" className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-white/10 px-8 font-medium text-text-high transition-colors hover:bg-white/5">
                        <Mail className="h-4 w-4" />
                        <span>Contact Me</span>
                    </a>
                </div>

            </div>
        </section>
    );
};
