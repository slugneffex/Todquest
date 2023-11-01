// import { footerLinks } from "../constants";
import Logo from "../assets/img/LogoFooter.svg";
import appleStore from "../assets/img/apple.svg";
import playstore from "../assets/img/playstore.svg";
import { footerLinks } from "../constants";
import {IoMdArrowDropright} from 'react-icons/io';


const Footer = () => {
  return (
    <div className="bg-[#091431]">
      <div className="flex justify-between items-start w-[80%] mx-auto py-[32px]">
        <div className="flex flex-col gap-6 items-start w-[200px]">
          <img src={Logo} alt="Logo" />
          <p className="text-[14px] font-[400] text-[#FFFFFF]">
            Lorem Ipsum is simply dummy of the printing and type setting.
          </p>
          <button className="w-[120px] flex justify-between items-center border-[1px] border-[#E9E8E8] rounded-[8px] py-[8px] px-[12px] bg-[#FFFFFF]">
            <img src={appleStore} alt="appleStore" />
            <div>
              <p className="text-[8px] text-[#747577]">Download From</p>
              <p className="uppercase text-[12px] text-[#091431] font-[500]">App Store</p>
            </div>
          </button>
          <button className="w-[120px] flex justify-between items-center border-[1px] border-[#E9E8E8] rounded-[8px] py-[8px] px-[12px] bg-[#FFFFFF]">
            <img src={playstore} alt="appleStore" />
            <div>
              <p className="text-[8px] text-[#747577]">Download From</p>
              <p className="uppercase text-[12px] text-[#091431] font-[500]">App Store</p>
            </div>
          </button>
        </div>

    
            {
                footerLinks.map((items) => (
                    <div key={items.id}>
                        <p className="text-[16px] font-[500] text-[#F01C21]">{items.id}</p>
                        <ul className="mt-[10px] text-[#FFFFFF] font-[400] text-[14px]">
                            {items.links.map(link=><li key={link.id} className="flex items-center my-[5px]">
                                <IoMdArrowDropright />
                                {link.name}
                                </li>)}
                        </ul>
                    </div>
                ))
            }
      </div>
    </div>
  );
};

export default Footer;
