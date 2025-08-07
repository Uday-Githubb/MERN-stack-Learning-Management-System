import React, { useEffect } from "react";
import ProgressChart from "@/components/Dashboard/ProgressChart";
import { useAnalytics } from "@/hooks/useAnalytics";

function Heatmap({ data }: { data: number[] }) {
  // 7x12 grid
  return (
    <div className="grid grid-cols-12 gap-1">
      {data.slice(0, 84).map((v, i) => (
        <div
          key={i}
          className="aspect-square rounded-sm"
          title={`Day ${i + 1}: ${v}%`}
          style={{
            backgroundColor:
              v > 80
                ? "hsl(var(--brand) / 0.9)"
                : v > 60
                ? "hsl(var(--brand) / 0.7)"
                : v > 40
                ? "hsl(var(--brand) / 0.5)"
                : v > 20
                ? "hsl(var(--brand) / 0.3)"
                : "hsl(var(--muted) / 0.6)",
          }}
        />)
      )}
    </div>
  );
}

export default function Dashboard() {
  const { progressSeries, heatmap, recommendations } = useAnalytics();
  useEffect(() => { document.title = "Dashboard – MERN stack Learning Management System (LMS)"; }, []);


  return (
    <main className="min-h-screen bg-background">
      <header className="container py-10">
        <h1 className="text-3xl font-semibold">Dashboard</h1>
        <p className="text-muted-foreground">Overview of learning activity and performance</p>
      </header>

      <section className="container grid gap-8 md:grid-cols-3">
        <div className="bg-card border rounded-lg p-6">
          <p className="text-sm text-muted-foreground">Active Courses</p>
          <p className="text-3xl font-bold">5</p>
        </div>
        <div className="bg-card border rounded-lg p-6">
          <p className="text-sm text-muted-foreground">Completion Rate</p>
          <p className="text-3xl font-bold">82%</p>
        </div>
        <div className="bg-card border rounded-lg p-6">
          <p className="text-sm text-muted-foreground">Weekly Study Time</p>
          <p className="text-3xl font-bold">12h</p>
        </div>
      </section>

      <section className="container grid gap-8 md:grid-cols-2 py-10">
        <article>
          <h2 className="text-xl font-medium mb-3">Progress</h2>
          <ProgressChart dataPoints={progressSeries} />
        </article>
        <article>
          <h2 className="text-xl font-medium mb-3">Progress Heatmap</h2>
          <div className="bg-card border rounded-md p-4">
            <Heatmap data={heatmap} />
          </div>
        </article>
      </section>

      <section className="container pb-16">
        <h2 className="text-xl font-medium mb-4">Recommended for You</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {recommendations.map((rec) => (
            <div key={rec.id} className="bg-card border rounded-lg p-4">
              <h3 className="font-semibold">{rec.title}</h3>
              <p className="text-sm text-muted-foreground">{rec.description}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
