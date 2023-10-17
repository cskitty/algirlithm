import {
  DISCORD_LINK,
  DONATION_LINK,
  REGISTRATION_LINK,
} from "@/utils/constants";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className={"bg-gray-900 text-white py-16 relative"}>
      <div
        className={
          "w-full max-w-5xl px-8 sm:px-16 mx-auto grid grid-cols-1 lg:grid-cols-4 gap-x-4 gap-y-8"
        }
      >
        <div>
          <h3 className={"font-bold text-xl"}>
            <Link href="/">
              <a>Algirlithm</a>
            </Link>
          </h3>
        </div>
        <div className={"space-y-8"}>
          <div className={"space-y-2"}>
            <h3 className={"font-bold mb-4"}>Register</h3>
            <div>
              <a href={REGISTRATION_LINK} className={"footer-link"} target="_blank" rel="noreferrer">
                registration link
              </a>
            </div>
          </div>
          <div className={"space-y-2"}>
            <h3 className={"font-bold mb-4"}>Donate</h3>
            <div>
              <a href={DONATION_LINK} className={"footer-link"} target="_blank" rel="noreferrer">
                donate here!
              </a>
            </div>
          </div>
        </div>
        <div className="space-y-8">
          <div className={"space-y-2"}>
            <h3 className={"font-bold mb-4"}>Contact Us</h3>
            <div>
              <a href="mailto:contact@algirlithm.org" className={"footer-link"}>
                contact@algirlithm.org
              </a>
            </div>
          </div>
          <div className={"space-y-2"}>
            <h3 className={"font-bold mb-4"}>Discord Server</h3>
            <div>
              <a className={"footer-link"} href={DISCORD_LINK} target="_blank" rel="noreferrer"> 
                discord.gg/bqRBv3CfQr
              </a>
            </div>
          </div>
        </div>
        <div className={"space-y-2"}>
          <h3 className={"font-bold mb-4"}>Quick Links</h3>
          <div>
            <Link href="/results">
              <a className={"footer-link"}>results</a>
            </Link>
          </div>
          <div>
            <Link href="/logistics">
              <a className={"footer-link"}>logistics</a>
            </Link>
          </div>
          <div>
            <Link href="/faq">
              <a className={"footer-link"}>faq</a>
            </Link>
          </div>
          <div>
            <Link href="/about">
              <a className={"footer-link"}>about</a>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
