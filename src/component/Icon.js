import React from 'react'
import { FaTimes , FaRegCircle , FaPen } from 'react-icons/fa'


const Icon = ({ name }) => {
     
    switch(name)
     {
         case "cross" : return  <FaTimes size={30} color="red"/>  
    
         case "circle"  : return  <FaRegCircle  size={30} color="blue" /> 
                         
         default : return <FaPen size={30} />
     }
}

export default Icon ;