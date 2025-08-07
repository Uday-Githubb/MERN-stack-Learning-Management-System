import React, { useEffect } from "react";


export default function CoursePlayer() {
  // In a full MERN app, fetch course modules & signed S3 URLs here
  const sources = [
    { id: 1, title: "Introduction", src: "https://www.w3schools.com/html/mov_bbb.mp4" },
    { id: 2, title: "Module 1", src: "https://www.w3schools.com/html/movie.mp4" },
  ];

  useEffect(() => { document.title = "Course Player – MERN stack Learning Management System (LMS)"; }, []);

  const [current, setCurrent] = React.useState(sources[0]);

  return (
    <main className="container py-10 animate-fade-in">
      <header className="mb-6">
        <h1 className="text-2xl font-semibold">Course Player</h1>
        <p className="text-muted-foreground">Stream video content and track progress</p>
      </header>
      <div className="grid md:grid-cols-3 gap-6">
        <section className="md:col-span-2 bg-card border rounded-lg p-4">
          <video key={current.id} controls className="w-full rounded-md" src={current.src} />
          <h2 className="mt-3 font-medium">{current.title}</h2>
        </section>
        <aside className="bg-card border rounded-lg p-4">
          <h3 className="font-semibold mb-3">Modules</h3>
          <ul className="space-y-2">
            {sources.map((s) => (
              <li key={s.id}>
                <button
                  className="w-full text-left px-3 py-2 rounded-md border hover:bg-accent hover-scale"
                  onClick={() => setCurrent(s)}
                >
                  {s.title}
                </button>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </main>
  );
}
