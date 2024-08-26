import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { Clock, Tool, Plug, Lightbulb, Shield } from "lucide-react";
import { BoltIcon, WrenchScrewdriverIcon } from "@heroicons/react/24/outline";

const services = [
  {
    title: "Electrical Repairs",
    description: "Quick and efficient repairs for all your electrical issues.",
    icon: BoltIcon,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Wiring and Rewiring",
    description:
      "Complete wiring solutions for new constructions and renovations.",
    icon: Plug,
    image: "/placeholder.svg?height=250&width=350",
  },
  {
    title: "Lighting Installation",
    description: "Expert installation of all types of lighting fixtures.",
    icon: Lightbulb,
    image: "/placeholder.svg?height=180&width=320",
  },
  {
    title: "Safety Inspections",
    description:
      "Comprehensive electrical safety inspections for your peace of mind.",
    icon: Shield,
    image: "/placeholder.svg?height=220&width=330",
  },
  {
    title: "Upgrades and Renovations",
    description: "Electrical system upgrades to meet your growing needs.",
    icon: WrenchScrewdriverIcon,
    image: "/placeholder.svg?height=240&width=360",
  },
  {
    title: "24/7 Emergency Services",
    description: "Round-the-clock support for urgent electrical problems.",
    icon: Clock,
    image: "/placeholder.svg?height=200&width=300",
  },
];

export default function ServicesPage() {
  return (
    <>
      <div className="bg-white">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Expert Electrical Services
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
              Professional, reliable, and affordable electrical solutions for
              your home and business.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Schedule a Service
              </a>
            </div>
          </div>
        </div>
      </div>
      <section id="services" className="w-full">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
            Our Services
          </h2>
          <div className="grid gap-6 pt-20 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={350}
                  height={250}
                  className="object-cover w-full"
                />
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <service.icon className="w-4 h-4 mr-2" />
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
