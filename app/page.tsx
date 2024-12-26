// import Image from "next/image";

import Link from "next/link";

export default function Home() {
  return (
    <main className="m-8 flex grow flex-col border-4">
      <div className="flex flex-row items-end border-b-4">
        <h1 className="flex-1 p-6 text-9xl font-medium uppercase">
          Oxmiq Labs
        </h1>
        <div className="border-l-4 p-6">
          <div className="size-[230px] rounded-full border-[14px]"></div>
        </div>
      </div>
      <div className="flex grow flex-col justify-end p-6">
        <h2 className="mb-24 max-w-[18ch] text-7xl font-normal">
          Reimagining the GPU for real-time interactive AI
        </h2>
        <p className="text-4xl">
          <Link href="" className="hover:text-primary transition-colors">
            info@oxmiq.labs
          </Link>
        </p>
      </div>
    </main>
  );
}
