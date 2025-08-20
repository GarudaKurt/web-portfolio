"use client";

import Landing from "./landing-page/landing";
import { Label } from "@/components/ui/label";
import Image from "next/image";

const Home = () => {
  return (
    <div className="bg-white">
      <Landing />
    </div>
  );
};

export default Home;
