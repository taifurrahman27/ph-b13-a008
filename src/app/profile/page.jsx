import Image from "next/image";
import Link from "next/link";
import { FaUserEdit, FaEnvelope, FaUserGraduate, FaUser } from "react-icons/fa";

const ProfilePage = () => {
    const user = {
        name: "John Doe",
        email: "johndoe@example.com",
        image: "https://i.pravatar.cc/300",
        role: "Student",
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center px-4 py-20 bg-[#070B14] overflow-hidden">

            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/20 blur-3xl rounded-full animate-pulse"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 blur-3xl rounded-full animate-pulse"></div>
            </div>

            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[45px_45px]"></div>

            <div className="relative z-10 w-full max-w-md rounded-[36px] border border-white/10 bg-white/4 backdrop-blur-3xl shadow-[0_0_80px_rgba(0,255,255,0.05)] p-8 md:p-10 overflow-hidden">

                <div className="absolute top-0 inset-x-0 h-1 bg-linear-to-r from-cyan-600 via-blue-600 to-purple-600  " />

                <div className="flex justify-center">
                    <div className="relative w-28 h-28 rounded-full p-0.75 bg-linear-to-tr from-cyan-400 to-purple-500 shadow-[0_0_30px_rgba(6,182,212,0.3)] animate-[pulse_4s_infinite]">
                        <div className="relative w-full h-full rounded-full bg-[#070B14] p-1">
                            <div className="relative w-full h-full">
                                <Image
                                    src={user.image}
                                    alt="Profile Image"
                                    fill
                                    className="rounded-full object-cover"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <h2 className="text-center text-3xl font-black text-white mt-6 tracking-wide">
                    {user.name}
                </h2>

                <p className="text-center text-cyan-400 text-xs font-bold uppercase tracking-[0.2em] mt-2 flex items-center justify-center gap-2">
                    <FaUserGraduate className="text-sm" />
                    SkillSphere {user.role}
                </p>

                <div className="mt-8 space-y-4 text-white">

                    <div className="group flex items-center gap-4 bg-white/2 border border-white/5 hover:border-cyan-500/30 p-4 rounded-2xl transition-all duration-300 backdrop-blur-xl">
                        <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-black transition-all duration-300">
                            <FaUser />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Account Name</span>
                            <span className="text-sm font-semibold text-gray-200">{user.name}</span>
                        </div>
                    </div>

                    <div className="group flex items-center gap-4 bg-white/2 border border-white/5 hover:border-purple-500/30 p-4 rounded-2xl transition-all duration-300 backdrop-blur-xl">
                        <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:bg-purple-500 group-hover:text-black transition-all duration-300">
                            <FaEnvelope />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Email Address</span>
                            <span className="text-sm font-semibold text-gray-200">{user.email}</span>
                        </div>
                    </div>

                </div>

                <Link href="/profile/update" className="block mt-8">
                    <button className="relative w-full h-14 overflow-hidden rounded-2xl bg-linear-to-r from-cyan-600 via-blue-600 to-purple-600 text-white font-bold text-base tracking-wide shadow-[0_0_25px_rgba(6,182,212,0.2)] transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_35px_rgba(168,85,247,0.35)] group">
                        <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />

                        <div className="relative flex items-center justify-center gap-3">
                            <FaUserEdit className="text-lg transition-transform duration-300 group-hover:rotate-12" />
                            <span>Update Information</span>
                        </div>
                    </button>
                </Link>

            </div>
        </section>
    );
};

export default ProfilePage;