import Header from "@/components/Header";
import Hero from "@/components/homepage/Hero";
import LatestProperties from "@/components/homepage/LatestProperties";
import ProvidingServices from "@/components/homepage/ProvidingServices";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home Page | Zeema Homes",
  description: "Discover your next perfect place with Zeema Homes.",
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <LatestProperties />
      <ProvidingServices />
    </main>
  );
}
