import { Link } from 'react-router-dom';
import Logo from '../assets/img/logo.svg';
import {BiSearch} from 'react-icons/bi'
import { Links } from '../constants';


const Header = () => {
  return (
    <>

    {/* Main Header */}
        <div className="flex justify-between py-[16px] items-center w-[80%] mx-auto">
      <img src={Logo} alt="logo" />

      <div className='relative'>
      <BiSearch className='absolute top-3 left-3 text-[#0C1230]'/>
      <input type="search" className='border-[#E3E3E3] border w-[418px] rounded-[8px] py-[16px] pl-[35px] bg-[#EEEEEE] focus:outline-none h-[40px] text-[12px] font-[400] text-[#888888]' placeholder='Search For brand, category, coupon' name="" id="" />
      </div>

      <button className='bg-[#F01C21] px-[16px] py-[12px] rounded-[8px] text-[14px] text-[#FFFFFF] font-[400]'>Login / Sign Up</button>
    </div>



    <div className='bg-[#091431]'>
        <div className='w-[60%] mx-auto'>
            <ul className='text-[#FFFFFF] flex items-center justify-between'>
               {
                Links.map((items) => (
                    <li key={items.id} className='hover:text-[#F01C21] hover:border-b-[3px] hover:py-2 border-[#F01C21] py-3 text-[#FFFFFF] text-[15px] font-[400]'><Link>{items.name}</Link></li>
                ))
               }
            </ul>
        </div>
    </div>
    </>
  )
}

export default Header
