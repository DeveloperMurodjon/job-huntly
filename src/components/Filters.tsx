"use client";

import React from "react";
import { jobsApiT } from "@/lib/types";

interface FiltersProps {
  employment: string[];
  setEmployment: React.Dispatch<React.SetStateAction<string[]>>;
  categories: string[];
  setCategories: React.Dispatch<React.SetStateAction<string[]>>;
  levels: string[];
  setLevels: React.Dispatch<React.SetStateAction<string[]>>;
  salaryRanges: string[];
  setSalaryRanges: React.Dispatch<React.SetStateAction<string[]>>;
  jobs: jobsApiT[];
}

const OPTIONS = {
  employment: ["Full time", "Part time", "Remote", "Internship", "Contract"],
  categories: [
    "Design",
    "Sales",
    "Marketing",
    "Business",
    "Human Resource",
    "Finance",
    "Engineering",
    "Technology",
  ],
  levels: [
    "Entry Level",
    "Mid Level",
    "Senior Level",
    "Director",
    "VP or Above",
  ],
  salaryRanges: ["700-1000", "1000-1500", "1500-2000", "3000+"],
};

export default function Filters({
  employment,
  setEmployment,
  categories,
  setCategories,
  levels,
  setLevels,
  salaryRanges,
  setSalaryRanges,
  jobs,
}: FiltersProps) {
  const toggle = (
    list: string[],
    setList: React.Dispatch<React.SetStateAction<string[]>>,
    value: string
  ) =>
    setList(
      list.includes(value) ? list.filter((x) => x !== value) : [...list, value]
    );

  const count = (group: keyof typeof OPTIONS, opt: string) => {
    switch (group) {
      case "employment":
        return jobs.filter((j) => j.work_type === opt).length;
      case "categories":
        return jobs.filter((j) => j.description.includes(opt)).length;
      case "levels":
        return jobs.filter((j) => j.description.includes(opt)).length;
      case "salaryRanges":
        return jobs.filter((j) => {
          const num = parseInt(j.salary, 10);
          if (opt.endsWith("+")) return num >= parseInt(opt, 10);
          const [minStr, maxStr] = opt.split("-");
          const min = parseInt(minStr, 10);
          const max = parseInt(maxStr, 10);
          return num >= min && num <= max;
        }).length;
      default:
        return 0;
    }
  };

  const renderGroup = (
    group: keyof typeof OPTIONS,
    selected: string[],
    setSelected: React.Dispatch<React.SetStateAction<string[]>>
  ) => (
    <div key={group} className="space-y-2">
      <h3 className="font-semibold text-lg">
        {
          {
            employment: "Type of Employment",
            categories: "Categories",
            levels: "Job Level",
            salaryRanges: "Salary Range",
          }[group]
        }
      </h3>
      {OPTIONS[group].map((opt) => (
        <label key={opt} className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={selected.includes(opt)}
            onChange={() => toggle(selected, setSelected, opt)}
          />
          <span>
            {group === "salaryRanges" ? opt.replace("+", " or above") : opt} (
            {count(group, opt)})
          </span>
        </label>
      ))}
    </div>
  );

  return (
    <aside className="space-y-6 p-4 bg-neutral-100 rounded">
      {renderGroup("employment", employment, setEmployment)}
      {renderGroup("categories", categories, setCategories)}
      {renderGroup("levels", levels, setLevels)}
      {renderGroup("salaryRanges", salaryRanges, setSalaryRanges)}
    </aside>
  );
}
