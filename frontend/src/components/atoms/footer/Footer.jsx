import React from 'react'
import {BsFacebook} from 'react-icons/bs';
import './Footer.css';


export const Footer = () => {
  return (
    <footer>
    <div class="footer-container">
        <div class="footer-content-container">
            <img src="/frontend/src/public/img/imagen1.png" alt="" class="website-logo" />
            <span class="footer-info">111 111 111</span>
            <span class="footer-info">academy@itskrey.com</span>
        </div>
        <div class="footer-menus">
            <div class="footer-content-container">
                <span class="menu-title">legal</span>
                <a href="" class="menu-item-footer">Privacy Policy</a>
                <a href="" class="menu-item-footer">Cookies</a>
                <a href="" class="menu-item-footer">Legal Advice</a>
            </div>
        </div>
        
        <div class="footer-content-container">
            <span class="menu-title">follow us</span>
            <div class="social-container">
                <a href="" class="social-link" ><BsFacebook/></a>
            </div>
        </div>
    </div>
    <div class="copyright-container">
        <span class="copyright">Copyright 2021, itskrey.com. All rights reserved.</span>
    </div>
</footer>
  )
}
