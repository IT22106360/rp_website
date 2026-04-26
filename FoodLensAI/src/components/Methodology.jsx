import React from "react";

import SystemDiagram from "../assets/system-diagram.png";

const Methodology = () => {
  return (
    <div id="methodology" className="py-6 lg:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Methodology
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          We adopt a structured methodology to ensure the development of effective and innovative solutions.
        </p>
        <div className="mt-10 lg:flex lg:items-center">
          <div className="lg:w-1/2">
            <img
              src={SystemDiagram}
              alt="Dam Operation Illustration"
              className="w-full h-auto rounded-lg"
            />
          </div>

          <div className="lg:w-1/2 lg:pl-12 mt-8 lg:mt-0">
            <ul className="list-disc pl-6 text-lg leading-8 text-gray-600">
              <li>
                <strong>Intelligent Label Extraction & Sustainability Analysis:</strong>
                Utilizes OCR, Vision-Language Models, and post processing to accurately extract and structure food label information. Simultaneously, it integrates carbon emission data and uses machine learning to perform autonomous sustainability assessments.
              </li>
              <li>
                <strong>Regulatory Compliance & Claim Verification:</strong> Employs Retrieval-Augmented Generation (RAG) and Large Language Models (LLMs) to automatically verify product claims against FDA and USDA regulations. It provides citation-backed explanations and generates compliance-verified labels to prevent misleading claims.
              </li>
              <li>
                <strong>Nutrition and Health Impact Prediction:</strong> Integrates multi-source data from FDA and USDA databases into Knowledge Graphs and utilizes Graph Neural Networks (GNNs) to predict short- and long-term health risks (like diabetes or allergies) from ingredient interactions. It uses LLMs to summarize scientific evidence and provides insights through an interactive conversational interface.
              </li>
              <li>
                <strong>Social Listening for Trend Analysis:</strong> Applies transformer-based NLP models to continuously monitor consumer conversations on social platforms and review sites to extract sentiment and detect emerging topics. It uses time-series and anomaly detection to reveal shifting dietary preferences and public concerns
              </li>
            </ul>
          </div>
        </div>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          This integrated system bridges regulatory compliance, health science, and consumer trust, ensuring transparent labeling, proactive regulation checks, personalized health insights, and actionable market intelligence
        </p>
      </div>
    </div>
  );
};

export default Methodology;
