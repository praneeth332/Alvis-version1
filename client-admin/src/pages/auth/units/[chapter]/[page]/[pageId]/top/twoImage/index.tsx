import TopLeftBar from "@/components/atoms/topSetionBar/topLeftBar";
import React from "react";
import NavBarPage from "@/components/atoms/navBarPage/navBarPage";
import TwoImageEditor from "./TwoImageEditor";
import { useTopStore } from "@/store/useTopStore";

const TwoImage = () => {
  const twoImage = useTopStore((s) => s.twoImage);
  return (
    <>
      <NavBarPage />
      <div className="flex">
        <TopLeftBar />
        <div className="container mx-auto px-4 py-10">
          <div className="flex justify-start">
            {twoImage ? (
              <TwoImageEditor />
            ) : (
              <div className="absolute w-[25rem] top-1/2 bottom-1/2 left-1/2 right-1/2 text-xl">
                Please select any of the options
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default TwoImage;
