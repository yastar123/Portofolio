import Link from "next/link"

export default function Navbar() {
  return (
    <div className="flex justify-evenly items-center text-white py-4 md:py-7 border-b border-white">
      <div>
        <p>Edu Juanda Pratama</p>
      </div>
      <div className="hidden md:flex justify-center gap-5">
        <Link href={"/"} >Home</Link>
        <Link href={"/experience"}>Experience</Link>
        <Link href={"/projects"}>Projects</Link>
        <Link href={"/skills"}>Skills</Link>
      </div>
      <Link href="https://wa.me/6285366195381">
        <button className="border-white border rounded p-2 hover:bg-white hover:text-black hover:border-black hover:font-medium">
          Contact Now
        </button>
      </Link>
    </div>
  )
}