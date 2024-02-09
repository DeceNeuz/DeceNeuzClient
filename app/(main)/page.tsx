"use client";

import TrendingSection from "@/components/trending-section";
import { useEffect, useState } from "react";
import axios from "axios";

interface SampleDataInterface {
  ID: string;
  Title: string;
  CreatedAt: string;
}

export default function Home() {
  const [sampleTrending, setSampleTrending] = useState<SampleDataInterface[]>(
    []
  );

  return (
    <div className="min-h-dvh w-full">
      {/* Trending */}
      <div className="mt-8">
        <TrendingSection data={sampleTrending} />
      </div>
      {/* Latest */}
      <div>Latest</div>
      {/* Recomended For You */}
      <div>Recomended</div>
    </div>
  );
}
