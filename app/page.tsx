// import Image from "next/image";

import Link from "next/link";
import Meteors from "~/components/ui/meteors";

import ShineBorder from "~/components/ui/shine-border";

export default function Home() {
  return (
    <ShineBorder
      borderRadius={0}
      borderWidth={6}
      className="flex grow rounded-none md:m-8"
      color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
    >
      <div className="flex grow flex-col border-[6px] border-black">
        <div className="flex flex-col border-b-[6px] sm:flex-row">
          <h1 className="flex-1 place-content-end p-6 text-7xl font-medium uppercase leading-none sm:text-8xl md:text-8xl lg:text-[10vw]">
            Oxmiq Labs
          </h1>
          <div className="flex p-6 max-sm:border-t-[6px] sm:border-l-[6px]">
            <div className="aspect-square size-full rounded-full border-[14px] bg-foreground sm:size-[230px]"></div>
          </div>
        </div>
        <div className="relative flex grow flex-col justify-end overflow-hidden p-6">
          <h2 className="mb-24 max-w-[18ch] text-4xl font-normal sm:text-5xl md:text-6xl lg:text-7xl">
            Reimagining the GPU for real-time interactive AI
          </h2>
          <p className="text-3xl md:text-4xl">
            <Link href="" className="hover:text-primary transition-colors">
              info@oxmiq.labs
            </Link>
          </p>
          <Meteors number={30} />
        </div>
      </div>
    </ShineBorder>
  );
}
