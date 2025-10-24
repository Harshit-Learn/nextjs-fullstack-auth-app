
import { useRouter } from 'next/navigation'
import React from 'react'
import {
 FaSignOutAlt, FaHome
} from "react-icons/fa";
import { MdSecurity } from "react-icons/md";


const Navbar = () => {
    const router = useRouter();
      const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        router.push("/");
      };

  return (
    <div>
      <div className="navbar navbar-expand-lg bg-primary">
        <div className="container d-flex justify-content-between align-items-center">
            <a className='navbar-brand text-white fw-bold d-flex align-items-center' href='/'>
            <MdSecurity size={28} className='me-2'/>
            NextAuth App</a>

            <div className="d-flex gap-3">
                <a className='btn btn-light d-flex align-items-center' href='/'>
                    <FaHome className='me-2' />Home
                </a>

                <button className='btn btn-danger d-flex align-items-center'
                onClick={handleLogout}><FaSignOutAlt className='me-2' />Logout</button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar
