import React from "react";

interface BenefitProps {
  title: string;
  description: string;
}

const Benefit: React.FC<BenefitProps> = ({ title, description }) => (
  <div className="mb-6 flex flex-col justify-between h-24">
    <h3 className="font-customSubHeading text-xl mb-2">{title}</h3>
    <p className=" font-customSubHeading text-white  line-clamp-2 w-96 leading-6">
      {description}
    </p>
  </div>
);

const NetworkingBenefits: React.FC = () => {
  const benefits = [
    {
      title: "Unfold Opportunities",
      description:
        "Unlock the unlimited possiblity of job offers and internships, something as unattainable as a mirage without networking.",
    },
    {
      title: "Profession Development",
      description:
        "Network nourises your professional development and helps you mark your spots in the professional landscape",
    },
    {
      title: "Industry insights",
      description:
        "Stay updated on  industry trends and anticipate the unforseen like a true networking ninja.",
    },
    {
      title: "Boost Confidence",
      description:
        "Amplify your confidence by maneuvering the networking wave and connecting with professional across the globe.",
    },
    {
      title: "Dynamic Relationships",
      description:
        "Build meaningful and dynamic relationships that aren't just limited to the professional realm",
    },
    {
      title: "Advocated Yourself",
      description:
        "Constitute a strong personal brand and create advocate who swear by your work",
    },
  ];

  return (
    <div className="bg-waitlistBg text-white px-32 py-24">
      <h2 className="font-customHeading text-3xl font-bold mb-20    ">
        Power-Packed Networking Benefits
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {benefits.map((benefit, index) => (
          <Benefit
            key={index}
            title={benefit.title}
            description={benefit.description}
          />
        ))}
      </div>
    </div>
  );
};

export default NetworkingBenefits;
