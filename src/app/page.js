import Banner from "@/components/homepage/Banner";
import "./globals.css";
import PopularCourses from "@/components/homepage/PopularCourses";
import TrendingCourses from "@/components/homepage/TrendingCourses";
import LearningTips from "@/components/homepage/LearningTips";
import TopInstructors from "@/components/homepage/TopInstructors";
export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <main>

        <Banner />
        <PopularCourses />
        <TrendingCourses />
        <LearningTips />
        <TopInstructors />


      </main>
    </div>
  );
}
