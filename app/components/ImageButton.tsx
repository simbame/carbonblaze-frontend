import Image from "next/image";

interface Props {
  src: string;
}

export const ImageButton = (props: Props) => {
  return (
    <div>
      <Image
        src={props.src}
        width={400}
        height={300}
        alt="Picture of the author"
      />
    </div>
  );
};
