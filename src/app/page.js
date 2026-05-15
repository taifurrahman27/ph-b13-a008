import Banner from "@/components/homepage/Banner";
import "./globals.css";
import PopularCourses from "@/components/homepage/PopularCourses";
import LearningTips from "@/components/homepage/LearningTips";
import TopInstructors from "@/components/homepage/TopInstructors";
import NewReleaseCourses from "@/components/homepage/NewRealeseCourses";

export default function Home() {
  return (
    <div className="container mx-auto  px-4">
      <Banner />
      <PopularCourses />
      <NewReleaseCourses />
      <LearningTips />
      <TopInstructors />

    </div>
  );
}
