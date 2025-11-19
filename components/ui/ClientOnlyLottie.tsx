"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

// Dynamically import Lottie with SSR disabled
const Lottie = dynamic(() => import("react-lottie"), {
  ssr: false,
  loading: () => <div className="w-[400px] h-[200px]" />, // Placeholder while loading
});

interface ClientOnlyLottieProps {
  options: any;
  height: number;
  width: number;
  isStopped: boolean;
}

export default function ClientOnlyLottie({
  options,
  height,
  width,
  isStopped,
}: ClientOnlyLottieProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <div className={`w-[${width}px] h-[${height}px]`} />;
  }

  return (
    <Lottie
      options={options}
      height={height}
      width={width}
      isStopped={isStopped}
    />
  );
}
