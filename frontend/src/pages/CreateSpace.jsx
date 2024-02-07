import React, { useState } from "react";
import { Link } from "react-router-dom";
import SpaceInformation from "../components/create-space/SpaceInformation";
import SpaceMoreInformation from "../components/create-space/SpaceMoreInformation";
import Button from "../components/ui/Button";

const tabs = {
  1: SpaceInformation,
  2: SpaceMoreInformation,
};

const CreateSpace = () => {
  const [activeTab, setActiveTab] = useState(2);
  const Tab = tabs[activeTab];
  return (
    <main>
      <header className="bg-white py-8">
        <div className="container flex items-center justify-between gap-5 flex-wrap">
          <Link to="/">
            <img src="/images/logo.svg" alt="logo" />
          </Link>

          <Button variant="secondary" size="sm">
            Save & Exit
          </Button>
        </div>
      </header>

      <section className="mt-5 text-primary/70 pb-[100px]">
        <div className="container">
          <Tab setActiveTab={setActiveTab} />

          <div className="mt-14 flex items-center justify-center gap-[10px]">
            <div
              className={
                activeTab === 1
                  ? "w-3 h-3 rounded-full bg-primary"
                  : "w-2 h-2 rounded-full bg-[#D9D9D9]"
              }
            />
            <div
              className={
                activeTab === 2
                  ? "w-3 h-3 rounded-full bg-primary"
                  : "w-2 h-2 rounded-full bg-[#D9D9D9]"
              }
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default CreateSpace;
