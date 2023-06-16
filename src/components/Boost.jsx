import bgBoostDesktop from "../images/bg-boost-desktop.svg";
const Boost = () => {
  return (
    <div className="h-[10rem] font-pops flex justify-center items-center overflow-hidden w-full relative bg-primaryDarkViolet">
      <img src={bgBoostDesktop} alt="" className="absolute w-full" />
      <div className="flex flex-col z-10 items-center">
        <div className="text-white font-bold text-xl">
          Boost your links today
        </div>
        <div className="bg-primaryCyan text-white px-3 py-2 mt-5 font-bold rounded-full w-[10em] text-center">
          Get Started
        </div>
      </div>
    </div>
  );
};

export default Boost;