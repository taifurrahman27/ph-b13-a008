import "./globals.css";
export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1 className="text-5xl font-bold text-center">
          Home page of SkillSphere!
        </h1>
        <p className="text-2xl font-light text-center mt-4">
          Welcome to the SkillSphere homepage! Explore our wide range of courses and start your learning journey today.
        </p>
      </main>
    </div>
  );
}
