import React from "react";
import Image from "next/image";

export const Mark = () => {
  return (
    <div>
      <div className="absolute top-5 left-5">
        <Image
          src="/img/mark.jpg"
          width={112}
          height={40}
          alt="Picture of the author"
        />
      </div>
    </div>
  );
};
