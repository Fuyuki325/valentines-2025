import React from "react";
import { Input } from "@/components/ui/input";
import Container from "@/components/Container";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button"

const InputPage = () => {
  return (
    <>
      <div className="w-screen h-screen ">
        <Header />
        <div className="w-screen h-full flex flex-col items-center justify-center">
          <Container>
            <label
              htmlFor="valentine-input"
              className="block text-3xl font-semibold text-gray-700 mb-2 pb-8"
            >
              Please enter your name
            </label>
            <Input
              id="valentine-input"
              placeholder="Type your name..."
              className="w-full border-gray-300 focus:ring-red-500 focus:border-red-500"
            />
            <Button className="mt-11">
              Submit
            </Button>
          </Container>
        </div>
      </div>
    </>
  );
};

export default InputPage;
