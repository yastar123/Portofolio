import { House, Briefcase, LayoutGrid, SquareCode } from "lucide-react";
import Link from "next/link";

const NavbarBottom = () => {
    const navItems = [
        { href: "/", label: "Home", icon: House },
        { href: "/experience", label: "Experience", icon: Briefcase },
        { href: "/projects", label: "Projects", icon: LayoutGrid },
        { href: "/skills", label: "Skills", icon: SquareCode },
    ];

    return (
        <nav className="flex justify-between px-6 items-center text-white py-4 md:py-7 border-t border-white">
            {navItems.map((item) => (
                <NavItem key={item.href} href={item.href} label={item.label} Icon={item.icon} />
            ))}
        </nav>
    );
};
export default NavbarBottom;

const NavItem = ({
    href,
    label,
    Icon,
}: {
    href: string;
    label: string;
    Icon: React.ComponentType<{ className?: string }>;
}) => (
    <Link href={href} className="text-center">
        <Icon className="mx-auto" />
        <span>{label}</span>
    </Link>
);
