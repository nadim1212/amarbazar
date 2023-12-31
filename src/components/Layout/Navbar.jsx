import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { navItems } from '../../static/data'
import styles from '../../styles/styles'
import style from '../../styles/style.css'





const Navbar = ({active}) => {

  const [navbarOpen, setNavbarOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  return (
    <div className={`block 800px:${styles.noramlFlex}` }>
         {
            navItems && navItems.map((i,index) => (
                <div className="flex">
                    <Link to={i.url}
                    className={`${active === index + 1 ? "text-[#000000]" : "text-black 800px:text-[#000000]"} pb-[30px] 800px:pb-0 font-[500] px-6 cursor-pointer}`}
                    >
                    {i.title}
                    </Link>
                   
                </div>
            ))
         }
      
    

    </div>
  )
}

export default Navbar