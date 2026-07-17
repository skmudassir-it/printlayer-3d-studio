import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "PrintLayer 3D Studio — Premium 3D Printing Services",
  description: "Premium 3D printing for prototypes, figurines, architectural models, cosplay props, and industrial parts. Fast turnaround, expert craftsmanship, 8+ years experience.",
};

export default function HomePage() {
  return <HomeClient />;
}
