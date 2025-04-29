"use client";

import React from "react";
import { Search } from "lucide-react";
import Image from "next/image";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
} from "./ui/select";

interface SearchJobInputProps {
  value: string;
  onChange: (v: string) => void;
  onSubmit: () => void;
  selectWidth?: string;
  selectPadding?: string;
}

export default function SearchJobInput({
  value,
  onChange,
  onSubmit,
  selectWidth = "w-[180px]",
  selectPadding = "p-[16px]",
}: SearchJobInputProps) {
  return (
    <div className={`container  bg-white mt-[23px]  ${selectPadding}`}>
      <form
        className="flex flex-wrap gap-4 items-center"
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
      >
        <div className="flex items-center gap-[18px] flex-1 min-w-[200px]">
          <Search />
          <input
            type="text"
            placeholder="Job title or keyword"
            className="border-b border-[#D6DDEB] pt-4 pb-[16px] w-full"
            value={value}
            onChange={(e) => onChange(e.target.value)}
          />
        </div>

        <div className="flex items-center gap-2">
          <Image
            src="/location-icon.png"
            alt="job location"
            width={24}
            height={24}
          />
          <Select>
            <SelectTrigger className={selectWidth}>
              <SelectValue placeholder="Select location" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Locations</SelectLabel>
                <SelectItem value="All">All</SelectItem>
                <SelectItem value="Florence">Florence</SelectItem>
                <SelectItem value="Madrid">Madrid</SelectItem>
                <SelectItem value="New York">New York</SelectItem>
                <SelectItem value="Tokyo">Tokyo</SelectItem>
                <SelectItem value="Cairo">Cairo</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <button
          type="submit"
          className="bg-brands-primary cursor-pointer text-white py-[14px] px-[40px]"
        >
          Search
        </button>
      </form>

      <p className="text-base leading-[160%] pt-4 text-[#202430] opacity-70">
        Popular: UI Designer, UX Researcher, Android, Admin
      </p>
    </div>
  );
}
