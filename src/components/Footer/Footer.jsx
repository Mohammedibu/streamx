import React from 'react'
import './Footer.css'
import youtube_icon from '../../assets/netflix_react_assets/assets/youtube_icon.png'
import twitter_icon from '../../assets/netflix_react_assets/assets/twitter_icon.png'
import instagram_icon from '../../assets/netflix_react_assets/assets/instagram_icon.png'
import facebook_icon from '../../assets/netflix_react_assets/assets/facebook_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icons">
        <img src={youtube_icon} alt="" />
        <img src={twitter_icon} alt="" />
        <img src={instagram_icon} alt="" />
        <img src={facebook_icon} alt="" />
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Help center</li>
        <li>Media Cards</li>
        <li>Jobs</li>
        <li>term of Use</li>
        <li>privacy</li>
        <li>legal Notices</li>
        <li>Cookie Preferences</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
       
      </ul>
      <p className='copyright-text'>@ 1997-2025 StreamX, Inc.</p>
      
    </div>
  )
}

export default Footer
