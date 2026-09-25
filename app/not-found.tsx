import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[100svh] items-center">
      <div className="container-x flex flex-col items-start gap-6">
        <span className="eyebrow">404</span>
        <h1 className="text-[clamp(2.5rem,9vw,7rem)] font-medium lowercase leading-none tracking-tightest">
          lost in the graph.
        </h1>
        <p className="max-w-md text-lg text-muted">
          this page doesn&apos;t exist - or an agent routed you somewhere it
          shouldn&apos;t have.
        </p>
        <Link href="/" className="pill pill-filled mt-2">
          back home
        </Link>
      </div>
    </section>
  );
}
