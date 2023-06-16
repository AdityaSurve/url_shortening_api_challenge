import BannerImage from "../images/illustration-working.svg";
const Banner = () => {
  return (
    <div className="h-screen w-screen bg-white font-pops overflow-hidden lg:tracking-widest text-black gap-[5%] flex flex-col-reverse lg:flex-row justify-center items-center">
      <div className="flex flex-col items-center lg:items-start lg:text-left text-center w-[60%] lg:w-[40%] gap-5">
        <div className="text-xl lg:text-7xl font-extrabold text-primaryDarkViolet">
          More than just shorter links
        </div>
        <div className="text-sm w-[80%] text-neutralGrayishViolet">
          Build your brand{"'"}s recognition and get detailed insights on how
          your links are performing.
        </div>
        <div className="bg-primaryCyan text-white px-3 py-2 mt-10 font-bold rounded-full w-[10em] text-center">
          Get Started
        </div>
      </div>
      <img src={BannerImage} alt="" className="w-full lg:w-[50%] mr-[-10%] " />
    </div>
  );
};

export default Banner;
