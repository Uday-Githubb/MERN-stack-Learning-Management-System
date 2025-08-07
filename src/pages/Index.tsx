import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-lms.jpg";

const Index = () => {
  return (
    <main className="min-h-screen flex items-center justify-center bg-background">
      <section className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <article>
          <h1 className="text-5xl font-bold mb-6">
            Recruiter-Ready MERN LMS
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Modern learning platform with roles, analytics, and production-grade tooling.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="/dashboard" aria-label="Go to dashboard">
              <Button variant="hero" size="lg">Open Dashboard</Button>
            </a>
            <a href="/login" aria-label="Log in">
              <Button variant="outline" size="lg">Log In</Button>
            </a>
          </div>
        </article>
        <aside className="relative">
          <img
            src={heroImage}
            alt="Professional LMS hero with analytics and courses"
            className="rounded-lg shadow-lg w-full h-auto"
            loading="eager"
          />
        </aside>
      </section>
    </main>
  );
};

export default Index;
