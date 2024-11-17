import { useRouter } from "next/router";
import Navbar from "../navbar/navbarTop";
import NavbarBottom from "../navbar/navbarBottom";
import { Roboto } from "next/font/google";
import Footer from "../footer";

type AppShellProps = {
  children: React.ReactNode;
};

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

const disableNavbar = ["/404"];

const AppShell: React.FC<AppShellProps> = ({ children }) => {
  const { pathname } = useRouter();

  return (
    <main className={`${roboto.className} flex flex-col min-h-screen`}>

      {!disableNavbar.includes(pathname) && (
        <div className=" fixed top-0 left-0 right-0 z-20">
          <Navbar />
        </div>
      )}

      <div className="flex-grow">{children}</div>

      {/* Footer */}
      {!disableNavbar.includes(pathname) && (
        <div>
          <Footer />
        </div>
      )}

      {!disableNavbar.includes(pathname) && (
        <div className="md:hidden block fixed bottom-0 left-0 right-0">
          <NavbarBottom />
        </div>
      )}
    </main>
  );
};

export default AppShell;
