import React from "react";
import RashmikaImage from "../assets/Rashmika.png";
import NithilImage from "../assets/Nithil.png";
import SakuniImage from "../assets/Sakuni.png";
import TehanImage from "../assets/Tehan.png";

const items = [
  {
    id: 1,
    title: "Intelligent Extraction & Sustainability Scoring",
    description:
      "The FoodLens AI system utilizes advanced computer vision to instantly extract complex nutritional facts, ingredients, and claims from diverse product packaging. Simultaneously, this module analyzes extracted text, sourcing indicators, and certification logos to calculate a comprehensive sustainability score. This unified approach seamlessly converts unstructured visual data into machine-readable formats while assessing the environmental footprint of the product.",
    author: {
      name: "Rashmika Rupasinghe",
      imageUrl: RashmikaImage,
    },
  },
  {
    id: 2,
    title: "Automated Compliance Verification",
    description:
      "The compliance verification module acts as the core regulatory engine of the proposed solution. It is designed to proactively evaluate the extracted ingredient lists and nutritional claims against up-to-date food safety regulations and dietary guidelines. By cross-referencing extensive regulatory databases, the system instantly flags discrepancies, misleading claims, or non-compliant formulations before a product reaches the consumer.",
    author: {
      name: "Nithil Waduge",
      imageUrl: NithilImage,
    },
  },
  {
    id: 3,
    title: "Health Impact Analysis",
    description:
      "The proposed solution features a comprehensive health impact model that translates complex nutritional data into clear, actionable dietary insights. By evaluating macronutrient ratios, hidden additives, and specific allergen warnings extracted from the label, the system generates individualized health profiles. This empowers consumers to recognize potential health risks and make safer, more informed dietary choices tailored to their needs.",
    author: {
      name: "Sakuni Dakshina",
      imageUrl: SakuniImage,
    },
  },
  {
    id: 4,
    title: "Predictive Market Intelligence",
    description:
      "The market intelligence model is designed to maximize data utility by aggregating localized product insights. Utilizing the continuous influx of scanned labels, the machine learning model identifies emerging nutritional trends, formulation shifts, and dietary preferences. By continuously learning and adapting to new product data, the model provides food brands, researchers, and regulatory bodies with real-time, actionable market analytics.",
    author: {
      name: "Tehan Nimsitha",
      imageUrl: TehanImage,
    },
  },
];

const Solution = () => {
  return (
    <div id="research-problem-solution" className="py-6 lg:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Proposed Solution
        </h2>
        <div className="mx-auto mt-2 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 pt-10 sm:mt-2 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {items.map((post) => (
            <article
              key={post.id}
              className="flex max-w-xl flex-col items-start justify-between bg-white p-6 rounded-lg shadow-lg bg-opacity-60"
            >
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <span className="absolute inset-0" />
                  {post.title}
                </h3>
                <p
                  className={`mt-5 text-sm text-justify leading-6 text-gray-600 overflow-hidden transition-all duration-500 ease-in-out max-h-24 group-hover:max-h-96 opacity-80 group-hover:opacity-100`}
                >
                  {post.description}
                </p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <img
                  alt=""
                  src={post.author.imageUrl}
                  className="h-10 w-10 rounded-full bg-gray-50"
                />
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900">
                    <span className="absolute inset-0" />
                    {post.author.name}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Solution;
