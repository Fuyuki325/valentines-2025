import React, { Dispatch, SetStateAction } from "react";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";

const Page4 = ({
  name,
  present,
  presentJapan,
  setPage,
}: {
  name: string;
  present: string;
  presentJapan: string;
  setPage: Dispatch<SetStateAction<number>>;
}) => {
  const handleBack = () => {
    toast.success('Welcome Back!')
    setPage(1);
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-8">
      <div className="text-3xl font-semibold text-center mb-6">
        Thank you for saying yes, {name}!
      </div>
      <div className="text-xl text-center mb-8">
        {name}, よろしくお願いします！
      </div>
      <div className="text-lg text-center mb-6">
        I will deliver the present: <strong>{present}</strong>
      </div>
      <div className="text-center mb-6">
        <p className="text-lg">プレゼント「{presentJapan}」をお届けします！</p>
      </div>
      <Button
        onClick={handleBack}
        className="text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-all"
      >
        Back
      </Button>
    </div>
  );
};

export default Page4;
