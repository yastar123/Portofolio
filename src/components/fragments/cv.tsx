import Link from "next/link";
export default function Cv() {
  return (
    <div className="flex justify-center items-center my-16">
      <Link
        href="https://drive.google.com/file/d/10ClDwQRIZCHuCMGK2iyTBWbEcEZlIvRw/view?usp=sharing"
        className="bg-white border-1 border-slate-300 rounded px-3 py-2"
      >
        Dowload My CV
      </Link>
      
    </div>
  );
}
