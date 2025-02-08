"use client";
import React, { Dispatch, SetStateAction, useState } from "react";
import ChocolateBox from "@/public/chocolate-box.png";
import ChocolateBoxOpen from "@/public/chocolate-box-open.png";
import Image from "next/image";
import TeddyBear from "@/public/teddy-bear.png";
import Bouquet from "@/public/bouquet.png";
import BouqetSide from "@/public/bouquetSide.png";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { FaChevronLeft } from "react-icons/fa";
import toast from "react-hot-toast";

const Page2 = ({
  present,
  setPresent,
  setPage,
  name,
  presentJapan,
  setPresentJapan,
}: {
  present: string;
  setPresent: Dispatch<SetStateAction<string>>
  setPage: Dispatch<SetStateAction<number>>;
  name: string;
  presentJapan: string;
  setPresentJapan: Dispatch<SetStateAction<string>>;
}) => {
  const [hover, setHover] = useState<string>("");
  const [trigger, setTrigger] = useState<boolean>(false);

  const choose = (choice: string) => {
    setPresent(choice);
    switch (choice) {
      case "chocolate":
        setPresentJapan("チョコ");
        break;
      case "teddy":
        setPresentJapan("くまのぬいぐるみ");
        break;
      case "bouquet":
        setPresentJapan("お花");
        break;
      default:
        setPresentJapan("");
    }
    setTrigger(true);
  };

  const onYes = () => {
    toast.success(`retrieved ${present}`)
    setPage(3);
  };

  const onNo = () => {
    setTrigger(false);
  };

  const displayPresent = () => {
    return (
      <div className="w-full flex items-center justify-center">
        {present === "chocolate" ? (
          <Image src={ChocolateBox} width={80} alt="present" />
        ) : present === "teddy" ? (
          <Image src={TeddyBear} width={80} alt="present" />
        ) : (
          <Image src={Bouquet} width={80} alt="present" />
        )}
      </div>
    );
  };

  const previous = () => {
    setPage(1);
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <label
        htmlFor="valentine-input"
        className="block text-3xl font-semibold text-gray-700 mb-2 pb-1 text-center"
      >
        Please choose your present {name && <span>{name}</span>}!
      </label>
      <label
        htmlFor="valentine-input"
        className="block text-xl font-semibold text-gray-700 mb-2 pb-8 text-center"
      >
        {name}さん、プレゼントを選んでください。
      </label>
      <div className="flex items-center justify-center w-full space-x-9">
        <div
          onMouseEnter={() => setHover("chocolate")}
          onMouseLeave={() => setHover("")}
          onClick={() => choose("chocolate")}
          className="hover:cursor-pointer"
        >
          {hover === "chocolate" ? (
            <Image width={80} src={ChocolateBoxOpen} alt="chocolate box open" />
          ) : (
            <Image width={80} src={ChocolateBox} alt="chocolate box" />
          )}
          <p className="text-center">chocolate</p>
          <p className="text-center">チョコ</p>
        </div>
        <div
          onMouseEnter={() => setHover("teddy")}
          onMouseLeave={() => setHover("")}
          onClick={() => choose("teddy")}
          className="hover:cursor-pointer"
        >
          <Image
            width={80}
            src={TeddyBear}
            alt="Teddy Bear"
            className={`${hover === "teddy" ? "animate-spin" : ""}`}
          />
          <p className="text-center">Teddy Bear</p>
          <p className="text-center">くまのぬいぐるみ</p>
        </div>
        <div
          onMouseEnter={() => setHover("bouquet")}
          onMouseLeave={() => setHover("")}
          onClick={() => choose("bouquet")}
          className="hover:cursor-pointer"
        >
          {hover === "bouquet" ? (
            <Image width={80} src={BouqetSide} alt="Bouquet" />
          ) : (
            <Image width={80} src={Bouquet} alt="Bouquet" />
          )}
          <p className="text-center">flowers</p>
          <p className="text-center">お花</p>
        </div>
      </div>
      <div className="w-full flex items-center justify-center pt-14">
        <Button
          variant="outline"
          size="icon"
          className="bg-black group"
          onClick={previous}
        >
          <FaChevronLeft className="text-white group-hover:text-black" />
        </Button>
      </div>
      <Dialog open={trigger} onOpenChange={setTrigger}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-center text-2xl font-bold text-gray-900">
              Are you absolutely sure? 本当によろしいでしょうか？
            </DialogTitle>
            {displayPresent()}
            <DialogDescription className="text-center mt-4 text-lg text-gray-700">
              I will bring this present ({present}) to you when I return to
              Japan!
            </DialogDescription>
            <DialogDescription className="text-center mt-4 text-lg text-gray-700">
              日本に帰ったら、このプレゼント「{presentJapan}
              」を持ってくる！
            </DialogDescription>
            <div className="w-full flex items-center justify-center space-x-6 mt-6">
              <Button
                className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-all"
                onClick={onYes}
              >
                Yes
              </Button>
              <Button
                className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition-all"
                onClick={onNo}
              >
                No
              </Button>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Page2;
