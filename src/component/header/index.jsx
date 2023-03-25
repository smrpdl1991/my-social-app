import Image from 'next/image'
import Link from 'next/link';
import React, { useState } from 'react'
import { useRouter } from "next/router";
import { useAuth } from '@/context/AuthContext';

const Header = () => {
  const [openProfile, setOpenProfile] =  useState(false);
  const openProfileFun = () =>{
    setOpenProfile(!openProfile)
  }
  const { user, logOut } = useAuth();
  const router = useRouter();

  const handleLogout = async (event) => {
    event.preventDefault();
    try {
      await logOut();
      router.push("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
     <header className='site-header'>
        <div className='container'>
            <div className='logo'></div>
            <div className='profile'>
                <figure onClick={openProfileFun}>
                    profile
                    <Image src="" alt="" width={40} height={40}/>
                </figure>
                {openProfile && 
                    <div>
                        <ul>
                            <li>
                                <Link href="/">
                                    <figure onClick={openProfileFun}>
                                        <Image src="" alt="" width={40} height={40}/>
                                    </figure>
                                    <span>Sa Mir</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/" onClick={handleLogout}>
                                    <span>Logout</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                }
            </div>
        </div>
    </header>
  )
}

export default Header