export default function Works() {
  return (
    <section className="bg-[#fff] py-[100px]">
      <div className="container">
        <div className="flex sm:items-center sm:flex-row flex-col justify-between">
          <div>
            <h1 className="text-[#0C0112] text-[40px] leading-[44px] font-[700] mb-6">
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
        <div className="sm:w-1/3 w-full">
          <p className="text-[#353E34] text-[16px] leading-[25px] font-[400]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris .
          </p>
        </div>
      </div>
    </section>
  );
}
