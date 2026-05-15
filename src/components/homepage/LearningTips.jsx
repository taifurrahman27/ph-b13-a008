import { FaBrain, FaClock } from "react-icons/fa";

const tips = [
    {
        id: 1,
        icon: <FaBrain />,
        title: "Smart Study Techniques",
        description:
            "Boost your learning with proven techniques used by top students and developers.",
        points: [
            "Use active recall instead of passive reading",
            "Apply spaced repetition for long-term memory",
            "Build real projects instead of only watching tutorials",
            "Break topics into small learning chunks",
            "Take handwritten notes for better retention",
            "Teach what you learn to reinforce understanding",
        ],
        iconBg: "from-cyan-500 to-blue-600",
        border: "border-cyan-500/20",
        glow: "from-cyan-500/20 via-blue-500/10 to-transparent",
    },
    {
        id: 2,
        icon: <FaClock />,
        title: "Time Management Tips",
        description:
            "Learn how to manage your time efficiently and stay consistent in your learning journey.",
        points: [
            "Follow a daily fixed study schedule",
            "Use Pomodoro technique (25 min focus, 5 min break)",
            "Prioritize difficult topics first",
            "Avoid multitasking while studying",
            "Set weekly learning goals",
            "Track your progress regularly",
        ],
        iconBg: "from-purple-500 to-pink-600",
        border: "border-purple-500/20",
        glow: "from-purple-500/20 via-pink-500/10 to-transparent",
    },
];

export default function LearningTips() {
    return (
        <section className="relative py-24 overflow-hidden">

            <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 blur-3xl rounded-full"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 blur-3xl rounded-full"></div>

            <div className="relative max-w-6xl mx-auto px-4">

                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-white">
                        Learning Tips
                    </h2>
                    <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
                        Improve your study habits and become a more productive learner with these strategies.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                    {tips.map((tip) => (
                        <div
                            key={tip.id}
                            className={`relative overflow-hidden rounded-3xl border ${tip.border}
                            bg-white/5 backdrop-blur-xl p-8 transition-all duration-500`}
                        >

                            <div className={`absolute inset-0 bg-linear-to-br ${tip.glow} opacity-60`} />

                            <div className="relative z-10">

                                <div className={`w-16 h-16 rounded-2xl bg-linear-to-r ${tip.iconBg} flex items-center justify-center text-white text-2xl`}>
                                    {tip.icon}
                                </div>

                                <h3 className="mt-6 text-3xl font-bold text-white">
                                    {tip.title}
                                </h3>

                                <p className="mt-3 text-gray-400">
                                    {tip.description}
                                </p>

                                <ul className="mt-6 space-y-3">
                                    {tip.points.map((point, index) => (
                                        <li key={index} className="flex items-start gap-3 text-gray-300">
                                            <span className="w-2 h-2 mt-2 rounded-full bg-cyan-400"></span>
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>

                            </div>

                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}