"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  {
    title: "projekti",
    href: "/projekti",
  },
  {
    title: "početna",
    href: "/",
  },
  {
    title: "galerija",
    href: "/galerija",
  },
];

export function Navigation() {
  const path = usePathname();
  return (
    <div className="w-full h-16 flex justify-center items-center gap-4">
      {items.map((item) => {
        return (
          <button
            className="p-1 transition-all duration-100 ease-in-out rounded
            hover:bg-zinc-700 hover:border-b-4 hover:border-t-2 hover:border-white hover:border-l-2 hover:border-r-2
            active:transform active:border-b-0 active:translate-y-0"
            key={item.href}
          >
            <Link
                className={`transition-all duration-100 ease-in-out transform hover:-translate-y-2 ${
                    path === item.href ? "font-semibold border-b-2 rounded text-lg" : ""
                }`}
              href={item.href}
            >
              {item.title}
            </Link>
          </button>
        );
      })}
    </div>
  );
}
