import Link from "next/link";

export default function NotFound() {
  return (
    <main className="theme-verdant light flex h-screen flex-col bg-background text-foreground">
      <header className="h-0">
        <div className="flex flex-row gap-2 p-4">
          <Link href="/">oxmi q</Link>
        </div>
      </header>
      <section className="flex flex-1">
        <div className="container flex flex-col items-start justify-center gap-2 md:flex-row md:items-center md:gap-8">
          <div className="">
            <h1 className="border-foreground pr-8 text-6xl font-extrabold leading-normal tracking-tight md:border-r-2 md:text-8xl">
              404
            </h1>
          </div>
          <div className="max-w-md">
            <p className="mb-1 text-xl font-bold leading-normal md:text-2xl">
              Page not found...
            </p>
            <p className="mb-1 text-base">
              Try checking the address or <Link href="/">go home</Link>.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
