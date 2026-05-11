import Banner from "@/components/homepage/Banner";
import "./globals.css";
import PopularCourses from "@/components/homepage/PopularCourses";
import TrendingCourses from "@/components/homepage/TrendingCourses";
import LearningTips from "@/components/homepage/LearningTips";
import TopInstructors from "@/components/homepage/TopInstructors";
export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">

        <Banner />
        <PopularCourses />
        <TrendingCourses />
        <LearningTips />
        <TopInstructors />



      </main>
    </div>
  );
}
