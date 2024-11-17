import Image from "next/image";


const SkillItem = ({ src, alt, label }: { src: string; alt: string; label: string }) => (
  <div className="flex items-center gap-4 p-3 pl-6  w-[95%] mx-auto rounded-b-lg">
    <Image src={src} alt={alt} width={50} height={50} />
    <div className="font-bold text-lg">{label}</div>
  </div>
);

const SkillCategory = ({ title, skills }: { title: string; skills: { src: string; alt: string; label: string }[] }) => (
  <div className="w-full md:w-[45%] border  pb-3 border-white rounded-lg">
    <div className="text-center font-bold text-xl bg-[#1F1F1F] py-4 mb-2 rounded-t-lg">
      {title}
    </div>
    {skills.map((skill, index) => (
      <div key={index} >
        <SkillItem src={skill.src} alt={skill.alt} label={skill.label} />
        {index < skills.length - 1 && <hr className="w-[90%] mx-auto my-2" />}
      </div>
    ))}
  </div>
);

const skillsData = [
  {
    title: "Programming Languages",
    skills: [
      { src: "/html.png", alt: "HTML", label: "HTML" },
      { src: "/css.png", alt: "CSS", label: "CSS" },
      { src: "/javascript.png", alt: "Javascript", label: "Javascript" },
      { src: "/typescript.png", alt: "Typescript", label: "Typescript" },
      { src: "/c++.png", alt: "C++", label: "C++" },
    ],
  },
  {
    title: "Framework | Library",
    skills: [
      { src: "/react.png", alt: "React", label: "React" },
      { src: "/nextJS.png", alt: "Next.js", label: "Next.js" },
      { src: "/tailwindcss.png", alt: "TailwindCSS", label: "TailwindCSS" },
      { src: "/Bootstrap.png", alt: "Bootstrap", label: "Bootstrap" },
      { src: "/sass.png", alt: "Sass", label: "Sass" },
      { src: "/statamic.png", alt: "Statamic", label: "Statamic" },
      { src: "/WordPress.png", alt: "WordPress", label: "WordPress" },
    ],
  },
  {
    title: "Database | Storage",
    skills: [{ src: "/firebase.png", alt: "Firebase", label: "Firebase" }],
  },
  {
    title: "Design | UI/UX",
    skills: [{ src: "/figma.png", alt: "Figma", label: "Figma" }],
  },
];

export default function SkillsTable() {
  return (
    <div className="text-white flex flex-wrap justify-center gap-4 my-10">
      {skillsData.map((category, index) => (
        <SkillCategory
          key={index}
          title={category.title}
          skills={category.skills}
        />
      ))}
    </div>
  );
}
