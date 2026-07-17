"use client";

import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faClock, faShield, faLayerGroup, faHandSparkles, faArrowRight, faCheckCircle, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { services, testimonials, stats, projects } from "@/lib/data";

const serviceKeys = Object.keys(services);
const whyUs = [
  { icon: faLayerGroup, title: "Precision Layer by Layer", desc: "Industrial-grade printers producing 0.05mm accuracy at any scale." },
  { icon: faClock, title: "Rush Turnaround", desc: "Most projects ship in 3-7 business days. 24-hour rush available on select services." },
  { icon: faShield, title: "Quality Guaranteed", desc: "Every print inspected and tested. If it's not perfect, we reprint it — free." },
  { icon: faHandSparkles, title: "Full-Service Studio", desc: "From 3D design and scanning to printing, finishing, and painting — we do it all." }
];

export default function HomeClient() {
  const autoplay = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative pt-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="text-xs font-medium px-3 py-1" variant="secondary">
                Since 2018 — 2,500+ Projects
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
                Your Ideas,{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Printed in 3D
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
                From rapid prototypes to custom figurines, architectural models to industrial parts — we print with precision, passion, and 8+ years of expertise.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="inline-flex">
                  <Button size="lg" className="text-base">
                    Start a Project
                    <FontAwesomeIcon icon={faArrowRight} className="size-4 ml-2" />
                  </Button>
                </Link>
                <Link href="/services" className="inline-flex">
                  <Button variant="outline" size="lg" className="text-base">
                    Our Services
                  </Button>
                </Link>
              </div>
            </div>
            <div className="hidden lg:block relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-3xl opacity-50" />
              <img src="/images/hero-3d-printing.jpg" alt="3D Printing in action" className="relative w-full h-80 object-cover rounded-2xl shadow-2xl" />
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="relative border-t border-border/50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="text-2xl sm:text-3xl font-bold text-primary">{s.value}</div>
                  <div className="text-xs sm:text-sm text-muted-foreground mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-20 sm:py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <Badge className="mb-4" variant="secondary">Why PrintLayer</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Precision Meets Passion
            </h2>
            <p className="text-muted-foreground">
              We're not just running printers — we're craftspeople who obsess over every layer. Here's what sets us apart.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyUs.map((item, i) => (
              <Card key={i} className="glass-card text-center p-0">
                <CardHeader>
                  <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary mx-auto mb-2">
                    <FontAwesomeIcon icon={item.icon} className="size-5" />
                  </div>
                  <CardTitle className="text-base">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <Badge className="mb-4" variant="secondary">Our Services</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              What We Print
            </h2>
            <p className="text-muted-foreground">
              Eight specialized printing services — from prototypes to production parts.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {serviceKeys.map((slug) => {
              const srv = services[slug];
              return (
                <Link key={slug} href={`/services/${slug}`}>
                  <Card className="glass-card transition-shadow hover:shadow-lg p-0 overflow-hidden h-full group">
                    <div className="w-full h-40 bg-muted flex items-center justify-center overflow-hidden">
                      <img src={srv.image} alt={srv.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <CardHeader>
                      <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <FontAwesomeIcon icon={srv.icon} className="size-4" />
                      </div>
                      <CardTitle className="text-base">{srv.title}</CardTitle>
                      <CardDescription className="text-xs leading-relaxed">{srv.shortDesc}</CardDescription>
                    </CardHeader>
                  </Card>
                </Link>
              );
            })}
          </div>
          <div className="text-center mt-10">
            <Link href="/services" className="inline-flex">
              <Button variant="outline" size="lg">
                View All Services
                <FontAwesomeIcon icon={faArrowRight} className="size-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 sm:py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <Badge className="mb-4" variant="secondary">Featured Work</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Projects We're Proud Of
            </h2>
            <p className="text-muted-foreground">
              From prototypes to production parts — here's what our printers can do.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {projects.slice(0, 4).map((p, i) => (
              <Card key={i} className="glass-card p-0 overflow-hidden group">
                <div className="w-full h-44 bg-muted flex items-center justify-center overflow-hidden">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <CardHeader>
                  <Badge variant="secondary" className="text-xs mb-1 w-fit">{p.category}</Badge>
                  <CardTitle className="text-base">{p.title}</CardTitle>
                  <CardDescription className="text-xs leading-relaxed">{p.description.slice(0, 100)}...</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/projects" className="inline-flex">
              <Button variant="outline" size="lg">
                View All Projects
                <FontAwesomeIcon icon={faArrowRight} className="size-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <Badge className="mb-4" variant="secondary">Testimonials</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Trusted by Makers & Innovators
            </h2>
          </div>
          <Carousel plugins={[autoplay.current]} opts={{ loop: true, align: "start" }} className="max-w-5xl mx-auto">
            <CarouselContent>
              {testimonials.map((t, i) => (
                <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="glass-card p-0 h-full">
                    <CardHeader>
                      <FontAwesomeIcon icon={faQuoteRight} className="size-6 text-primary/30" />
                      <div className="flex gap-0.5">
                        {[...Array(t.rating)].map((_, j) => (
                          <FontAwesomeIcon key={j} icon={faStar} className="size-3 text-amber-400" />
                        ))}
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed italic">{t.quote}</p>
                    </CardHeader>
                    <CardContent>
                      <div className="border-t pt-3">
                        <p className="text-sm font-semibold">{t.name}</p>
                        <p className="text-xs text-muted-foreground">{t.role}, {t.company}</p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-2 mt-8">
              <CarouselPrevious className="static translate-y-0" />
              <CarouselNext className="static translate-y-0" />
            </div>
          </Carousel>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-24 bg-gradient-to-r from-primary to-accent">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Ready to Bring Your Idea to Life?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-xl mx-auto">
            Upload your file or describe your project. We'll get back to you with a detailed quote within 24 hours.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="inline-flex">
              <Button size="lg" variant="secondary" className="text-base">
                Get a Free Quote
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
