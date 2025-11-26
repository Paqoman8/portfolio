import React from 'react';

export const Footer = () => {
    return (
        <footer className="border-t border-white/5 bg-void py-12">
            <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
                <p className="text-sm text-zinc-500">
                    &copy; {new Date().getFullYear()} Senior Full Stack Engineer. All rights reserved.
                </p>
                <div className="mt-4 flex justify-center gap-6">
                    <a href="#" className="text-zinc-600 hover:text-zinc-400 text-sm">GitHub</a>
                    <a href="#" className="text-zinc-600 hover:text-zinc-400 text-sm">LinkedIn</a>
                    <a href="#" className="text-zinc-600 hover:text-zinc-400 text-sm">Twitter</a>
                </div>
            </div>
        </footer>
    );
};
