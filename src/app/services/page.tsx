import type { Metadata } from "next";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { services } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services — PrintLayer 3D Studio",
  description: "Explore our 3D printing services: rapid prototyping, custom figurines, architectural models, cosplay props, replacement parts, and more.",
};

const serviceKeys = Object.keys(services);

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <section className="pt-28 pb-20 sm:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <Badge className="mb-4" variant="secondary">Services</Badge>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              What We Print
            </h1>
            <p className="text-muted-foreground">
              Eight specialized 3D printing services for every project — from hobbyist miniatures to industrial production parts.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {serviceKeys.map((slug) => {
              const srv = services[slug];
              return (
                <Link key={slug} href={`/services/${slug}`}>
                  <Card className="glass-card hover:shadow-lg transition-shadow p-0 overflow-hidden group h-full">
                    <div className="grid sm:grid-cols-3 h-full">
                      <div className="sm:col-span-1 bg-muted flex items-center justify-center overflow-hidden">
                        <img src={srv.image} alt={srv.title} className="w-full h-32 sm:h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      </div>
                      <div className="sm:col-span-2 p-5">
                        <CardHeader className="p-0 pb-3">
                          <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                            <FontAwesomeIcon icon={srv.icon} className="size-4" />
                          </div>
                          <CardTitle className="text-lg mt-3">{srv.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="p-0">
                          <p className="text-sm text-muted-foreground leading-relaxed mb-3">{srv.shortDesc}</p>
                          <div className="flex flex-wrap gap-1.5 mb-3">
                            {srv.materials.slice(0, 3).map((m) => (
                              <Badge key={m} variant="outline" className="text-xs">{m}</Badge>
                            ))}
                            {srv.materials.length > 3 && (
                              <Badge variant="outline" className="text-xs">+{srv.materials.length - 3} more</Badge>
                            )}
                          </div>
                          <div className="flex items-center gap-2 text-sm text-primary font-medium">
                            Learn more <FontAwesomeIcon icon={faArrowRight} className="size-3" />
                          </div>
                        </CardContent>
                      </div>
                    </div>
                  </Card>
                </Link>
              );
            })}
          </div>
          <div className="text-center mt-12">
            <Link href="/contact" className="inline-flex">
              <Button size="lg">
                Not sure what you need? Let's talk
                <FontAwesomeIcon icon={faArrowRight} className="size-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
