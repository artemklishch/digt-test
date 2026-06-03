"use client"

import Link from "next/link";
import {usePathname} from 'next/navigation' ;
import {PAGES_PATHS} from "@/utils/constants";

export default function Header() {
    const pathname = usePathname();
    return (
        <header className="flex justify-between items-center px-8 py-4 bg-gray-900 w-full text-white">
            <h1 className="text-lg font-bold">SpaceX launches</h1>
            <nav className="flex gap-6 text-lg">
                <Link href={PAGES_PATHS.homepage} className={pathname === PAGES_PATHS.homepage ? 'underline' : ''}>
                    Home
                </Link>
                <Link
                    href={PAGES_PATHS.favorites}
                    className={pathname === PAGES_PATHS.favorites ? 'underline' : ''}
                >
                    Favorites
                </Link>
            </nav>
        </header>
    )
}