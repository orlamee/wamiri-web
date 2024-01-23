import Image from "next/image";
import left from "../../assets/left.svg";
import right from "../../assets/right.svg";
import person from "../../assets/person.png";
import lost from "../../assets/lost.png";
import Link from "next/link";

export default function RecentFound() {
  return (
    <section className="bg-[#F7F8FF] py-[100px]">
      <div className="container">
        <div className="flex sm:items-center sm:flex-row flex-col justify-between mb-9">
          <div>
            <h1 className="text-[#0C0112] text-[40px] leading-[44px] font-[700]">
              Recently Found Persons
            </h1>
          </div>
          <div className="flex items-center gap-3 sm:mt-0 mt-4">
            <Link href={"#"}>
              <Image src={left} alt="cursor" />
            </Link>
            <Link href={"#"}>
              <Image src={right} alt="cursor" />
            </Link>
          </div>
        </div>
        <div className="grid sm:grid-cols-3 grid-cols-1 gap-10">
          <div className="bg-white rounded-[9px] p-4">
            <Image src={person} alt="recent-found" className="w-full" />
            <div className="mt-4 mb-6">
              <h3 className="text-[#0C0112] text-[18px] leading-[19px] font-[700]">
                Azeezat Abdullahi
              </h3>
              <div className="flex items-center gap-x-2 mt-4">
                <span className="bg-[#F6E3FF] text-[12px] font-[500] text-[#7F03BB] px-4 py-0.5 rounded-[30px]">
                  Female
                </span>
                <span className="bg-[#DCFEFF] text-[12px] font-[500] text-[#0D979C] px-4 py-0.5 rounded-[30px]">
                  24 years
                </span>
              </div>
            </div>
            <hr className="text-[#EDEEF6]" />
            <div className="mt-6">
              <div className="flex items-center justify-start gap-x-6">
                <div>
                  <h5 className="text-[#353E34] text-[12px] leading-[19px] font-[400] mb-2">
                    Found on
                  </h5>
                  <h6 className="text-[#0C0112] text-[14px] leading-[15px] font-[600]">
                    12th Jan. 2024
                  </h6>
                </div>
                <div>
                  <h5 className="text-[#353E34] text-[12px] leading-[19px] font-[400] mb-2">
                    Found In
                  </h5>
                  <h6 className="text-[#0C0112] text-[14px] leading-[15px] font-[600]">
                    Epe, Lagos
                  </h6>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-[9px] p-4">
            <Image src={person} alt="recent-found" className="w-full" />
            <div className="mt-4 mb-6">
              <h3 className="text-[#0C0112] text-[18px] leading-[19px] font-[700]">
                Onyebuchi Harrison
              </h3>
              <div className="flex items-center gap-x-2 mt-4">
                <span className="bg-[#F6E3FF] text-[12px] font-[500] text-[#7F03BB] px-4 py-0.5 rounded-[30px]">
                  Female
                </span>
                <span className="bg-[#DCFEFF] text-[12px] font-[500] text-[#0D979C] px-4 py-0.5 rounded-[30px]">
                  24 years
                </span>
              </div>
            </div>
            <hr className="text-[#EDEEF6]" />
            <div className="mt-6">
              <div className="flex items-center justify-start gap-x-6">
                <div>
                  <h5 className="text-[#353E34] text-[12px] leading-[19px] font-[400] mb-2">
                    Found on
                  </h5>
                  <h6 className="text-[#0C0112] text-[14px] leading-[15px] font-[600]">
                    12th Jan. 2024
                  </h6>
                </div>
                <div>
                  <h5 className="text-[#353E34] text-[12px] leading-[19px] font-[400] mb-2">
                    Found In
                  </h5>
                  <h6 className="text-[#0C0112] text-[14px] leading-[15px] font-[600]">
                    Epe, Lagos
                  </h6>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-[9px] p-4">
            <Image src={lost} alt="recent-found" className="w-full" />
            <div className="mt-4 mb-6">
              <h3 className="text-[#0C0112] text-[18px] leading-[19px] font-[700]">
                Jesuyanmi Arise
              </h3>
              <div className="flex items-center gap-x-2 mt-4">
                <span className="bg-[#F6E3FF] text-[12px] font-[500] text-[#7F03BB] px-4 py-0.5 rounded-[30px]">
                  Female
                </span>
                <span className="bg-[#DCFEFF] text-[12px] font-[500] text-[#0D979C] px-4 py-0.5 rounded-[30px]">
                  24 years
                </span>
              </div>
            </div>
            <hr className="text-[#EDEEF6]" />
            <div className="mt-6">
              <div className="flex items-center justify-start gap-x-6">
                <div>
                  <h5 className="text-[#353E34] text-[12px] leading-[19px] font-[400] mb-2">
                    Found on
                  </h5>
                  <h6 className="text-[#0C0112] text-[14px] leading-[15px] font-[600]">
                    12th Jan. 2024
                  </h6>
                </div>
                <div>
                  <h5 className="text-[#353E34] text-[12px] leading-[19px] font-[400] mb-2">
                    Found In
                  </h5>
                  <h6 className="text-[#0C0112] text-[14px] leading-[15px] font-[600]">
                    Epe, Lagos
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
