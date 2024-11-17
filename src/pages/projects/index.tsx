import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({
  imageSrc,
  altText,
  projectName,
  projectUrl,
  techStack,
}: {imageSrc: string; altText: string; projectName: string; projectUrl: string; techStack: { src: string; alt: string; }[]}) => {
  return (
    <div>
      <div>
        <Image
          src={imageSrc}
          alt={altText}
          className="rounded-t-lg object-cover  h-40 md:h-44 lg:h-60 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          width={500}
          height={500}
        />
      </div>
      <div className="space-y-2 rounded-b-lg border-l border-r border-b border-white p-4">
        <div className="flex justify-between">
          <p>{projectName}</p>
          <Link href={projectUrl}>
            <Image
              src="/website.png"
              alt="website link"
              width={30}
              height={30}
            />
          </Link>
        </div>
        <div className="flex gap-x-6">
          {techStack.map((tech, index) => (
            <Image
              key={index}
              src={tech.src}
              alt={tech.alt}
              width={30}
              height={30}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default function Projects() {
  const projects = [
    {
      imageSrc: "/km-1.png",
      altText: "project1",
      projectName: "Website Ormawa ITERA",
      projectUrl: "https://ormawa.itera.ac.id/",
      techStack: [
        { src: "/laravel.png", alt: "Laravel" },
        { src: "/react.png", alt: "React" },
        { src: "/statamic.png", alt: "Statamic" },
        { src: "/tailwindcss.png", alt: "Tailwind CSS" },
      ],
    },
    {
      imageSrc: "/pplk-1.png",
      altText: "project2",
      projectName: "Website PPLK ITERA 2024",
      projectUrl: "https://pplk.itera.ac.id/",
      techStack: [
        { src: "/laravel.png", alt: "Laravel" },
        { src: "/react.png", alt: "React" },
        { src: "/tailwindcss.png", alt: "Tailwind CSS" },
        { src: "/inersia.png", alt: "Inersia" },
      ],
    },
    {
      imageSrc: "/bidanPreneur-2.png",
      altText: "project3",
      projectName: "Website bidanPreneur",
      projectUrl: "https://bidanpreneur.com/",
      techStack: [{ src: "/Wordpress.png", alt: "WordPress" }],
    },
    {
      imageSrc: "/cc-2.png",
      altText: "project4",
      projectName: "Website Weekly Report CC",
      projectUrl: "https://candidate-college.vercel.app/",
      techStack: [
        { src: "/nextJS.png", alt: "Next.js" },
        { src: "/tailwindcss.png", alt: "Tailwind CSS" },
        { src: "/firebase.png", alt: "Firebase" },
        { src: "/typescript.png", alt: "Typescript" },
      ],
    },

    {
      imageSrc: "/tokopedia.png",
      altText: "project5",
      projectName: "Website Clone Tokopedia",
      projectUrl: "https://website-klone-tokopedia.vercel.app/",
      techStack: [
        { src: "/react.png", alt: "react" },
        { src: "/tailwindcss.png", alt: "Tailwind CSS" },
      ],
    },
    {
      imageSrc: "/quiz.png",
      altText: "project5",
      projectName: "Website Quiz Online",
      projectUrl: "https://aplikasi-quiz.vercel.app/",
      techStack: [
        { src: "/nextJS.png", alt: "Next.js" },
        { src: "/tailwindcss.png", alt: "Tailwind CSS" },
        { src: "/firebase.png", alt: "Firebase" },
        { src: "/javascript.png", alt: "Javascript" },
      ],
    },
    {
      imageSrc: "/berita.png",
      altText: "project6",
      projectName: "Website Berita Online",
      projectUrl:
        "https://yastar123.github.io/-Website-Pencarian-Berita-dengan-HTML-CSS-dan-Bootstrap/",
      techStack: [
        { src: "/bootstrap.png", alt: "bootstrap" },
        { src: "/tailwindcss.png", alt: "Tailwind CSS" },
        { src: "/html.png", alt: "HTML" },
      ],
    },
    {
      imageSrc: "/suwit.png",
      altText: "project7",
      projectName: "Website Suwit Online",
      projectUrl: "https://yastar123.github.io/game/",
      techStack: [
        { src: "/javascript.png", alt: "Javascript" },
        { src: "/css.png", alt: "CSS" },
        { src: "/html.png", alt: "HTML" },
      ],
    },
  ];

  return (
    <div className="flex flex-wrap mt-28 justify-center items-center text-white gap-6 px-4 md:px-0 mb-16">
      <p className="text-justify">
        Welcome to my projects page! Here, you can explore the various projects
        I’ve worked on, showcasing my dedication to creating innovative and
        functional web solutions. From interactive web applications to
        full-stack systems, each project highlights my commitment to solving
        unique challenges. Thank you for taking the time to view my work!
      </p>

      {projects.map((project, index) => (
        <div key={index}>
          <ProjectCard
            imageSrc={project.imageSrc}
            altText={project.altText}
            projectName={project.projectName}
            projectUrl={project.projectUrl}
            techStack={project.techStack}
          />
        </div>
      ))}
    </div>
  );
}
