"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import smallSubscription from "../../../../public/img/dashboard/account/subscription2.svg";
import subscriptions from "../../../../public/img/dashboard/account/subscription.svg";
import notification from "../../../../public/img/dashboard/account/notification.svg";
import general from "../../../../public/img/dashboard/account/general.svg";
import { AccountLinkButton } from "@/app/components/AccountLinkButton";

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();
  const segmentURL = pathName.substring(pathName.lastIndexOf("/") + 1);
  return (
    <div className="py-9 px-36">
      <div>
        <p className="text-2xl font-bold">General Profile Setting</p>
        <p className="text-gray-500">
          Manage details, elevate your usage. Keep your information updated so
          we can tailor our offeringa and elevate your overall experience.
        </p>
      </div>
      <div className="flex gap-10 mt-10">
        <AccountLinkButton
          href="/dashboard/account/general"
          className={`${
            segmentURL === "general" ? "underline text-green-900" : ""
          } `}
          content="General"
          imageSrc={general}
        />
        <Link
          href="/dashboard/account/subscriptions"
          className={`focus:underline text-[#637381] focus:text-green-900 font-bold ${
            segmentURL === "subscriptions" ? "underline text-green-900" : ""
          }`}
        >
          <div className="flex gap-2 relative">
            <div className="relative">
              <Image
                src={subscriptions}
                width="20"
                height="16"
                alt="Author is Simba"
              />
              <Image
                src={smallSubscription}
                width="8"
                height="5"
                alt="Author is Simba"
                className="absolute left-3 top-0"
              />
            </div>
            <span className="absolute text-white left-1">₹</span>
            <p className="hide-item">Subscription</p>
          </div>
        </Link>
        <AccountLinkButton
          href="/dashboard/account/notification"
          className={`${
            segmentURL === "notification" ? "underline text-green-900" : ""
          }`}
          content="Notification"
          imageSrc={notification}
        />
      </div>
      <main>{children}</main>
    </div>
  );
}
