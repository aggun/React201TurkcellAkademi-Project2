import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
function Navbar() {
    const navigate= useNavigate();
  return (
    
    <div >
        <lu className='menu'>
            <li onClick={()=>navigate(-1)}>Geri Al</li>
<li> <Link to="/"> Home </Link> </li>
<li> <Link to="users"> Kullanıcılar </Link></li>
<li> <Link to="contact"> İletişim </Link></li>
        </lu>


    </div>
  )
}

export default Navbar