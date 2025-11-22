import React from 'react'
import Title from './Title'
import { assets } from '../assets/data'
const Testimonial = () => {
  return (
    <section className='max-padd-container py-22 xl:py-28'>
      <Title title1={"What "} title2={"People Says"} titleStyles={"pb-10"}></Title>
        <div className="flex flex-wrap items-center justify-center gap-6"> 
            <div className="text-sm max-w-sm border border-gray-200 pb-6 rounded-lg bg-[#aebdcd] shadow-[0px_4px_15px_0px] shadow-black/5 overflow-hidden">
                <div className="flex items-center gap-4 px-5 py-4 
                border-b border-slate-900/10">
                    <img className="h-12 w-12 rounded-full" src={assets.user1} alt="userImage1" />
                    <div>
                        <h1 className="text-lg font-medium text-gray-800">Donald Jackman</h1>
                        <p className="text-black">Content Creator</p>
                    </div>
                </div>
                <div className="p-5 pb-7">
                    <div className="flex gap-0.5">
                        <img src={assets.star} alt="" width={16} />
                        <img src={assets.star} alt="" width={16} />
                        <img src={assets.star} alt="" width={16} />
                        <img src={assets.star} alt="" width={16} />
                        <img src={assets.star} alt="" width={16} />
                    </div>
                    <p className="text-gray-500 mt-5">I've been using imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.</p>
                </div>
                <a href="#" className="text-red-500 underline px-5">Read more</a>
            </div>
        
            <div className="text-sm w-80 border border-gray-200 pb-6 rounded-lg bg-white shadow-[0px_4px_15px_0px] shadow-black/5 overflow-hidden">
                <div className="flex items-center gap-4 px-5 py-4 bg-red-500/10">
                    <img className="h-12 w-12 rounded-full" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100" alt="userImage2" />
                    <div>
                        <h1 className="text-lg font-medium text-gray-800">Richard Nelson</h1>
                        <p className="text-gray-800/80">Instagram Influencer</p>
                    </div>
                </div>
                <div className="p-5 pb-7">
                    <div className="flex gap-0.5">
                        <img src={assets.star} alt="" width={16} />
                        <img src={assets.star} alt="" width={16} />
                        <img src={assets.star} alt="" width={16} />
                        <img src={assets.star} alt="" width={16} />
                        <img src={assets.star} alt="" width={16} />             
                    </div>
                    <p className="text-gray-500 mt-5">I've been using imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.</p>
                </div>
                <a href="#" className="text-red-500 underline px-5">Read more</a>
            </div>
        
            <div className="text-sm w-80 border border-gray-200 pb-6 rounded-lg bg-white shadow-[0px_4px_15px_0px] shadow-black/5 overflow-hidden">
                <div className="flex items-center gap-4 px-5 py-4 bg-red-500/10">
                    <img className="h-12 w-12 rounded-full" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&h=100&auto=format&fit=crop" alt="userImage3" />
                    <div>
                        <h1 className="text-lg font-medium text-gray-800">James Washington</h1>
                        <p className="text-gray-800/80">Digital Content Creator</p>
                    </div>
                </div>
                <div className="p-5 pb-7">
                    <div className="flex gap-0.5">
                        <img src={assets.star} alt="" width={16} />
                        <img src={assets.star} alt="" width={16} />
                        <img src={assets.star} alt="" width={16} />
                        <img src={assets.star} alt="" width={16} />
                        <img src={assets.star} alt="" width={16} />
                    </div>
                    <p className="text-gray-500 mt-5">I've been using imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.</p>
                </div>
                <a href="#" className="text-red-500 underline px-5">Read more</a>
            </div>
        </div>
    </section>
  )
}

export default Testimonial