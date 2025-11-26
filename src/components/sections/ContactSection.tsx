import React from 'react';
import { Mail, Send } from 'lucide-react';

export const ContactSection = () => {
    return (
        <section id="contact" className="bg-void py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5">
            <div className="mx-auto max-w-3xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-text-high sm:text-4xl font-display">
                    Ready to build something ambitious?
                </h2>
                <p className="mt-4 text-lg text-text-low">
                    I’m available for complex full-stack development missions, technical architecture, or SaaS platform development.
                </p>

                <div className="mt-12 flex flex-col items-center gap-6">
                    <a
                        href="mailto:joel.houinsavi@epitech.eu"
                        className="group relative inline-flex h-14 items-center justify-center gap-3 overflow-hidden rounded-full bg-indigo-600 px-8 text-lg font-medium text-white transition-all hover:bg-indigo-500"
                    >
                        <Mail className="h-5 w-5" />
                        <span>Send me an email</span>
                        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-indigo-600 to-cyan-600 opacity-0 transition-opacity group-hover:opacity-100" />
                    </a>

                    <p className="text-sm text-zinc-500">
                        Or find me on <a href="https://www.linkedin.com/in/joel-houinsavi/" className="text-zinc-400 hover:text-white underline underline-offset-4">LinkedIn</a> | <a href="https://github.com/Paqoman8" className="text-zinc-400 hover:text-white underline underline-offset-4">GitHub</a> and <a href="https://paqo.net" className="text-zinc-400 hover:text-white underline underline-offset-4">my website</a>
                    </p>
                </div>
            </div>
        </section>
    );
};
