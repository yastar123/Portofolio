import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex justify-evenly items-center text-white py-4 md:py-7 border-b border-white">
      <div>
        <p>Edu Juanda Pratama</p>
      </div>
      <div className="hidden md:flex justify-center gap-5">
        <p>Home</p>
        <p>Projects</p>
        <p>Skills</p>
        <p>Certifications</p>
      </div>
      <div>
        <Link href="https://wa.me/6285366195381" className="border-slate-300 border rounded p-2">
          Contact Now
        </Link>
      </div>
    </div>
  )
}