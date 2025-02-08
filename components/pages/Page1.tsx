import React, { Dispatch, SetStateAction } from "react";
import { BiSolidTree } from "react-icons/bi";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";

const Page1 = ({ setPage, name, setName }: { setPage: Dispatch<SetStateAction<number>>; name: string; setName : Dispatch<SetStateAction<string>> }) => {

  const inputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const onNameSubmit = async () => {
    if (!name.trim()) {
      toast.error("Please enter a name!");
      return;
    }
    toast.success(`Welcome, ${name}! 🎉`);
    setPage(2);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800">Please enter your name</h1>
        <p className="text-lg text-gray-600 mt-2">お名前を入力してください。</p>
      </div>

      <div className="mt-6 w-full max-w-md">
        <Input
          id="valentine-input"
          placeholder="Type your name..."
          className="w-full border-gray-300 focus:ring-red-500 focus:border-red-500 rounded-lg shadow-sm text-lg px-4 py-3"
          onChange={inputChange}
        />
        <Button
          onClick={onNameSubmit}
          className="mt-5 w-full py-3 text-lg rounded-lg transition-transform active:scale-95"
        >
          Submit
        </Button>
      </div>

      <div className="flex items-center space-x-2 mt-8 text-gray-700">
        <p className="text-lg font-medium">By フユキングダム</p>
        <BiSolidTree className="text-blue-500 text-4xl" />
      </div>
    </div>
  );
};

export default Page1;
