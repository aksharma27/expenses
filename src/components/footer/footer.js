import React, { useState } from 'react';
import './header.css';

const Footer = () => {
 let date = new Date();
 let month = date.getMonth();
 let n = 0;
 let check = month;
 while (check > 0) {
    check /= 10;
    n++;
 }
 if (n > 1) month = "0" + month;
 const today = month + "/" + date.getFullYear() ;


  return (
    <footer>
      Copyright &copy; 2023 - {today} Team Abhishek®. All rights reserved.
    </footer>
  )
}

export default Footer;
