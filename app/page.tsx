// import Image from "next/image";
import Link from "next/link"

import { ArrowRightIcon } from "lucide-react"

import Meteors from "~/components/ui/meteors"
import ShineBorder from "~/components/ui/shine-border"

import Logo from "~/components/logo"

export default function Home() {
  return (
    <ShineBorder
      borderRadius={0}
      borderWidth={32}
      className="flex grow rounded-none"
      color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
    >
      <div className="z-10 m-4 flex grow flex-col border-4 border-black bg-background sm:m-6 md:m-8">
        <Header />
        <Main />
      </div>
    </ShineBorder>
  )
}

function Header() {
  return (
    <header className="flex flex-row border-b-4">
      <h1 className="flex-1 place-content-end p-4 text-3xl font-bold uppercase tracking-tight sm:p-6 sm:text-7xl sm:font-medium md:text-8xl lg:text-[10vw]">
        Oxmiq Labs
      </h1>
      <div className="flex items-center border-l-4 p-4 sm:p-6">
        {/* <div className="aspect-square rounded-full border-4 sm:size-[230px] sm:border-[14px]"></div> */}
        <div className="aspect-square size-16 rounded-full sm:size-32 md:size-48 lg:size-64">
          <Logo />
        </div>
      </div>
    </header>
  )
}

function Main() {
  return (
    <main className="relative flex grow flex-col items-start justify-end overflow-hidden p-4 sm:p-6">
      <h2 className="mb-12 max-w-[18ch] text-[40px] font-normal leading-none sm:mb-16 sm:text-5xl md:mb-24 md:text-6xl lg:text-7xl">
        Reimagining the GPU for real-time interactive AI
      </h2>
      <Link
        href="mailto:info@oxmiq.labs"
        className="group inline-flex rounded-sm text-xl uppercase tracking-wide text-background transition-colors md:text-2xl"
      >
        <div className="rounded-sm bg-foreground px-6 py-3 group-hover:rounded-e-none">
          info@oxmiq.labs
        </div>
        <div className="relative inline-flex place-items-center py-3 pr-6 text-background after:absolute after:inset-0 after:z-0 after:w-0 after:rounded-e-sm after:bg-foreground after:transition-all after:ease-out group-hover:after:w-full">
          <ArrowRightIcon className="relative z-10 size-6" />
        </div>
      </Link>
      <Meteors number={30} />
    </main>
  )
}
