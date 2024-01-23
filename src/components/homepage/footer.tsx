import Image from "next/image";
import logo from "../../assets/logo-white.svg";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import twitter from "../../assets/twitter.svg";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#040808]">
      <div className="mx-auto w-full container p-4 py-6 lg:py-[60px]">
        <div className="md:flex md:justify-between">
          <div className="sm:w-1/3 w-full">
            <div className="mb-6 md:mb-0">
              <Link href="https://flowbite.com/" className="flex items-center">
                <Image src={logo} alt="wamirii" />
              </Link>
              <p className="mt-4 text-white text-[14px] leading-[22px] font-[400]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                .
              </p>
              <div className="flex items-center gap-x-4 mt-9">
                <Link href={"#"}>
                   <Image src={facebook} alt="facebook" className="" />
                </Link>
                <Link href={"#"}>
                   <Image src={twitter} alt="twitter" className="" />
                </Link>
                <Link href={"#"}>
                   <Image src={instagram} alt="instagram" className="" />
                </Link>
              </div>
            </div>
          </div>
          <div className="sm:w-1/2 w-full">
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-6 leading-[19px] text-[18px] font-[700] text-white">
                  Wamirii
                </h2>
                <ul className="text-white text-[14px] font-[400]">
                  <li className="mb-4">
                    <Link href="#" className="hover:underline">
                      About Us
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link href="#" className="hover:underline">
                      Become A Volunteer
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link href="#" className="hover:underline">
                      Make A Submission
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 leading-[19px] text-[18px] font-[700] text-white">
                  Resources
                </h2>
                <ul className="text-white text-[14px] font-[400]">
                  <li className="mb-4">
                    <Link href="#" className="hover:underline">
                      Blog
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link href="#" className="hover:underline">
                      Newsletter
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link href="#" className="hover:underline">
                      Frequently Asked Questions
                    </Link>
                  </li>
                </ul>
              </div><div>
                <h2 className="mb-6 leading-[19px] text-[18px] font-[700] text-white">
                  Contact
                </h2>
                <ul className="text-white text-[14px] font-[400]">
                  <li className="mb-4">
                    <Link href="#" className="hover:underline">
                      +23490812378191
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link href="#" className="hover:underline">
                      support@wamirii.com
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
