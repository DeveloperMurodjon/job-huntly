import Image from "next/image";
import React from "react";

function FeaturedJobs() {
  const cards = [
    {
      image: "/logoo.png",
      title: "Email Marketing",
      location: "Revolut Madrid, Spain",
      description: "Revolut is looking for Email Marketing to help team ma ...",
      jobtype: ["Marketing", "Design"],
    },
    {
      image: "/logo-1.png",
      title: "Brand Designer",
      location: "Dropbox San Fransisco, US",
      description:
        "Dropbox is looking for Brand Designer to help the team t ...",
      jobtype: ["Marketing", "Business"],
    },
    {
      image: "/logo-2.png",
      title: "Email Marketing",
      location: "Revolut Madrid, Spain",
      description:
        "Pitch is looking for Customer Manager to join marketing t...",
      jobtype: ["Marketing", "Design"],
    },
    {
      image: "/logo-3.png",
      title: "Visual Designer",
      location: "Pitch Berlin, Germany",
      description:
        "Pitch is looking for Customer Manager to join marketing t...",
      jobtype: ["Marketing"],
    },
    {
      image: "/logo-4.png",
      title: "Product Designer",
      location: "Revolut Madrid, Spain",
      description: "ClassPass is looking for Product Designer to help us...",
      jobtype: ["Marketing", "Design"],
    },
    {
      image: "/logo-5.png",
      title: "Lead Designer",
      location: "Revolut Madrid, Spain",
      description: "Canva is looking for Lead Engineer to help developn...",
      jobtype: ["Marketing", "Design"],
    },
    {
      image: "/logo-6.png",
      title: "Brand Strategist",
      location: "Revolut Madrid, Spain",
      description:
        "GoDaddy is looking for Brand Strategist to join the team...",
      jobtype: ["Marketing", "Design"],
    },
    {
      image: "/logo-7.png",
      title: "Data Analyst",
      location: "Revolut Madrid, Spain",
      description: "Twitter is looking for Data Analyst to help team desi...",
      jobtype: ["Technology"],
    },
  ];

  const getTypeClasses = (type: string) => {
    switch (type) {
      case "Marketing":
        return "text-[#FFB836] bg-[#EB85331A]";
      case "Design":
        return "text-[#56CDAD] bg-[#56CDAD1A]";
      case "Business":
        return "text-[#56CDAD] bg-[#56CDAD1A]";
      case "Technology":
        return "text-[#FF6550] bg-[#FF65501A]";
      default:
        return "";
    }
  };

  return (
    <section>
      <div className="container">
        <div className="box grid grid-cols-4 gap-8 pb-[72px]">
          {cards.map((card, index) => (
            <div key={index} className="card border border-[#D6DDEB]">
              <div className="flex flex-col p-6">
                <div className="flex justify-between items-center">
                  <Image
                    src={card.image}
                    alt={card.title}
                    width={48}
                    height={48}
                  />
                  <p className="flex border border-brands-primary text-brands-primary text-[16px] leading-[160%] text-center py-1 px-3">
                    Full time
                  </p>
                </div>
                <p className="font-semibold text-neutrals-100 text-[18px] leading-[160%] pt-4 pb-0.5">
                  {card.title}
                </p>
                <p className="text-[16px] text-neutrals-80 leading-[160%]">
                  {card.location}
                </p>
                <p className="font-inter text-neutrals-60 text-[16px] leading-[160%] py-4">
                  {card.description}
                </p>
                <div className="flex gap-4 mt-4">
                  {card.jobtype.map((type, idx) => (
                    <p
                      key={idx}
                      className={`${getTypeClasses(
                        type
                      )} font-bold py-2 px-4 rounded-full text-center text-[14px]`}
                    >
                      {type}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedJobs;
