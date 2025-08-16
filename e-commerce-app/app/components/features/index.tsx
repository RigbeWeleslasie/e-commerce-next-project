"use client";

import React from 'react';
import { FaShippingFast, FaHeadset, FaMoneyBillWave } from 'react-icons/fa';
const featuresData = [
  {
    icon: <FaShippingFast className="w-8 h-8 md:w-10 md:h-10 text-white" />,
    title: 'FREE AND FAST DELIVERY',
    description: 'Free delivery for all orders over $140',
  },
  {
    icon: <FaHeadset className="w-8 h-8 md:w-10 md:h-10 text-white" />,
    title: '24/7 CUSTOMER SERVICE',
    description: 'Friendly 24/7 customer support',
  },
  {
    icon: <FaMoneyBillWave className="w-8 h-8 md:w-10 md:h-10 text-white" />,
    title: 'MONEY BACK GUARANTEE',
    description: 'We return money within 30 days',
  },
];
const Features = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-8 space-y-8 md:space-y-0 md:space-x-8">
      {featuresData.map((feature, index) => (
        <div key={index} className="flex flex-col items-center text-center max-w-xs">
          <div className="bg-gray-800 rounded-full p-4 mb-4">
            {feature.icon}
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">{feature.title}</h3>
          <p className="text-gray-600">{feature.description}</p>
        </div>
      ))}
    </div>
  );
};
export default Features;
