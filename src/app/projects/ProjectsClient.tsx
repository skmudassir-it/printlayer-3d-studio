"use client";

import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { projects } from "@/lib/data";

const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

export default function ProjectsClient() {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <>
      <Navbar />
      <section className="pt-28 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <Badge className="mb-4" variant="secondary">Portfolio</Badge>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">Our Projects</h1>
            <p className="text-muted-foreground">
              {projects.length} projects across {categories.length - 1} categories. Every project is a story of an idea becoming real.
            </p>
          </div>

          <Tabs defaultValue="All" className="mb-10" onValueChange={(v: string | null) => setFilter(v || "All")}>
            <div className="flex justify-center">
              <TabsList className="flex-wrap h-auto">
                {categories.map((cat) => (
                  <TabsTrigger key={cat} value={cat} className="text-xs sm:text-sm">{cat}</TabsTrigger>
                ))}
              </TabsList>
            </div>
          </Tabs>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p, i) => (
              <Link key={i} href={`/services/${p.serviceSlug}`}>
                <Card className="glass-card p-0 overflow-hidden group h-full">
                  <div className="w-full h-48 bg-muted flex items-center justify-center overflow-hidden">
                    <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <CardHeader>
                    <Badge variant="secondary" className="text-xs mb-1 w-fit">{p.category}</Badge>
                    <CardTitle className="text-lg">{p.title}</CardTitle>
                    <CardDescription className="text-sm leading-relaxed">{p.description}</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-muted-foreground">
              No projects in this category yet.
            </div>
          )}

          <div className="text-center mt-12">
            <Link href="/contact" className="inline-flex">
              <Button size="lg">
                Have a project in mind?
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
