import {
  ArrowPathIcon,
  DevicePhoneMobileIcon,
  AcademicCapIcon,
  BoltIcon,
} from "@heroicons/react/24/outline";

const Objectives = () => {
  const objectivesList = [
    {
      title: "Multimodal Data Extraction & Sustainability Scoring",
      description:
        "advanced computer vision models to accurately extract unstructured text from diverse food labels, while simultaneously analyzing certifications and sourcing indicators to calculate environmental sustainability scores",
      icon: DevicePhoneMobileIcon,
    },
    {
      title: "Automate Compliance Verification",
      description:
        "Implement a robust verification engine to autonomously cross-reference extracted ingredients and nutritional claims against current regulatory databases, ensuring proactive identification of non-compliant formulations.",
      icon: ArrowPathIcon,
    },
    {
      title: "Generate Health Impact Profiles",
      description:
        "Create comprehensive analytical models that translate complex nutritional facts, allergen warnings, and hidden additives into clear, actionable health insights, empowering users to identify specific dietary risks.",
      icon: AcademicCapIcon,
    },
    {
      title: "Predictive Market Intelligence",
      description:
        "Utilize machine learning algorithms to aggregate and analyze continuous visual label data, generating predictive nutritional trends and real-time market analytics for food brands, researchers, and regulatory bodies.",
      icon: BoltIcon,
    },
  ];

  return (
    <div id="research-objectives" className="py-6 lg:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Research Objectives
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Our research aims to achieve the following key objectives to
          revolutionize dam control and management.
        </p>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-6xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {objectivesList.map((objective) => (
              <div key={objective.title} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-600">
                    <objective.icon
                      aria-hidden="true"
                      className="h-6 w-6 text-white"
                    />
                  </div>
                  {objective.title}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {objective.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Objectives;
