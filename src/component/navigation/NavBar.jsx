import React, { useRef } from "react";
import {FaBars, FaTimes} from "react-icons/fa";
import '../../styles/main.css';

function NavBar(){
    const navRef=useRef();
    const showNavbar = ()=>{
        navRef.current.classList.toggle("responsive_nav")
    };
    return (
        <header>
            <h1>logo</h1>
            <nav ref={navRef}>
                <a href="/#">케어매니저</a>
                <a href="/#">공지사항</a>
                <a href="/#">FAQ</a>
                <a href="/#">문의하기</a>
                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavbar}><FaBars /></button>
        </header>

    )
}

export default NavBar;