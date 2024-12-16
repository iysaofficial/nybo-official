import React, { useEffect } from 'react';
import $ from 'jquery';

import '../assets/css/Navbar.css'

const NavbarComp = () =>{
    useEffect(() => {
        // jquery for toggle dropdown menus
        $(document).ready(function(){
            // toggle sub-menus
            $(".sub-btn").click(function(){
                $(this).next(".sub-menu").slideToggle();
            });
            // toggle more-menus
            $(".more-btn").click(function(){
                $(this).next(".more-menu").slideToggle();
            });
        });
        

        // javascript for the responsive navigation menu
        var menu = document.querySelector(".menu");
        var menuBtn = document.querySelector(".menu-btn");
        var closeBtn = document.querySelector(".close-btn");

        menuBtn.addEventListener("click", () =>{
            menu.classList.add("active");
        });

        closeBtn.addEventListener("click", () =>{
            menu.classList.remove("active");
        });
    }, []);
    
    return(
        <>
        <header>
            <a href="/"><img className='logo-nav' src="./assets/images/logo/NYBO.png" alt="" /></a>
            <div className='navigation'>
                <ul className='menu'>
                    <div className='close-btn'>

                    </div>
                    <li className='menu-item'><a href="/">Utama</a></li>
                    <li className='menu-item'><a href="#about">Tentang</a></li>
                    <li className='menu-item'><a href="https://drive.google.com/file/d/10gBoGoIACWfJH8kwoVoKy4py24x_XNui/view?usp=sharing" target='_blank'>Buku Panduan</a></li>
                    {/* <li className='menu-item'><a href="/AboutPage">Kelas</a></li> */}
                    {/* <li className='menu-item'><a href="/#category">Kategori</a></li> */}
                    {/* <li className='menu-item'><a href="/#contact">Kontak</a></li> */}
                    {/* <li className='menu-item'><a href="https://drive.google.com/file/d/1jkpeD9EN2kWu059MDmriUHgqil_P31xT/view" target='_blank'>Press Release</a></li> */}
                    {/* <li className='menu-item'><a href="https://drive.google.com/drive/folders/1l_bCazIZmdtOSUjAuBAgXTg7YEBTixPY" target='_blank'>Certificate Supervisor</a></li> */}

                    <li className='menu-item'>
                        <a className='sub-btn' href="#">Liputan Media <i className='fas fa-angle-down'></i></a>
                        <ul className='sub-menu'>
                            <li className='sub-item'><a href="/NewsPage">Berita</a></li>
                            <li className='sub-item'><a href="https://drive.google.com/file/d/18dkpe3f-rHJnmxn4YBWy7EpZjfi5EhJk/view?usp=sharing" target='_blank'>Press Release 2024</a></li>
                        </ul>
                    </li>

                    <li className='menu-item'>
                        <a className='sub-btn' href="#">Daftar Pemenang <i className='fas fa-angle-down'></i></a>
                        <ul className='sub-menu'>
                            <li className='sub-item'><a href="https://drive.google.com/file/d/1IAkodP-yY31PKFKaIwzdGlVrDFyTy712/view?usp=drive_link" target='_blank'>Daftar Pemenang 2024</a></li>
                        </ul>
                    </li>

                    <li className='menu-item'>
                        <a className='sub-btn' href="#">Kurasi <i className='fas fa-angle-down'></i></a>
                        <ul className='sub-menu'>
                            <li className='sub-item'><a href="https://drive.google.com/drive/u/0/folders/1LtvfFSoW9h0ItVOfgDuRs7eMsroyHrtw" target='_blank'>Kurasi 2024</a></li>
                        </ul>
                    </li>
                    
                    <li className='menu-item'>
                        <a className='sub-btn' href="#">Sertifikat Supervisor <i className='fas fa-angle-down'></i></a>
                        <ul className='sub-menu'>
                            <li className='sub-item'><a href="https://drive.google.com/drive/u/0/folders/17WQIof-Rds8p335BQkFu4Tw5oVuGxQY7" target='_blank'>Sertifikat Supervisor 2024</a></li>
                        </ul>
                    </li>

                    <li className='menu-item'>
                        <a className='sub-btn' href="#">Galeri <i className='fas fa-angle-down'></i></a>
                        <ul className='sub-menu'>
                            <li className='sub-item'><a href="https://drive.google.com/drive/folders/1otO678XWKJeyTUa9nEpsqGgGMzK2Mcq9?usp=sharing" target='_blank'>2024</a></li>
                        </ul>
                    </li> 




                    {/* <li className='menu-item'>
                        <a className='sub-btn' href="#">With Sub-dropdown <i className='fas fa-angle-down'></i></a>
                        <ul className='sub-menu'>
                            <li className='sub-item'><a href="#">Sub Item 01</a></li>
                            <li className='sub-item'><a href="#">Sub Item 02</a></li>
                            <li className='sub-item'><a href="#">Sub Item 03</a></li>
                            <li className='sub-item'><a href="#">Sub Item 04</a></li>
                            <li className='sub-item more'>
                                <a className='more-btn' href="#">More Items <i className='fas fa-angle-right'></i></a>
                                <ul className='more-menu'>
                                    <li className='more-item'><a href="#">More Item 01</a></li>
                                      <li className='more-item'><a href="#">More Item 02</a></li>
                                </ul>
                            </li>
                        </ul>
                    </li> */}
                </ul>
            </div>
            <div className='menu-btn'>

            </div>
        </header>
        </>
    )
}

export default NavbarComp