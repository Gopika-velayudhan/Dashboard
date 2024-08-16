import React from "react";

interface Card {
  name: string;
  balance: number;
  last4: string;
}

interface Props {
  cards: Card[];
}

const CardsWidget: React.FC<Props> = ({ cards }) => {
  return (
    <div className="p-6 bg-white rounded-3xl shadow-lg relative w-96">
      <div className="absolute h-12 w-12 top-4 right-4 pb-1  rounded-full border-2 border-dotted border-gray-500 flex items-center justify-center">
        <button className="text-xl font-bold text-gray-700">+</button>
      </div>

      <div className="flex flex-col space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-xl font-bold">Your Cards</h3>
            <span className="inline-block px-3 py-1 text-sm text-white bg-blue-500 rounded-full">
              Premium
            </span>
          </div>
        </div>

        <div className="flex space-x-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`relative flex items-center p-5 space-x-3 ${
                card.name === "VISA"
                  ? "bg-black text-white"
                  : "bg-white text-black"
              } rounded-xl shadow-md`}
            >
              <div>
                <h4 className="text-3xl font-bold">{`$${card.balance.toLocaleString()}`}</h4>
                <p className="mt-2 text-lg text-gray-300">{`**** ${card.last4}`}</p>
                <p className="text-lg text-gray-300">20/26</p>
              </div>
              {card.name === "VISA" && (
                <div className="ml-auto text-green-400 text-2xl font-semibold">
                  {card.name}
                </div>
              )}
            </div>
          ))}
          <div className="flex items-center flex-col justify-between p-4 bg-gray-200 rounded-lg shadow-lg">
            <h4 className="text-xl font-semibold">$520</h4>
            <p className="mt-1 text-sm text-gray-500">**** 1888</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsWidget;
