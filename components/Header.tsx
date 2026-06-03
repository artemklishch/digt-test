"use client"

import Link from "next/link";
import {usePathname} from 'next/navigation' ;
import {PAGES_PATHS} from "@/utils/constants";

export default function Header() {
    const pathname = usePathname();
    return (
        <header className="flex justify-between items-center px-8 py-4 fixed bg-white w-full">
            <h1 className="text-lg font-bold">SpaceX launches</h1>
            <nav className="flex gap-6 text-lg">
                <Link href="/public" className={pathname === PAGES_PATHS.homepage ? 'underline' : ''}>
                    Home
                </Link>
                <Link href="/favorites"
                      className={pathname === PAGES_PATHS.favorites ? 'underline' : ''}
                >
                    Favorites
                </Link>
            </nav>
        </header>
    )
}