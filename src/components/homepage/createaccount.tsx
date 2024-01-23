export default function CreateAccount() {
  return (
    <section className="bg-[#fff] py-[100px]">
      <div className="container">
        <div className="sm:w-5/6 w-full mx-auto">
          <div className="bg-black py-20 rounded-[20px]">
            <div className="sm:w-2/4 w-full sm:px-0 px-4 mx-auto text-center">
              <h2 className="text-[#fff] text-[40px] leading-[44px] font-[700]">
                Ready To Get Started and Make an Impact?
              </h2>
              <p className="text-[#fff] text-[14px] leading-[22px] font-[400] my-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                .
              </p>
              <button
                type="button"
                className="text-white bg-[#00C7CE] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-[700] rounded-lg text-[14px] px-4 py-4 text-center"
              >
                Create An Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
