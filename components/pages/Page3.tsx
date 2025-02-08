import React, { Dispatch, SetStateAction, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { FaChevronLeft } from "react-icons/fa";
import toast from "react-hot-toast";
import { Loader2 } from "lucide-react";

const Page3 = ({
  name,
  present,
  setPage,
}: {
  name: string;
  present: string;
  setPage: Dispatch<SetStateAction<number>>;
}) => {
  const [hoverNum, setHoverNum] = useState<number>(1);
  const [trigger, setTrigger] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const move = () => {
    setHoverNum((prev) => {
      const newNum = (prev % 25) + 1;
      return newNum;
    });
  };

  const onYes = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/submit-name", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, present }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit name");
      }
      toast.success("Good choice! 🎉 ");
      setPage(4);
    } catch {
      toast.error("Something went wrong. Please try again.");
    }
    setLoading(false)
  };

  const onNo = () => {};

  const previous = () => {
    setPage(2);
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className="text-center">
        <>
          <h1 className="text-4xl font-semibold mb-6">
            {name}, Will you be my valentine?
          </h1>
          <p className="text-xl">
            {name}、私とバレンタインを過ごしてくれますか？
          </p>
          <p className="text-md">Try the &quot;No&quot; button LOL</p>
          <p className="text-md mb-8">Noのボタンを試してみてwww</p>
        </>
      </div>
      <div
        className="flex space-x-6 mb-8 w-full"
        onMouseEnter={move}
        onClick={move}
      >
        <Button
        disabled={loading}
          className="absolute left-[25%] sm:left-[30%] md:left-[35%] lg:left-[40%] bg-green-500 text-white px-8 py-4 rounded-xl text-lg hover:bg-green-600 transition-all"
          onClick={onYes}
        >
          {loading ? (
            <span className="flex items-center space-x-2">
              <Loader2 className="animate-spin h-5 w-5" />
              <span>Loading...</span>
            </span>
          ) : (
            "Yes"
          )}
        </Button>
        <Button
          onClick={onNo}
          className={`absolute bg-red-500 text-white px-8 py-4 rounded-xl text-lg hover:bg-red-600 transition-all transform duration-300  ${
            hoverNum === 1
              ? "absolute right-[25%] sm:right-[30%] md:right-[35%] lg:right-[40%]"
              : hoverNum === 2
              ? "absolute top-[30%] right-[40%]"
              : hoverNum === 3
              ? "absolute top-[60%] right-[25%]"
              : hoverNum === 5
              ? "absolute top-[50%] right-[15%]"
              : hoverNum === 6
              ? "absolute top-[35%] left-[30%]"
              : hoverNum === 7
              ? "absolute top-[25%] left-[50%]"
              : hoverNum === 8
              ? "absolute top-[60%] left-[15%]"
              : hoverNum === 9
              ? "absolute top-[70%] left-[40%]"
              : hoverNum === 10
              ? "absolute top-[80%] left-[60%]"
              : hoverNum === 11
              ? "absolute top-[45%] left-[20%]"
              : hoverNum === 12
              ? "absolute top-[20%] left-[70%]"
              : hoverNum === 13
              ? "absolute top-[25%] left-[35%]"
              : hoverNum === 14
              ? "absolute top-[50%] left-[50%]"
              : hoverNum === 15
              ? "absolute top-[55%] left-[10%]"
              : hoverNum === 16
              ? "absolute top-[45%] left-[60%]"
              : hoverNum === 17
              ? "absolute top-[30%] left-[65%]"
              : hoverNum === 18
              ? "absolute top-[15%] left-[40%]"
              : hoverNum === 19
              ? "absolute top-[50%] left-[5%]"
              : hoverNum === 20
              ? "absolute top-[60%] left-[80%]"
              : hoverNum === 21
              ? "absolute top-[80%] left-[45%]"
              : hoverNum === 22
              ? "absolute top-[35%] left-[55%]"
              : hoverNum === 23
              ? "absolute top-[25%] left-[80%]"
              : hoverNum === 24
              ? "absolute top-[70%] left-[5%]"
              : hoverNum === 25
              ? "absolute top-[40%] left-[45%]"
              : ""
          }`}
        >
          No
        </Button>
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
            {}
            <DialogDescription className="text-center mt-4 text-lg text-gray-700">
              I will bring this present ({}) to you when I return to Japan!
            </DialogDescription>
            <DialogDescription className="text-center mt-4 text-lg text-gray-700">
              日本に帰ったら、このプレゼント「{}
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

export default Page3;
