import React from 'react'
import { Link } from 'react-router-dom';
import { assets } from '../assets/data';
export const Footer = () => {

    return (
      <footer className='pt-16 xl:pt-20 w-full bg-primary'>
        <div className='max-padd-container'>
            <div className='flex flex-wrap justify-between gap-12 md:gap-6'>
              <div className='max-w-80'>
                  <div  className='flex flex-1'>
                  <Link to={'/'} className='fles items-end'>
                  <img src={assets.logoImg} alt='logoImg' className='h-12'/>
                  <div >
                    <span className='block font-extrabold text-3xl relative top-1 left-1'>ManhFoodie</span>
                    <span className='block font-extrabold text-xs
                     relative left-1.5 traching-[10px] uppercase text-solid'>Fiesta</span>
                  </div> 
                  </Link>
              </div>
                    <p className='text-sm mt-5'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                    </p>
                    <div className='flex items-center gap-3 mt-5'>
                       <img src={assets.facebook} alt="" />
                       <img src={assets.instagram} alt="" />
                       <img src={assets.twitter} alt="" />
                       <img src={assets.linkedin} alt="" />
                    </div>
                </div>

                <div>
                    <p className='text-textColor'>COMPANY</p>
                    <ul className='mt-3 flex flex-col gap-2 text-sm'>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Press</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Partners</a></li>
                    </ul>
                </div>

                <div>
                    <p className='text-textColor'>SUPPORT</p>
                    <ul className='mt-3 flex flex-col gap-2 text-sm'>
                        <li><a href="#">Help Center</a></li>
                        <li><a href="#">Safety Information</a></li>
                        <li><a href="#">Cancellation Options</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Accessibility</a></li>
                    </ul>
                </div>

                <div className='max-w-80'>
                    <p className='text-textColor'>STAY UPDATED</p>
                    <p className='mt-3 text-sm'>
                        Subscribe to our newsletter for inspiration and special offers.
                    </p>
                    <div className='flex items-center mt-4'>
                        <input type="text" className='bg-white rounded-l border border-gray-300 h-9 px-3 outline-none' placeholder='Your email' />
                        <button className='bt-solid font-medium !px-3.5 py-2 mr-0.5'>Subcribe</button>
                    </div>
                </div>
            </div>
            <hr className='border-gray-300 mt-8' />
            <div className='flex flex-col md:flex-row gap-2 items-center justify-between py-5'>
                <p>© {new Date().getFullYear()} <a href="https://prebuiltui.com">PrebuiltUI</a>. All rights reserved.</p>
                <ul className='flex items-center gap-4'>
                    <li><a href="#">Privacy</a></li>
                    <li><a href="#">Terms</a></li>
                    <li><a href="#">Sitemap</a></li>
                </ul>
            </div>
        </div>
      </footer>
    );
};


export default Footer