import React from "react";
import fig1 from '../assets/eur.png'
import fig2 from '../assets/usd.png'

interface Currency {
  name: string;
  rate: number;
  change: number;
}

interface CurrenciesMarketProps {
  currencies: Currency[];
}

const CurrenciesMarket: React.FC<CurrenciesMarketProps> = ({ currencies }) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-lg">
      <h3 className="text-lg font-semibold mb-4">Currencies Market</h3>
      <div className="space-y-4">
        {currencies.map((currency, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                <img
                  src={fig1}
                  alt={`${currency.name} flag`}
                  className="w-full h-full rounded-full"
                />
              </div>
              <div>
                <div className="text-lg font-semibold">{currency.name}</div>
                <div className="text-sm text-gray-500">
                  {currency.rate.toFixed(2)}
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-xl font-semibold">{currency.rate}</div>
              <div
                className={`text-sm font-medium ${
                  currency.change > 0 ? "text-green-500" : "text-red-500"
                }`}
              >
                {currency.change > 0 ? "▲" : "▼"} {currency.change.toFixed(2)}%
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CurrenciesMarket;
