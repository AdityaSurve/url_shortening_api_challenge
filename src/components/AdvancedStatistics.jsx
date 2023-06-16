import BrandRecognition from "../images/icon-brand-recognition.svg";
import DetailedRecords from "../images/icon-detailed-records.svg";
import FullyCustomizable from "../images/icon-fully-customizable.svg";
import bgShortenDesktop from "../images/bg-shorten-desktop.svg";
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
      <div className="h-[10rem] rounded-xl flex justify-center items-center overflow-hidden w-[70%] relative bg-primaryDarkViolet">
        <div className="h-[30%] gap-5 flex w-[80%] z-[100]">
          <input
            type="text"
            placeholder="Shorten a link here..."
            className="h-full w-full rounded-lg bg-white px-10 placeholder-neutralGrayishViolet"
          />
          <button className="h-full w-[30%] px-5 bg-primaryCyan text-white">
            Shorten It!
          </button>
        </div>
        <img
          src={bgShortenDesktop}
          alt=""
          className="absolute object-contain z-0"
        />
      </div>
      <div className="mt-2 flex flex-col gap-5 w-[70%] h-auto">
        {data.map((item) => (
          <div
            key={item.id}
            className="w-full h-16 rounded-lg bg-white flex justify-between items-center px-10"
          >
            <div className="font-bold text-neutralDarkBlue">
              {item.longLink}
            </div>
            <div className="flex items-center gap-5">
              <div className="text-primaryCyan">{item.shortLink}</div>
              <button className="bg-primaryCyan text-white">Copy</button>
            </div>
          </div>
        ))}
      </div>
      <div className="text-3xl font-bold text-center text-neutralBlack">
        Advanced Statistics
      </div>
      <div className="text-md font-semibold w-[30%] text-center text-neutralGrayishViolet">
        Track how your links are performing across the web with our advanced
        statistics dashboard.
      </div>
      <div className="relative h-auto mt-10 justify-center w-[90%] flex gap-5">
        <div className="relative flex flex-col gap-3 justify-center h-[12rem] z-[100] w-[18rem] p-5 bg-white rounded-md">
          <img
            src={BrandRecognition}
            alt=""
            className="absolute top-[-30px] left-5 bg-primaryDarkViolet rounded-full p-2"
          />
          <div className="font-bold text-neutralBlack ">Brand Recognition</div>
          <div className="text-neutralGrayishViolet text-sm">
            Boost your brand recognition with each click. Generic links don{"'"}
            t mean a thing. Branded links help instil confidence in your
            content.
          </div>
        </div>
        <div className="relative flex flex-col gap-3 justify-center h-[12rem] z-[100] w-[18rem] p-5 mt-6 bg-white rounded-md">
          <img
            src={DetailedRecords}
            alt=""
            className="absolute top-[-30px] left-5 bg-primaryDarkViolet rounded-full p-2"
          />
          <div className="font-bold text-neutralBlack ">Detailed Records</div>
          <div className="text-neutralGrayishViolet text-sm">
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </div>
        </div>
        <div className="relative flex flex-col gap-3 justify-center h-[12rem] z-[100] w-[18rem] p-5 mt-12 bg-white rounded-md">
          <img
            src={FullyCustomizable}
            alt=""
            className="absolute top-[-30px] left-5 bg-primaryDarkViolet rounded-full p-2"
          />
          <div className="font-bold text-neutralBlack ">Fully Customizable</div>
          <div className="text-neutralGrayishViolet text-sm">
            Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement.
          </div>
        </div>
        <div className="absolute bg-primaryCyan h-2 w-[50%] z-0 top-24" />
      </div>
    </div>
  );
};

export default AdvancedStatistics;
