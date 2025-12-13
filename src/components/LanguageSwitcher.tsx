"use client";

import React from 'react';
import { useTranslation } from '@/hooks/useTranslation';

export const LanguageSwitcher = () => {
    const { language, setLanguage } = useTranslation();

    return (
        <div className="flex items-center gap-2 rounded-full bg-white/5 p-1 border border-white/5">
            <button
                onClick={() => setLanguage('fr')}
                className={`px-3 py-1 text-xs font-medium rounded-full transition-all ${language === 'fr'
                        ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/20'
                        : 'text-zinc-400 hover:text-white'
                    }`}
            >
                FR
            </button>
            <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 text-xs font-medium rounded-full transition-all ${language === 'en'
                        ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/20'
                        : 'text-zinc-400 hover:text-white'
                    }`}
            >
                EN
            </button>
        </div>
    );
};
