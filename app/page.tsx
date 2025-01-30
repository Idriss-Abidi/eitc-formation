import Image from "next/image";
import Hero from "@/components/Hero";
import ItHolic from "@/components/ItHolic";
import Lectures from "@/components/Lectures";
export default function Home() {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div
        id="FirstDiv"
        className="container mb-10 mx-auto px-5 lg:px-20 overflow-visible"
      >
        <Hero />
        <Lectures />
        <ItHolic />
      </div>
    </div>
  );
}
