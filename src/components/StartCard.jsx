import { Icon } from 'lucide-react'
import React from 'react'
import {motion} from "framer-motion"
const StartCard = ({name, icon:Icon, value}) => {
  return (
    <motion.div
    whileHover={{y: -5, boxShadow: "0 25px 50px -12px rbga(0,0,0,0.5)"}}
    className='bg-orange-500 backdrop-blur-md overflow-hidden shadow-lg rounded-xl border border-[#1f1f1f]'>
        <div className='px-4 py-5 sm:p-6 '>
            <span className='flex items-center text-sm font-medium text-white '>
                <Icon size={20} className='mr-2 '></Icon>
                {name}
            </span>
            <p  className='mt-1 text-3xl font-semibold'>{value}</p>
        </div>
    </motion.div>
  )
}

export default StartCard