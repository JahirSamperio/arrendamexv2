import React from 'react'
import {BsFacebook} from 'react-icons/bs';
import './Footer.css';


export const Footer = () => {
  return (
    <footer>
    <div className="footer-container">
        <div className="footer-content-container">
            <img src="/frontend/src/public/img/imagen1.png" alt="" className="website-logo" />
            <span className="footer-info">111 111 111</span>
            <span className="footer-info">academy@itskrey.com</span>
        </div>
        <div className="footer-menus">
            <div className="footer-content-container">
                <span className="menu-title">legal</span>
                <a href="" className="menu-item-footer">Privacy Policy</a>
                <a href="" className="menu-item-footer">Cookies</a>
                <a href="" className="menu-item-footer">Legal Advice</a>
            </div>
        </div>
        
        <div className="footer-content-container">
            <span className="menu-title">follow us</span>
            <div className="social-container">
                <a href="" className="social-link" ><BsFacebook/></a>
            </div>
        </div>
    </div>
    <div className="copyright-container">
        <span className="copyright">Copyright 2021, itskrey.com. All rights reserved.</span>
    </div>
</footer>
  )
}
