import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";
import TotalBalance from "../components/TotalBalence";
import IncomeWidget from "../components/IncomeWidget";
import CardsWidget from "../components/CardsWidget";
import CurrenciesMarket from "../components/Currency";

import CircularProgress from "../components/CircularProgress";
import Navbar from "./Navbar";
import { AlignVerticalBottomOutlined, CreditCard } from "@mui/icons-material";

interface DashboardData {
  totalBalance: number;
  income: {
    currentMonth: number;
    previousMonth: number;
  };
  cards: {
    name: string;
    balance: number;
    last4: string;
  }[];
  currenciesMarket: {
    name: string;
    rate: number;
    change: number;
  }[];
  expenses: number;
}

const Dashboard: React.FC = () => {
  const [dashboardData, setDashboardData] = useState<DashboardData | null>(
    null
  );

  useEffect(() => {
    axios
      .get("http://localhost:5000/dashboard")
      .then((response) => setDashboardData(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  if (!dashboardData) {
    return <div className="text-center mt-20">Loading...</div>;
  }

  const incomePercentage = Math.round(
    (dashboardData.income.currentMonth / dashboardData.income.previousMonth) *
      100
  );
  const expensesPercentage = Math.round(
    (dashboardData.expenses / dashboardData.income.currentMonth) * 100
  );

  return (
    <>
      <div>
        <Sidebar />
        <Navbar />
      </div>
      <div className="flex flex-col h-screen">
        <div className="flex flex-1">
          <div className="pl-16 p-4 bg-gray-100 flex-1 pt-20">
            <div className="grid grid-cols-12 gap-4">
              <TotalBalance totalBalance={dashboardData.totalBalance} />
              <IncomeWidget income={dashboardData.income} />
              <CardsWidget cards={dashboardData.cards} />
              
              {/* Commented out the components as per your original code */}
              {/* <ExpensesWidget expenses={dashboardData.expenses} /> */}
            </div>

            
            <div className="flex flex-wrap gap-4 mt-4">
              <div className="flex-1 min-w-[150px] bg-white p-4 rounded-lg shadow-md flex items-center justify-between">
                <div>
                  <AlignVerticalBottomOutlined />
                  <h3 className="text-lg font-medium">Income</h3>
                  <p className="text-xl font-semibold">
                    ${dashboardData.income.currentMonth}
                  </p>
                </div>
                <CircularProgress
                  percentage={incomePercentage}
                  color="#34D399"
                />
              </div>
              <div className="flex-1 min-w-[150px] bg-white p-4 rounded-lg shadow-md flex items-center justify-between">
                <div>
                  <CreditCard />
                  <h3 className="text-lg font-medium">Expenses</h3>
                  <p className="text-xl font-semibold">
                    ${dashboardData.expenses}
                  </p>
                </div>
                <CircularProgress
                  percentage={expensesPercentage}
                  color="#EF4444"
                />
              </div>
              <div className="flex-1 min-w-[150px] bg-white p-4 rounded-lg shadow-md">
                <div className="h-full flex flex-col justify-between">
                  <CurrenciesMarket currencies={dashboardData.currenciesMarket} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
