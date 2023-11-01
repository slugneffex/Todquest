import React from "react";
import newsLetterImg from "../assets/img/NewsLetter/newsletterImg.svg";
import cloud1 from "../assets/img/NewsLetter/Union.svg";
import cloud2 from "../assets/img/NewsLetter/Union-1.svg";
import cloud3 from "../assets/img/NewsLetter/Union-2.svg";
import cloud4 from "../assets/img/NewsLetter/Union-3.svg";

const NewsLetter = () => {
  return (
    <div className="bg-[#DADADA40] py-[50px]">
      <div className="w-[80%] mx-auto rounded-[10px] bg-[#FFFFFF] flex items-center gap-16 p-[10px]">
        <div className="bg-[#F5F5F5] relative rounded-[10px]">
          <img src={newsLetterImg} alt="newsLetterImg" className="w-[100%] h-auto" />
          <img src={cloud1} alt="cloud" className="absolute top-[80px] left-[160px]" />
          <img src={cloud2} alt="cloud" className="absolute top-[30px] left-[10px]" />
          <img src={cloud3} alt="cloud" className="absolute top-[50px] right-[20px]" />
          <img src={cloud4} alt="cloud" className="absolute top-[10px] left-[150px]" />
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-[#091431] text-[32px] font-[500] w-[250px]">
            Subscribe to our Newsletter!
          </h2>
          <p className="text-[908F8F] font-[300] text-[18px] w-[350px]">
            Be the first to get exclusive offers ands the latest news
          </p>
          <input type="text" className="focus:outline-none border-[1px] border-[#D3D3D3] rounded-[8px] py-[20px] px-[16px] w-[420px] text-[14px] font-[400] text-[#908F8F]" placeholder="Enter your email address" />
          <br />
          <button className="bg-[#F01C21] px-[16px] py-[12px] rounded-[8px] w-[150px] text-[14px] font-[500] text-[#FFFFFF]">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
