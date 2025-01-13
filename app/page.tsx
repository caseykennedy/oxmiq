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
        <Footer />
      </div>
    </ShineBorder>
  )
}

function Header() {
  return (
    <header className="flex flex-row border-b-4">
      <div className="relative flex-1 place-content-end overflow-hidden p-4 sm:p-6">
        <h1 className="text-3xl font-bold uppercase tracking-tight sm:text-7xl sm:font-medium md:text-8xl lg:text-[10vw]">
          Oxmiq Labs
        </h1>
        <Meteors number={20} />
      </div>
      <div className="flex items-center border-l-4 p-4 sm:p-6">
        <div className="aspect-square size-16 rounded-full sm:size-32 md:size-48 lg:size-64">
          <Logo />
        </div>
      </div>
    </header>
  )
}

function Main() {
  return (
    <main>
      <div className="relative grid grid-cols-1 gap-8 p-4 sm:p-6 lg:grid-cols-12">
        <div className="col-span-full flex flex-col justify-between lg:col-span-4">
          <h2 className="max-w-[14ch] text-5xl font-normal leading-none">
            Reimagining the GPU for real-time interactive AI
          </h2>
        </div>
        <div className="col-span-full flex flex-col gap-6 lg:col-span-8">
          <p>
            We are engineers, we are dreamers. Together, we built GPUs that
            power billions of computers. We love pixels, matrices, neural
            networks, and transistors. The silicon we built made your cell
            phones into tera-scale supercomputers and ushered in exa-scale
            computing in the data centers. Our individual journeys transported
            us inside cultures like AMD, Apple, Intel, Nvidia and several
            startups. Together, the dreams we shared changed the world.
          </p>

          <p>
            The first floating-point programmable GPU architecture we launched
            in 2002 is still the dominant DNA that evolved GPUs into the era of
            AI.
          </p>

          <p>
            We got the band back together in 2023 with a new mission: planting a
            new GPU architecture seed that will take us into the 2040s. But
            sometimes, to go forward we first must go backward. So we went back
            to principles: software and physics, Python and memory, generality
            and performance.
          </p>

          <p>
            We know moon shots are relentless incremental jumps over many roof
            tops. We also know that the next breakthrough in intelligence will
            require one necessary ingredient: human ingenuity.
          </p>
        </div>
      </div>
      <div className="border-t-4 bg-highlight px-4 py-12 text-foreground sm:px-6">
        <p className="text-center text-small">
          We have offices in California, Canada, and in India at Hyderabad and
          Rajahmundry.
        </p>
      </div>
    </main>
  )
}

function Footer() {
  return (
    <footer className="dark flex flex-col justify-between gap-8 border-t-4 bg-background p-4 text-foreground sm:p-6 md:flex-row md:items-center">
      <div>
        <p className="text-small">
          HQ 900 East Campbell Ave,
          <br />
          Campbell, CA 95008
        </p>
      </div>
      <div>
        <Link
          href="mailto:info@oxmiq.labs"
          className="group inline-flex rounded-sm text-xl uppercase tracking-wide text-background transition-colors md:text-2xl"
        >
          <div className="rounded-sm bg-foreground px-6 py-3 group-hover:rounded-e-none">
            info@oxmiq.ai
          </div>
          <div className="relative inline-flex place-items-center py-3 pr-6 text-background after:absolute after:inset-0 after:z-0 after:w-0 after:rounded-e-sm after:bg-foreground after:transition-all after:ease-out group-hover:after:w-full">
            <ArrowRightIcon className="relative z-10 size-6" />
          </div>
        </Link>
      </div>
    </footer>
  )
}
