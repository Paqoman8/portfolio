"use client";

import Image from 'next/image';
import React from 'react';
import { LanguageSwitcher } from '../LanguageSwitcher';
import { useTranslation } from '@/hooks/useTranslation';

export const Header = () => {
    const { t } = useTranslation();

    return (
        <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-void/80 backdrop-blur-md">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-500" />
                    {/* <Image width={32} height={32} src="logo.svg" alt="" /> */}
                    <span className="md:hidden text-lg font-bold font-display tracking-tight text-white">H. Joël</span>
                    <span className="hidden md:block text-lg font-bold font-display tracking-tight text-white">HOUINSAVI G. Joël</span>
                </div>

                <nav className="hidden md:flex items-center gap-8">
                    <a href="#expertise" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">{t('header.expertise')}</a>
                    <a href="#projects" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">{t('header.work')}</a>
                    <a href="#approach" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">{t('header.approach')}</a>
                </nav>

                <div className="flex items-center gap-4">
                    <LanguageSwitcher />
                    <a
                        href="#contact"
                        className="rounded-md bg-white/5 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/10 border border-white/5"
                    >
                        {t('header.contact')}
                    </a>
                </div>
            </div>
        </header>
    );
};
