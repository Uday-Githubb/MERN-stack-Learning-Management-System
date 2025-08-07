import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-lms.jpg";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "MERN stack Learning Management System (LMS)";
  }, []);

  return (
    <main className="min-h-screen flex items-center justify-center bg-background">
      <section className="container mx-auto grid md:grid-cols-2 gap-12 items-center animate-fade-in">
        <article>
          <h1 className="text-5xl font-bold mb-6">
            MERN stack Learning Management System (LMS)
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Futuristic LMS with role-based access, rich analytics, smooth animations, and a scalable MERN architecture.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="/dashboard" aria-label="Go to dashboard" className="hover-scale">
              <Button variant="hero" size="lg">Open Dashboard</Button>
            </a>
            <a href="/login" aria-label="Log in" className="hover-scale">
              <Button variant="outline" size="lg">Log In</Button>
            </a>
          </div>

          <ul className="mt-10 grid sm:grid-cols-2 gap-3">
            <li className="bg-card border rounded-md p-4 animate-enter">
              <span className="font-medium">JWT Roles</span>
              <p className="text-sm text-muted-foreground">Student, Instructor, Admin</p>
            </li>
            <li className="bg-card border rounded-md p-4 animate-enter">
              <span className="font-medium">Interactive Analytics</span>
              <p className="text-sm text-muted-foreground">Charts, heatmaps, insights</p>
            </li>
            <li className="bg-card border rounded-md p-4 animate-enter">
              <span className="font-medium">Content Player</span>
              <p className="text-sm text-muted-foreground">Stream videos and PDFs</p>
            </li>
            <li className="bg-card border rounded-md p-4 animate-enter">
              <span className="font-medium">Scalable Stack</span>
              <p className="text-sm text-muted-foreground">React + Node + MongoDB</p>
            </li>
          </ul>
        </article>
        <aside className="relative">
          <img
            src={heroImage}
            alt="Futuristic LMS hero with analytics and courses"
            className="rounded-lg shadow-lg w-full h-auto hover-scale animate-fade-in"
            loading="eager"
          />
        </aside>
      </section>
    </main>
  );
};

export default Index;
