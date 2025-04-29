import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function ExploreCategory() {
  const cards = [
    {
      image: "/Icon.png",
      title: "Design",
      description: "235 jobs available",
    },
    {
      image: "/Icon-1.png",
      title: "Sales",
      description: "756 jobs available",
    },
    {
      image: "/Icon-2.png",
      title: "Marketing",
      description: "140 jobs available",
    },
    {
      image: "/Icon-3.png",
      title: "Finance",
      description: "325 jobs available",
    },
    {
      image: "/Icon-4.png",
      title: "Technology",
      description: "436 jobs available",
    },
    {
      image: "/Icon-5.png",
      title: "Engineering",
      description: "542 jobs available",
    },
    {
      image: "/Icon-6.png",
      title: "Business",
      description: "211 jobs available",
    },
    {
      image: "/Icon-7.png",
      title: "Human Resource",
      description: "346 jobs available",
    },
  ];

  return (
    <section className="pt-[72px]">
      <div className="container">
        <div className="flex justify-between pb-12 ">
          <h2 className="font-semibold text-neutrals-100 text-5xl leading-[110%] ">
            Explore by <span className="text-accents-blue">category</span>
          </h2>
          <Link href="/jobs" className="flex items-center gap-4">
            <p className="text-brands-primary font-semibold text-base leading-[160%]">
              Show all jobs
            </p>
            <ArrowRight color="#4640DE" />
          </Link>
        </div>
        <div className="box grid grid-cols-4 gap-8">
          {cards.map((card, index) => {
            return (
              <div
                key={index}
                className="card border border-neutrals-20 flex flex-col p-8"
              >
                <Image
                  alt={card.title}
                  width={48}
                  height={48}
                  src={card.image}
                />
                <p className="pt-8 pb-3">{card.title}</p>
                <Link href={"/jobs"}>
                  <p className="flex items-center gap-4 text-neutrals-60 text-lg leading-[160%]">
                    {card.description} <ArrowRight color="#25324B" />
                  </p>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ExploreCategory;
