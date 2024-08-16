import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ChartOptions, ChartData } from 'chart.js';


ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface Props {
  income: {
    currentMonth: number;
    previousMonth: number;
  };
}


const options: ChartOptions<'line'> = {
  responsive: true,
  plugins: {
    legend: {
      display: false, 
    },
    tooltip: {
      callbacks: {
        label: function (tooltipItem: any) {
          return `$${tooltipItem.raw}`; 
        },
      },
    },
  },
  scales: {
    x: {
      display: true, 
      grid: {
        display: false, 
      },
    },
    y: {
      type: 'linear' as const, 
      display: false, 
      grid: {
        display: false, 
      },
      beginAtZero: false,
      min: 0, 
      ticks: {
        callback: function (value: number | string) {
          return typeof value === 'number' ? `$${value}` : value; 
        },
      },
    },
  },
};


const data: ChartData<'line', number[], string> = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr'], 
  datasets: [
    {
      label: 'Income',
      data: [0, 0, 0, 0], 
      borderColor: 'rgba(75, 192, 192, 1)', 
      backgroundColor: 'rgba(75, 192, 192, 0.2)', 
      fill: true, 
      tension: 0.4, 
      pointRadius: 3, 
      borderWidth: 2, 
    },
  ],
};

const IncomeWidget: React.FC<Props> = ({ income }) => {
  
  const updatedData: ChartData<'line', number[], string> = {
    ...data,
    datasets: [
      {
        ...data.datasets[0],
        data: [0, 0, income.previousMonth, income.currentMonth], 
      },
    ],
  };

  return (
    <div className="col-span-4 bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold">Income</h2>
      <div className="mt-4 h-40">
        <Line data={updatedData} options={options} />
      </div>
    </div>
  );
};

export default IncomeWidget;
