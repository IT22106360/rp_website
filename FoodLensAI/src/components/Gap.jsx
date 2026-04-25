import React from "react";

const Gap = () => {
  const researchGapExplanation = {
    title: "Research Gap",
    description:
      "Current nutritional analysis and dietary label evaluations rely heavily on manual review and fragmented data systems, leading to inefficiencies in verifying regulatory compliance, assessing environmental impact, and extracting actionable health insights. These traditional methods lack automation in critical areas, such as the multimodal extraction of complex nutritional data directly from varied product packaging and the real-time cross-referencing of this data against evolving food safety regulations. Additionally, there are no cohesive, automated systems capable of instantly analyzing a product's sustainability metrics from its label, nor for aggregating this localized visual data to generate predictive market intelligence and consumer trends. This highlights the need for an integrated platform like FoodLens AI that leverages computer vision and multimodal machine learning to automate label data extraction, streamline regulation checks, evaluate sustainability, and generate real-time market intelligence within a single unified solution."
  };

  return (
    <div id="research-gap" className="py-6 lg:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {researchGapExplanation.title}
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          {researchGapExplanation.description}
        </p>
      </div>
    </div>
  );
};

export default Gap;
