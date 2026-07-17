"use client";

import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faLocationDot, faPaperPlane, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const serviceOptions = [
  "Rapid Prototyping",
  "Custom Figurines & Miniatures",
  "Architectural Models",
  "Cosplay Props & Costumes",
  "Replacement Parts",
  "Educational Models",
  "Jewelry & Fashion",
  "Industrial Manufacturing Parts",
  "Not Sure / Other"
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) setStatus("sent");
      else setStatus("error");
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <>
        <Navbar />
        <section className="pt-28 pb-20">
          <div className="mx-auto max-w-lg px-4 text-center">
            <div className="flex size-20 items-center justify-center rounded-full bg-green-100 text-green-600 mx-auto mb-6">
              <FontAwesomeIcon icon={faCheckCircle} className="size-10" />
            </div>
            <h1 className="text-3xl font-bold mb-4">Message Sent!</h1>
            <p className="text-muted-foreground mb-8">
              Thanks for reaching out! We'll review your project and get back to you within 24 hours.
            </p>
            <Link href="/" className="inline-flex">
              <Button variant="outline">Back to Home</Button>
            </Link>
          </div>
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
          <div className="text-center max-w-2xl mx-auto mb-14">
            <Badge className="mb-4" variant="secondary">Contact</Badge>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Let's Build Something Together
            </h1>
            <p className="text-muted-foreground">
              Tell us about your project. We'll review your requirements and send a detailed quote within 24 hours.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-10 max-w-5xl mx-auto">
            {/* Form */}
            <div className="lg:col-span-2">
              <Card className="glass-card p-0">
                <CardHeader>
                  <CardTitle className="text-xl">Project Details</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium mb-1.5 block">Name *</label>
                        <Input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your full name" />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-1.5 block">Email *</label>
                        <Input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@email.com" />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium mb-1.5 block">Phone</label>
                        <Input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="(555) 123-4567" />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-1.5 block">Service</label>
                        <Select value={form.service} onValueChange={(v: string | null) => setForm({ ...form, service: v || "" })}>
                          <option value="">Select a service...</option>
                          {serviceOptions.map((s) => (
                            <option key={s} value={s}>{s}</option>
                          ))}
                        </Select>
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-1.5 block">Tell us about your project *</label>
                      <Textarea required value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Describe what you'd like to 3D print. Include size, material preferences, and any reference files or links..." rows={5} />
                    </div>
                    <Button type="submit" size="lg" disabled={status === "sending"}>
                      <FontAwesomeIcon icon={faPaperPlane} className="size-4 mr-2" />
                      {status === "sending" ? "Sending..." : "Send Message"}
                    </Button>
                    {status === "error" && (
                      <p className="text-sm text-red-500 mt-2">Something went wrong. Please try again or email us directly.</p>
                    )}
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="glass-card p-0">
                <CardHeader>
                  <CardTitle className="text-lg">Contact Info</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-sm">
                  <div className="flex items-start gap-3">
                    <FontAwesomeIcon icon={faPhone} className="size-4 mt-0.5 text-primary" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-muted-foreground">(555) 234-5678</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FontAwesomeIcon icon={faEnvelope} className="size-4 mt-0.5 text-primary" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-muted-foreground">hello@printlayer.studio</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FontAwesomeIcon icon={faLocationDot} className="size-4 mt-0.5 text-primary" />
                    <div>
                      <p className="font-medium">Studio</p>
                      <p className="text-muted-foreground">123 Innovation Drive, Suite 200<br />Maker City, CA 94025</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="glass-card p-0">
                <CardHeader>
                  <CardTitle className="text-lg">Hours</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground space-y-2">
                  <div className="flex justify-between"><span>Mon–Fri</span><span>9:00 AM – 6:00 PM</span></div>
                  <div className="flex justify-between"><span>Saturday</span><span>10:00 AM – 4:00 PM</span></div>
                  <div className="flex justify-between"><span>Sunday</span><span>Closed</span></div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
