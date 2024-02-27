import { Copy } from "@/components/copy";
import Link from "next/link";
import {
  RiMapPin2Line,
  RiPhoneLine,
  RiMailLine,
  RiInstagramLine,
} from "react-icons/ri";

export default function Page() {
  return (
      <div className="w-full h-full gap-2 flex flex-col justify-center items-center appear">
          <div className="name min-w-[350px] mt-5">
              {'Petar Popović'.split('').map((letter, index) => {
                  return (
                      <span
                          key={index}
                          className="inline-block cursor-pointer text-5xl font-bold"
                      >
                            {letter === ' ' ? '\u00A0' : letter}
                        </span>
                  )
              })}
          </div>

          <p className="text-center p-4 text-pretty md:max-w-[500px] mt-5">
              Student sam računarstva u Splitu. U svoje slobodno vrijeme volim
              programirati i fotografirati te neke od mojih projekata i fotografija
              možete pronaći na ovoj stranici. Na raspolaganju sam za više
              informacija.
          </p>
          <h2 className="text-2xl font-bold mt-4">Lokacija</h2>
          <div className="flex flex-col items-center gap-2 md:flex-row">
          <div className="flex gap-1">
          <RiMapPin2Line className="text-lg" />
          <h3 className="text-sm underline">Split</h3>
        </div>
        <div className="flex gap-1">
          <RiMapPin2Line className="text-lg" />
          <h3 className="text-sm underline">Livno</h3>
        </div>
      </div>
      <h2 className="text-2xl font-bold mt-6">Kontakt</h2>
      <div className="flex flex-col items-center gap-2 md:flex-row">
        <Copy value="+385 99 373 2936">
          <RiPhoneLine className="text-lg mr-1" />
          <h3>
            HR:
            <Link href="tel:+385993732936" className="text-sm ml-1">
                <button className="p-1 transition-all duration-100 ease-in-out rounded border-b-2
                  hover:bg-zinc-700 hover:border-b-4 hover:border-t-2 hover:border-white hover:border-l-2 hover:border-r-2
                  active:transform active:border-b-0 active:translate-y-0">
                    +385 99 373 2936
                </button>
            </Link>
          </h3>
        </Copy>
        <Copy value="+387 63 632 005">
          <RiPhoneLine className="text-lg mr-1" />
          <h3>
            BiH:
              <Link href="tel:+38763632005" className="text-sm ml-1 ">
                  <button className="p-1 transition-all duration-100 ease-in-out rounded border-b-2
                  hover:bg-zinc-700 hover:border-b-4 hover:border-t-2 hover:border-white hover:border-l-2 hover:border-r-2
                  active:transform active:border-b-0 active:translate-y-0">
                      +387 63 632 005
                  </button>
              </Link>
          </h3>
        </Copy>
      </div>
        <Copy value="petarpopovic719@gmail.com">
            <RiMailLine className="text-lg mr-1"/>
            <h3>
                Email:
                <Link
                    href="mailto:petarpopovic719@gmail.com"
                    className="text-sm ml-1"
                >
                    <button className="p-1 transition-all duration-100 ease-in-out rounded border-b-2
                  hover:bg-zinc-700 hover:border-b-4 hover:border-t-2 hover:border-white hover:border-l-2 hover:border-r-2
                  active:transform active:border-b-0 active:translate-y-0">
                        petarpopovic719@gmail.com
                    </button>
                </Link>
            </h3>
        </Copy>
        <Link href="https://www.instagram.com/pop_2110/">
            <RiInstagramLine className="size-10 mt-7 p-1 transition-all duration-100 ease-in-out rounded
                  hover:bg-zinc-700 hover:border-b-4 hover:border-t-2 hover:border-white hover:border-l-2 hover:border-r-2
                  active:transform active:border-b-0 active:translate-y-0"/>
        </Link>
    </div>
  );
}
