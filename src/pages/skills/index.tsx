import SkillsTable from "@/components/layout/skills";

export default function Skills() {
  return (
    <div className="text-white mt-24 md:mt-32 max-w-3xl mx-auto px-4 pb-20 md:px-0">
      <div className=" text-white">
        <p className="font-bold text-3xl">Skills</p>
        <p className="text-justify mt-2">
          With one year of experience as a web developer, I&apos;ve gained
          essential skills to build high-performance, secure, and functional web
          applications. I continually strive to stay updated with the latest
          technologies and uphold quality standards in every project.
        </p>
      </div>
      <SkillsTable />
    </div>
  );
}
