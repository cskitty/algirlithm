import Link from "next/link";
import Image from "next/image";
import logo from "../public/logo.png";
import logoText from "../public/logo-text.png";
const Navbar = () => {
  return (
    <nav
      className={
        "h-[4.5rem] fixed z-10 backdrop-blur-lg w-full saturate-150 bg-gray-900 bg-opacity-80"
      }
    >
      <div className={"w-full px-8 sm:px-16 h-full"}>
        <div
          className={
            "max-w-4xl w-full mx-auto flex items-center justify-between h-full text-white font-bold"
          }
        >
          <div>
            <Link href={"/"}>
              <a className={"flex items-center justify-center gap-4"}>
                <Image
                  src={logo}
                  height="40"
                  width="40"
                  alt="alGIRLithm logo"
                  priority
                />
                <div className={"hidden sm:block pt-2"}>
                  <Image
                    src={logoText}
                    height="40"
                    width="220"
                    alt="logo text"
                  />
                </div>
              </a>
            </Link>
          </div>
          <div className={"text-sm sm:text-base font-medium space-x-4"}>
            <Link href={"/results2022"}>
              <a>2022 results</a>
            </Link>
            <Link href={"/logistics"}>
              <a>logistics</a>
            </Link>
            <Link href={"/faq"}>
              <a>faq</a>
            </Link>
            <Link href={"/about"}>
              <a>about</a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
