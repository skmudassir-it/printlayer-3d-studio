import type { Metadata } from "next";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faCheckCircle, faClock, faCube, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { services } from "@/lib/data";

export function generateStaticParams() {
  return Object.keys(services).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const srv = services[slug];
  if (!srv) return { title: "Service Not Found" };
  return { title: `${srv.title} — PrintLayer 3D Studio`, description: srv.shortDesc };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const srv = services[slug];

  if (!srv) {
    return (
      <>
        <Navbar />
        <section className="pt-28 pb-20 text-center">
          <h1 className="text-2xl font-bold">Service Not Found</h1>
          <Link href="/services" className="inline-flex mt-4">
            <Button variant="outline">Back to Services</Button>
          </Link>
        </section>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <section className="pt-28 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Back */}
          <Link href="/services">
            <Button variant="ghost" size="sm" className="mb-8 -ml-2">
              <FontAwesomeIcon icon={faArrowLeft} className="size-3 mr-2" />
              All Services
            </Button>
          </Link>

          {/* Hero */}
          <div className="grid lg:grid-cols-2 gap-10 items-start mb-14">
            <div>
              <div className="flex size-14 items-center justify-center rounded-xl bg-primary/10 text-primary mb-6">
                <FontAwesomeIcon icon={srv.icon} className="size-6" />
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">{srv.title}</h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">{srv.description}</p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="inline-flex">
                  <Button size="lg">
                    <FontAwesomeIcon icon={faCube} className="size-4 mr-2" />
                    Request a Quote
                  </Button>
                </Link>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <FontAwesomeIcon icon={faClock} className="size-3.5" />
                  <span>Turnaround: {srv.turnaround}</span>
                </div>
              </div>
            </div>
            <div className="w-full h-64 sm:h-80 bg-muted rounded-2xl flex items-center justify-center overflow-hidden">
              <img src={srv.image} alt={srv.title} className="w-full h-full object-cover rounded-2xl" />
            </div>
          </div>

          <Separator className="my-10" />

          {/* Features + Materials */}
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <h2 className="text-xl font-bold mb-5">Features</h2>
              <ul className="space-y-3">
                {srv.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <FontAwesomeIcon icon={faCheckCircle} className="size-4 mt-0.5 text-green-500 shrink-0" />
                    <span className="text-muted-foreground">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Materials</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {srv.materials.map((m) => (
                      <Badge key={m} variant="secondary" className="text-xs">{m}</Badge>
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground mt-4">
                    Not sure which material is right for your project? Our team will recommend the best option based on your requirements.
                  </p>
                </CardContent>
              </Card>
              <div className="mt-6 text-center">
                <Link href="/contact" className="inline-flex">
                  <Button className="w-full" variant="outline">
                    Get a Quote
                    <FontAwesomeIcon icon={faArrowRight} className="size-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Related Services */}
          <Separator className="my-14" />
          <h2 className="text-xl font-bold mb-6">Other Services You Might Need</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {Object.keys(services)
              .filter((s) => s !== slug)
              .slice(0, 4)
              .map((s) => {
                const rs = services[s];
                return (
                  <Link key={s} href={`/services/${s}`}>
                    <Card className="glass-card hover:shadow-lg transition-shadow p-0 overflow-hidden group">
                      <div className="w-full h-28 bg-muted flex items-center justify-center overflow-hidden">
                        <img src={rs.image} alt={rs.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      </div>
                      <CardHeader className="p-4">
                        <CardTitle className="text-sm">{rs.title}</CardTitle>
                      </CardHeader>
                    </Card>
                  </Link>
                );
              })}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
