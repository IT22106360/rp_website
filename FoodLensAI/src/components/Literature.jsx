import React from "react";

const Literature = () => {
  return (
    <div id="literature-survey" className="py-6 lg:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Literature Survey
        </h2>
        <p className="mt-8 text-lg leading-8 text-gray-700">
          The current methodology for nutritional label analysis and dietary product 
          compliance presents several challenges that necessitate the development of 
          an integrated FoodLens AI system. Firstly, the manual extraction of data from 
          food labels and the reliance on human review for critical compliance checks 
          introduce a level of inefficiency and potential for errors. Human analysts or 
          consumers must continually parse complex supplement facts panels and manually 
          cross-reference them against varying health goals, dietary restrictions, or regulatory standards. 
          This tedious and manual approach can lead to suboptimal dietary choices and significant oversight 
          in regulatory compliance.
        </p>

        <p className="mt-6 text-lg leading-8 text-gray-700">
          Moreover, the lack of pre-emptive, automated screening strategies to identify 
          misleading nutritional claims or hidden health risks poses a significant challenge. 
          The conventional practice of scrutinizing dietary labels only post-market, or relying on the 
          consumer's limited nutritional knowledge at the point of purchase, neglects the proactive management 
          of food transparency. This emphasizes the need for a more intelligent and adaptive computer-vision system capable 
          of instantly extracting and analyzing label data to identify potential health impacts or compliance issues before a product is consumed.
        </p>

        <blockquote className="mt-8 border-l-4 border-blue-500 pl-4 italic text-gray-500">
          Additionally, there is a notable disconnect concerning the dynamic integration of evolving health research, 
          regulatory guidelines, and sustainability metrics. The inability to instantly evaluate a product's label against updated dietary regulations 
          or emerging market intelligence leaves consumers vulnerable to outdated information and limits a brand's ability to ensure continuous market compliance.
        </blockquote>

        <p className="mt-6 text-lg leading-8 text-gray-700">
          Furthermore, the lack of a robust, real-time insights system for individuals trying to navigate complex dietary needs poses a serious public
           health concern. An often-overlooked issue is the cumulative negative health impact and dietary complications caused by the misinterpretation 
           of supplement facts, hidden ingredients, or vague sustainability claims. An integrated FoodLens AI system should include features to instantly 
           process visual label data to provide comprehensive, easy-to-understand health impact profiles and market intelligence, effectively preventing 
           dietary mismanagement and ensuring ultimate transparency for both consumers and regulatory bodies.
        </p>

        <h3 className="mt-12 text-2xl font-bold text-gray-900">References</h3>
        <ul className="mt-4 list-none text-gray-700 text-xs">
          <li id="ref1" className="mb-4">
            [1] M. Nagayi, "Evaluating OCR performance on food packaging labels," 2024.
          </li>
          <li id="ref2" className="mb-4">
            [2] L. Wang et al., "A lightweight large language model for regulatory affairs translation in pharmaceutical industry,
            " Scientific Reports, vol. 14, no. 1, p. 21867, 2024.

          </li>
          <li id="ref3" className="mb-4">
            [3] W. Min, C. Liu, L. Xu, and S. Jiang, “Applications of knowledge graphs for food 
science and industry,” Patterns, vol. 3, no. 5, p. 100484, May 2022, doi: 
10.1016/j.patter.2022.100484.
          </li>
          <li id="ref3" className="mb-4">
            [3] G. Kontonatsios et al., "FABSA: An aspect-based sentiment analysis dataset of user reviews," 2023.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Literature;
