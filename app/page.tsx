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
        <div className="flex flex-col border-b-6 sm:flex-row">
          <h1 className="flex-1 place-content-end p-6 text-7xl font-medium uppercase leading-none sm:text-8xl md:text-8xl lg:text-[10vw]">
            Oxmiq Labs
          </h1>
          <div className="flex p-6 max-sm:border-t-6 sm:border-l-6">
            <div className="aspect-square size-full rounded-full border-[14px] sm:size-[230px]"></div>
          </div>
        </div>
        <div className="relative flex grow flex-col items-start justify-end overflow-hidden p-6">
          <h2 className="mb-24 max-w-[18ch] text-4xl font-normal sm:text-5xl md:text-6xl lg:text-7xl">
            Reimagining the GPU for real-time interactive AI
          </h2>
          <Link
            href="mailto:info@oxmiq.labs"
            className="group inline-flex rounded-sm text-3xl uppercase tracking-wide text-background transition-colors md:text-2xl"
          >
            <div className="rounded-sm bg-foreground px-6 py-3 group-hover:rounded-e-none">
              info@oxmiq.labs
            </div>
            <div className="relative inline-flex place-items-center py-3 pr-6 text-background after:absolute after:inset-0 after:z-0 after:w-0 after:rounded-e-sm after:bg-foreground after:transition-all after:ease-out group-hover:after:w-full">
              <ArrowRightIcon className="relative z-10 size-6" />
            </div>
          </Link>
          <Meteors number={30} />
        </div>
      </div>
    </ShineBorder>
  )
}
