import Image from "next/image";

import Icon from "../../../../public/svgs/calendarIcon.svg";
import { Banner } from "@/app/components/Banner";

export default function Page() {
  return (
    <div className="flex flex-col items-center">
      <Banner />
      <div className="flex gap-6 justify-center items-center pt-8 max-md:flex-col max-w-6xl">
        <SummaryFirst />
        <SummarySecond />
        <SummaryThird />
      </div>
    </div>
  );
}

const SummaryFirst = () => {
  return (
    <div className="flex relative rounded-2xl text-white gradient-color-first w-100 min-w-70 h-44 p-6">
      <div className="flex flex-col gap-1">
        <p className="text-sm font-bold">Current Balance</p>
        <p className="text-2xl font-bold mb-3">₹1,00,000</p>
        <div className="flex">
          <Image src={Icon} width={20} height={20} alt="Authored by Simba" />
          <p className="text-sam font-bold pl-1">Last Deposit</p>
        </div>
        <p className="pl-6 font-bold">Jan 24, 2024|13:54 ₹40,000</p>
      </div>
      <Image
        src={"/img/dashboard/Illustration Container.svg"}
        width={78}
        height={42}
        alt="Authored by Simb@"
        className="absolute right-0"
      />
    </div>
  );
};

const SummarySecond = () => {
  return (
    <div className="flex relative rounded-2xl txt-main-color gradient-color-second w-100 min-w-70 h-44 p-6">
      <div className="flex flex-col gap-1">
        <p className="text-sm font-bold">Current Balance</p>
        <p className="text-2xl font-bold mb-3">₹1,50,000</p>
        <div className="flex">
          <Image src={Icon} width={20} height={20} alt="Authored by Simba" />
          <p className="text-sam font-bold pl-1">Varied Interst</p>
        </div>
        <p className="pl-6 font-bold">5,200@18% | ₹10,000</p>
      </div>
      <Image
        src={"/img/dashboard/Illustration Container.svg"}
        width={78}
        height={42}
        alt="Authored by Simb@"
        className="absolute right-0"
      />
    </div>
  );
};

const SummaryThird = () => {
  return (
    <div className="flex relative rounded-2xl text-gray-800 gradient-color-third w-100 min-w-70 h-44 p-6">
      <div className="flex flex-col gap-1">
        <p className="text-sm font-bold">Current Balance</p>
        <p className="text-2xl font-bold mb-3">₹3,50,000</p>
        <div className="flex">
          <Image src={Icon} width={20} height={20} alt="Authored by Simba" />
          <p className="text-sam font-bold pl-1">As On</p>
        </div>
        <p className="pl-6 font-bold">Jan 24, 2024</p>
      </div>
      <Image
        src={"/img/dashboard/Illustration Container.svg"}
        width={78}
        height={42}
        alt="Authored by Simb@"
        className="absolute right-0"
      />
    </div>
  );
};
