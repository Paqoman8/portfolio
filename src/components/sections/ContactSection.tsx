"use client";

import React from 'react';
import { Mail, Send } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

export const ContactSection = () => {
    const { t } = useTranslation();

    return (
        <section id="contact" className="bg-void py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5">
            <div className="mx-auto max-w-3xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-text-high sm:text-4xl font-display">
                    {t('contact.title')}
                </h2>
                <p className="mt-4 text-lg text-text-low">
                    {t('contact.description')}
                </p>

                <div className="mt-12 flex flex-col items-center gap-6">
                    <a
                        href="mailto:houinsavi.j@gmail.com"
                        className="group relative inline-flex h-14 items-center justify-center gap-3 overflow-hidden rounded-full bg-indigo-600 px-8 text-lg font-medium text-white transition-all hover:bg-indigo-500"
                    >
                        <Mail className="h-5 w-5" />
                        <span>{t('contact.email_button')}</span>
                        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-indigo-600 to-cyan-600 opacity-0 transition-opacity group-hover:opacity-100" />
                    </a>

                    <p className="text-sm text-zinc-500">
                        {t('contact.find_me')} <a href="https://www.linkedin.com/in/joel-houinsavi/" className="text-zinc-400 hover:text-white underline underline-offset-4">LinkedIn</a> | <a href="https://github.com/Paqoman8" className="text-zinc-400 hover:text-white underline underline-offset-4">GitHub</a> {t('contact.and')} <a href="https://paqo.net" className="text-zinc-400 hover:text-white underline underline-offset-4">{t('contact.website')}</a>
                    </p>
                </div>
            </div>
        </section>
    );
};
