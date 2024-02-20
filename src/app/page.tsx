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
      <h1 className="text-5xl mt-6 font-bold">Petar Popović</h1>
      <h2 className="text-2xl font-bold mt-6">Lokacija</h2>
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
            <Link href="tel:+385993732936" className="text-sm underline ml-1">
              +385 99 373 2936
            </Link>
          </h3>
        </Copy>
        <Copy value="+387 63 632 005">
          <RiPhoneLine className="text-lg mr-1" />
          <h3>
            BiH:
            <Link href="tel:+38763632005" className="text-sm underline ml-1">
              +387 63 632 005
            </Link>
          </h3>
        </Copy>
      </div>
      <Copy value="petarpopovic719@gmail.com">
        <RiMailLine className="text-lg mr-1" />
        <h3>
          Email:
          <Link
            href="mailto:petarpopovic719@gmail.com"
            className="text-sm underline ml-1"
          >
            petarpopovic719@gmail.com
          </Link>
        </h3>
      </Copy>
      <Link href="https://www.instagram.com/pop_2110/">
        <RiInstagramLine className="size-8 mt-10" />
      </Link>
    </div>
  );
}
