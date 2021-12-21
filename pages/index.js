import Head from "next/head";
import File from "../components/File";
import { SiVisualstudio } from "react-icons/si";
import Sidebar from "../components/Sidebar";
import { useRouter } from "next/router";
import { BiCodeAlt } from "react-icons/bi";
import { VscClose } from "react-icons/vsc";
import Paths from "../components/Paths";
import OpenEditor from "../components/OpenEditor";
import Code from "../components/Code";
import Footer from "../components/Footer";
import ReactTypingEffect from "react-typing-effect";
import TopNav from "../components/TopNav";

export default function Home() {
    const router = useRouter();
    return (
        <div className="flex flex-col h-screen">
            <div className="flex flex-grow">
                <Sidebar />
                <div className="bg-[#1f2428] border-r border-gray-600 text-white w-60">
                    <Paths />
                </div>
                <div className="bg-[#24292f] flex-grow flex flex-col text-white">
                    <div className="flex">
                        <TopNav />
                    </div>
                    <div className="flex-grow border-t flex flex-col border-gray-600">
                        <div className="bg-content bg-no-repeat bg-cover overflow-scroll h-max flex flex-col p-8 justify-center space-y-5 flex-grow text-lg">
                            <SiVisualstudio className="h-20 w-20 p-4 border border-blue-500 rounded-xl text-blue-500" />
                            <div className="flex items-center justify-between">
                                <h1 className="font-mono text-white text-5xl">
                                    Ojas Tyagi
                                </h1>
                            </div>
                            <h1 className="text-white font-mono text-3xl">
                                <ReactTypingEffect
                                    text={[
                                        "Full Stack Developer",
                                        "3D Animator",
                                        "Unity Game Developer",
                                        "Student",
                                        "Competitive Coder",
                                    ]}
                                    speed={100}
                                    eraseDelay={1500}
                                    eraseSpeed={100}
                                    typingDelay={800}
                                />
                            </h1>
                            <div className="flex space-x-10 pt-10">
                                <button
                                    onClick={() => {
                                        router.push("/projects");
                                    }}
                                    className="bg-red-500 font-mono hover:shadow-2xl font-bold p-2 rounded-md border border-white hover:bg-red-600 hover:scale-105 active:scale-95 duration-150"
                                >
                                    View Projects
                                </button>
                                <button
                                    className="border font-bold font-mono hover:shadow-2xl border-red-500 p-2 hover:scale-105 active:scale-95 rounded-md hover:bg-red-500 duration-150"
                                    onClick={() => {
                                        router.push("/profile");
                                    }}
                                >
                                    Profile
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
