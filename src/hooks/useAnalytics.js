import { useMemo } from "react";

export function useAnalytics() {
  // Mock series for chart
  const progressSeries = useMemo(() => [20, 35, 48, 62, 74, 85, 92], []);
  // Mock heatmap values 0-100
  const heatmap = useMemo(() => Array.from({ length: 84 }, () => Math.floor(Math.random() * 100)), []);

  const recommendations = useMemo(
    () => [
      { id: "r1", title: "Advanced React Patterns", description: "Level up component design and performance." },
      { id: "r2", title: "Node.js Scaling", description: "Microservices, queues, and observability." },
      { id: "r3", title: "Data Visualization", description: "Tell stories with data using Chart.js." },
    ],
    []
  );

  return { progressSeries, heatmap, recommendations };
}
