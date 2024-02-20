"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const items = [
{
    title:"projekti",
    href:"/projekti"
},
{
    title:"početna",
    href:"/"
}, 
{
    title:"galerija",
    href:"/galerija"
}]

export function Navigation() {
    const path = usePathname()
    return <div className="w-full h-16 flex justify-center items-center gap-4">
        {
            items.map(
                item=>{
                    return <Link className={`transition-all hover:underline ${
                    path === item.href ? "font-semibold underline":""
                    }`} href={item.href} key={item.href}> {item.title} </Link>
                }
            )
        }
    </div>
}