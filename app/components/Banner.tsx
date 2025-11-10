"use client";

import Image from "next/image";

import BannerImg from "../../public/img/banner.svg";
import Close from "../../public/img/close.svg";

export const Banner = () => {
  const closeBanner = () => {
    const closeComp: HTMLElement | null = document.getElementById("close");
    if (closeComp != null) closeComp.style.display = "none";
  };

  return (
    <div className="w-full flex justify-center pt-8 max-md:hidden" id="close">
      <div className="relative max-w-6xl flex rounded-lg banner-bg-color">
        <Image
          src={BannerImg}
          width={248}
          height={164}
          alt="Author by Simba"
          className=" w-5/18 p-10 hide-item min-w-[324px]"
        />

        <div className="w-13/18 p-10 txt-main-color flex flex-col gap-4 min-w-[600px]">
          <p className="font-bold text-3xl">Welcome👋</p>
          <p className="font-bold text-3xl">Amit Singh</p>
          <p>
            Take control of investments and returns in one place - track
            balances, customise alerts, act on analytical insights, and transfer
            dividends with ease.
          </p>
          <p className="font-bold text-xl">
            Membership Date: 16th October 2023
          </p>
        </div>
        <div className="absolute top-2 right-2" onClick={closeBanner}>
          <Image src={Close} width={20} height={20} alt="Authorized by Simba" />
        </div>
      </div>
    </div>
  );
};
