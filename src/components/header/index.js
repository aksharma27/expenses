import React from 'react'
import './index.css';
// import credit from './credit.png';

const Header = () => {
  return (
    <div className='header-container'>
      <div className="header">
        <div className='header-logo'>Expenses 
        <svg style={{marginLeft: "10px"}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-credit-card-fill" viewBox="0 0 16 16">
  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1H0V4zm0 3v5a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7H0zm3 2h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1z"/>
</svg>
        {/* <i class="bi bi-credit-card-fill"></i> */}
        </div>
        <div className="header-button">
           <a href="https://www.github.com/aksharma27/" target='_blank' rel='noopener noreferrer'>
            
           <i class="devicon-github-original colored"></i>Star
          </a> 
        </div>
      </div>
    </div>
  )
}

export default Header ;