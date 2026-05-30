"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { FaUserEdit, FaUser, FaImage } from "react-icons/fa";

const UpdateProfilePage = () => {
    const router = useRouter();

    const {
        data: session,
        isPending,
        error,
    } = authClient.useSession();

    if (isPending) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#070B14] text-white text-xl font-bold">
                Loading...
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#070B14] text-red-500 text-xl font-bold">
                Failed to load user information
            </div>
        );
    }

    const user = session?.user;

    if (!user) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#070B14] text-white text-xl font-bold">
                No user found
            </div>
        );
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const formData = new FormData(e.currentTarget);
            const name = formData.get("name");
            const image = formData.get("image");

            const { data, error } = await authClient.updateUser({
                name,
                image,
            });

            if (error) {
                alert(error.message);
                return;
            }

            if (data) {
                alert("Profile updated successfully");
                router.push("/");
                router.refresh();
            }
        } catch (err) {
            alert("Something went wrong");
        }
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center px-4 py-10 bg-[#070B14] overflow-hidden">

            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/20 blur-3xl rounded-full animate-pulse" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 blur-3xl rounded-full animate-pulse" />
            </div>

            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[45px_45px]" />

            <div className="relative z-10 w-full max-w-lg rounded-[36px] border border-white/10 bg-white/5 backdrop-blur-3xl shadow-[0_0_80px_rgba(0,255,255,0.05)] p-8 md:p-10 overflow-hidden">

                <div className="absolute top-0 inset-x-0 h-1 bg-linear-to-r from-cyan-600 via-blue-600 to-purple-600" />

                <h1 className="text-center text-3xl font-black text-orange-600 mb-8">
                    Update Your Profile
                </h1>

                <div className="flex justify-center mb-8">

                    <div className="relative w-28 h-28 rounded-full p-1 bg-linear-to-tr from-cyan-400 to-purple-500">

                        <div className="relative w-full h-full rounded-full overflow-hidden bg-[#070B14]">

                            <Image
                                src={
                                    user.image ||
                                    "https://i.ibb.co/4pDNDk1/avatar.png"
                                }
                                alt="Profile"
                                fill
                                sizes="112px"
                                className="object-cover"
                                priority
                            />

                        </div>

                    </div>

                </div>

                <form
                    onSubmit={handleSubmit}
                    className="space-y-6"
                >

                    <div>

                        <label className="flex items-center gap-2 text-sm font-semibold text-gray-300 mb-2">
                            <FaUser />
                            Full Name
                        </label>

                        <input
                            type="text"
                            name="name"
                            defaultValue={user.name || ""}
                            placeholder="Enter your name"
                            className="w-full px-4 py-4 rounded-2xl border border-white/10 bg-white/5 text-white outline-none focus:border-cyan-500"
                            required
                        />

                    </div>

                    <div>

                        <label className="flex items-center gap-2 text-sm font-semibold text-gray-300 mb-2">
                            <FaImage />
                            Profile Image URL
                        </label>

                        <input
                            type="url"
                            name="image"
                            defaultValue={user.image || ""}
                            placeholder="https://example.com/image.jpg"
                            className="w-full px-4 py-4 rounded-2xl border border-white/10 bg-white/5 text-white outline-none focus:border-purple-500"
                            required
                        />

                    </div>

                    <button
                        type="submit"
                        className="relative w-full h-14 overflow-hidden rounded-2xl bg-linear-to-r from-cyan-600 via-blue-600 to-purple-600 text-white font-bold text-base tracking-wide shadow-[0_0_25px_rgba(6,182,212,0.2)] transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_35px_rgba(168,85,247,0.35)] group"
                    >

                        <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />

                        <div className="relative flex items-center justify-center gap-3">

                            <FaUserEdit className="text-lg transition-transform duration-300 group-hover:rotate-12" />

                            <span>Update Information</span>

                        </div>

                    </button>

                </form>

            </div>

        </section>
    );
};

export default UpdateProfilePage;