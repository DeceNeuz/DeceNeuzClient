import TrendingSection from "@/components/trending-section";

export default function Home() {
  const sampleTrending = [
    {
      ID: "1",
      Title: "Japan's Suzuki: Mulling Tokyo metro stake sale with Tokyo Govt",
      CreatedAt: "2024-02-01",
    },
    {
      ID: "2",
      Title: "Japan's Suzuki: Mulling Tokyo metro stake sale with Tokyo Govt",
      CreatedAt: "2024-02-01",
    },
    {
      ID: "3",
      Title: "Japan's Suzuki: Mulling Tokyo metro stake sale with Tokyo Govt",
      CreatedAt: "2024-02-01",
    },
    {
      ID: "4",
      Title: "Japan's Suzuki: Mulling Tokyo metro stake sale with Tokyo Govt",
      CreatedAt: "2024-02-01",
    },
    {
      ID: "5",
      Title: "Japan's Suzuki: Mulling Tokyo metro stake sale with Tokyo Govt",
      CreatedAt: "2024-02-01",
    },
  ];

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
