'use client'
import React from 'react';
import { usePathname } from 'next/navigation'
import Link from "next/link";
import s from './index.module.scss'

type NavItem = {
    href:string,
    title:string,
    id:number,
}

const Navigation = ({navItems}: { navItems: NavItem[] }) => {
    const pathname = usePathname()

    return (
        <ul className = {s.navigation}>
            {navItems.map((item) => {
                return (
                    <li key = {item.id} className={s.link}>
                        <Link href={item.href}>
                            {item.title}
                        </Link>
                    </li>
                )
            })}
        </ul>
    );
};

export default Navigation;