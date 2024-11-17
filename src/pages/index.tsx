import { Roboto } from "next/font/google";
import About from "../components/fragments/about";
import Link from "next/link";
import Certificate from "@/components/fragments/Certificate";
import CV from "@/components/fragments/cv";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className={roboto.className}>
      <div className="max-w-md  mx-auto justify-center items-center font-bold flex gap-4 mt-36  md:mt-48">
        <div className="text-white md:text-2xl">Hello, I am</div>
        <div className="bg-white text-black rounded-2xl px-3 py-2 md:text-3xl ">
          Edu Juanda Pratama
        </div>
      </div>

      <div className="max-w-md mx-auto flex justify-center items-center font-bold text-white md:text-4xl text-3xl my-6">
        Full Stack Developer
      </div>

      <div className="text-white flex justify-center items-center text-justify px-6 max-w-4xl mx-auto">
        <p>
          I&apos;m a full stack developer based in Indonesia. I specialize in
          building and designing exceptional digital experiences. I&apos;m
          currently looking for opportunities to apply fullstack development and
          cloud computing skills in innovative projects.
        </p>
      </div>

      <div className="max-w-md flex mx-auto justify-center items-center gap-4 my-6">
        <Link
          href={"/skills"}
          className="bg-white border-1 border-slate-300 rounded px-3 py-2"
        >
          See My Skills
        </Link>
        <Link
          href={"/projects"}
          className="border-2 border-slate-300  rounded px-3 py-2 text-white"
        >
          View My Projects
        </Link>
      </div>
      <About />
      <Certificate />
      <CV />
    </div>
  );
}
