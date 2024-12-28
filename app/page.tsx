// import Image from "next/image";
import { ArrowRightIcon, MailCheckIcon } from "lucide-react"
import Link from "next/link"

import Meteors from "~/components/ui/meteors"
import ShineBorder from "~/components/ui/shine-border"

export default function Home() {
  return (
    <ShineBorder
      borderRadius={0}
      borderWidth={6}
      className="flex grow rounded-none md:m-8"
      color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
    >
      <div className="flex grow flex-col border-6 border-black">
        <Header />
        <Main />
      </div>
    </ShineBorder>
  )
}

function Header() {
  return (
    <header className="flex flex-row border-b-6">
      <h1 className="flex-1 place-content-end p-4 text-3xl font-bold uppercase tracking-tight sm:p-6 sm:text-7xl sm:font-medium md:text-8xl lg:text-[10vw]">
        Oxmiq Labs
      </h1>
      <div className="flex items-center border-l-6 p-4 sm:p-6">
        {/* <div className="aspect-square rounded-full border-6 sm:size-[230px] sm:border-[14px]"></div> */}
        <div className="aspect-square size-16 rounded-full bg-gradient-to-tr from-secondary via-primary to-accent sm:size-32 md:size-48 lg:size-64" />
      </div>
    </header>
  )
}

function Main() {
  return (
    <main className="relative flex grow flex-col items-start justify-end overflow-hidden p-4 sm:p-6">
      <h2 className="mb-24 max-w-[18ch] text-[40px] font-normal leading-none sm:text-5xl md:text-6xl lg:text-7xl">
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
