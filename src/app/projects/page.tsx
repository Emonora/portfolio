import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel";
import { Card, CardContent } from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import Link from "next/link";
import DarkModeToggle from "../_components/darkMode";

export default function ProjectsPage() {
  return (
    <main className="min-w-screen flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] p-4 dark:text-white">
      <h1 className="text-4xl font-bold">Projects</h1>
      <p>Welcome to my projects page!</p>
      <DarkModeToggle />
      <div className="flex flex-row pt-10">
        <Carousel>
          <CarouselContent>
            <CarouselItem>
              <Card>
                <CardContent className="flex aspect-square flex-col items-center justify-center gap-4 p-6">
                  <h1 className="text-2xl font-bold text-primary">
                    Coding Project Idea Generator
                  </h1>
                  <p>A tool to generate coding project ideas.</p>
                  <Button asChild variant="link">
                    <Link href="https://idea-gen-beryl.vercel.app/">View</Link>
                  </Button>
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem>
              <Card>
                <CardContent className="flex aspect-square flex-col items-center justify-center gap-4 p-6">
                  <h1 className="text-2xl font-bold text-primary">
                    Blood Orange Clicker
                  </h1>
                  <p>A simple cookie clicker clone</p>
                  <Button asChild variant="link">
                    <Link href="https://blood-orange-clicker.vercel.app/">
                      View
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <div className="flex flex-row">
        <Button variant="link" asChild className="mt-4 text-white">
          <Link href="/about">About</Link>
        </Button>
        <Button variant="link" asChild className="mt-4 text-white">
          <Link href="/">Home</Link>
        </Button>
        <Button variant="link" asChild className="mt-4 text-white">
          <Link href="/contact">Contact me</Link>
        </Button>
      </div>
    </main>
  );
}
