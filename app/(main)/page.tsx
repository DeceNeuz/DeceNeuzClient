"use client";

import TrendingSection from "@/components/trending-section";
import { useEffect, useState } from 'react';
import axios from "axios";

interface SampleDataInterface {
  ID: string;
  Title: string;
  CreatedAt: string;
}

export default function Home() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://trending-recommendation.onrender.com');
        const sampleTrendingDatas = JSON.parse(response.data);
        const demo: SampleDataInterface[] = []
        sampleTrendingDatas.map((sampleTrendingData: any) => {
          const sampleObj: SampleDataInterface = {
            ID: sampleTrendingData["id"],
            Title: sampleTrendingData["Title"],
            CreatedAt: "2024-02-01"
          };
          demo.push(sampleObj);
        })
        setSampleTrending(demo);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const [sampleTrending, setSampleTrending] = useState<SampleDataInterface[]>([])

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
