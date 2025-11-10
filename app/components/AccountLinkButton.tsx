import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import Link from "next/link";

interface Props {
  href: string;
  className: string;
  content: string;
  imageSrc: StaticImport;
}

export const AccountLinkButton = (props: Props) => {
  return (
    <Link
      href={props.href}
      className={`${props.className} focus:underline text-[#637381] focus:text-green-900 font-bold`}
    >
      <div className="flex gap-2">
        <Image
          src={props.imageSrc}
          width="20"
          height="16"
          alt="Author is Simba"
        />
        <p className="hide-item">{props.content}</p>
      </div>
    </Link>
  );
};
