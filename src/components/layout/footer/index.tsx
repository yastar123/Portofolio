import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="border-t border-t-white text-white mb-20 md:mb-0">
            <div className="md:flex justify-evenly py-8 px-4 space-y-8 md:space-y-0">
                <div className="tracking-widest font-bold text-xl md:font-normal">
                    Edu Juanda Pratama
                </div>

                <div className="space-y-4">
                    <ContactInfo label="Email:" value="eduj2164@gmail.com" />
                    <ContactInfo
                        label="Phone:"
                        value="0853-6619-5381"
                        link="https://wa.me/6285366195381"
                    />
                </div>

                <nav className="text-lg space-y-3">
                    {["Home", "Experience", "Projects", "Skills"].map((menu) => (
                        <FooterLink key={menu} href={`/${menu.toLowerCase()}`} text={menu} />
                    ))}
                </nav>

                <div>
                    <p className="text-lg font-semibold text-center md:text-start">
                        Find me on
                    </p>
                    <div className="flex gap-4 mt-2 justify-center items-center">
                        {socialLinks.map(({ href, src, alt, name }) => (
                            <SocialLink key={name} href={href} src={src} alt={alt} name={name} />
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

const ContactInfo = ({
    label,
    value,
    link,
}: {
    label: string;
    value: string;
    link?: string;
}) => (
    <div className="flex gap-x-5">
        <p>{label}</p>
        {link ? (
            <Link href={link} className="underline font-semibold tracking-widest">
                {value}
            </Link>
        ) : (
            <p className="underline font-semibold tracking-widest">{value}</p>
        )}
    </div>
);

const FooterLink = ({ href, text }: { href: string; text: string }) => (
    <div>
        <Link href={href} className="hover:underline">
            {text}
        </Link>
    </div>
);

const SocialLink = ({
    href,
    src,
    alt,
    name,
}: {
    href: string;
    src: string;
    alt: string;
    name: string;
}) => (
    <Link href={href} className="text-center space-y-2">
        <p>{name}</p>
        <Image src={src} alt={alt} className="mx-auto" width={40} height={40} />
    </Link>
);

const socialLinks = [
    {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/edu-juanda-pratama-861249297/",
        src: "/linkedin.png",
        alt: "LinkedIn",
    },
    {
        name: "Instagram",
        href: "https://www.instagram.com/edu_2191/profilecard/?igsh=dGFxaGw0eHpqcDls",
        src: "/instagram.png",
        alt: "Instagram",
    },
    {
        name: "GitHub",
        href: "https://github.com/yastar123",
        src: "/github.png",
        alt: "GitHub",
    },
];
