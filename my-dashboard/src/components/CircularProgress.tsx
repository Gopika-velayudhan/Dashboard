import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';

Chart.register(ArcElement, Tooltip, Legend);

interface CircularProgressProps {
  percentage: number;
  color: string;
}

const CircularProgress: React.FC<CircularProgressProps> = ({ percentage, color }) => {
  const data = {
    datasets: [
      {
        data: [percentage, 100 - percentage],
        backgroundColor: [color, '#E5E7EB'], 
        borderWidth: 0,
        cutout: '75%',
      },
    ],
  };

  return (
    <div className="relative w-24 h-24">
      <Doughnut data={data} options={{ cutout: '75%', rotation: -90 }} />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-xl font-semibold">{percentage}%</span>
      </div>
    </div>
  );
};

export default CircularProgress;
