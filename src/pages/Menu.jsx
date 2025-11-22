import Item from '../components/Item'
import { useAppContext } from '../context/AppContext'
import SearchingInput from '../components/SearchingInput'
import { useEffect, useState, useMemo, use } from 'react'
import {motion} from 'framer-motion'
const Menu = () => {
  const {products} = useAppContext();
  const [currentPage, setCurrentPage]=useState(1);
  const [categories, setCategories]= useState(["All"]);
  const [origins, setOrigins]= useState(["All"]);
  const [chosenCategory, setChosenCategory]= useState("All")
  const [chosenOrigin, setChosenOrigin]= useState("All")

  

  const totalPages=7
  useEffect(()=>{
    
    const categorySet = new Set();
    const originSet = new Set();
      categorySet.add("All");
      originSet.add("All");
      products.forEach((element) => {
        categorySet.add(element.category);
        originSet.add(element.origin);
    });
    setCategories(Array.from(categorySet));
    setOrigins(Array.from(originSet));
    
  },[products])


  return (
    <div className='max-padd-container !px-0 mt-32 '>
      <div className='flex flex-col sm:flex-row gap-6'>

        <div className='min-w-72 bg-white p-4 pl-16 lg:pl-12 rounded-r-xl my-4'>
                 
          
          <div className='pl-5 py-3 mt-4 bg-primary rounded-xl'>
            <h5 className='mb-4'>Categories</h5>
            
            <div className='flex flex-col gap-2 text-sm font-light'>
              {categories.map((category)=>(
                <label key={category} className='flex gap-2 text-sm font-medium text-gray-30'>
                  <input 
                  onChange={()=>{setChosenCategory(category)}}
                  type= "checkbox"  
                  value={category} 
                  checked={category=== chosenCategory}
                  className='w-3'/>
                    {category}
                </label>
              ))}
            </div>
            </div>
            <div className='pl-5 py-3 mt-4 bg-primary rounded-xl'>
              <h5 className='mb-4'>Origins</h5>
              
              <div className='flex flex-col gap-2 text-sm font-light'>
              {origins.map((origin)=>(
                <label key={origin} className='flex gap-2 text-sm font-medium text-gray-30'>
                  <input 
                  onChange={()=>{setChosenOrigin(origin)}}
                  type= "checkbox"  
                  value={origin} 
                  checked={origin===chosenOrigin}
                  className='w-3'/>
                    {origin}
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className='max-sm:px-10 sm:pr-10 bg-white 
        px-4 rounded-l-xl my-4'>
          <motion.div 
          initial={{opacity: 0, y:20}}
          animate={{opacity: 1, y:20}}
          transition= {{duration:1}}
          className='grid grid-cols-1 md:grid-cols-2 
          lg:grid-cols-3 xl:grid-cols-4 gap-x-6'>
            
            {products.length > 0 ?
            (
              products.filter((item)=>{
                if(chosenCategory==="All" && chosenOrigin==="All"){
                  return true;
                }else if(chosenCategory==="All" && chosenOrigin!=="All"){
                  return chosenOrigin===item.origin;
                }else if(chosenOrigin==="All" && chosenCategory!=="All"){
                  return chosenCategory===item.category
                }else{
                  return chosenOrigin===item.origin && chosenCategory===item.category
                }
              }).filter((entry, index)=>index<=currentPage*20-1 &&index>=(currentPage-1)*20  ).map((product)=>(
                <Item key={product.id} product={product}/>
              ))
            ):(
              <p className="capitalize">No products found for selected items</p>
            )} 
            
          </motion.div>
          <div className='flexCentered flex flex-wrap mt-14 mb-10 gap-4'>
            <button disabled={currentPage===1}
              onClick={()=>setCurrentPage(prev=>prev-1)}
              className={`btn-solid !py-1 !px-3 ${currentPage === 1 && "opacity-50 cursor-not-allowed"}`}>
                Previous
              </button>
            {Array.from({length: totalPages}, (_,index)=>(
              <button key={index +1}
              onClick={()=>setCurrentPage(index+1)}
              className={`btn-light !py-1 !px-3  ${currentPage === index +1 && "bg-solidTwo text-primary scale-150"}`}>
                {index+1}
              </button>
            ))}
            <button disabled={currentPage===totalPages}
              onClick={()=>setCurrentPage(prev=>prev+1)}
              className={` btn-solid !py-1 !px-3 ${currentPage === totalPages && "opacity-50 cursor-not-allowed"}`}>
                Next
              </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu