"use client";

import Image from "next/image";
import Link from "next/link";

import Transactions from "../../public/img/dashboard/transactions.svg";
import Overview from "../../public/img/dashboard/overview.svg";
import Account from "../../public/img/dashboard/account.svg";
interface Props {
  tagName: string;
}

export const AppBar = (props: Props) => {
  return (
    <div className="flex gap-10 justify-center items-center py-2 border-t-2 border-b-2 border-dashed border-gray-200 max-sm:flex-col">
      <Link
        href="/dashboard/overview"
        className={`focus:bg-[#E9F1EE] expand-item ${
          props.tagName === "overview" ? "bg-[#E9F1EE]" : ""
        }`}
        id="overview"
      >
        <Image
          src={Overview}
          width={140}
          height={48}
          alt="Picture of the author"
          className="hover:bg-[#E9F1EE]"
        />
      </Link>
      <Link
        href="/dashboard/transactions"
        id="transaction"
        className={`focus:bg-[#E9F1EE] expand-item ${
          props.tagName === "transactions" ? "bg-[#E9F1EE]" : ""
        }`}
      >
        <Image
          src={Transactions}
          width={164}
          height={48}
          alt="Picture of the author"
          className="hover:bg-[#E9F1EE]"
        />
      </Link>
      <Link
        href="/dashboard/account"
        className={`focus:bg-[#E9F1EE] expand-item ${
          props.tagName === "account" ? "bg-[#E9F1EE]" : ""
        }`}
        id="account"
      >
        <Image
          src={Account}
          width={133}
          height={48}
          alt="Picture of the author"
          className="hover:bg-[#E9F1EE]"
        />
      </Link>
    </div>
  );
};
