"use client"
import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import Container from "@/components/Container";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { FaHeart } from "react-icons/fa";
import { BiSolidTree } from "react-icons/bi";

const InputPage = () => {
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');

  const inputChange = (event) => {
    setName(event.target.value);
    console.log(name);
  }

  const onNameSubmit = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/submit-name', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name })
      })
    } catch {

    }
    setPage(2)
    console.log('ran')
  }
  // useEffect(() => {
    
  // });
  return (
    <>
      <div className="w-screen h-screen ">
        <Header />
        <div className="w-screen h-full flex flex-col items-center justify-center">
          <Container>
            <div className="flex space-x-4 items-center text-center mb-6">
              <p className="text-xl font-medium text-gray-600">
                By フユキングダム
              </p>
              <BiSolidTree className="text-blue-500 text-4xl mb-2" />
            </div>
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
              onChange={inputChange}
            />
            <Button onClick={onNameSubmit} className="mt-11">Submit</Button>
          </Container>
        </div>
      </div>
    </>
  );
};

export default InputPage;
