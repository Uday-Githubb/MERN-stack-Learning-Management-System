import React from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function ProgressChart({ dataPoints = [20, 35, 50, 65, 70, 85, 95] }) {
  const data = {
    labels: ["W1", "W2", "W3", "W4", "W5", "W6", "W7"],
    datasets: [
      {
        label: "Course Progress (%)",
        data: dataPoints,
        borderColor: "hsl(258 85% 60%)",
        backgroundColor: "hsl(258 85% 60% / 0.2)",
        tension: 0.35,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: true },
      title: { display: false },
    },
    scales: {
      y: { min: 0, max: 100, ticks: { stepSize: 20 } },
    },
  } as const;

  return (
    <div role="img" aria-label="Progress over time line chart" className="bg-card rounded-md p-4 border">
      <Line options={options} data={data} />
    </div>
  );
}
