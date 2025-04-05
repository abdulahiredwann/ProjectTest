import React, { useState } from "react";

function Plans() {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Standard",
      monthlyPrice: 29,
      yearlyPrice: 290,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      features: [
        "5 Team Members",
        "Basic Analytics",
        "24/7 Support",
        "1GB Storage",
      ],
    },
    {
      name: "Premium",
      monthlyPrice: 59,
      yearlyPrice: 590,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      features: [
        "20 Team Members",
        "Advanced Analytics",
        "Priority Support",
        "10GB Storage",
      ],
      recommended: true,
    },
    {
      name: "Enterprise",
      monthlyPrice: 99,
      yearlyPrice: 990,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      features: [
        "Unlimited Members",
        "Custom Analytics",
        "Dedicated Support",
        "Unlimited Storage",
      ],
    },
  ];

  return (
    <section className="py-16 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Flexible Plans
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-200 mb-8">
          Choose a plan that works best for you & your team
        </p>
        <div className="flex justify-center items-center mb-12">
          <div className="relative inline-flex items-center bg-white dark:bg-gray-800 rounded-full p-1 shadow-md">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition ${
                !isYearly
                  ? "bg-yellow-400 text-gray-900 dark:text-white"
                  : "text-gray-600 dark:text-gray-300"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition ${
                isYearly
                  ? "bg-yellow-400 text-gray-900 dark:text-white"
                  : "text-gray-600 dark:text-gray-300"
              }`}
            >
              Yearly{" "}
              <span className="ml-1 text-xs bg-green-500 text-white px-2 py-1 rounded-full">
                Save 60%
              </span>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`relative bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 ${
                plan.recommended ? "border-2 border-yellow-400" : ""
              }`}
            >
              {plan.recommended && (
                <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-gray-900 dark:text-white text-xs font-semibold px-3 py-1 rounded-full">
                  Recommended
                </span>
              )}
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {plan.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {plan.description}
              </p>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                <span className="text-lg font-normal">
                  {" "}
                  {isYearly ? "/year" : "/month"}
                </span>
              </div>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2 mb-6">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-center">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#signup"
                className={`block w-full text-center px-4 py-2 rounded-md transition ${
                  plan.recommended
                    ? "bg-yellow-400 text-gray-900 dark:text-white hover:bg-yellow-500"
                    : "bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600"
                }`}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Plans;
