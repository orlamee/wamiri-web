import Image from "next/image";
import hero from "../../assets/hero.svg";

export default function Hero() {
  return (
    <section className="container pt-[200px]">
      <div className="flex flex-col sm:flex-row justify-between">
        <div className="w-full sm:w-1/3 mb-4 sm:mb-0">
          <h1 className="text-[#0C0112] text-[60px] leading-[66px] font-[800]">
            <span className="text-[#00C7CE]">Find</span> the missing,
            <span className="text-[#7F03BB]"> reunite</span> hearts,
            <span className="text-[#470069]"> restore</span> hope.
          </h1>
        </div>
        <div className="w-full sm:w-1/2 mt-4">
          <h6 className="text-[#0C0112] text-[16px] font-[400] leading-[25px]">
            Uncover the perfect resource for locating missing individuals
            <br />
            and reuniting families with our comprehensive missing person
            database.
          </h6>
          <form className="mt-12">
            <label
              htmlFor="search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <input
                type="search"
                id="search"
                className="block w-full p-4 ps-6 text-sm text-[#A9A0AE] border border-[#FAF1FE] rounded-[5px] bg-[#FAF1FE] outline-none"
                placeholder="Enter name, location, age  to search for missing persons"
              />
              <button
                type="submit"
                className="text-white absolute end-2.5 bottom-2.5 bg-[#00C7CE] hover:bg-[#7F03BB] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-[5px] text-sm px-8 py-2"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="sm:mt-[90px] mt-[50px]">
        <Image src={hero} alt="hero" className="w-full" />
      </div>
    </section>
  );
}
