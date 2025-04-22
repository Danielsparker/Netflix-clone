import React from 'react'
import'./Footer.css'
import youtube_icon from '../../assets/youtube_icon.png'
import twitter_icon from '../../assets/twitter_icon.png'
import instagram_icon from '../../assets/instagram_icon.png'
import facebook_icon from '../../assets/facebook_icon.png'

const Footer = () => (
    <div className='Footer'>

        <div className="footer-icons">
            <img src={facebook_icon} alt="" />
            <img src={instagram_icon} alt="" />
            <img src={twitter_icon} alt="" />
            <img src={youtube_icon} alt="" />

        </div>
        <ul>
            <li>Audio Description</li>
            <li>Help center</li>
            <li>Gift cards</li>
            <li>Jobs</li>
            <li>privacy</li>
            <li>Legal notice</li>
            <li>cookie</li>
            <li>contact us</li>
        </ul>
        <p><div className="copyright-text">
            @1999 Netflix,inc.
            </div></p>
    </div>
)

export default Footer