import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import Image from "next/image";
function Footer() {
  return (
    <footer className="bg-[#202430] py-[64px]">
      <div className="container flex flex-col justify-between  ">
        <div className="flex justify-between pb-20">
          <div>
            <Logo textColor="text-white" />
            <p className="max-w-[376px] pt-8 text-base leading-[160%] text-neutrals-20">
              Great platform for the job seeker that passionate about startups.
              Find your dream job easier.
            </p>
          </div>
          <div className="flex">
            <div className="flex flex-col pr-[93px] gap-4">
              <p className="text-white font-semibold text-[18px] leading-[160%]">
                About
              </p>
              <Link
                href={"/"}
                className="text-neutrals-20  text-[16px] leading-[160%]"
              >
                Companies
              </Link>
              <Link
                href={"/"}
                className="text-neutrals-20  text-[16px] leading-[160%]"
              >
                Pricing
              </Link>
              <Link
                href={"/"}
                className="text-neutrals-20  text-[16px] leading-[160%]"
              >
                Terms
              </Link>
              <Link
                href={"/"}
                className="text-neutrals-20  text-[16px] leading-[160%]"
              >
                Advice
              </Link>
              <Link
                href={"/"}
                className="text-neutrals-20  text-[16px] leading-[160%]"
              >
                Privacy Policy
              </Link>
            </div>
            <div className="flex flex-col pr-[71px] gap-4">
              <p className="text-white font-semibold text-[18px] leading-[160%]">
                Resources
              </p>
              <Link
                href={"/"}
                className="text-neutrals-20  text-[16px] leading-[160%]"
              >
                Help Docs
              </Link>
              <Link
                href={"/"}
                className="text-neutrals-20  text-[16px] leading-[160%]"
              >
                Guide{" "}
              </Link>
              <Link
                href={"/"}
                className="text-neutrals-20  text-[16px] leading-[160%]"
              >
                Updates{" "}
              </Link>
              <Link
                href={"/"}
                className="text-neutrals-20  text-[16px] leading-[160%]"
              >
                Contact Us
              </Link>
            </div>
            <div className="max-w-[362px]">
              <p className="text-white font-semibold text-[18px] leading-[160%]">
                Get job notifications
              </p>
              <p className="text-neutrals-20 pt-[18px] pb-10  text-[16px] leading-[160%]">
                The latest job news, articles, sent to your inbox weekly.
              </p>
              <form className="flex items-center gap-2">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="placeholder:text-[#A8ADB7] text-base leading-[160%] bg-white py-3 pl-4"
                />
                <button
                  type="submit"
                  className="bg-brands-primary text-white py-3 px-6"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
        <hr className="w-full h-1 border-none  bg-[#363A45] " />
        <div className="flex justify-between items-center pt-[42px] text-white">
          <p className="">2021 @ JobHuntly. All rights reserved.</p>
          <ul className="flex items-center gap-6">
            <li>
              <Link href={"/"}>
                <Image
                  src={"/Facebook.png"}
                  alt="facebook profile"
                  width={32}
                  height={32}
                />
              </Link>
            </li>
            <li>
              <Link href={"/"}>
                <Image
                  src={"/Instagram.png"}
                  alt="instagram profile"
                  width={32}
                  height={32}
                />
              </Link>
            </li>
            <li>
              <Link href={"/"}>
                <Image
                  src={"/Dribbble.png"}
                  alt="dribbble profile"
                  width={32}
                  height={32}
                />
              </Link>
            </li>
            <li>
              <Link href={"/"}>
                <Image
                  src={"/Linkedin.png"}
                  alt="linkedin profile"
                  width={32}
                  height={32}
                />
              </Link>
            </li>
            <li>
              <Link href={"/"}>
                <Image
                  src={"/Twitter.png"}
                  alt="twitter profile"
                  width={32}
                  height={32}
                />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
