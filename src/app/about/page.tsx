import type { Metadata } from "next";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket, faEye, faHandshake, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { stats } from "@/lib/data";

export const metadata: Metadata = {
  title: "About — PrintLayer 3D Studio",
  description: "Meet the team behind PrintLayer 3D Studio. 8+ years of 3D printing expertise, 2,500+ projects delivered, and a passion for precision.",
};

const values = [
  { icon: faRocket, title: "Innovation", desc: "We invest in the latest printers, materials, and techniques to stay at the cutting edge of additive manufacturing." },
  { icon: faEye, title: "Precision", desc: "Every layer matters. We inspect every print against quality standards with tolerances as tight as 0.05mm." },
  { icon: faHandshake, title: "Partnership", desc: "We don't just print files — we collaborate. From design feedback to material selection, we're invested in your success." }
];

const teamMembers = [
  { name: "Alex Chen", role: "Founder & Lead Engineer", bio: "Mechanical engineer turned 3D printing evangelist. 12 years in additive manufacturing." },
  { name: "Maya Patel", role: "Head of Design & CAD", bio: "Industrial designer with a passion for turning rough sketches into stunning printable models." },
  { name: "David Kim", role: "Production Manager", bio: "Former aerospace technician who brings manufacturing precision to every project." },
  { name: "Priya Singh", role: "Client Success Lead", bio: "Ensures every client gets white-glove service from first inquiry to final delivery." }
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <section className="pt-28 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Hero */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <Badge className="mb-4" variant="secondary">About Us</Badge>
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
                We're the Layer Between{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Idea and Reality
                </span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                PrintLayer 3D Studio was founded in 2018 with a simple belief: everyone should be able to turn their ideas into physical objects. What started as a single FDM printer in a garage has grown into a full-service 3D printing studio with industrial-grade equipment and a team of passionate craftspeople.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We've printed over 2,500 projects — from startup prototypes that raised millions to personalized gifts that brought tears. Every project, big or small, gets the same obsessive attention to detail.
              </p>
            </div>
            <div className="w-full h-72 sm:h-96 bg-muted rounded-2xl flex items-center justify-center overflow-hidden">
              <img src="/images/about-studio.jpg" alt="PrintLayer Studio" className="w-full h-full object-cover rounded-2xl" />
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-20">
            {stats.map((s) => (
              <Card key={s.label} className="glass-card text-center p-0">
                <CardHeader>
                  <div className="text-3xl font-bold text-primary">{s.value}</div>
                  <CardTitle className="text-sm font-normal text-muted-foreground">{s.label}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>

          {/* Values */}
          <div className="text-center max-w-2xl mx-auto mb-14">
            <Badge className="mb-4" variant="secondary">Our Values</Badge>
            <h2 className="text-3xl font-bold tracking-tight mb-4">What Drives Us</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-3 mb-20">
            {values.map((v, i) => (
              <Card key={i} className="glass-card p-0 text-center">
                <CardHeader>
                  <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary mx-auto mb-2">
                    <FontAwesomeIcon icon={v.icon} className="size-5" />
                  </div>
                  <CardTitle className="text-lg">{v.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{v.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Team */}
          <Separator className="mb-14" />
          <div className="text-center max-w-2xl mx-auto mb-14">
            <Badge className="mb-4" variant="secondary">Our Team</Badge>
            <h2 className="text-3xl font-bold tracking-tight mb-4">Meet the Makers</h2>
            <p className="text-muted-foreground">
              A small but mighty team of designers, engineers, and 3D printing experts.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-20">
            {teamMembers.map((m, i) => (
              <Card key={i} className="glass-card p-0 text-center">
                <CardHeader>
                  <div className="flex size-20 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-white text-2xl font-bold mx-auto mb-3">
                    {m.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <CardTitle className="text-base">{m.name}</CardTitle>
                  <p className="text-xs font-medium text-primary">{m.role}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-muted-foreground">{m.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center bg-gradient-to-r from-primary to-accent rounded-2xl p-12 text-white">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Ready to Work Together?</h2>
            <p className="text-white/80 mb-6 max-w-lg mx-auto">
              Whether you have a 3D file ready or just a sketch on a napkin, we'd love to help bring your idea to life.
            </p>
            <Link href="/contact" className="inline-flex">
              <Button size="lg" variant="secondary">
                Start Your Project
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
