import type { Metadata } from "next";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { pricingPlans, faqs } from "@/lib/data";

export const metadata: Metadata = {
  title: "Pricing — PrintLayer 3D Studio",
  description: "Transparent 3D printing pricing. Starter plans from $49, professional from $149, and custom enterprise solutions.",
};

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <section className="pt-28 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <Badge className="mb-4" variant="secondary">Pricing</Badge>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Simple, Transparent Pricing
            </h1>
            <p className="text-muted-foreground">
              No hidden fees. No surprises. Just quality prints at fair prices.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3 max-w-5xl mx-auto mb-20">
            {pricingPlans.map((plan, i) => (
              <Card key={i} className={`glass-card p-0 relative ${plan.popular ? "ring-2 ring-primary shadow-lg scale-[1.02]" : ""}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground text-xs px-4 py-1">Most Popular</Badge>
                  </div>
                )}
                <CardHeader className="text-center pt-8">
                  <CardTitle className="text-xl">{plan.name}</CardTitle>
                  <div className="mt-3">
                    <span className="text-4xl font-extrabold">{plan.price}</span>
                    {plan.price !== "Custom" && <span className="text-muted-foreground text-sm"> /starting</span>}
                  </div>
                  <CardDescription className="text-sm mt-2">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((f, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-sm">
                        <FontAwesomeIcon icon={faCheck} className="size-3.5 mt-0.5 text-green-500 shrink-0" />
                        <span className="text-muted-foreground">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className="inline-flex w-full mt-8">
                    <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
                      {plan.price === "Custom" ? "Contact Us" : "Get Started"}
                      <FontAwesomeIcon icon={faArrowRight} className="size-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* FAQ */}
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-10">Frequently Asked Questions</h2>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <details key={i} className="glass-card group p-0 overflow-hidden">
                  <summary className="cursor-pointer list-none p-4 font-medium flex items-center justify-between">
                    {faq.q}
                    <svg className="size-4 transition-transform group-open:rotate-180 shrink-0 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className="px-4 pb-4 text-muted-foreground text-sm">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
