import Image from "next/image";
import man from "../../assets/man.svg";

export default function Works() {
  return (
    <section className="bg-[#fff] py-[100px]">
      <div className="container">
        <div className="flex sm:items-center sm:flex-row flex-col justify-between">
          <div>
            <h1 className="text-[#0C0112] text-[40px] leading-[44px] font-[700]">
              How Wamirii Works
            </h1>
          </div>
          <div className="sm:mt-0 mt-4">
            <button
              type="button"
              className="text-white bg-[#7F03BB] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-[700] rounded-lg text-[14px] px-4 py-4 text-center"
            >
              Sign Up Now
            </button>
          </div>
        </div>
        <div className="sm:w-1/3 w-full mt-4">
          <p className="text-[#353E34] text-[16px] leading-[25px] font-[400]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris .
          </p>
        </div>
        <div className="grid sm:grid-cols-2 grid-cols-1 mt-6">
          <div className="bg-pattern p-9 bg-cover bg-no-repeat">
            <ol className="space-y-6 text-white list-decimal list-inside text-[20px] leading-[22px] font-[700]">
              <li><span className="">Create An Account</span>
                <p className="ps-5 pt-4 text-[14px] leading-[22px] font-[400]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris .
                </p>
              </li>
              <li><span className="">Complete Missing Person Form</span>
                <p className="ps-5 pt-4 text-[14px] leading-[22px] font-[400]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris .
                </p>
              </li>
              <li><span className="">Submit Information</span>
                <p className="ps-5 pt-4 text-[14px] leading-[22px] font-[400]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris .
                </p>
              </li>
              <li><span className="">Follow Up and Track Information</span>
                <p className="ps-5 pt-4 text-[14px] leading-[22px] font-[400]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris .
                </p>
              </li>
            </ol>
          </div>
          <div>
            <Image src={man} alt="wamirii" className="w-full" />
          </div>
        </div>
      </div>
      
    </section>
  );
}
