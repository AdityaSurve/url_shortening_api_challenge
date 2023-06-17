import { useState } from "react";
import BrandRecognition from "../images/icon-brand-recognition.svg";
import DetailedRecords from "../images/icon-detailed-records.svg";
import FullyCustomizable from "../images/icon-fully-customizable.svg";
import bgShortenDesktop from "../images/bg-shorten-desktop.svg";
import bgShortenMobile from "../images/bg-shorten-mobile.svg";

const AdvancedStatistics = () => {
  const [links, setLinks] = useState([]);
  const [urlInput, setUrlInput] = useState("");

  const shortenUrl = async () => {
    if (urlInput.trim() === "") return;

    try {
      const response = await fetch(
        `https://api.shrtco.de/v2/shorten?url=${urlInput}`
      );
      const data = await response.json();

      if (response.ok) {
        const newLink = {
          id: data.result.code,
          longLink: urlInput,
          shortLink: data.result.short_link,
          copied: false, // Added "copied" property
        };

        setLinks((prevLinks) => [...prevLinks, newLink]);
        setUrlInput("");
      } else {
        throw new Error(data.error || "Failed to shorten URL");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleCopy = (item) => {
    navigator.clipboard.writeText(item.shortLink);
    const updatedLinks = links.map((link) =>
      link.id === item.id ? { ...link, copied: true } : link
    );
    setLinks(updatedLinks);
  };

  return (
    <div className="h-auto pt-5 pb-20 w-screen font-pops gap-10 overflow-hidden flex flex-col justify-center items-center bg-slate-200">
      <div className="h-[12rem] lg:h-[10rem] rounded-xl flex justify-center items-center overflow-hidden w-[90%] lg:w-[70%] relative bg-primaryDarkViolet">
        <div className="h-[full] lg:h-[30%] gap-5 flex lg:flex-row flex-col w-[80%] z-[100]">
          <input
            type="text"
            placeholder="Shorten a link here..."
            className="h-[3rem] lg:h-full w-full rounded-lg bg-white text-neutralGrayishViolet px-3 lg:px-10 placeholder-neutralGrayishViolet"
            value={urlInput}
            onChange={(e) => setUrlInput(e.target.value)}
          />
          <button
            className="h-[3rem] font-bold lg:h-full w-full lg:w-[30%] px-5 bg-primaryCyan text-white"
            onClick={shortenUrl}
          >
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
      <div className="mt-2 flex flex-col gap-5 w-[90%] lg:w-[70%] h-auto max-h-[15rem] overflow-y-auto">
        {links.map((item) => (
          <div
            key={item.id}
            className="w-full h-auto lg:h-16 rounded-lg lg:py-3  bg-white flex flex-col lg:flex-row justify-between items-center lg:px-10"
          >
            <div
              className="font-bold w-full lg:w-auto cursor-pointer text-base p-3 text-neutralDarkBlue truncate"
              onClick={() => {
                const url = item.longLink.startsWith("http")
                  ? item.longLink
                  : `https://${item.longLink}`;
                window.open(url, "_blank");
              }}
            >
              {item.longLink}
            </div>
            <div className="h-1 w-full border-b-2 lg:hidden border-[#d5d5d590]" />
            <div className="flex lg:flex-row lg:mt-0 mt-3 flex-col items-center gap-5 lg:w-auto w-[90%]">
              <div
                className="text-primaryCyan lg:w-auto w-full text-left cursor-pointer"
                onClick={() => {
                  const url = item.shortLink.startsWith("http")
                    ? item.shortLink
                    : `https://${item.shortLink}`;
                  window.open(url, "_blank");
                }}
              >
                {item.shortLink}
              </div>
              {!item.copied ? (
                <button
                  className="bg-primaryCyan mb-3 lg:mb-0 lg:w-auto w-full text-white"
                  onClick={() => handleCopy(item)}
                >
                  Copy
                </button>
              ) : (
                <button
                  className="mb-3 bg-primaryDarkViolet lg:mb-0 lg:w-auto w-full text-white"
                  disabled
                >
                  Copied!
                </button>
              )}
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
            t mean a thing. Branded links help instill confidence in your
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
        <div className="relative flex flex-col gap-3 justify-center h-[12rem] z-[100] w-[18rem] p-5 bg-white rounded-md">
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
            customizable links. Supercharge audience engagement.
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedStatistics;
