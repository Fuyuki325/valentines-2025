"use client";
import React, { useState } from "react";
import Container from "@/components/Container";
import Header from "@/components/Header";
import Page1 from "@/components/pages/Page1";
import Page2 from "@/components/pages/Page2";
import Page3 from "@/components/pages/Page3";
import Page4 from "@/components/pages/Page4";

const InputPage = () => {
  const [page, setPage] = useState<number>(1);
  const [name, setName] = useState<string>("");
  const [present, setPresent] = useState<string>("");
  const [presentJapan, setPresentJapan] = useState<string>("");

  const renderContent = () => {
    switch (page) {
      case 1:
        return <Page1 name={name} setName={setName} setPage={setPage} />;
      case 2:
        return (
          <Page2
            present={present}
            setPresent={setPresent}
            presentJapan={presentJapan}
            setPresentJapan={setPresentJapan}
            name={name}
            setPage={setPage}
          />
        );
      case 3:
        return <Page3 present={present} name={name} setPage={setPage} />;
      case 4:
        return (
          <Page4 name={name} present={present} presentJapan={presentJapan} setPage={setPage} />
        );
      default:
        return <div>default</div>;
    }
  };

  return (
    <>
      <div className="w-screen h-screen ">
        <Header />
        <div className="w-screen h-full flex flex-col items-center justify-center">
          <Container>{renderContent()}</Container>
        </div>
      </div>
    </>
  );
};

export default InputPage;
