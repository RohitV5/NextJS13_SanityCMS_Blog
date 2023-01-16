import Image from "next/image";
import React from "react";

const Logo = (props: any) => {
  const { renderDefault, title } = props;
  return (
    <div className="flex items-center space-x-2">
      <Image
        className="object-cover rouned-full"
        height={50}
        width={50}
        src="/assets/images/rv.png"
        alt="logo"
      />
      {renderDefault && <>{renderDefault(props)}</>}
    </div>
  );
};

export default Logo;
