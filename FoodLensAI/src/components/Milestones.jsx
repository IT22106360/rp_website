const milestones = [
  {
    date: "September 2025",
    title: "Project Proposal",
    description:
      "A project proposal is submitted to potential sponsors or clients to secure funding or obtain approval for the project.",
    marks: 6,
    percentage: "6%",
  },
  {
    date: "January 2026",
    title: "Progress Presentation I",
    description:
      "Progress Presentation I evaluates the project at its 50% completion stage, helping to identify any gaps or inconsistencies in the design or requirements",
    marks: 15,
    percentage: "15%",
  },
  {
    date: "March 2026",
    title: "Progress Presentation II",
    description:
      "Progress Presentation II demonstrates the project at 90% completion, along with a poster presentation that provides an overall view of the project",
    percentage: "18%",
  },
  {
    date: "April 2026",
    title: "Research Paper",
    description:
      "The research contribution outlines the new knowledge generated, while properly acknowledging all referenced work.",
    marks: 10,
    percentage: "10%",
  },
  {
    date: "May 2026",
    title: "Website Assessment",
    description:
      "The project website serves as a platform to showcase and share comprehensive details about the research",
    marks: 2,
    percentage: "2%",
  },
  {
    date: "May 2026",
    title: "Logbook",
    description:
      "The logbook is used to validate project progress, including documentation such as Status Documents 1 and 2",
    marks: 2,
    percentage: "2%",
  },
  {
    date: "January, April 2026",
    title: "Checklists",
    description:
      "Checklists 1 & 2 are used to systematically verify that all required project components and criteria are completed and aligned with the expected standards.",
    marks: 2,
    percentage: "2%",
  },
   {
    date: "May 2026",
    title: "Final Report",
    description:
      "The final report provides a comprehensive evaluation of the project carried out throughout the year, covering individual, group, and overall outcomes",
    marks: 19,
    percentage: "19%",
  },
  {
    date: "May 2026",
    title: "Final Presentation & Viva",
    description:
      "A viva is conducted individually to assess each member’s contribution to the project.",
    marks: 20,
    percentage: "20%",
  },
];

const Milestones = () => {
  return (
    <div id="milestones" className="py-6 lg:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Milestones
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Here's a brief timeline of our project's key milestones.
        </p>
        <div className="py-10">
          <div className="grid grid-cols-1 gap-y-6 lg:grid-cols-2 lg:gap-x-6">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className="flex items-center lg:col-span-2 relative group"
              >
                <div className="flex items-center lg:ml-6 z-10">
                  <div className="flex items-center justify-center w-12 h-12 bg-cyan-500 group-hover:bg-cyan-700 rounded-full group-hover:rounded-md relative transition-all duration-100 transform">
                    <span className="text-lg font-semibold text-white">
                      {index + 1}
                    </span>
                    {index !== milestones.length - 1 && (
                      <div className="absolute left-1/2 transform -translate-x-1/2 bg-cyan-500 group-hover:bg-cyan-700 w-2px top-100 h-250px lg:h-150px transition-colors duration-300"></div>
                    )}
                  </div>
                </div>

                <div className="ml-12 bg-white bg-opacity-80 shadow-lg rounded-lg p-6 w-full z-10 transform transition-transform hover:scale-105">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {milestone.title}
                  </h3>
                  <p className="text-cyan-600">{milestone.date}</p>
                  <p className="text-gray-700">{milestone.description}</p>
                  <div className="mt-2">
                    <div className="flex items-center">
                      <div className="flex-1">
                        <div className="h-2 bg-gray-200 rounded-full">
                          <div
                            className="h-2 bg-cyan-500 rounded-full group-hover:bg-cyan-700"
                            style={{ width: milestone.percentage }}
                          ></div>
                        </div>
                      </div>
                      <div className="ml-4">
                        <span className="text-sm font-semibold text-gray-800">
                          {milestone.marks} Marks
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Milestones;
