import Link from "next/link"

export default function NotFound() {
  return (
    <main className="flex min-h-svh flex-col bg-highlight">
      <section className="m-2 flex flex-1 flex-col justify-between rounded-sm bg-foreground p-4 text-highlight">
        <div className="flex flex-col justify-between gap-8 sm:flex-row">
          <h1 className="text-[30vw] font-medium leading-[0.7] tracking-tight">
            404
          </h1>
          <p className="p-3 text-p uppercase leading-none">Oxmiq</p>
        </div>
        <div className="p-4">
          <p className="text-2xl font-semibold uppercase">Page not found</p>
          <p className="text-p">
            Try checking the address or <Link href="/">go home</Link>.
          </p>
        </div>
      </section>
    </main>
  )
}
