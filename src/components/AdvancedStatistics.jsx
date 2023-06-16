import BrandRecognition from "../images/icon-brand-recognition.svg";
import DetailedRecords from "../images/icon-detailed-records.svg";
import FullyCustomizable from "../images/icon-fully-customizable.svg";
import bgShortenDesktop from "../images/bg-shorten-desktop.svg";
import bgShortenMobile from "../images/bg-shorten-mobile.svg";

const AdvancedStatistics = () => {
  const data = [
    {
      id: 1,
      longLink: "https://www.frontendmentor.io",
      shortLink: "https://rel.ink/k4IKyk",
    },
    {
      id: 2,
      longLink: "https://twitter.com/frontendmentor",
      shortLink: "https://rel.ink/gxOXp9",
    },
    {
      id: 3,
      longLink: "https://www.linkedin.com/company/frontendmentor/",
      shortLink: "https://rel.ink/gob3X9",
    },
  ];
  return (
    <div className="h-auto pt-5 pb-20 w-screen font-pops gap-10 overflow-hidden flex flex-col justify-center items-center bg-slate-200">
      <div className="h-[12rem] lg:h-[10rem] rounded-xl flex justify-center items-center overflow-hidden w-[90%] lg:w-[70%] relative bg-primaryDarkViolet">
        <div className="h-[full] lg:h-[30%] gap-5 flex lg:flex-row flex-col w-[80%] z-[100]">
          <input
            type="text"
            placeholder="Shorten a link here..."
            className="h-[3rem] lg:h-full w-full rounded-lg bg-white px-3 lg:px-10 placeholder-neutralGrayishViolet"
          />
          <button className="h-[3rem] font-bold lg:h-full w-full lg:w-[30%] px-5 bg-primaryCyan text-white">
            Shorten It!
          </button>
        </div>
        <img
          src={bgShortenDesktop}
          alt=""
          className="hidden lg:flex absolute object-contain z-0"
        />
        <img
          src={bgShortenMobile}
          alt=""
          className="lg:hidden absolute top-0 right-0 object-contain z-0"
        />
      </div>
      <div className="mt-2 flex flex-col gap-5 w-[90%] lg:w-[70%] h-auto">
        {data.map((item) => (
          <div
            key={item.id}
            className="w-full h-auto lg:h-16 rounded-lg lg:py-0 bg-white flex flex-col lg:flex-row justify-between items-center lg:px-10"
          >
            <div className="font-bold w-full lg:w-auto text-base p-3 text-neutralDarkBlue truncate">
              {item.longLink}
            </div>
            <div className="h-1 w-full border-b-2 lg:hidden border-[#d5d5d590]" />
            <div className="flex lg:flex-row lg:mt-0 mt-3 flex-col items-center gap-5 lg:w-auto w-[90%]">
              <div className="text-primaryCyan lg:w-auto w-full text-left">
                {item.shortLink}
              </div>
              <button className="bg-primaryCyan mb-3 lg:mb-0 lg:w-auto w-full text-white ">
                Copy
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="text-3xl font-bold text-center text-neutralBlack">
        Advanced Statistics
      </div>
      <div className="text-md font-semibold w-[80%] lg:w-[30%] text-center text-neutralGrayishViolet">
        Track how your links are performing across the web with our advanced
        statistics dashboard.
      </div>
      <div className="relative h-auto mt-10 justify-center w-[90%] flex flex-col items-center lg:items-start lg:flex-row gap-20 lg:gap-5">
        <div className="relative flex flex-col gap-3 justify-center h-[12rem] z-[100] w-[18rem] p-5 bg-white rounded-md">
          <img
            src={BrandRecognition}
            alt=""
            className="absolute top-[-30px] right-[40%] lg:left-5 bg-primaryDarkViolet rounded-full p-2"
          />
          <div className="font-bold text-neutralBlack lg:w-auto w-full lg:text-left text-center">
            Brand Recognition
          </div>
          <div className="text-neutralGrayishViolet text-sm lg:w-auto w-full lg:text-left text-center">
            Boost your brand recognition with each click. Generic links don{"'"}
            t mean a thing. Branded links help instil confidence in your
            content.
          </div>
        </div>
        <div className="relative flex flex-col gap-3 justify-center h-[12rem] z-[100] w-[18rem] p-5 lg:mt-6 bg-white rounded-md">
          <img
            src={DetailedRecords}
            alt=""
            className="absolute top-[-30px] right-[40%] lg:left-5 bg-primaryDarkViolet rounded-full p-2"
          />
          <div className="font-bold text-neutralBlack lg:w-auto w-full lg:text-left text-center">
            Detailed Records
          </div>
          <div className="text-neutralGrayishViolet text-sm lg:w-auto w-full lg:text-left text-center">
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </div>
        </div>
        <div className="relative flex flex-col gap-3 justify-center h-[12rem] z-[100] w-[18rem] p-5 lg:mt-12 bg-white rounded-md">
          <img
            src={FullyCustomizable}
            alt=""
            className="absolute top-[-30px] right-[40%] lg:left-5 bg-primaryDarkViolet rounded-full p-2"
          />
          <div className="font-bold text-neutralBlack lg:w-auto w-full lg:text-left text-center">
            Fully Customizable
          </div>
          <div className="text-neutralGrayishViolet text-sm lg:w-auto w-full lg:text-left text-center">
            Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement.
          </div>
        </div>
        <div className="absolute bg-primaryCyan w-2 h-[70%] lg:h-2 lg:w-[50%] z-0 top-24" />
      </div>
    </div>
  );
};

export default AdvancedStatistics;
